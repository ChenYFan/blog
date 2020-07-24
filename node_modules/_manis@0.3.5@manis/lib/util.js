/**
 * @file utils
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 对象属性拷贝
 *
 * @param {Object} target 目标对象
 * @param {...Object} source 源对象
 * @return {Object} 返回目标对象
 */
exports.extend = function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var src = arguments[i];
        if (src == null) {
            continue;
        }

        for (var key in src) {
            if (hasOwnProperty.call(src, key)) {

                if (toString.call(src[key]) === '[object Object]') {

                    if (toString.call(target[key]) !== '[object Object]') {
                        target[key] = {};
                    }

                    extend(target[key], src[key]);
                }
                else {
                    target[key] = src[key];
                }

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
    var o = Object.create(null);
    var src = Array.prototype.slice.call(arguments);
    return exports.extend.apply(this, [o].concat(src));
};

/**
 * 挑选第一个非空的对象
 *
 * @param {Objects[]} objs 对象集合
 * @return {Object}
 */
exports.pick = function (objs) {
    for (var i = 0, obj; obj = objs[i++];) {
        if (Object.keys(obj).length > 0) {
            return obj;
        }
    }

    return Object.create(null);
};

/**
 * Get type of target
 *
 * @param {*} target target need to get type
 * @return {string}
 */
exports.typeOf = function (target) {
    return toString.call(target).slice(8, -1).toLowerCase();
};

/**
 * Get user's home directory
 *
 * @param {Object} processObj an object like process
 * @return {string}
 */
exports.getHome = function (processObj) {
    processObj = processObj || process;

    var env = processObj.env;
    var home = env.HOME;
    var user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME;

    return {

        win32: function () {
            return env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home;
        },

        darwin: function () {
            return home || user && ('/Users/' + user);
        },

        linux: function () {
            return home || user && (processObj.getuid() === 0 ? '/root' : '/home/' + user);
        }

    }[processObj.platform]();
};

/**
 * User's home directory
 *
 * @type {string}
 */
exports.homeDirectory = exports.getHome();

var yaml = require('js-yaml');
var stripJSONComment = require('strip-json-comments');

/**
 * Default loader
 *
 * @param {string} content string to be parsed
 * @param {string} path config file path
 * @param {?Object} options options for yaml.safeLoad
 * @return {Object}
 */
exports.loader = function (content, path, options) {
    if (/\.js$/.test(path)) {
        return require(path);
    }

    try {
        return yaml.safeLoad(stripJSONComment(content), options || {filename: path, json: true});
    }
    catch (e) {
        e.message = 'Cannot read config file: ' + path + '\nError: ' + e.message;
        throw e;
    }
};
