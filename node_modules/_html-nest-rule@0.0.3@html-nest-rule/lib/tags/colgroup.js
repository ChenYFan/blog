/**
 * @file rule for the <colgroup> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'colgroup',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a table element, after any caption elements and before any thead, tbody, tfoot, and tr elements
        if (element.parentElement) {
            // as a child of an table element
            if (util.isNotTag('table', element.parentElement)) {
                result.push({
                    expect: 'as a child of an table element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            // after any caption elements
            for (var next = element; next = next.nextElementSibling;) {
                if (util.isTag('caption', next)) {
                    result.push({
                        expect: 'after any caption elements',
                        target: element
                    });
                    break;
                }
            }

            // before any thead, tbody, tfoot, and tr elements
            for (var prev = element; prev = prev.previousElementSibling;) {
                if (util.isTag('thead|tbody|tfoot|tr', prev)) {
                    result.push({
                        expect: 'before any thead, tbody, tfoot, and tr elements',
                        target: element
                    });
                    break;
                }
            }
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - if the span attribute is present: empty
        if (element.hasAttribute('span')) {
            if (element.childNodes.length) {
                result.push({expect: 'empty'});
            }
        }
        // content: raw - if the span attribute is absent: zero or more col and template elements
        else {
            result = result.concat(util.validateChildrenSequence({
                desc: 'zero or more col and template elements',
                sequence: [['col|template', '*']]
            }, element));
        }

        return result;
    }
};
