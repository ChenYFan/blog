/**
 * @file rule for the <video> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');
var define = require('../define');

module.exports = {

    tagName: 'video',

    getCategories: function (element) {
        var categories = ['flow content', 'phrasing content', 'embedded content', 'palpable content'];

        // if the element has a controls attribute: interactive content
        if (element.hasAttribute('controls')) {
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
        // content: raw - if the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants
        // content: raw - if the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants

        var hasSrcAttribute = element.hasAttribute('src');

        // transparent
        var contentModelParent = util.getContentModelParent(element);
        var rule = contentModelParent && util.getRule(contentModelParent);

        if (rule) {
            result = result.concat(rule.validateContent(
                util.extend(Object.create(element), {
                    childNodes: element.childNodes.filter(function (child) {
                        // if the element does not have a src attribute: zero or more source elements
                        if (
                            !hasSrcAttribute
                            && util.isTag('source', child)
                        ) {
                            return false;
                        }

                        // zero or more track elements
                        if (util.isTag('track', child)) {
                            return false;
                        }

                        return true;
                    })
                })
            ));
        }

        // but with no media element descendants
        util.walkDescendants(element, function (descendant) {
            if (define.is('media element', descendant)) {
                result.push({
                    expect: 'with no media element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
