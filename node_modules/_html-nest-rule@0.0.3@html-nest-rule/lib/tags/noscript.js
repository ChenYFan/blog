/**
 * @file rule for the <noscript> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'noscript',

    getCategories: function (element) {
        return ['metadata content', 'flow content', 'phrasing content'];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - in a head element of an html document, if there are no ancestor noscript elements
        // context: raw - where phrasing content is expected in html documents, if there are no ancestor noscript elements

        // there are no ancestor noscript elements
        util.getAncestors(element).forEach(function (ancestor) {
            if (util.isTag('noscript', ancestor)) {
                result.push({
                    expect: 'with no ancestor noscript elements',
                    got: util.nodeInfo(ancestor),
                    target: element
                });
            }
        });

        return result;
    },

    validateContent: function (element) {
        var result = [];
        // IGNORE: content: raw - when scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements
        // IGNORE: content: raw - when scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants
        // IGNORE: content: raw - otherwise: text that conforms to the requirements given in the prose

        // there must be no noscript element descendants
        util.walkDescendants(element, function (descendant) {
            if (util.isTag('noscript', descendant)) {
                result.push({
                    expect: 'with no noscript element descendants',
                    got: util.nodeInfo(descendant),
                    target: descendant
                });
            }
        });

        return result;
    }
};
