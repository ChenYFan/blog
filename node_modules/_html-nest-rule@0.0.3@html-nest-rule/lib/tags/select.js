/**
 * @file rule for the <select> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'select',

    getCategories: function (element) {
        return [
            'flow content', 'phrasing content', 'interactive content',
            'listed, labelable, submittable, resettable, and reassociateable form-associated element',
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
        // content: raw - zero or more option, optgroup, and script-supporting elements
        result = result.concat(util.validateChildrenSequence({
            desc: 'zero or more option, optgroup, and script-supporting elements',
            sequence: [['option|optgroup|category:script-supporting element', '*']]
        }, element));

        return result;
    }
};
