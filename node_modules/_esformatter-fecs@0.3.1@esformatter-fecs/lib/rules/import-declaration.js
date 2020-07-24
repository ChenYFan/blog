/**
 * @file transform ImportDeclaration
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

const util = require('../util');

module.exports = {
    ImportDeclaration(node) {
        const left = util.token.findInBetween(node.startToken, node.endToken, '{');
        const right = util.token.findInBetweenFromEnd(node.fromToken, node.endToken, '}');
        if (!left || !right) {
            return;
        }

        let specifiers = node.specifiers.filter(function (node) {
            return node.type !== 'ImportDefaultSpecifier';
        });

        if (left.loc.start.line === right.loc.start.line && specifiers.length < 3) {
            util.whitespace.limitBefore(specifiers[0].startToken, 0);
            util.whitespace.limitAfter(specifiers[specifiers.length - 1].endToken, 0);
            return;
        }

        specifiers.forEach(s => {
            util.linebreak.limitBefore(s.startToken, 1);
        });

        util.linebreak.limitBefore(right, 1);
    }
};
