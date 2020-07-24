/**
 * @file rule for the <fieldset> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'fieldset',

    getCategories: function (element) {
        return [
            'flow content', 'sectioning root',
            'listed and reassociateable form-associated element', 'palpable content'
        ];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - optionally a legend element, followed by flow content
        children.forEach(function (child, index) {
            if (index === 0 && util.isTag('legend', children[0])) {
                return;
            }

            if (!util.isCategory('flow content', child)) {
                result.push({
                    expect: 'optionally a legend element, followed by flow content',
                    got: util.nodeCategoriesInfo(child),
                    target: child
                });
            }
        });

        return result;
    }
};
