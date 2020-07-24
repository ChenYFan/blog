/**
 * @file rule for the <option> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');
var define = require('../define');

module.exports = {

    tagName: 'option',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as a child of a select element
        // context: raw - as a child of a datalist element
        // context: raw - as a child of an optgroup element
        if (
            element.parentElement
            && util.isNotTag('select|datalist|optgroup', element.parentElement)
        ) {
            result.push({
                expect: 'as a child of a select element, a datalist element or an optgroup element',
                got: util.nodeInfo(element.parentElement),
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - if the element has a label attribute and a value attribute: empty
        if (
            element.hasAttribute('label')
            && element.hasAttribute('value')
        ) {
            if (element.childNodes.length) {
                result.push({expect: 'empty'});
            }
        }

        // content: raw - if the element has a label attribute but no value attribute: text
        if (
            element.hasAttribute('label')
            && !element.hasAttribute('value')
        ) {
            if (children.length) {
                result.push({expect: 'text'});
            }
        }

        // content: raw - if the element has no label attribute: text that is not inter-element whitespace
        if (!element.hasAttribute('label')) {
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
        }

        return result;
    }
};
