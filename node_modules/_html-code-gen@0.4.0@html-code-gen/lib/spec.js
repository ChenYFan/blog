/**
 * @file some spec info
 * @author nighca<nighca@live.cn>
 */

var nodeType = {
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

// http://www.w3.org/TR/html5/syntax.html#elements-0
var tagTypeMap = {
    'void': [
        'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link',
        'meta', 'param', 'source', 'track', 'wbr'
    ],
    'raw-text': ['script', 'style'],
    'escapable-raw-text': ['textarea', 'title'],
    'inline': [
        'a', 'span', 'img', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd',
        'var', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b',
        'big', 'small', 'u', 's', 'strike', 'font', 'ins', 'del', 'pre', 'address',
        'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title'
    ],
    'structural': ['pre', 'textarea', 'code']
};

var booleanAttributes = [
    'allowfullscreen', 'async', 'autofocus', 'autoplay',
    'checked', 'controls', 'default', 'defer',
    'disabled', 'formnovalidate', 'hidden', 'ismap',
    'itemscope', 'loop', 'multiple', 'muted', 'novalidate',
    'open', 'readonly', 'required', 'reversed',
    'scoped', 'seamless', 'selected', 'sortable', 'typemustmatch'
];

module.exports = {
    nodeType: nodeType,
    tagTypeMap: tagTypeMap,
    booleanAttributes: booleanAttributes
};
