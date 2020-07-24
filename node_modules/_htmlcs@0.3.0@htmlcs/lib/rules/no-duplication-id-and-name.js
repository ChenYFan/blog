/**
 * @file rule: no-duplication-id-and-name
 * @author chris<wfsr@foxmail.com>
 */

module.exports = {

    name: 'no-duplication-id-and-name',

    desc: 'Element\'s id and name should be unique in page.',

    target: 'parser',

    lint: function (getCfg, parser, reporter) {

        if (!getCfg()) {
            return;
        }

        var stack = [];
        parser.tokenizer.on('opentagname', function () {
            stack.push({});
        });

        parser.tokenizer.on('attribdata', function (value) {
            var name = parser._attribname.toLowerCase();

            if (name !== 'id' && name !== 'name') {
                return;
            }

            var tag = stack[stack.length - 1];
            tag[name] = {type: name, value: value, pos: this._sectionStart};
        });

        var idMap = {};
        var nameMap = {};
        parser.tokenizer.on('opentagend', function () {
            var el = stack.pop();

            var id = el.id;
            var name = el.name;

            var idValue = id && id.value;
            var nameValue = name && name.value;

            if (name && !nameMap[nameValue]) {
                nameMap[nameValue] = name;
            }

            if (id && idValue !== nameValue) {
                idMap[idValue] = idMap[idValue] || [];
                idMap[idValue].push(id);
            }
        });

        function getMessage(item) {
            return ''
                + 'Expected id and name to be unique in page but found duplication('
                + item.value
                + ').';
        }

        parser.on('end', function () {
            stack.length = 0;

            Object.keys(nameMap).forEach(function (key) {
                if (!idMap[key]) {
                    return;
                }

                reporter.warn(nameMap[key].pos, '043', getMessage(nameMap[key]));

                idMap[key].forEach(function (item) {
                    reporter.warn(item.pos, '043', getMessage(item));
                });
            });
        });
    }

};
