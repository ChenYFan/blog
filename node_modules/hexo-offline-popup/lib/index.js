'use strict';

var _runSwPrecache = require('./run-sw-precache');

var _runSwPrecache2 = _interopRequireDefault(_runSwPrecache);

var _runSwRegister = require('./run-sw-register');

var _runSwRegister2 = _interopRequireDefault(_runSwRegister);

var _inject = require('./inject');

var _inject2 = _interopRequireDefault(_inject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serviceWorkerHandler() {
    var _this = this;

    return Promise.all([_runSwPrecache2.default.call(this), _runSwRegister2.default.call(this)]).then(function () {
        return (0, _inject2.default)(_this.public_dir);
    });
} /**
   * @file hexo plugin entry
   * @author mj(zoumiaojiang@gmail.com)
   */

/* global hexo */


hexo.extend.filter.register('before_exit', serviceWorkerHandler);