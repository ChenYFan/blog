/**
 * @file rule for the <tr> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'tr',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a thead element
        // context: raw - as a child of a tbody element
        // context: raw - as a child of a tfoot element
        // context: raw - as a child of a table element, after any caption, colgroup, and thead elements, but only if there are no tbody elements that are children of the table element

        // as a child of a thead element
        // as a child of a tbody element
        // as a child of a tfoot element
        // as a child of a table element
        if (
            element.parentElement
            && util.isNotTag('thead|tbody|tfoot|table', element.parentElement)
        ) {
            result.push({
                expect: 'as a child of a thead element, a tbody element, a tfoot element or a table element',
                got: util.nodeInfo(element.parentElement),
                target: element
            });
        }

        if (util.isTag('table', element.parentElement)) {
            // after any caption, colgroup, and thead elements
            for (var next = element; next = next.nextElementSibling;) {
                if (util.isTag('caption|colgroup|thead', next)) {
                    result.push({
                        expect: 'after any caption, colgroup, and thead elements',
                        target: element
                    });
                    break;
                }
            }

            // but only if there are no tbody elements that are children of the table element
            if (element.parentElement.children.filter(util.isTag('tbody')).length > 0) {
                result.push({
                    expect: 'there are no tbody elements that are children of the table element',
                    target: element
                });
            }
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - zero or more td, th, and script-supporting elements
        result = result.concat(util.validateChildrenSequence({
            desc: 'zero or more td, th, and script-supporting elements',
            sequence: [['td|th|category:script-supporting element', '*']]
        }, element));

        return result;
    }
};
