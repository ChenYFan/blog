/**
 * @file rule for the <thead> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'thead',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a table element, after any caption, and colgroup elements and before any tbody, tfoot, and tr elements, but only if there are no other thead elements that are children of the table element

        if (element.parentElement) {
            // as a child of an table element
            if (util.isNotTag('table', element.parentElement)) {
                result.push({
                    expect: 'as a child of an table element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            // after any caption, and colgroup elements
            for (var next = element; next = next.nextElementSibling;) {
                if (util.isTag('caption|colgroup', next)) {
                    result.push({
                        expect: 'after any caption, and colgroup elements',
                        target: element
                    });
                    break;
                }
            }

            // before any tbody, tfoot, and tr elements
            for (var prev = element; prev = prev.previousElementSibling;) {
                if (util.isTag('tbody|tfoot|tr', prev)) {
                    result.push({
                        expect: ' before any tbody, tfoot, and tr elements',
                        target: element
                    });
                    break;
                }
            }

            // but only if there are no other thead elements that are children of the table element
            if (element.parentElement.children.filter(util.isTag('thead')).length > 1) {
                result.push({
                    expect: 'there are no other thead elements that are children of the table element',
                    target: element
                });
            }
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - zero or more tr and script-supporting elements
        result = result.concat(util.validateChildrenSequence({
            desc: 'zero or more tr and script-supporting elements',
            sequence: [['tr|category:script-supporting element', '*']]
        }, element));

        return result;
    }
};
