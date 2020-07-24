/**
 * @file rule for the <datalist> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'datalist',

    getCategories: function (element) {
        return ['flow content', 'phrasing content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - phrasing content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - either: phrasing content (with zero or more option elements descendants)
        // content: raw - or: zero or more option elements
        if (
            util.validateCategory('phrasing content', children).length
            && util.validateChildrenSequence({
                desc: 'zero or more option elements',
                sequence: [['option', '*']]
            }, element).length
        ) {
            result.push({
                expect: 'either phrasing content, or zero or more option elements',
                got: util.sequenceInfo(element.children),
                target: element
            });
        }

        return result;
    }
};
