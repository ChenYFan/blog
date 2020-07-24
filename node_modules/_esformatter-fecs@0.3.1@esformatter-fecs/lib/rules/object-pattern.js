/**
 * @file transform ObjectPattern
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

const util = require('../util');

module.exports = {

    ObjectPattern(node) {
        const left = node.startToken;
        const right = node.endToken;
        const properties = node.properties;

        if (left.loc.start.line === right.loc.start.line && properties.length < 3) {
            util.whitespace.limitBefore(properties[0].startToken, 0);
            util.whitespace.limitAfter(properties[properties.length - 1].endToken, 0);
            return;
        }

        properties.forEach(p => util.linebreak.limitBefore(p.startToken, 1));

        util.linebreak.limitBefore(right, 1);
    }

};
