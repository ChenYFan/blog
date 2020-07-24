/**
 * @file rule for the <legend> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'legend',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as the first child of a fieldset element
        if (
            element.parentElement
            && (
                util.isNotTag('fieldset', element.parentElement)
                || element.parentElement.children.indexOf(element) !== 0
            )
        ) {
            result.push({
                expect: 'as the first element in an fieldset element',
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // is phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        return result;
    }
};
