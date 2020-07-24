/**
 * @file rule: indent-char
 * @author nighca<nighca@live.cn>
 */

module.exports = {

    name: 'indent-char',

    desc: 'Line should indent with space(2/4) or tab.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {
        var cfgMap = {
            'tab': {
                name: 'tab',
                pattern: /^\t*(?=\S|$)/
            },
            'space-2': {
                name: '2 spaces',
                pattern: /^(  )*(?=\S|$)/
            },
            'space-4': {
                name: '4 spaces',
                pattern: /^(    )*(?=\S|$)/
            }
        };

        // exclude-tags
        var excludeTags = ['script', 'style'];

        parser.on('text', function (data) {
            var cfg = getCfg();
            if (!cfg) {
                return;
            }

            // if should be excluded
            if (excludeTags.indexOf(this._stack[this._stack.length - 1]) >= 0) {
                return;
            }

            // get pattern ( use space-4 as default )
            cfg = cfgMap[cfg] || cfgMap['space-4'];

            var pos = this.startIndex;
            data.split('\n').forEach(function (line, i) {
                // discard the first line cause it does not start from \n,
                if (i && !cfg.pattern.test(line)) {
                    reporter.warn(
                        pos,
                        '032',
                        'Line should indent with ' + cfg.name + '.'
                    );
                }

                pos += line.length + 1;
            });
        });
    },

    format: function (getCfg, document, options) {
        switch (getCfg()) {
            case 'tab':
                options['indent-char'] = 'tab';
                break;
            case 'space-2':
                options['indent-char'] = 'space';
                options['indent-size'] = 2;
                break;
            case 'space-4':
                options['indent-char'] = 'space';
                options['indent-size'] = 4;
                break;
        }
    }

};
