/**
 * @file rule for the <del> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'del',

    getCategories: function (element) {
        return ['flow content', 'phrasing content'];
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
