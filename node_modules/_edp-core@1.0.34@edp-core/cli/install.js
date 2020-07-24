/**
 * @file edp install
 * @author leeight(liyubei@baidu.com)
 */

/**
 * 命令行配置项
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '安装edp的扩展包';

/**
 * 模块命令行运行入口
 *
 * @param {Array} args 命令运行参数
 */
cli.main = function (args) {
    var pkg = require('../lib/pkg');
    var log = require('../lib/log');
    pkg.install(args).then(
        function () {
            log.info('DONE');
        },
        function (er) {
            log.warn(er.toString());
        }
    );
};

/**
 * 命令行配置项
 *
 * @type {Object}
 */
exports.cli = cli;
