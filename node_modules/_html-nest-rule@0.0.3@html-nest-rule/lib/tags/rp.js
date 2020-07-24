/**
 * @file rule for the <rp> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'rp',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // TODO: context: raw -  as a child of a ruby element, either immediately before or immediately after an  rt or rtc element, but not between rt elements.
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // is phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        return result;
    }
};
