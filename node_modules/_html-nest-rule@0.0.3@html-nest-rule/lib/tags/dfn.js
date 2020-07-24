/**
 * @file rule for the <dfn> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'dfn',

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

        // content: raw - phrasing content, but there must be no dfn element descendants

        // phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        // but there must be no dfn element descendants
        util.walkDescendants(element, function (descendant) {
            if (util.isTag('dfn', descendant)) {
                result.push({
                    expect: 'no dfn element descendants',
                    target: descendant
                });
            }
        });

        return result;
    }
};
