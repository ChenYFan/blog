/**
 * @file rule for the <button> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'button',

    getCategories: function (element) {
        return [
            'flow content', 'phrasing content', 'interactive content',
            'listed, labelable, submittable, and reassociateable form-associated element',
            'palpable content'
        ];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - phrasing content, but there must be no interactive content descendant

        // phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        // but there must be no interactive content descendant
        util.walkDescendants(element, function (descendant) {
            // no interactive content descendant
            if (util.isCategory('interactive content', descendant)) {
                result.push({
                    expect: 'with no interactive content descendant',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
