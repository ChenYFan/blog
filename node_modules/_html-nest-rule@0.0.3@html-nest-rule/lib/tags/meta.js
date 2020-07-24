/**
 * @file rule for the <meta> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'meta',

    getCategories: function (element) {
        return ['metadata content'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - if the charset attribute is present, or if the element's http-equiv attribute is in the encoding declaration state: in a head element
        if (
            element.hasAttribute('charset')
            || element.getAttribute('http-equiv') === 'content-type'
        ) {
            if (
                element.parentElement
                && util.isNotTag('head', element.parentElement)
            ) {
                result.push({
                    expect: 'in a head element',
                    got: util.nodeInfo(element.parentElement),
                    target: element
                });
            }
        }

        // context: raw - if the http-equiv attribute is present but not in the encoding declaration state: in a head element
        // context: raw - if the http-equiv attribute is present but not in the encoding declaration state: in a noscript element that is a child of a head element
        if (
            element.hasAttribute('http-equiv')
            && element.getAttribute('http-equiv') !== 'content-type'
        ) {
            if (
                element.parentElement
                && util.isNotTag('head', element.parentElement)
                && !(
                    util.isTag('noscript', element.parentElement)
                    && util.isTag('head', element.parentElement.parentElement)
                )
            ) {
                result.push({
                    expect: 'in a head element or in a noscript element that is a child of a head element',
                    target: element
                });
            }
        }

        // IGNORE: context: raw - if the name attribute is present: where metadata content is expected

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // empty
        if (element.childNodes.length) {
            result.push({expect: 'empty'});
        }

        return result;
    }
};
