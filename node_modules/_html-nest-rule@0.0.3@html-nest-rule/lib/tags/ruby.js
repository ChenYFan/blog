/**
 * @file rule for the <ruby> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'ruby',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // TODO: content: raw - see prose
        return result;
    }
};
