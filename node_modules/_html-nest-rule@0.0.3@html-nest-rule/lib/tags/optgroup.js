/**
 * @file rule for the <optgroup> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'optgroup',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a select element
        if (
            element.parentElement
            && util.isNotTag('select', element.parentElement)
        ) {
            result.push({
                expect: 'as a child of an select element',
                got: util.nodeInfo(element.parentElement),
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - zero or more option and script-supporting elements
        result = result.concat(util.validateChildrenSequence({
            desc: 'zero or more option and script-supporting elements',
            sequence: [['option|category:script-supporting element', '*']]
        }, element));

        return result;
    }
};
