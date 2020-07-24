/**
 * @file rule for the <source> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');
var define = require('../define');

module.exports = {

    tagName: 'source',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a media element, before any flow content or track elements
        if (element.parentElement) {
            // as a child of a media element
            if (define.isNot('media element', element.parentElement)) {
                result.push({
                    expect: 'as a child of a media element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            // before any flow content or track elements
            for (var prev = element; prev = prev.previousElementSibling;) {
                if (
                    util.isTag('track', prev)
                    || util.isCategory('flow content', prev)
                ) {
                    result.push({
                        expect: 'before any flow content or track elements',
                        target: element
                    });
                }
            }
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // empty
        if (element.childNodes.length) {
            result.push({expect: 'empty'});
        }

        return result;
    }
};
