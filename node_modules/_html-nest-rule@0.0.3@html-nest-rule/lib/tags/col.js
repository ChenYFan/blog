/**
 * @file rule for the <col> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'col',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a colgroup element that doesn't have a span attribute
        if (
            element.parentElement
            && (
                util.isNotTag('colgroup', element.parentElement)
                || element.parentElement.hasAttribute('span')
            )
        ) {
            result.push({
                expect: 'as a child of a colgroup element that doesn\'t have a span attribute',
                got: util.nodeInfo(element.parentElement),
                target: element
            });
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
