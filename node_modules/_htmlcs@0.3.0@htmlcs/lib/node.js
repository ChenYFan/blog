/**
 * @file class Node
 * @author nighca<nighca@live.cn>
 */

var util = require('./util');
var typeMap = util.nodeType;

var NodeType = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11
};

/**
 * class Node
 * 参考http://www.w3.org/TR/dom/#interface-node
 *
 * @constructor
 */
var Node = function () {
    this.constructor = Node;
    /* eslint-disable no-proto */
    this.__proto__ = Node.prototype;
    /* eslint-enable no-proto */
};

/**
 * Init a Node instance with given node.
 *
 * @param {Object} node - given node
 * @return {Node} result node
 */
Node.init = function (node) {
    // empty node
    if (!node) {
        return new Node();
    }

    // avoid repetitive construct
    if (node instanceof Node) {
        return node;
    }

    Node.apply(node);

    Node.extend(node);

    if (node.name === 'document') {
        return Node.createDocument(node);
    }

    if (util.isElement(node)) {
        return Node.createElement(node);
    }

    switch (node.type) {

        case typeMap.Text:
            return Node.createTextNode(node);

        case typeMap.Directive:
            return Node.createDirective(node);

        case typeMap.Comment:
            return Node.createComment(node);

        case typeMap.CDATA:
            return Node.createCDATA(node);

        default:
            return node;

    }
};

/**
 * Extend given node with attributes.
 *
 * @param {Node} node - given node
 * @return {Node} node itself
 */
Node.extend = function (node) {

    util.extend(node, {
        nodeType: '',                                   // fill later depending on node type
        nodeName: '',                                   // fill later depending on node type

        baseURI: '',                                    // TODO
        parentNode: node.parent || null,
        childNodes: node.children || [],

        nodeValue: null,                                // fill later depending on node type
        textContent: ''                                 // fill later depending on node type
    });

    util.extendAttribute(node, {

        ownerDocument: {
            get: function () {
                var node = this;
                while (
                    node
                    && node.nodeType !== NodeType.DOCUMENT_NODE
                ) {
                    node = node.parentNode;
                }
                return node || null;
            }
        },

        parentElement: {
            get: function () {
                return (this.parentNode && util.isElement(this.parentNode)) ? this.parentNode : null;
            }
        },

        firstChild: {
            get: function () {
                return this.childNodes[0] || null;
            }
        },

        lastChild: {
            get: function () {
                return this.childNodes[this.childNodes.length - 1] || null;
            }
        },

        previousSibling: {
            get: function () {
                var parent = this.parentNode;

                if (!parent) {
                    return null;
                }

                var siblings = parent.childNodes;

                return siblings[siblings.indexOf(this) - 1] || null;
            }
        },

        nextSibling: {
            get: function () {
                var parent = this.parentNode;

                if (!parent) {
                    return null;
                }

                var siblings = parent.childNodes;

                return siblings[siblings.indexOf(this) + 1] || null;
            }
        }
    });

    return node;
};

