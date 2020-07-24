/**
 * @file rule: bool-attribute-value
 * @author nighca<nighca@live.cn>
 */

var booleanAttributes = [
    'allowfullscreen', 'async', 'autofocus', 'autoplay',
    'checked', 'controls', 'default', 'defer',
    'disabled', 'formnovalidate', 'hidden', 'ismap',
    'itemscope', 'loop', 'multiple', 'muted', 'novalidate',
    'open', 'readonly', 'required', 'reversed',
    'scoped', 'seamless', 'selected', 'sortable', 'typemustmatch'
];

module.exports = {

    name: 'bool-attribute-value',

    desc: 'Value of boolean attributes should not be set.',

    lint: function (getCfg, document, reporter) {
        document.querySelectorAll('*').forEach(function (element) {
            if (!getCfg(element)) {
                return;
            }

            booleanAttributes.forEach(function (attribute) {
                if (element.getAttribute(attribute)) {
                    reporter.warn(
                        element.startIndex,
                        '003',
                        'Value of boolean attribute "' + attribute + '" should not be set.'
                    );
                }
            });
        });
    },

    format: function (getCfg, document, options) {
        options['bool-attribute-value'] = getCfg() ? 'remove' : 'preserve';
    }

};
