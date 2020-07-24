/**
 * @file rule for the <script> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'script',

    getCategories: function (element) {
        return ['metadata content', 'flow content', 'phrasing content', 'script-supporting element'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - metadata content
        // IGNORE: context: is - phrasing content
        // IGNORE: context: is - script-supporting elements
        return result;
    },

    validateContent: function (element) {
        var result = [];
        // IGNORE: content: raw - if there is no src attribute, depends on the value of the type attribute, but must match script content restrictions
        // IGNORE: content: raw - if there is a src attribute, the element must be either empty or contain only script documentation that also matches script content restrictions
        return result;
    }
};
