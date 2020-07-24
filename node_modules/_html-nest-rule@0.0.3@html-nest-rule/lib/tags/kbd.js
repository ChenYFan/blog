/**
 * @file rule for the <kbd> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'kbd',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
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
