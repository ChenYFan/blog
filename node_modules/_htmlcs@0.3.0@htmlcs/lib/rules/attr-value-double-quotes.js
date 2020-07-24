/**
 * @file rule: attr-value-double-quotes
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'attr-value-double-quotes',

    desc: 'Attribute value must be closed by double quotes.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {
        parser.tokenizer.on('attribname', function (name) {
            if (!getCfg()) {
                return;
            }

            var buffer = this._buffer;
            var index = this._index;

            // character after attribute name should be '='
            // ( get rid of boolean attribute )
            // and character starting attribute value should be '"'
            if (
                buffer[index] === '='
                && buffer[index + 1] !== '"'
            ) {
                reporter.warn(
                    index + 1,
                    '028',
                    'Attribute value must be closed by double quotes.'
                );
            }
        });
    }

};
