/**
 * @file parse code
 * @author nighca<nighca@live.cn>
 */

var htmlparser2 = require('htmlparser2');
var Parser = htmlparser2.Parser;
var DomHandler = htmlparser2.DomHandler;

var util = require('./util');
var Node = require('./node');

/**
 * Transform node to Node instance & recursively transform its children.
 *
 * @param {Object} node - given node
 * @return {Node} result node
 */
var transformRecursively = function (node) {
    Node.init(node);

    node.childNodes.forEach(function (childNode) {
        transformRecursively(childNode);
    });

    return node;
};

/**
 * Wrap node list with <document>.
 *
 * @param {Array} arr - node list
 * @return {Node} document node
 */
var wrapDocument = function (arr) {
    var document = htmlparser2.parseDOM('<document></document>')[0];

    document.children = arr;

    for (var i = 0; i < arr.length; i++) {
        var node = arr[i];

        node.prev = arr[i - 1] || null;
        node.next = arr[i + 1] || null;

        node.root = document;
        node.parent = null;
    }

    transformRecursively(document);

    // fix startIndex missing, cause <document> is parsed seperately
    document.startIndex = document.documentElement && document.documentElement.startIndex | 0;

    return document;
};

/**
 * Get a HTML parser.
 *
 * @param {Object} options - options for create parser
 * @return {Parser} HTML parser
 */
var getParser = function (options) {
    // merge with default options
    options = util.extend({
        lowerCaseAttributeNames: false,
        recognizeCDATA: true
    }, options);

    // init handler
    var handler = new DomHandler({
        withStartIndices: true
    });

    // init parser
    var parser = new Parser(handler, options);

    // make handler accessible
    parser.handler = handler;

    // make tokenizer emittable & accessible
    parser.tokenizer = util.emittable(parser._tokenizer, [
        'attribdata',
        'opentagname',
        'opentagend',
        'selfclosingtag',
        'attribname',
        'attribend',
        'closetag',
        'declaration',
        'processinginstruction',
        'comment',
        'cdata',
        'text',
        'error',
        'end'
    ]);

    // make parser emittable
    parser = util.emittable(parser, [
        'processinginstruction',
        'comment',
        'commentend',
        'cdatastart',
        'text',
        'cdataend',
        'error',
        'closetag',
        'end',
        'reset',
        'parserinit',
        'opentagname',
        'opentag',
        'attribute'
    ]);

    return parser;
};

/**
 * Parse given html content to document node.
 *
 * @param {string} htmlCode - HTML code content
 * @param {Parser=} parser - given parser
 * @return {Node} document node
 */
var parse = function (htmlCode, parser) {
    // get parser
    parser = parser || getParser();

    // replace "\r\n" with "\n"
    htmlCode = htmlCode.replace(/\r\n/g, '\n');

    // do parse
    parser.end(htmlCode);

    // get dom & wrap it with <document>
    var document = wrapDocument(parser.handler.dom);

    return document;
};

parse.getParser = getParser;

module.exports = parse;
