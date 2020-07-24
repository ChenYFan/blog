/**
 * @file 工具类函数
 * @author leeight(liyubei@baidu.com)
 */

/**
 * 对象属性拷贝
 *
 * @param {Object} target 目标对象
 * @param {...Object} source 源对象
 * @return {Object} 返回目标对象
 */
exports.extend = function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var src = arguments[i];
        if (src == null) {
            continue;
        }
        for (var key in src) {
            if (src.hasOwnProperty(key)) {
                target[key] = src[key];
            }
        }
    }
    return target;
};

/**
 * 混合对象
 *
 * @param {...Object} source 要混合的对象
 * @return {Object} 混合后的对象
 */
exports.mix = function () {
    var o = {};
    var src = Array.prototype.slice.call(arguments);
    return exports.extend.apply(this, [o].concat(src));
};

exports.clone = function (source) {
    return JSON.parse(JSON.stringify(source));
};


/**
 * 根据功能将文字色彩化
 *
 * @param {string} text 源文字
 * @param {string} type 功能类型
 * @return {string}
 */
exports.colorize = function (text, type) {
    var chalk = require('chalk');
    var colorBrushes = {
        info: chalk.grey,
        success: chalk.green,
        warning: chalk.yellow,
        error: chalk.red,
        title: chalk.cyan.bold,
        link: chalk.blue.underline
    };
    var fn = colorBrushes[type] || chalk.stripColor;

    return fn(text);
};

/**
 * 读取json文件
 *
 * @param {string} file 文件路径
 * @return {Object}
 */
exports.readJSONFile = function (file) {
    var fs = require('fs');
    var content = fs.readFileSync(file, 'UTF-8');
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }

    return JSON.parse(content);
};

/**
 * 递归的遍历目录
 *
 * @param {string} dir 入口的目录.
 * @param {function(string)} 回调函数
 */
exports.scanDir = function (dir, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdirSync(dir).forEach(
        function (file) {
            var fullPath = path.join(dir, file);
            var stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                exports.scanDir(fullPath, callback);
            }
            else if (stat.isFile()) {
                var rv = callback(fullPath);
                if (rv === false) {
                    return false;
                }
            }
        });
};

/**
 * 删除目录
 *
 * @param {string} path 目录路径
 */
exports.rmdir = function (path) {
    var fs = require('fs');

    if (fs.existsSync(path) && fs.statSync(path).isDirectory()) {
        fs.readdirSync(path).forEach(
            function (file) {
                var fullPath = require('path').join(path, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    exports.rmdir(fullPath);
                }
                else {
                    fs.unlinkSync(fullPath);
                }
            }
        );

        fs.rmdirSync(path);
    }
};

exports.getParentDir = function (dir) {
    // 这里全部使用edp.path，防止require('path')和edp.path路径的不一致，
    // 主要是由于edp.path做了一次normalize
    return require('./path').resolve(dir, '..');
};

/**
 * 按照 ecomfe/edp-lint/issues/1 流程实现的读取配置文件的功能.
 *
 * @param {string} dir 开始的目录.
 * @param {{name:string,
 *          defaultConfig: (Object|undefined),
 *          factory:(function(string):Object)}} options 配置项.
 * @return {Object}
 */
exports.getConfig = function (dir, options) {
    var fs = require('fs');
    // 这里全部使用edp.path，防止require('path')和edp.path路径的不一致，
    // 主要是由于edp.path做了一次normalize
    var path = require('./path');

    var pkgOrbizRoot = null;
    try {
        pkgOrbizRoot = path.getRootDirectory(dir);
    }
    catch (ex) {
        // systemRoot
        pkgOrbizRoot = path.resolve('/');
    }

    var configName = options.name;
    var configs = [];
    while (true) {
        var configFile = path.join(dir, configName);
        if (fs.existsSync(configFile)) {
            configs.unshift(configFile);
        }

        if (dir === pkgOrbizRoot) {
            break;
        }

        dir = exports.getParentDir(dir);
    }

    var home = process.env[
        require('os').platform() === 'win32'
            ? 'APPDATA'
            : 'HOME'
    ];
    var userDefaultConfig = path.join(home, configName);
    if (fs.existsSync(userDefaultConfig)) {
        configs.unshift(userDefaultConfig);
    }

    var configObjects = configs.map(options.factory);
    if (options.defaultConfig) {
        configObjects.unshift(options.defaultConfig);
    }

    return exports.mix.apply(null, configObjects);
};

exports.getNpmConfig = function () {
    var config = require('edp-config');
    var npmConfig = {
        'global': true,
        'registry': config.get('npm.registry') || 'http://registry.npmjs.org/',
        'proxy': config.get('npm.proxy') || null,
        'https-proxy': config.get('npm.https-proxy') || null,
        'http-proxy': config.get('npm.http-proxy') || null,
        'strict-ssl': config.get('npm.strict-ssl') || false
    };

    return npmConfig;
};

/**
 * 对 child_process.spawn 的包装
 *
 * @param {string} command 要支持的命令
 * @param {?Array.<string>} args 要传递给 command 的参数列表
 * @property {?Object} options 配置项
 * @return {ChildProcess} 同原 spawn 的返回对象
 */
exports.spawn = process.env.comspec ? function (command, args, options) {
    var spawn = require('child_process').spawn;
    return spawn(
        process.env.comspec,
        ['/c', command].concat(args),
        options
    );
} : function (command, args, options) {
    var spawn = require('child_process').spawn;
    return spawn(command, args, options);
};
