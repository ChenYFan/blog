/**
 * @file log
 * @author leeight(liyubei@baidu.com)
 * @description trace (the least serious); debug; info; warn; error; fatal (the most serious).
 */

var chalk = require('chalk');

/* jshint camelcase: false */
var log = {};
var fns = [
    {name: 'trace', color: chalk.grey, level: 0},
    {name: 'debug', color: chalk.grey, level: 1},
    {name: 'info', color: chalk.green, level: 2},
    {name: 'warn', color: chalk.yellow, level: 3},
    {name: 'error', color: chalk.red, level: 4},
    {name: 'fatal', color: chalk.red, level: 5}
];

var flag = {
    set: function () {
        global._edp_core_log_flag = true;
    },
    has: function () {
        return (global._edp_core_log_flag === true);
    },
    clear: function () {
        global._edp_core_log_flag = false;
    }
};

fns.forEach(function (item) {

    /**
     * @param {string} format 要输出的内容.
     * @param {...*} var_args 变长参数.
     */
    log[item.name] = function (format, var_args) {
        if (process.env.EDP_LOG_SILENT === '1') {
            return;
        }

        if (flag.has()) {
            console.log();
            flag.clear();
        }

        var util = require('util');

        var msg = util.format.apply(null, arguments);
        if (msg) {
            console.log('edp ' + item.color(item.name.toUpperCase()) + ' ' + msg);
        }
        else {
            console.log();
        }
        if (process.env.EDP_EXIT_LOG_LEVEL && process.env.EDP_EXIT_LOG_LEVEL - item.level <= 0) {
            process.exit(1);
        }
    };
});

log.raw = function (format, var_args) {
    if (process.env.EDP_LOG_SILENT === '1') {
        return;
    }

    if (flag.has()) {
        console.log();
        flag.clear();
    }

    var util = require('util');
    var msg = util.format.apply(null, arguments);
    console.log(msg);
};

/**
 * 清除最后一行输出的内容.
 * 配合edp.log.write来使用.
 */
log.clear = function () {
    if (typeof process.stdout.clearLine === 'function') {
        process.stdout.clearLine();
    }

    if (typeof process.stdout.cursorTo === 'function') {
        process.stdout.cursorTo(0);
    }

    flag.clear();
};

/**
 * @param {string} format 要输出的内容.
 * @param {...*} var_args 变长参数.
 */
log.write = function (format, var_args) {
    if (process.env.EDP_LOG_SILENT === '1') {
        return;
    }

    log.clear();

    var util = require('util');

    var msg = util.format.apply(null, arguments);
    if (msg) {
        process.stdout.write(msg);

        if (typeof process.stdout.clearLine !== 'function') {
            process.stdout.write('\n');
        }
        flag.set();
    }
};

module.exports = log;
