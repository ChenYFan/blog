/**
 * @file rule for the <object> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'object',

    getCategories: function (element) {
        var categories = [
            'flow content', 'phrasing content', 'embedded content',
            'listed, submittable, and reassociateable form-associated element',
            'palpable content'
        ];

        // if the element has a usemap attribute: interactive content
        if (element.hasAttribute('usemap')) {
            categories.push('interactive content');
        }

        return categories;
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - embedded content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - zero or more param elements, then, transparent
        var contentModelParent = util.getContentModelParent(element);
        var rule = contentModelParent && util.getRule(contentModelParent);

        if (rule) {
            var childNodesWithoutStartingParamElements = (function (childNodes) {
                for (var i = 0, l = childNodes.length, childNode; i < l; i++) {
                    childNode = childNodes[i];
                    if (util.isTag('param', childNode)) {
                        childNodes[i] = null;
                        continue;
                    }
                    if (childNode.nodeType === 1) {
                        break;
                    }
                }

                return childNodes.filter(function (childNode) {
                    return childNode !== null;
                });
            })(Array.prototype.slice.call(element.childNodes));

            result = result.concat(rule.validateContent(
                util.extend(Object.create(element), {
                    childNodes: childNodesWithoutStartingParamElements
                })
            ));
        }

        return result;
    }
};
