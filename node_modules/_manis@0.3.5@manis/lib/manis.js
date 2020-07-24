/**
 * @file Manis
 * @author chris<wfsr@foxmail.com>
 */
'use strict';
var fs = require('fs');
var path = require('path');

var util = require('./util');
var Finder = require('./finder');

var helper = {

    /**
     * 用于 finder 查找的 stopper，找到第一个文件后即停止查找
     *
     * @inner
     * @param {string} start  开始查找的目录
     * @param {string} root  向上查找截止的根目录
     * @param {Object[]} configs 已查找到的配置集合
     * @return {boolean}  是否仍要查找
     */
    noLookup: function (start, root, configs) {
        return configs.length > 0 || start === root;
    },

    /**
     * 生成根据 root 决定是否继续查找的 stopper
     *
     * @param {string} name root 字段名称
     * @return {Function} 函数说明见 noLookup
     */
    buildStopper: function (name) {
        return function (start, root, configs) {
            var config = configs[configs.length - 1];
            return config && config[name] || start === root;
        };
    },


    /**
     * 设置默认值
     * 默认值优先级最低
     *
     * @inner
     * @param {Manis} manis Manis 实例
     * @param {string} dataType 配置的类型，defaultConfig | userConfig
     * @param {(string | Object)} pathOrValue 默认的配置文件路径或默认值
     * @param {Object=} finderOptions 用于查找默认配置的 finder 的配置
     */
    setConfig: function (manis, dataType, pathOrValue, finderOptions) {
        var type = util.typeOf(pathOrValue);
        if (type === 'object') {
            manis[dataType] = util.mix(manis[dataType], pathOrValue);
            return;
        }

        if (type !== 'string') {
            throw new Error('invalid argument');
        }

        var match = pathOrValue.match(/^(.*[\/\\])([^\/\\]+)$/);
        if (!match) {
            throw new Error('Invalid path.');
        }

        // no look up
        var stopper = helper.noLookup;

        var finder;
        var name = match[2];

        if (finderOptions && util.typeOf(finderOptions) === 'object') {
            finderOptions = util.extend({name: name, stopper: stopper}, finderOptions);
            finder = new Finder(finderOptions);
        }
        else {
            finder = manis.finders.filter(function (finder) {
                return finder.name.toLowerCase() === name;
            })[0];

            if (finder) {
                finder = Object.create(finder);
                finder.stopper = stopper;
            }
            else {
                finder = new Finder({name: name, stopper: stopper});
            }

        }

        manis[dataType] = util.mix(manis[dataType], finder.from(match[1]));
    }
};

/**
 * Manis
 *
 * @constructor
 * @param {Object} options 配置项
 * @param {(string | string[])} options.files 搜索的文件
 * @param {?Function} options.loader 自定义的加载、解释配置文件方法
 * @param {boolean} options.cache 是否缓存结果
 * @param {boolean} options.merge 搜索多个文件时是否合并配置
 * @param {boolean} options.lookup  是否向上查找所有配置文件
 */
function Manis(options) {
    if (typeof options === 'string') {
        options = [options];
    }

    if (Array.isArray(options)) {
        options = util.extend(arguments[1] || {}, {files: options});
    }

    this.options = util.mix({
        files: 'package.json',
        loader: null,
        cache: true,
        merge: true,
        lookup: true,
        orphan: false,
        rootName: 'root',
        enableRoot: false,
        stopper: null
    }, options);

    this.init(this.options);
}

util.extend(
    Manis.prototype,

    /** @lends Manis.prototype */
    {

        /**
         * 初始化
         *
         * @private
         * @param {Object} options 配置项
         */
        init: function (options) {
            if (!Array.isArray(options.files)) {
                options.files = [options.files];
            }

            var files = options.files;
            delete options.files;

            var stopper = options.stopper;
            if (!stopper) {
                if (options.orphan) {
                    stopper = helper.noLookup;
                }
                else if (options.enableRoot) {
                    stopper = helper.buildStopper(options.rootName);
                }
            }

            this.finders = files.map(function (file) {
                return Finder.create(file, options.cache, stopper, options.loader);
            });

            this.cached = options.cache && Object.create(null);
            this.defaultConfig = Object.create(null);
            this.userConfig = Object.create(null);
        },

        /**
         * 设置默认值
         * 默认值优先级最低
         *
         * @public
         * @param {(string | Object)} pathOrValue 默认的配置文件路径或默认值
         * @param {Object=} finderOptions 用于查找默认配置的 finder 的配置
         */
        setDefault: function (pathOrValue, finderOptions) {
            helper.setConfig(this, 'defaultConfig', pathOrValue, finderOptions);
        },


        /**
         * 设置用户默认值
         * 用户默认值优先级高于默认值
         *
         * @public
         * @param {(string | Object)} pathOrNameOrValue 默认的配置文件路径、文件名或默认值
         * @param {Object=} finderOptions 用于查找默认配置的 finder 的配置
         */
        setUserConfig: function (pathOrNameOrValue, finderOptions) {
            if (!pathOrNameOrValue && this.finders[0]) {
                pathOrNameOrValue = this.finders[0].name;
            }

            if (util.typeOf(pathOrNameOrValue) === 'string') {
                if (pathOrNameOrValue[0] === '~' || pathOrNameOrValue.indexOf('/') < 0) {
                    pathOrNameOrValue = util.homeDirectory + '/' + pathOrNameOrValue.replace(/^~/, '');
                }

                pathOrNameOrValue = pathOrNameOrValue.replace(/[\/\\]{2}/g, '/');
            }

            helper.setConfig(this, 'userConfig', pathOrNameOrValue, finderOptions);
        },

        /**
         * 从指定文件开始查找
         *
         * @publish
         * @param {string} from 开始查找的文件
         * @return {Object} 读到的配置对象
         */
        from: function (from) {
            from = path.resolve(from);

            var stat = {
                isFile: function () {
                    return true;
                }
            };

            try {
                stat = fs.statSync(from);
            }
            catch (e) {}

            // 文件不存在，不管是文件还是目录都可以再向上一级
            /* istanbul ignore else */
            if (stat.isFile()) {
                from = path.dirname(from);
            }

            var config;

            if (this.cached && (config = this.cached[from])) {
                return config;
            }

            var options = this.options;
            if (options.lookup) {
                var configs = this.finders.map(
                    function (finder) {
                        return finder.from(from);
                    }
                );

                if (options.orphan) {
                    config = util.pick(configs);
                }
                else if (options.merge) {
                    config = configs.reduceRight(function (init, config) {
                        return util.extend(init, config);
                    }, Object.create(null));
                }
                else {
                    config = configs[0];
                }
            }

            config = options.orphan
                ? util.pick([config, this.userConfig, this.defaultConfig])
                : util.mix(this.defaultConfig, this.userConfig, config);

            if (this.cached) {
                this.cached[from] = config;
            }

            return config;
        }
    }
);

Manis.yaml = require('js-yaml');

Manis.loader = util.loader;

module.exports = Manis;
