/**
 * @file rule for the <table> element
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');

module.exports = {

    tagName: 'table',

    getCategories: function (element) {
        return ['flow content', 'palpable content'];
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - in this order:
        //      optionally a caption element,
        //      followed by zero or more colgroup elements,
        //      followed optionally by a thead element,
        //      followed optionally by a tfoot element,
        //      followed by either zero or more tbody elements or one or more tr elements,
        //      followed optionally by a tfoot element (but there can only be one tfoot element child in total),
        //      optionally intermixed with one or more script-supporting elements
        result = result.concat(util.validateChildrenSequence({
            desc: [
                'optionally a caption element',
                'followed by zero or more colgroup elements',
                'followed optionally by a thead element',
                'followed optionally by a tfoot element',
                'followed by either zero or more tbody elements or one or more tr elements',
                'followed optionally by a tfoot element',
                'optionally intermixed with one or more script-supporting elements'
            ].join(', '),
            filter: util.isNotCategory('script-supporting element'),
            sequence: [
                ['caption', '?'],
                ['colgroup', '*'],
                ['thead', '?'],
                ['tfoot', '?'],
                // "tbody & tr should not show together" will be checked in following code
                ['tbody|tr', '*'],
                // "but there can only be one tfoot element child in total" will be checked in following code
                ['tfoot', '?']
            ]
        }, element));

        // tbody & tr should not show together
        if (
            children.some(util.isTag('tbody'))
            && children.some(util.isTag('tr'))
        ) {
            result.push({
                expect: 'containing either tbody elements or tr elements',
                got: 'tbody and tr',
                target: element
            });
        }

        // but there can only be one tfoot element child in total
        if (children.filter(util.isTag('tfoot')).length > 1) {
            result.push({
                expect: 'containing only one tfoot element child in total',
                target: element
            });
        }

        return result;
    }
};
