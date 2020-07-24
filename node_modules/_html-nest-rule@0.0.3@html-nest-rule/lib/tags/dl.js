/**
 * @file rule for the <dl> element
 * @author nighca<nighca@live.cn>
 */

/* eslint-disable max-len */

var util = require('../util');

module.exports = {

    tagName: 'dl',

    getCategories: function (element) {
        var categories = ['flow content'];

        // A name-value group consists of one or more names (dt elements)
        // followed by one or more values (dd elements),
        // ignoring any nodes other than dt and dd elements
        var startsNameValueGroup = function (child, index, children) {
            return util.isTag('dt', child)
                && children.slice(index + 1).some(util.isTag('dd'));
        };

        // if the element's children include at least one name-value group: palpable content
        if (element.children.some(startsNameValueGroup)) {
            categories.push('palpable content');
        }

        return categories;
    },

    validateContext: function (element) {
        var result = [];
        // IGNORE: context: is - flow content
        return result;
    },

    validateContent: function (element) {
        var result = [];
        var children = element.children;

        // content: raw - zero or more groups each consisting of one or more dt elements followed by one or more dd elements, optionally intermixed with script-supporting elements

        var childrenDtDd = children.filter(function (child) {
            if (util.isTag('dt|dd', child)) {
                return true;
            }

            // optionally intermixed with script-supporting elements
            if (util.isNotCategory('script-supporting element', child)) {
                result.push({
                    expect: 'dt, dd or script-supporting element',
                    got: util.nodeInfo(child),
                    target: child
                });
            }

            return false;
        });

        var childrenDtDdTags = childrenDtDd.map(function (child) {
            return child.tagName;
        }).join(',');

        // zero or more groups each consisting of one or more dt elements followed by one or more dd elements
        if (
            childrenDtDdTags
            && !/^((DT\,)+(DD(\,|$))+)*$/.test(childrenDtDdTags)
        ) {
            result.push({
                expect: 'zero or more groups each consisting of one or more dt elements followed by one or more dd elements',
                got: childrenDtDdTags,
                target: element
            });
        }

        return result;
    }
};
