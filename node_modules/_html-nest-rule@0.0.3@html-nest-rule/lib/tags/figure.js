/**
 * @file rule for the <figure> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'figure',

    getCategories: function (element) {
        return ['flow content', 'sectioning root', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - either: one figcaption element followed by flow content
        // content: raw - or: flow content followed by one figcaption element

        var figcaptionChildren = children.filter(util.isTag('figcaption'));

        // at most one figcaption element
        if (figcaptionChildren.length > 1) {
            result.push({
                expect: 'at most one figcaption element',
                got: figcaptionChildren.length + ' figcaption elements',
                target: element
            });
        }

        // figcaption element to be the first or last child
        figcaptionChildren.forEach(function (figcaptionChild) {
            if (
                figcaptionChild !== element.firstElementChild
                && figcaptionChild !== element.lastElementChild
            ) {
                result.push({
                    expect: 'figcaption element to be the first or last child',
                    target: figcaptionChild
                });
            }
        });

        // content: raw - or: flow content
        result = result.concat(util.validateCategory(
            'flow content',
            children.filter(util.isNotTag('figcaption'))
        ));

        return result;
    }
};
