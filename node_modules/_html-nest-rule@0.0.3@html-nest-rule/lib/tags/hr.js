/**
 * @file rule for the <hr> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'hr',

    getCategories: function (element) {
        return ['flow content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
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
