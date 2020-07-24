/**
 * @file rule: max-len
 * @author chris<wfsr@foxmail.com>
 */

module.exports = {

    name: 'max-len',

    desc: 'Each length of line should be less then the value specified.',

    target: 'parser',

    lint: function (getCfg, parser, reporter, code) {

        var max = getCfg() | 0;
        if (!max) {
            return;
        }

        var map = {};
        code.split(/\n/).reduce(function (pos, line) {
            pos.line++;

            var len = line.length;
            if (len > max) {
                var item = [];
                item.index = pos.index;
                map[pos.line] = item;
            }

            pos.index += len + 1;

            return pos;
        }, {index: 0, line: 0});

        var line = 1;

        function push(type, context) {
            var item = map[line];
            if (!item) {
                return;
            }

            var from = context.startIndex;
            var to = context.endIndex;
            var index = item.index + max;

            if (index <= from || index > from && index <= to) {
                var last = item[item.length - 1];
                if (!last || last.from !== from) {
                    item.push({type: type, from: from, to: to});
                }
            }
        }

        parser.on('comment', function (data) {
            push('#comment', this);
            line += (data.match(/\n/g) || '').length;
        });

        parser.on('opentag', function (name) {
            push(name, this);
        });

        parser.on('closetag', function (name) {
            push(name, this);
        });

        parser.on('text', function (data) {
            line += (data.match(/\n/g) || '').length;
        });

        parser.on('end', function () {
            Object.keys(map).forEach(function (line) {
                map[line].forEach(function (node) {
                    reporter.warn(
                        node.from,
                        '048',
                        'Node `' + node.type + '` exceeds the maximum line length of ' + max + '.'
                    );
                });
            });
        });

    }

};
