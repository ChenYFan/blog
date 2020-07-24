/**
 * @file rule for the <svg> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'svg',

    getCategories: function (element) {
        return ['embedded content', 'phrasing content', 'flow content'];
    },

    validateContext: function (element) {
        var result = [];
        return result;
    },

    validateContent: function (element) {
        var result = [];
        return result;
    }
};
