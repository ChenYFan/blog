/**
 * @file rule for the <caption> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'caption',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as the first element child of a table element
        if (
            element.parentElement
            && (
                util.isNotTag('table', element.parentElement)
                || element.parentElement.children.indexOf(element) !== 0
            )
        ) {
            result.push({
                expect: 'as the first element child of a table element',
                got: util.nodeInfo(element.parentElement),
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - flow content, but with no descendant table elements

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no descendant table elements
        util.walkDescendants(element, function (descendant) {
            // no descendant table elements
            if (util.isTag('table', descendant)) {
                result.push({
                    expect: 'with no descendant table elements',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
