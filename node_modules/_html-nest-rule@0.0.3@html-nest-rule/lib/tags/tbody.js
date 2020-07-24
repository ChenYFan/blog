/**
 * @file rule for the <tbody> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'tbody',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a table element, after any caption, colgroup, and thead elements, but only if there are no tr elements that are children of the table element
        if (element.parentElement) {
            // as a child of an table element
            if (util.isNotTag('table', element.parentElement)) {
                result.push({
                    expect: 'as a child of an table element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

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

            // but only if there are no tr elements that are children of the table element
            if (element.parentElement.children.filter(util.isTag('tr')).length > 0) {
                result.push({
                    expect: 'there are no tr elements that are children of the table element',
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
