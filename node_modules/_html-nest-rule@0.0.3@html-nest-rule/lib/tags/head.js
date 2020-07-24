/**
 * @file rule for the <head> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'head',

    getCategories: function (element) {
        return [];
    },

    validateContext: function (element) {
        var result = [];
        // context: raw - as the first element in an html element
        if (
            element.parentElement
            && (
                util.isNotTag('html', element.parentElement)
                || element.parentElement.children.indexOf(element) !== 0
            )
        ) {
            result.push({
                expect: 'as the first element in an html element',
                target: element
            });
        }

        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - if the document is an iframe srcdoc document or if title information is available from a higher-level protocol: zero or more elements of metadata content, of which no more than one is a title element and no more than one is a base element
        // content: raw - otherwise: one or more elements of metadata content, of which exactly one is a title element and no more than one is a base element

        result = result.concat(util.validateCategory('metadata content', children));

        if (children.filter(util.isTag('title')).length > 1) {
            result.push({
                expect: 'no more than one title element',
                target: element
            });
        }

        if (children.filter(util.isTag('base')).length > 1) {
            result.push({
                expect: 'no more than one base element',
                target: element
            });
        }

        return result;
    }
};
