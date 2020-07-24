/**
 * @file rule for the <iframe> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'iframe',

    getCategories: function (element) {
        return ['flow content', 'phrasing content', 'embedded content', 'interactive content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - embedded content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // TODO: content: raw - text that conforms to the requirements given in the prose
        return result;
    }
};
