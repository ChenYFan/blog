/**
 * @file print methods for different kinds of node
 * @author nighca<nighca@live.cn>
 */

var spec = require('./spec');

var util = require('./util');

var array = Array.prototype;

// TEXT_NODE
var printTextNode = function (node, opt) {
    return opt['no-format']
        ? node.textContent
        : node.textContent.replace(/[\s\n\r]+/g, ' ');
};

// COMMENT_NODE
var printCommentNode = function (node, opt) {
    return '<!--' + node.textContent + '-->';
};

// CDATA_SECTION_NODE
var printCDATASectionNode = function (node, opt) {
    return '<![CDATA[' + node.textContent + ']]>';
};

// DOCUMENT_TYPE_NODE
var printDocumentTypeNode = function (node, opt) {
    if (!node.publicId && !node.systemId) {
        return '<!DOCTYPE ' + node.name + '>';
    }

    var output = '<!DOCTYPE ' + node.name;

    if (node.publicId) {
        output += ' PUBLIC';
        output += ' "' + node.publicId + '"';
    }
    else {
        output += ' SYSTEM';
    }

    if (node.systemId) {
        output += ' "' + node.systemId + '"';
    }

    output += '>';

    return output;
};

var print;
var printAsync;

// DOCUMENT_NODE
var printDocumentNode = function (node, opt) {
    return array.map.call(node.childNodes, function (childNode) {
        return print(childNode, opt);
    }).filter(function (content) {
        return content.trim();
    }).join('\n');
};

var printDocumentNodeAsync = function (node, opt) {
    return Promise.all(
        array.map.call(node.childNodes, function (childNode) {
            return printAsync(childNode, opt);
        })
    ).then(
        function (children) {
            return children.filter(function (content) {
                return content.trim();
            }).join('\n');
        }
    );
};

// ELEMENT_NODE
var printElementMethods = require('./print-element');
var printElementNode = printElementMethods.printElementNode;
var printElementNodeAsync = printElementMethods.printElementNodeAsync;

// general print
var makePrint = function (async) {
    return function (node, opt) {

        // default options
        opt = util.extend({
            // size of indent
            'indent-size': 4,
            // char of indent ( space / tab )
            'indent-char': 'space',
            // max char num in one line
            'max-char': 80,
            // tags whose content should not be formatted
            'no-format-tag': spec.tagTypeMap.structural,
            // no format
            'no-format': false,
            // tags whose content should be inline
            'inline-tag': spec.tagTypeMap.inline,
            // special formatters { tagName ( script / style ) : formatter }
            'formatter': {},
            // hide value of boolean attribute or not ( 'remove' / 'preserve' )
            'bool-attribute-value': 'remove',
            // Should void tags close themeselves with "/" ( 'close' / 'no-close' )
            'self-close': 'no-close',
            // current level
            'level': 0
        }, opt);

        var typeMap = spec.nodeType;

        var output;

        switch (node.nodeType) {

            case typeMap.TEXT_NODE:
                output = printTextNode(node, opt);
                break;

            case typeMap.COMMENT_NODE:
                output = printCommentNode(node, opt);
                break;

            case typeMap.CDATA_SECTION_NODE:
                output = printCDATASectionNode(node, opt);
                break;

            case typeMap.DOCUMENT_TYPE_NODE:
                output = printDocumentTypeNode(node, opt);
                break;

            case typeMap.DOCUMENT_NODE:
                output = (
                    async
                    ? printDocumentNodeAsync
                    : printDocumentNode
                )(node, opt);
                break;

            case typeMap.ELEMENT_NODE:
                output = (
                    async
                    ? printElementNodeAsync
                    : printElementNode
                )(node, opt);
                break;

            default:
                output = '';
        }

        return (
            async
            ? Promise.resolve(output)
            : output
        );

    };
};

print = makePrint(false);
printAsync = makePrint(true);

module.exports = {
    print: print,
    printAsync: printAsync
};
