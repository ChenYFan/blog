/**
 * @file transform ObjectExpression
 * @author chris<wfsr@foxmail.com>
 */
'use strict';

const unquotedValidator = require('unquoted-property-validator');

function isQuotedProperty(node) {
    return node.key.type === 'Literal'
        || node.type === 'SpreadProperty'
        || node.kind === 'get'
        || node.kind === 'set'
        || node.computed;
}

function isSafeToUnquote(node) {
    const nodeValue = String(node.key.value);
    const results = unquotedValidator(nodeValue);

    return results.needsQuotes === false;
}

function quoteProperty(node) {
    if (isQuotedProperty(node)) {
        return;
    }

    const key = node.key;
    const block = {
        range: key.range,
        type: 'Literal',
        parent: node,
        endToken: key.endToken,
        startToken: key.startToken
    };

    key.startToken.type = block.type;
    key.startToken.value = '\'' + key.name + '\'';
    node.key = block;
}

function unquoteProperty(node) {
    if (node.key.type !== 'Literal') {
        return;
    }

    const key = node.key;
    const block = {
        name: key.value,
        range: key.range,
        type: 'Identifier',
        parent: node,
        endToken: key.endToken,
        startToken: key.startToken
    };

    key.startToken.type = block.type;
    key.startToken.value = key.value;
    node.key = block;
}

module.exports = {

    ObjectExpression(node) {
        let needsQuotes = !node.properties.every(isSafeToUnquote);
        node.properties.forEach(needsQuotes ? quoteProperty : unquoteProperty);
    }

};
