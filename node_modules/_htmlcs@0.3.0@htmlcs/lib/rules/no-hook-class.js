/**
 * @file rule: no-hook-class
 * @author chris<wfsr@foxmail.com>
 */

module.exports = {

    name: 'no-hook-class',

    desc: 'Classes should be not hooked for script.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {

        var config = getCfg();

        if (!config) {
            return;
        }

        var regTest = /^\/.*\/$/;
        var keys = build(config.keys);

        function build(keys) {
            return (Array.isArray(keys) ? keys : [keys]).map(function (key) {
                return regTest.test(key) ? new RegExp(key.slice(1, -1)) : key;
            });
        }

        function isHook(name) {
            return keys.some(function (key) {
                return key === name || name.match(key);
            });
        }

        function report(name, pos) {
            reporter.warn(pos, '047', 'Class name(' + name + ') should be not hooked for script.');
        }

        parser.tokenizer.on('attribdata', function (value) {
            var attribute = parser._attribname.toLowerCase();

            if (attribute !== 'class') {
                return;
            }

            var newConfig = getCfg();
            if (!newConfig) {
                return;
            }

            if (newConfig.keys !== config.keys) {
                config = newConfig;
                keys = build(newConfig.keys);
            }

            var pos = this._sectionStart;
            value.split(/\s+/).forEach(function (name) {
                if (isHook(name)) {
                    report(name, pos);
                }
            });

        });
    }

};
