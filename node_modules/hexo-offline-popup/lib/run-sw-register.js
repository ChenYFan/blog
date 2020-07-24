'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var swRegisterTemplatePath = _path2.default.resolve(__dirname, 'templates', 'sw-register.tpl.js');
    var swRegisterTempleteCon = _fs2.default.readFileSync(swRegisterTemplatePath, 'utf-8');
    var swRegisterCon = swRegisterTempleteCon.replace('__ServiceWorkerName__', _config.SW_FILE_NAME).replace('__BuildVersion__', versionGenerator());

    var swRegisterDistPath = _path2.default.resolve(this.public_dir, 'sw-register.js');

    _fs2.default.writeFileSync(swRegisterDistPath, swRegisterCon);

    return Promise.resolve();
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 对于小于 10 的数字向左补全0
 *
 * @param  {number} value 数字
 * @return {string}       补全后的字符串
 */
function padding(value) {
    return value < 10 ? `0${value}` : value;
}

/**
 * 获取时间戳版本号
 *
 * @return {string} 版本号
 */
/**
 * @file run sw-precache
 * @author mj(zoumiaojiang@gmail.com)
 */

/* global public_dir */
/* eslint-disable fecs-camelcase */
function versionGenerator() {
    var d = new Date();

    return '' + d.getFullYear() + padding(d.getMonth() + 1) + padding(d.getDate()) + padding(d.getHours()) + padding(d.getMinutes()) + padding(d.getSeconds());
}