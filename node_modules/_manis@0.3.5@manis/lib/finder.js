/**
 * @file Finder
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

var fs = require('fs');
var path = require('path');

var util = require('./util');

/**
 * Finder
 *
 * @constructor
 * @param {Object} options 配置项
 * @param {string} options.name 搜索的文件名
 * @param {(?string | ?Function)} options.get 最终返回的字段名或自定义的方式
 * @param {?Function} options.loader 自定义的加载、解释配置文件方法
 * @param {?Function} options.stopper  停止查找的断言方法
 * @param {boolean} options.cache  是否缓存结果
 */
function Finder(options) {
    util.extend(
        this,
        {
            name: 'package.json',
            get: null,
            loader: null,
            stopper: null,
            cache: true
        },
        options
    );

    this.init();
}

util.extend(
    Finder.prototype,

    /** @lends Finder.prototype */
    {

        /**
         * 初始化
         *
         * @private
         */
        init: function () {
            this.loader = this.loader || util.loader;

            this.cached = this.cache && Object.create(null);

            delete this.cache;

        },

        /**
         * 从指定文件开始查找
         *
         * @publish
         * @param {string} from 开始查找的目录
         * @return {Object} 读到的配置对象
         */
        from: function (from) {
            from = path.resolve(from);

            var config;

            if (this.cached && (config = this.cached[from])) {
                return config;
            }

            var self = this;
            var configs = findConfigs(
                this.name,
                from,
                this.stopper,
                function (path) {
                    var config = self.loader(fs.readFileSync(path, 'utf-8'), path);

                    if (self.get) {
                        var type = util.typeOf(self.get);
                        if (type === 'function') {
                            config = self.get(config);
                        }
                        else {
                            config = config[self.get];
                        }
                    }

                    return config;
                }
            );
            config = configs.reduceRight(function (init, config) {
                return util.extend(init, config);
            }, Object.create(null));

            if (this.cached) {
                this.cached[from] = config;
            }

            return config;
        }
    }
);

/**
 * 从工作目录向上查找包含指定文件的路径
 *
 * @inner
 * @param {string} filename 要查找的文件名
 * @param {string} start 开始查找的目录，默认为当前目录
 * @param {?Function} stopper 终结查找的判断方法
 * @param {Function} loader 终结查找的判断方法
 * @return {string[]} 能查找到文件的所有路径
 */
function findConfigs(filename, start, stopper, loader) {

    var root = path.resolve('/');

    // windows 下可能存在盘符不一致， 或者盘符大小写不一致的情况
    // 比如此处，可能存在下列几种情况：
    //     1: root === 'C:\', start === 'C:\test.js'
    //     2: root === 'C:\', start === 'c:\test.js'
    //     3: root === 'C:\', start === 'D:\test.js'
    //     4: root === 'C:\', start === 'd:\test.js'
    // 其中， 2， 3， 4 三种情况会导致后续的 while 循环变成无限循环
    // 此处将 root 的大小写和 start 保持一致
    if (/^[a-z]:/i.test(root) && /^[a-z]:/i.test(start)) {
        if (/^[a-z]:/.test(start)) {
            root = root.toLowerCase();
        }
        else {
            root = root.toUpperCase();
        }
    }

    stopper = stopper || function (start, root, configs) {
        return start === root;
    };

    var configs = [];
    var filepath;
    var last;

    /* eslint-disable no-constant-condition */
    while (true) {
        filepath = path.join(start, filename);

        if (fs.existsSync(filepath)) {
            var config = loader(filepath);

            if (config && Object.keys(config).length > 0) {
                configs.push(config);
            }
        }

        if (stopper(start, root, configs)) {
            break;
        }

        last = start;
        start = path.resolve(start, '..');

        // windows 下， 如果进行到根目录， 上面的 resolve 执行后没有变化
        // 即 path.resolve('D:\', '..') === 'D:\'
        // 此时若 root 为不同盘符， 比如'C:\', 上面的默认 stopper 会永远返回 false
        // 成为无限循环， 此处判断后 break
        if (last === start) {
            break;
        }
    }
    /* eslint-enable no-constant-condition */

    return configs;
}

/**
 * 创建 Finder 实例
 *
 * @param {(string | Object)} name 文件名或配置对象
 * @param {boolean} cache  是否缓存
 * @param {Function=} stopper   自定义的 stopper
 * @param {Function=} loader   自定义的 loader
 * @return {Finder} 根据参数创建的 Finder 实例
 */
Finder.create = function (name, cache, stopper, loader) {
    var options = name;
    if (util.typeOf(name) === 'string') {
        options = Object.create(null);
        options.name = name;
    }

    options.cache = !!cache;

    if (!options.stopper && util.typeOf(stopper) === 'function') {
        options.stopper = stopper;
    }

    if (!options.loader && util.typeOf(loader) === 'function') {
        options.loader = loader;
    }

    return new Finder(options);
};


module.exports = Finder;