util.extend(Node.prototype, {

    hasChildNodes: function () {
        return !!this.childNodes.length;
    },

    isEqualNode: function (node) {
        return node === this;
    },

    DOCUMENT_POSITION_DISCONNECTED: 0x01,
    DOCUMENT_POSITION_PRECEDING: 0x02,
    DOCUMENT_POSITION_FOLLOWING: 0x04,
    DOCUMENT_POSITION_CONTAINS: 0x08,
    DOCUMENT_POSITION_CONTAINED_BY: 0x10,
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 0x20,

    compareDocumentPosition: function (other) {
        var reference = this;

        // same object
        if (reference === other) {
            return 0;
        }

        var path;
        var otherPath;

        // not in the same tree
        if (
            !other
            || (path = Node.getPath(reference))[0] !== (otherPath = Node.getPath(other))[0]
        ) {
            return reference.DOCUMENT_POSITION_DISCONNECTED
                + reference.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                + reference.DOCUMENT_POSITION_FOLLOWING;
        }

        // ancestor
        if (other.contains(reference)) {
            return reference.DOCUMENT_POSITION_CONTAINS + reference.DOCUMENT_POSITION_PRECEDING;
        }

        // descendant
        if (reference.contains(other)) {
            return reference.DOCUMENT_POSITION_CONTAINED_BY + reference.DOCUMENT_POSITION_FOLLOWING;
        }

        // preceding
        for (var i = 1, l = path.length; i < l; i++) {
            if (path[i] !== otherPath[i]) {
                var siblings = path[i - 1].childNodes;
                if (siblings.indexOf(otherPath[i]) < siblings.indexOf(path[i])) {
                    return reference.DOCUMENT_POSITION_PRECEDING;
                }
            }
        }

        return reference.DOCUMENT_POSITION_FOLLOWING;

    },

    contains: function (another) {
        while (another) {
            if (another === this) {
                return true;
            }
            another = another.parentNode;
        }
        return false;
    },

    // lookupPrefix: function () { /*TODO*/ },
    // lookupNamespaceURI: function () { /*TODO*/ },
    // isDefaultNamespace: function () { /*TODO*/ },

    insertBefore: function (node, child) {
        var pos = this.childNodes.indexOf(child);
        if (pos < 0) {
            throw new Error('HierarchyRequestError');
        }

        Node.remove(node);
        Node.insert(this, node, pos);

        return node;
    },

    appendChild: function (node) {
        Node.remove(node);
        Node.insert(this, node, this.childNodes.length);

        return node;
    },

    replaceChild: function (node, child) {
        var pos = this.childNodes.indexOf(child);
        if (pos < 0) {
            throw new Error('HierarchyRequestError');
        }

        Node.remove(child);
        Node.remove(node);
        Node.insert(this, node, pos);

        return child;
    },

    removeChild: function (child) {
        if (this.childNodes.indexOf(child) < 0) {
            throw new Error('NotFoundError');
        }

        Node.remove(child);

        return child;
    }

});

/**
 * Create an Element node.
 *
 * @param {Node} node - given node
 * @return {Element} result Element node
 */
Node.createElement = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    return require('./element').init(util.extend(node, {
        nodeType: NodeType.ELEMENT_NODE,
        nodeName: node.name.toUpperCase(),
        nodeValue: null,
        textContent: node.data
    }));
};

/**
 * Create a TextNode node.
 *
 * @param {Node} node - given node
 * @return {Node} result TextNode node
 */
Node.createTextNode = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    return util.extend(node, {
        nodeName: '#text',
        nodeType: NodeType.TEXT_NODE,
        nodeValue: node.data,
        textContent: node.data
    });
};

/**
 * Create a Directive node.
 *
 * @param {Node} node - given node
 * @return {Node} result Directive node
 */
Node.createDirective = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    switch (node.name) {

        case '!doctype':
            node.name = null;
            return Node.createDocumentType(node);

        default:
            return util.extend(node, {
                nodeValue: null,
                textContent: null
            });
    }

};

/**
 * Create a DocumentType node.
 *
 * @param {Node} node - given node
 * @return {Node} result DocumentType node
 */
Node.createDocumentType = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    var properties = [];
    if (node.data) {
        node.data.replace(/(\"[^\"]+\"(\s|$))|([^\n\r\s]+)/g, function (property) {
            properties.push(
                property
                    .replace(/[\n\r]+/g, '')
                    .replace(/(^\")|(\"$)/g, '')
            );
            return '';
        });
    }

    var name = node.name || properties[1] || '';
    var isPublic = properties[2] === 'PUBLIC';
    var publicId = node.publicId || (isPublic ? properties[3] : '') || '';
    var systemId = node.systemId || (isPublic ? properties[4] : properties[3]) || '';

    util.extend(node, {
        nodeType: NodeType.DOCUMENT_TYPE_NODE,
        nodeValue: null,
        textContent: null,

        name: name,
        publicId: publicId,
        systemId: systemId
    });

    util.extendAttribute(node, {
        nodeName: {
            get: function () {
                return this.name;
            }
        }
    });

    return node;
};

/**
 * Create a Comment node.
 *
 * @param {Node} node - given node
 * @return {Node} result Comment node
 */
Node.createComment = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    return util.extend(node, {
        nodeName: '#comment',
        nodeType: NodeType.COMMENT_NODE,
        nodeValue: node.data,
        textContent: node.data
    });
};

