/**
 * @file rule for the <progress> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'progress',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'labelable element', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - phrasing content, but there must be no progress element descendants

        // phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        // but there must be no progress element descendants
        util.walkDescendants(element, function (descendant) {
            // no progress element descendants
            if (util.isTag('progress', descendant)) {
                result.push({
                    expect: 'with no progress element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
