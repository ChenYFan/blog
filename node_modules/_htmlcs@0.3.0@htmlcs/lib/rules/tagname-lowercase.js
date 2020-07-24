/**
 * @file rule: tagname-lowercase
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'tagname-lowercase',

    desc: 'Tagname must be lowercase.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {
        var tokenizer = parser.tokenizer;

        // check & report
        var check = function (name) {
            if (!getCfg()) {
                return;
            }

            if (name !== name.toLowerCase()) {
                reporter.warn(
                    this._sectionStart,
                    '036',
                    'Tagname must be lowercase.'
                );
            }
        };

        tokenizer.on('opentagname', check);
        tokenizer.on('closetag', check);
    }

};
