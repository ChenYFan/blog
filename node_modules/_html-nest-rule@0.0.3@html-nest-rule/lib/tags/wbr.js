/**
 * @file rule for the <wbr> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'wbr',

    getCategories: function (element) {
        return ['flow content', 'phrasing content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
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
