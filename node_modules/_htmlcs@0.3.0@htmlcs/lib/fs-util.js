/**
 * @file fs-relative util methods
 * @author nighca<nighca@live.cn>
 */

var fs = require('fs');
var path = require('path');

/**
 * Application (htmlcs) info.
 *
 * @type {Object}
 * @property {string} root - root path of application (htmlcs) code
 */
var app = {
    root: path.resolve(__dirname, '../')
};


/**
 * Get path of home(~).
 *
 * @return {string} path of home
 */
var getHomePath = function () {
    var homePath = '';
    var environment = process.env;
    var paths = [
        environment.USERPROFILE,
        environment.HOME,
        environment.HOMEPATH,
        environment.HOMEDRIVE + environment.HOMEPATH
    ];

    while (paths.length) {
        homePath = paths.shift();
        if (fs.existsSync(homePath)) {
            return homePath;
        }
    }
};

module.exports = {
    app: app,
    getHomePath: getHomePath
};
