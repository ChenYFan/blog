/**
 * @file rules
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

const fs   = require('fs');
const path = require('path');

const listeners = {};

/**
 * 注册扩展的 eslint 校验规则
 *
 * @param {string=} [dir = __dirname] the directory of rules
 */
exports.register = function (dir) {
    dir = dir || __dirname;

    let cur = path.relative(dir, __filename);
    let reg = /([^\\\/]+)\.js$/i;

    let add = function (rule) {
        Object.keys(rule).forEach(key => {
            listeners[key] = listeners[key] || [];
            listeners[key].push(rule[key]);
        });
    };

    fs.readdirSync(dir).forEach(function (file) {
        if (file === cur) {
            return;
        }

        let match = file.match(reg);
        if (match) {
            add(require(path.join(dir, file)));
        }
    });
};

exports.transform = function (node) {
    if (listeners[node.type]) {
        listeners[node.type].forEach(transform => transform(node));
    }
};
