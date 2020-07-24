/**
 * @file rule for the <rb> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'rb',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // TODO: context: raw - as a child of a ruby element
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
