/**
 * @file rule for the <label> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'label',

    getCategories: function (element) {
        return [
            'flow content', 'phrasing content', 'interactive content',
            'reassociateable form-associated element', 'palpable content'
        ];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;
        // content: raw - phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements

        // phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        // but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements
        util.walkDescendants(element, function (descendant) {
            // with no descendant labelable elements unless it is the element's labeled control
            // "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself"
            // so skip check here.

            // no descendant label elements
            if (util.isTag('label', descendant)) {
                result.push({
                    expect: 'with no descendant label elements',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