// http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490
var DOMImplementation = {

    // hasFeature: function () { /*TODO*/ },
    // getFeature: function () { /*TODO*/ },

    createDocumentType: function (qualifiedName, publicId, systemId) {
        return Node.createDocumentType({
            name: qualifiedName,
            publicId: publicId,
            systemId: systemId
        });
    },

    createDocument: function (namespaceURI, qualifiedName, doctype) {
        return Node.createDocument({
            name: qualifiedName,
            namespaceURI: namespaceURI,
            doctype: doctype
        });
    }

};

// http://www.w3.org/TR/dom/#interface-document

// document methods
var documentProto = {

    createElement: function (localName) {
        return Node.createElement({
            name: localName.toLowerCase()
        });
    },

    createDocumentFragment: function () {
        return Node.init({});
    },

    createTextNode: function (data) {
        return Node.createTextNode({
            data: data
        });
    },

    createComment: function (data) {
        return Node.createComment({
            data: data
        });
    }

    // createProcessingInstruction: function () { /*TODO*/ }

    // importNode: function () { /*TODO*/ }
    // adoptNode: function () { /*TODO*/ }
    // createEvent: function () { /*TODO*/ }
    // createRange: function () { /*TODO*/ }
    // createNodeIterator: function () { /*TODO*/ }
    // createTreeWalker: function () { /*TODO*/ }
};

/**
 * Create a Document node.
 *
 * @param {Node} node - given node
 * @return {Node} result Document node
 */
Node.createDocument = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    node = require('./element').init(node);

    var doctype = node.doctype || node.childNodes.filter(function (childNode) {
        return childNode.name === '!doctype';
    })[0] || null;

    node.childNodes.forEach(function (childNode) {
        childNode.parentNode = node;
    });

    // properties
    util.extend(node, {
        nodeName: '#document',
        nodeType: NodeType.DOCUMENT_NODE,
        nodeValue: null,
        textContent: null,

        implementation: DOMImplementation,
        URL: 'about:blank',
        documentURI: 'about:blank',
        compatMode: 'CSS1Compat',           // TODO
        characterSet: 'utf-8',
        contentType: 'application/xml',
        doctype: doctype,
        documentElement: node.firstElementChild || null,

        head: node.querySelector('head'),
        body: node.querySelector('body')
    });

    // methods
    util.extend(node, documentProto);

    return node;
};

/**
 * Create a CDATA node.
 *
 * @param {Node} node - given node
 * @return {Node} result CDATA node
 */
Node.createCDATA = function (node) {
    node = node instanceof Node ? node : Node.init(node);

    return util.extend(node, {
        nodeName: '#cdata',
        nodeType: NodeType.CDATA_SECTION_NODE,
        nodeValue: null,
        textContent: null
    });
};

/**
 * Get path ( array of node ) from root to given node.
 *
 * @param {Node} node - given node
 * @return {Array.Node} path from root to given node
 */
Node.getPath  = function (node) {
    var path = [];
    do {
        path.unshift(node);
    } while (node = node.parentNode);
    return path;
};

/**
 * Insert a node to given position.
 *
 * @param {Node} parent - parent node
 * @param {Node} child - child node to insert
 * @param {number} pos - position (in parent's childNode array) to insert
 */
Node.insert = function (parent, child, pos) {
    parent.childNodes.splice(pos, 0, child);
    child.parentNode = parent;
};

/**
 * Remove a node from its current position.
 *
 * @param {Node} child - node to remove
 */
Node.remove = function (child) {
    if (!child.parentNode) {
        return;
    }

    var childNodes = child.parentNode.childNodes;

    childNodes.splice(childNodes.indexOf(child), 1);
    child.parentNode = null;
};

/**
 * Map of node types.
 */
Node.typeMap = NodeType;

module.exports = Node;
