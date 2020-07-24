/**
 * @file rule for the <area> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'area',

    getCategories: function (element) {
        return ['flow content', 'phrasing content'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - where phrasing content is expected, but only if there is a map element ancestor or a template element ancestor

        // only if there is a map element ancestor or a template element ancestor
        if (!util.getAncestors(element).some(util.isTag('map|template'))) {
            result.push({
                expect: 'with a map element ancestor or a template element ancestor',
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // empty
        if (element.childNodes.length) {
            result.push({expect: 'empty'});
        }

        return result;
    }
};
