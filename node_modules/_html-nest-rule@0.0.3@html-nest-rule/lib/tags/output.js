/**
 * @file rule for the <output> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'output',

    getCategories: function (element) {
        return [
            'flow content', 'phrasing content',
            'listed, labelable, resettable, and reassociateable form-associated element',
            'palpable content'
        ];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // is phrasing content
        result = result.concat(util.validateCategory('phrasing content', children));

        return result;
    }
};
