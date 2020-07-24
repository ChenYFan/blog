/**
 * @file rule for the <ol> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'ol',

    getCategories: function (element) {
        var categories = ['flow content'];

        // if the element's children include at least one li element: palpable content
        if (element.children.some(util.isTag('li'))) {
            categories.push('palpable content');
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

        // content: raw - zero or more li and script-supporting elements
        children.forEach(function (child) {
            if (
                util.isNotTag('li', child)
                && util.isNotCategory('script-supporting element', child)
            ) {
                result.push({
                    expect: 'li and script-supporting elements',
                    got: util.nodeInfo(child),
                    target: child
                });
            }
        });

        return result;
    }
};
