/**
 * @file rule for the <dt> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'dt',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - before dd or dt elements inside dl elements
        if (element.parentElement) {
            // as a child of an dl element
            if (util.isNotTag('dl', element.parentElement)) {
                result.push({
                    expect: 'as a child of an dl element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }

            // before dd or dt elements
            for (var next = element; next = next.nextElementSibling;) {
                if (util.isNotTag('dd|dt', next)) {
                    result.push({
                        expect: 'before dd or dt elements',
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

        // content: raw - flow content, but with no header, footer, sectioning content, or heading content descendants

        // flow content
        result = result.concat(util.validateCategory('flow content', children));

        // but with no header, footer, sectioning content, or heading content descendants
        util.walkDescendants(element, function (descendant) {
            // no header, footer element descendants
            if (util.isTag('header|footer', descendant)) {
                result.push({
                    expect: 'with no header, footer element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }

            // no sectioning content or heading content descendants
            if (util.isCategory('sectioning content|heading content', descendant)) {
                result.push({
                    expect: 'with no sectioning content or heading content descendants',
                    got: util.nodeCategoriesInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
