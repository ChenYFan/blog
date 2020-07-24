/**
 * @file rule for the <td> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'td',

    getCategories: function (element) {
        return ['sectioning root'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a tr element
        if (
            element.parentElement
            && util.isNotTag('tr', element.parentElement)
        ) {
            result.push({
                expect: 'as a child of an tr element',
                got: util.nodeInfo(element.parentElement),
                target: element
            });
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
