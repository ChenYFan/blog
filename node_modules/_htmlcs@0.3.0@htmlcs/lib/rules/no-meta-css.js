/**
 * @file rule: no-meta-css
 * @author chris<wfsr@foxmail.com>
 */

module.exports = {

    name: 'no-meta-css',

    desc: 'Classes should be semantic.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {

        var config = getCfg();

        if (!config) {
            return;
        }

        var MIX_VALUE_PATTERN = /[\d#>:%]+/g;
        var SPECIAL_PATTERN = /\(.+\)/g;
        var SPLITER_PATTERN = /\s*,\s*/;

        function reducer(map, name) {
            map[name] = true;
            return map;
        }

        var COLOR = 'red,green,blue,white,black,yellow,gray,silver,brown,sienna,orange,gold,ivory,indigo,purple,pink'
            .split(SPLITER_PATTERN)
            .reduce(reducer, {});

        var PROPERTY = 'left,right,center,middle,top,bottom,bold,width,height,size,margin,padding,clear,float'
            .split(SPLITER_PATTERN)
            .reduce(reducer, {});


        var map = {};
        var keys = {};

        var minLength = (config.minlen | 0) || 3;
        var threshold = (config.threshold | 0) || 3;
        function mark(name, pos) {
            var current = map[name] = map[name] || {value: .9, items: []};

            var value = .1;
            var item = {pos: pos};

            if (current.value < 1) {
                if (COLOR[name] || PROPERTY[name]) {
                    value += 1;
                }

                var match = name.match(MIX_VALUE_PATTERN);
                if (match) {
                    value += match.length * 1.5;
                }

                match = name.match(SPECIAL_PATTERN);
                if (match) {
                    value += match.length * 2;
                }

                var length = name.length;
                if (length <= minLength) {
                    value += 1 + (minLength - length) * .5;
                }
            }

            current.value += value;
            current.items.push(item);

            if (!keys[name] && current.value > threshold) {
                keys[name] = true;
            }
        }

        function report(name, item) {
            reporter.warn(item.pos, '045', 'Class name(' + name + ') should be semantic.');
        }

        parser.tokenizer.on('attribdata', function (value) {
            var name = parser._attribname.toLowerCase();

            if (name !== 'class') {
                return;
            }

            var pos = this._sectionStart;
            value.split(/\s+/).forEach(function (name) {
                mark(name, pos, value);
            });

        });

        parser.on('end', function () {
            Object.keys(keys).forEach(function (key) {
                map[key].items.forEach(function (item) {
                    report(key, item);
                });
            });
        });
    }

};
