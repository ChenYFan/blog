/**
 * @file rule for the <li> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'li',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: inside - ol elements
        // context: inside - ul elements
        var parent = element.parentElement;
        if (
            parent
            && util.isNotTag('ol|ul', parent)
        ) {
            result.push({
                expect: 'inside ol or ul elements',
                got: util.nodeInfo(parent),
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
