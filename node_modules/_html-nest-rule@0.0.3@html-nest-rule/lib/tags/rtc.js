/**
 * @file rule for the <rtc> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'rtc',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // TODO: context: raw - as a child of a ruby element
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // TODO: content: raw - phrasing content or rt elements
        return result;
    }
};
