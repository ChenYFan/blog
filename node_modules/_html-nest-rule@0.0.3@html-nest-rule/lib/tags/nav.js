/**
 * @file rule for the <nav> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'nav',

    getCategories: function (element) {
        return ['flow content', 'sectioning content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - flow content, but with no main element descendants

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no main element descendants
        util.walkDescendants(element, function (descendant) {
            if (util.isTag('main', descendant)) {
                result.push({
                    expect: 'with no main element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
