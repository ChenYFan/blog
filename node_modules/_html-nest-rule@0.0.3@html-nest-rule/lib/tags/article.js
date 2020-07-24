/**
 * @file rule for the <article> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'article',

    getCategories: function (element) {
        var categories = ['sectioning content', 'palpable content'];

        var hasMainElementDescendants = false;
        util.walkDescendants(element, function (descendant) {
            if (util.isTag('main', descendant)) {
                hasMainElementDescendants = true;
            }
        });

        if (!hasMainElementDescendants) {
            categories.unshift('flow content');
        }

        return categories;
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
