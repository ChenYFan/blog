/**
 * @file rule: attr-lowercase
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'attr-lowercase',

    desc: 'Attribute name must be lowercase.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {
        parser.tokenizer.on('attribname', function (name) {
            if (!getCfg()) {
                return;
            }

            if (name !== name.toLowerCase()) {
                reporter.warn(
                    this._sectionStart,
                    '029',
                    'Attribute name must be lowercase.'
                );
            }
        });
    }

};
