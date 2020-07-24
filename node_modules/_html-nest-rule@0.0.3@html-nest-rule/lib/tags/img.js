/**
 * @file rule for the <img> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'img',

    getCategories: function (element) {
        var categories = [
            'flow content', 'phrasing content', 'embedded content',
            'form-associated element', 'palpable content'
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
        // empty
        if (element.childNodes.length) {
            result.push({expect: 'empty'});
        }

        return result;
    }
};
