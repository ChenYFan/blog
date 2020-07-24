/**
 * @file rule for the <style> element
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    tagName: 'style',

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
        // content: raw - depends on the value of the type attribute, but must match requirements described in prose below
        return result;
    }
};
