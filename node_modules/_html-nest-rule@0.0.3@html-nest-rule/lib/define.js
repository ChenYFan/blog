/**
 * @file defines
 * @author nighca<nighca@live.cn>
 */

var util = require('./util');

var defines = {
    // http://www.w3.org/TR/html5/dom.html#inter-element-whitespace
    'inter-element whitespace': function (given) {
        return !given
            || (
                given.nodeType === 3
                && /^[\u0020\u0009\u000a\u000c\u000d]*$/.test(given.textContent)
            );
    },
    // https://www.w3.org/TR/html5/embedded-content-0.html#media-element
    'media element': function (given) {
        return given
            && ['audio', 'video'].indexOf(given.tagName.toLowerCase()) >= 0;
    }
};

var is = util.curry(function (name, given) {
    var define = defines[name];

    return define
        ? define(given)
        : false;
});

var isNot = util.not(is);

module.exports = {
    is: is,
    isNot: isNot
};
