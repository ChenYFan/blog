/**
 * @file rule: spec-char-escape
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'spec-char-escape',

    desc: 'Special characters must be escaped..',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {
        var specialChars = ['<', '>'];

        // exclude-tags
        var excludeTags = ['script', 'style'];

        parser.on('text', function (data) {
            if (!getCfg()) {
                return;
            }

            var currentTag = this._stack[this._stack.length - 1];

            // if should be excluded
            if (excludeTags.indexOf(currentTag) >= 0) {
                return;
            }

            // check for special chars
            for (var i = 0, l = data.length; i < l; i++) {
                if (specialChars.indexOf(data[i]) >= 0) {
                    reporter.warn(
                        this.startIndex + i,
                        '033',
                        'Special characters must be escaped.'
                    );
                }
            }
        });
    }

};
