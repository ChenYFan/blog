/**
 * @file rule for the <a> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'a',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'interactive content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - transparent, but there must be no interactive content descendant
        // transparent
        var contentModelParent = util.getContentModelParent(element);
        var rule = contentModelParent && util.getRule(contentModelParent);

        if (rule) {
            result = result.concat(rule.validateContent(element));
        }

        // but there must be no interactive content descendant
        util.walkDescendants(element, function (descendant) {
            if (util.isCategory('interactive content', descendant)) {
                result.push({
                    expect: 'no interactive content descendant',
                    got: util.nodeInfo(descendant),
                    target: element
                });
            }
        });

        return result;
    }
};
