/**
 * @file rule for the <main> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'main',

    getCategories: function (element) {
        return ['flow content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - where flow content is expected, but with no article, aside, footer, header or nav element ancestors

        // IGNORE: context: is - flow content

        // but with no article, aside, footer, header or nav element ancestors
        util.getAncestors(element).forEach(function (ancestor) {
            if (util.isTag('article|aside|footer|header|nav', ancestor)) {
                result.push({
                    expect: 'with no article, aside, footer, header or nav element ancestors',
                    got: util.nodeInfo(ancestor),
                    target: element
                });
            }
        });

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
