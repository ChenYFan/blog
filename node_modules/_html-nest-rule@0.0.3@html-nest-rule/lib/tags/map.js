/**
 * @file rule for the <map> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'map',

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
        // transparent
        var contentModelParent = util.getContentModelParent(element);
        var rule = contentModelParent && util.getRule(contentModelParent);

        if (rule) {
            result = result.concat(rule.validateContent(element));
        }

        return result;
    }
};
