/**
 * @file rule for the <blockquote> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'blockquote',

    getCategories: function (element) {
        return ['flow content', 'sectioning root', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
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
