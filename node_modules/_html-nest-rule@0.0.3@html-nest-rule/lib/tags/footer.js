/**
 * @file rule for the <footer> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'footer',

    getCategories: function (element) {
        return ['flow content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // with no header or footer element ancestors
        util.getAncestors(element).forEach(function (ancestor) {
            if (util.isTag('header|footer', ancestor)) {
                result.push({
                    expect: 'with no footer or header element ancestors',
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

        // content: raw - flow content, but with no header, footer, or main element descendants

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no header, footer, or main element descendants
        util.walkDescendants(element, function (descendant) {
            if (util.isTag('header|footer|main', descendant)) {
                result.push({
                    expect: 'with no header, footer, or main element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
