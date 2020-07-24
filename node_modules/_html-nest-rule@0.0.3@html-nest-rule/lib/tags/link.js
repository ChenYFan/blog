/**
 * @file rule for the <link> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'link',

    getCategories: function (element) {
        return ['metadata content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - metadata content
        // IGNORE: context: raw - in a noscript element that is a child of a head element
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
