/**
 * @file rule for the <form> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'form',

    getCategories: function (element) {
        return ['flow content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - flow content, but with no form element descendants

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no form element descendants
        util.walkDescendants(element, function (descendant) {
            // no form element descendants
            if (util.isTag('form', descendant)) {
                result.push({
                    expect: 'with no form element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
