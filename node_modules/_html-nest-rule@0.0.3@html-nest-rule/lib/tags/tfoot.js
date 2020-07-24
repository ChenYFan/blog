/**
 * @file rule for the <tfoot> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'tfoot',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a table element, after any caption, colgroup, and thead elements and before any tbody and tr elements, but only if there are no other tfoot elements that are children of the table element
        // context: raw - as a child of a table element, after any caption, colgroup, thead, tbody, and tr elements, but only if there are no other tfoot elements that are children of the table element

        if (element.parentElement) {
            // as a child of an table element
            if (util.isNotTag('table', element.parentElement)) {
                result.push({
                    expect: 'as a child of an table element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            // after caption, colgroup, and thead elements
            for (var next = element; next = next.nextElementSibling;) {
                if (util.isTag('caption|colgroup|thead', next)) {
                    result.push({
                        expect: 'after caption, colgroup, and thead elements',
                        target: element
                    });
                    break;
                }
            }

            // either before any tbody and tr elements, or after any tbody and tr elements
            var prev;
            var hasPrevTbodyTrElements = false;
            for (prev = element; prev = prev.previousElementSibling;) {
                if (util.isTag('tbody|tr', prev)) {
                    hasPrevTbodyTrElements = true;
                    break;
                }
            }
            var hasNextTbodyTrElements = false;
            for (prev = element; prev = prev.nextElementSibling;) {
                if (util.isTag('tbody|tr', prev)) {
                    hasNextTbodyTrElements = true;
                    break;
                }
            }
            if (hasPrevTbodyTrElements && hasNextTbodyTrElements) {
                result.push({
                    expect: 'either before any tbody and tr elements, or after any tbody and tr elements',
                    target: element
                });
            }

            // but only if there are no other tfoot elements that are children of the table element
            if (element.parentElement.children.filter(util.isTag('tfoot')).length > 1) {
                result.push({
                    expect: 'there are no other tfoot elements that are children of the table element',
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
