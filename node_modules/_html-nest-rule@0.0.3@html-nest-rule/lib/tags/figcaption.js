/**
 * @file rule for the <figcaption> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'figcaption',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as the first or last child of a figure element
        if (element.parentElement) {
            if (util.isNotTag('figure', element.parentElement)) {
                result.push({
                    expect: 'as the first or last child of a figure element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            if (
                element !== element.parentElement.firstElementChild
                && element !== element.parentElement.lastElementChild
            ) {
                result.push({
                    expect: 'as the first or last child of a figure element',
                    target: element
                });
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
