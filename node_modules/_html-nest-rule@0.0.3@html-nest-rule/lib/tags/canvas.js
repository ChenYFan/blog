/**
 * @file rule for the <canvas> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'canvas',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'embedded content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - embedded content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // transparent
        var rule = element.parentElement && util.getRule(element.parentElement);
        if (rule) {
            result = result.concat(rule.validateContent(element));
        }

        return result;
    }
};
