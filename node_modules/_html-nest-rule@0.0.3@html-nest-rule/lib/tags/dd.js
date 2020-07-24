/**
 * @file rule for the <dd> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'dd',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - after dt or dd elements inside dl elements
        if (element.parentElement) {
            // as a child of an dl element
            if (util.isNotTag('dl', element.parentElement)) {
                result.push({
                    expect: 'as a child of an dl element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            // after dt or dd elements
            for (var prev = element; prev = prev.previousElementSibling;) {
                if (util.isNotTag('dt|dd', prev)) {
                    result.push({
                        expect: 'after dt or dd elements',
                        target: element
                    });
                    break;
                }
            }
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // is flow content
        result = result.concat(util.validateCategory('flow content', children));

        return result;
    }
};
