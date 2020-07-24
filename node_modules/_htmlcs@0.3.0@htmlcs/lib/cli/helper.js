/**
 * @file helpers for cli operation
 * @author nighca<nighca@live.cn>
 */

var fs = require('fs');
var path = require('path');
var walk = require('walk');
var yargs = require('yargs');
var config = require('../config');

/**
 * Deal with error & exit.
 *
 * @param {string} msg - error message
 */
var dealError = function (msg) {
    console.log('Error: ' + msg + '\n');
    yargs.showHelp();
    process.exit(1);
};

/**
 * Read file.
 *
 * @param {string} filePath - path of given file
 * @return {string} file content
 */
var readFile = function (filePath) {
    return fs.readFileSync(filePath, {encoding: 'utf-8'});
};

/**
 * Load content of specified config file.
 *
 * @param {string} configFilePath - path of specified config file
 * @return {?Object} the config content
 */
var loadSpecifiedConfig = function (configFilePath) {
    try {
        return config.parse(readFile(configFilePath));
    }
    catch (e) {
        dealError('Load config (' + configFilePath + ') failed: ' + e.message);
    }
};

var HTML_EXT_PATTERN = /\.html?$/;

/**
 * Get target files with given targets (file / directory path).
 *
 * @param {Array} targets - list of given targets
 * @return {Array} list of target files' path
 */
var getTargetFiles = function (targets) {
    return targets.reduce(function (files, target) {
        var stat = fs.statSync(target);

        if (stat.isFile()) {
            files.push(target);
            return files;
        }

        if (stat.isDirectory()) {
            walk.walkSync(target, {
                followLinks: false,
                filters: ['node_modules', 'bower_components', 'Temp', '_Temp'],
                listeners: {
                    file: function (root, fileStat, next) {
                        var filePath = path.join(root, fileStat.name);

                        // filter with suffix (.html)
                        if (HTML_EXT_PATTERN.test(filePath)) {
                            files.push(filePath);
                        }
                        next();
                    }
                }
            });
            return files;
        }
    }, []);
};

module.exports = {
    dealError: dealError,
    readFile: readFile,
    loadSpecifiedConfig: loadSpecifiedConfig,
    getTargetFiles: getTargetFiles
};
