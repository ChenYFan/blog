/**
 * @file main file for browser
 * @author nighca<nighca@live.cn>
 */

var htmlcs = require('./lib/htmlcs');

var notSupported = function () {
    throw new Error('Sorry, this method is not supported in browser.')
};

module.exports = {
    addRule: htmlcs.addRule,

    hint: htmlcs.hint,
    format: htmlcs.format,

    hintFile: notSupported,
    formatFile: notSupported
};
