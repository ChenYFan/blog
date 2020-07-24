/**
 * @file rule for the <textarea> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'textarea',

    getCategories: function (element) {
        return [
            'flow content', 'phrasing content', 'interactive content',
            'listed, labelable, submittable, resettable, and reassociateable form-associated element',
            'palpable content'
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

        // text
        if (children.length) {
            result.push({expect: 'text'});
        }

        return result;
    }
};
