/**
 * @file class Element
 * @author nighca<nighca@live.cn>
 */

var cssSelect = require('css-select');

var util = require('./util');
var Node = require('./node');

var Namespaces = {
    HTML: 'http://www.w3.org/1999/xhtml',
    XML: 'http://www.w3.org/XML/1998/namespace',
    XMLNS: 'http://www.w3.org/2000/xmlns/'
};

// http://www.w3.org/TR/dom/#attr
function Attr(name, value) {
    util.extend(this, {
        name: name,
        localName: name,
        value: value,
        specified: true,
        namespaceURI: null,
        prefix: null
    });
}

/**
 * class Element
 * 参考http://www.w3.org/TR/dom/#interface-element
 *
 * @constructor
 */
var Element = function () {
    this.constructor = Element;
    /* eslint-disable no-proto */
    this.__proto__ = Element.prototype;
    /* eslint-enable no-proto */
};

/**
 * Init a Element instance with given node.
 *
 * @param {Node} element - given node as element
 * @return {Element} result node
 */
Element.init = function (element) {
    if (!element || (element instanceof Element)) {
        return element;
    }

    Element.apply(element);

    Element.extend(element);

    return element;
};

/**
 * Extend given element with attributes.
 *
 * @param {Element} element - given element
 * @return {Element} element itself
 */
Element.extend = function (element) {

    // https://dom.spec.whatwg.org/#interface-element

    util.extend(element, {

        // note: unstandard realization here
        // attribute realized based on attribs (map) instead of attributes (list) for better performance
        // while the latter is recommended by specification
        attribs: element.attribs || {},

        namespaceURI: element.namespaceURI || Namespaces.HTML,
        prefix: '',                                     // TODO
        localName: element.name.toLowerCase(),
        tagName: element.name.toUpperCase()

    });

    util.extendAttribute(element, {

        id: {
            get: function () {
                return this.attribs.id || '';
            }
        },

        className: {
            get: function () {
                return this.attribs.class || '';
            }
        },

        classList: {
            get: function () {
                return this.attribs.class ? this.attribs.class.split(' ') : [];
            }
        },

        attributes: {
            get: function () {
                var attribs = this.attribs;
                return Object.keys(attribs).map(function (name) {
                    return new Attr(name, attribs[name]);
                });
            }
        },

        children: {
            get: function () {
                return this.childNodes.filter(util.isElement);
            }
        },

        firstElementChild: {
            get: function () {
                return this.children[0] || null;
            }
        },

        lastElementChild: {
            get: function () {
                return this.children[this.children.length - 1] || null;
            }
        },

        childElementCount: {
            get: function () {
                return this.children.length;
            }
        },

        previousElementSibling: {
            get: function () {
                var element = this;
                while (element = element.previousSibling) {
                    if (util.isElement(element)) {
                        return element;
                    }
                }
            }
        },

        nextElementSibling: {
            get: function () {
                var element = this;
                while (element = element.nextSibling) {
                    if (util.isElement(element)) {
                        return element;
                    }
                }
            }
        }

    });

    return element;
};

// only read ops
Element.prototype = util.extend(new Node(), {
    constructor: Element,

    // as element

    getAttribute: function (name) {
        return this.hasAttribute(name) ? this.attribs[name] : null;
    },

    setAttribute: function (name, value) {
        this.attribs[name] = value;
    },

    removeAttribute: function (name) {
        delete this.attribs[name];
    },

    hasAttribute: function (name) {
        name = name && (this.namespaceURI === Namespaces.HTML ? name.toLowerCase() : name);
        return this.attribs.hasOwnProperty(name);
    },

    getAttributeNode: function (name) {
        return this.hasAttribute(name) ? new Attr(name, this.attribs[name]) : null;
    },

    setAttributeNode: function (attr) {
        var oldAttribute = this.getAttributeNode(attr.name);
        this.setAttribute(attr.name, attr.value);
        return oldAttribute;
    },

    removeAttributeNode: function (attr) {
        var oldAttribute = this.getAttributeNode(attr.name);
        this.removeAttribute(attr.name);
        return oldAttribute;
    },

    // closest: function () { /*TODO*/ },

    matches: function (selectors) {
        return cssSelect.is(this, selectors);
    },

    getElementsByTagName: function (tagName) {
        return this.querySelectorAll(tagName.toLowerCase());
    },

    getElementsByClassName: function (classNameList) {
        classNameList = classNameList.split(' ');

        var l = classNameList.length;
        return this.querySelectorAll('.' + classNameList[0]).filter(function (element) {
            for (var i = 1; i < l; i++) {
                if (classNameList[i] && element.classList.indexOf(classNameList[i]) < 0) {
                    return false;
                }
            }
            return true;
        });
    },

    // as parent node

    querySelector: function (selector) {
        return cssSelect.selectOne(selector, this) || null;
    },

    querySelectorAll: function (selector) {
        return cssSelect(selector, this);
    }
});


module.exports = Element;
