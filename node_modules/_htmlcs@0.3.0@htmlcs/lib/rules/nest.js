/**
 * @file rule: nest
 * @author nighca<nighca@live.cn>
 */

var util = require('../util');
var nestRule = require('html-nest-rule');

module.exports = {

    name: 'nest',

    desc: 'Elements should be nested abiding by specific rules.',

    lint: function (getCfg, document, reporter) {
        util.walk(document.documentElement, function (element) {
            if (!getCfg(element)) {
                return;
            }

            var rule = nestRule.from(element);
            if (!rule) {
                return;
            }

            var report = function (role, code, result) {
                var target = result.target || element;
                var message = role + ' of '
                    + '<' + element.tagName.toLowerCase() + '>'
                    + ' here should be '
                    + result.expect
                    + (
                        result.got
                        ? (', while got ' + result.got + '.')
                        : '.'
                    );

                reporter.warn(
                    target.startIndex,
                    code,
                    message
                );
            };

            rule.validateContent(element).forEach(function (result) {
                report('Content', '041', result);
            });

            rule.validateContext(element).forEach(function (result) {
                report('Context', '042', result);
            });
        });
    }

};
