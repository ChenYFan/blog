/**
 * @file transform ObjectExpression
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

const util = require('../util');

module.exports = {

    ObjectExpression(node) {
        const left = node.startToken;
        const right = node.endToken;
        const length = node.properties.length;

        if (left.loc.start.line !== right.loc.start.line || length < 2 || length > 5) {
            return;
        }

        util.linebreak.limitAfter(left, 0);
        util.whitespace.limitAfter(left, 0);
        util.linebreak.limitBefore(right, 0);
        util.whitespace.limitBefore(right, 0);

        node.properties.forEach((property, index) => {
            if (index === length - 1) {
                return;
            }

            const comma = util.token.findNext(property.endToken, ',');
            util.linebreak.limitAfter(comma, 0);
            util.whitespace.limitAfter(comma, 1);
        });
    }

};
