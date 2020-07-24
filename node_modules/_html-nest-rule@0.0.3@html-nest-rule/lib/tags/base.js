/**
 * @file rule for the <base> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'base',

    getCategories: function (element) {
        return ['metadata content'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - in a head element containing no other base elements
        var parent = element.parentElement;
        if (
            parent
            && (
                util.isNotTag('head', parent)
                || parent.children.filter(util.isTag('base')).length > 1
            )
        ) {
            result.push({
                expect: 'in a head element containing no other base elements',
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
