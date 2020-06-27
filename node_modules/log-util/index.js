/**
 * @since 15-08-19 16:13
 * @author vivaxy
 */

'use strict';

var util = require('util');
var chalk = require('chalk');
var dateFormat = require('dateformat');

/**
 * level object array
 * @type {*[]}
 */
var levelArray = [
    {
        level: 0,
        string: 'verbose',
        color: 'gray'
    },
    {
        level: 1,
        string: 'debug',
        color: 'green'
    },
    {
        level: 2,
        string: 'info',
        color: 'cyan'
    },
    {
        level: 3,
        string: 'warn',
        color: 'yellow'
    },
    {
        level: 4,
        string: 'error',
        color: 'red'
    }
];

/**
 * Log
 * @param level
 * @param dateFormat
 * @constructor
 */
var Log = function Log (level, dateFormat) {
    this.setLevel(level);
    this.setDateFormat(dateFormat);
};

Log.prototype.constructor = Log;

/**
 * main log method
 * @param level
 * @returns {Log}
 */
Log.prototype.log = function (level) {
    var time = chalk.gray('[' + dateFormat(new Date(), this.dateFormat) + ']');
    var args = Array.prototype.slice.call(arguments, 1);
    var color = this.find('level', level).color;
    args = args.map(function (arg) {
        if (typeof arg === 'object') {
            arg = util.inspect(arg, {
                depth: null
            });
        }
        return chalk[color](arg);
    });
    args.unshift(time);
    if (level >= this.level) {
        console.log.apply(console, args);
    }
    return this;
};

/**
 * find level object which `key` = `value`
 * @param key
 * @param value
 * @returns {*}
 */
Log.prototype.find = function (key, value) {
    return levelArray.filter(function (o) {
            return o[key] === value;
        })[0] || {};
};

/**
 * set level
 * @param level
 * @returns {Log}
 */
Log.prototype.setLevel = function (level) {
    if (typeof level === 'string') level = this.find('string', level.toLowerCase()).level;
    this.level = level || 0;
    return this;
};

/**
 * set date format
 * @param dateFormat
 * @returns {Log}
 */
Log.prototype.setDateFormat = function (dateFormat) {
    this.dateFormat = dateFormat || 'HH:MM:ss.l';
    return this;
};

levelArray.forEach(function (o) {

    /**
     * export level string value
     * @type {number|*|Array}
     */
    Log[o.string.toUpperCase()] = o.level;

    /**
     * set methods to prototype
     * @returns {number|*}
     */
    Log.prototype[o.string] = function () {
        var args = arguments;
        Array.prototype.unshift.call(args, o.level);
        return this.log.apply(this, args);
    };
});

var log = new Log();
log.Log = Log;
log.levelArray = levelArray;
module.exports = log;
