'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var public_dir = this.public_dir,
        config = this.config,
        log = this.log;
    var root = config.root,
        service_worker = config.service_worker;


    var hexoPublicDir = 'public';
    var rootPrefix = root.replace(/\/$/, '');
    var SWPrecacheConfig = Object.assign({
        logger: log.info.bind(log),
        replacePrefix: rootPrefix,
        staticFileGlobs: [hexoPublicDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
        stripPrefix: hexoPublicDir,
        templateFilePath: _path2.default.resolve(__dirname, 'templates', 'sw-precache.tpl')
    }, service_worker);

    return _swPrecache2.default.write(_path2.default.join(public_dir, _config.SW_FILE_NAME), SWPrecacheConfig);
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _swPrecache = require('sw-precache');

var _swPrecache2 = _interopRequireDefault(_swPrecache);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }