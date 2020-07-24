/**
 * @file rule for the <body> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'body',

    getCategories: function (element) {
        return ['sectioning root'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as the second element in an html element
        if (
            element.parentElement
            && (
                util.isNotTag('html', element.parentElement)
                || element.parentElement.children.indexOf(element) !== 1
            )
        ) {
            result.push({
                expect: 'as the second element in an html element',
                target: element
            });
        }
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // is flow content
        result = result.concat(util.validateCategory('flow content', children));

        return result;
    }
};
