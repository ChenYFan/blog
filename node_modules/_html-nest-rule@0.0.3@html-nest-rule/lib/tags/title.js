/**
 * @file rule for the <title> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');
var define = require('../define');

module.exports = {

    tagName: 'title',

    getCategories: function (element) {
        return ['metadata content'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - in a head element containing no other title elements
        var parent = element.parentElement;
        if (
            parent
            && (
                util.isNotTag('head', parent)
                || parent.getElementsByTagName('TITLE').length > 1
            )
        ) {
            result.push({
                expect: 'in a head element containing no other title elements',
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // content: raw - text that is not inter-element whitespace
        if (!(
            element.childNodes.length === 1
            && element.childNodes[0].nodeType === 3
            && define.isNot('inter-element whitespace', element.childNodes[0])
        )) {
            result.push({
                expect: 'text that is not inter-element whitespace',
                target: element
            });
        }

        return result;
    }
};
