/**
 * @file rule for the <html> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'html',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as the root element of a document
        // context: raw - wherever a subdocument fragment is allowed in a compound document
        if (element.ownerDocument !== element.parentNode) {
            result.push({
                expect: 'as the root element of a document',
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - a head element followed by a body element
        result = result.concat(util.validateChildrenSequence({
            desc: 'a head element followed by a body element',
            sequence: [
                ['head', 1],
                ['body', 1]
            ]
        }, element));

        return result;
    }
};
