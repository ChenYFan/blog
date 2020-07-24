/**
 * @file operation of rules
 * @author nighca<nighca@live.cn>
 */

var util = require('./util');

var rules = [];

/**
 * class Rule
 *
 * @constructor
 * @param {Object} rule - config info for rule
 */
var Rule = function (rule) {
    util.extend(this, rule);
};

/**
 * Target of rule: "document" / "parser".
 * @type {string}
 */
Rule.prototype.target = 'document';

var rulesManager = {

    /**
     * Init rules.
     *
     * @return {Object} rules export
     */
    init: function () {
        var self = this;

        rules = [];

        // pre-set rules
        [
            require('./rules/asset-type'),
            require('./rules/attr-lowercase'),
            require('./rules/attr-no-duplication'),
            require('./rules/attr-value-double-quotes'),
            require('./rules/bool-attribute-value'),
            require('./rules/button-name'),
            require('./rules/button-type'),
            require('./rules/charset'),
            require('./rules/css-in-head'),
            require('./rules/doctype'),
            require('./rules/html-lang'),
            require('./rules/id-class-ad-disabled'),
            require('./rules/ie-edge'),
            require('./rules/img-alt'),
            require('./rules/img-src'),
            require('./rules/img-title'),
            require('./rules/img-width-height'),
            require('./rules/indent-char'),
            require('./rules/lowercase-class-with-hyphen'),
            require('./rules/lowercase-id-with-hyphen'),
            require('./rules/nest'),
            require('./rules/rel-stylesheet'),
            require('./rules/script-content'),
            require('./rules/script-in-tail'),
            require('./rules/self-close'),
            require('./rules/spec-char-escape'),
            require('./rules/style-content'),
            require('./rules/style-disabled'),
            require('./rules/tag-pair'),
            require('./rules/tagname-lowercase'),
            require('./rules/title-required'),
            require('./rules/unique-id'),
            require('./rules/no-duplication-id-and-name'),
            require('./rules/viewport'),
            require('./rules/label-for-input'),
            require('./rules/no-meta-css'),
            require('./rules/no-hook-class'),
            require('./rules/max-len'),
            require('./rules/no-bom')
        ].forEach(function (rule) {
            self.add(rule);
        });

        return this;
    },

    /**
     * Add a rule.
     *
     * @param {Object} rule - rule to add
     * @return {number} current rules num
     */
    add: function (rule) {
        rule = new Rule(rule);
        return rules.push(rule);
    },

    /**
     * Get list of rule for given target.
     *
     * @param {string=} target - given target ("document" / "parser")
     * @return {Array} rule list
     */
    list: function (target) {
        if (!target) {
            return rules.slice();
        }

        return rules.filter(function (rule) {
            return rule.target === target;
        });
    },

    /**
     * Collect inline-config info during parse.
     *
     * @param {Parser} parser - the HTML parser, instance of htmlparser2.Parser
     * @return {Object} inline-config info, including reporter config & rules config
     */
    collectInlineCfg: function (parser) {
        var rulesCfg = {};
        var reporterCfg = {};

        var collect = function (ruleName, content, target) {
            (target[ruleName] = target[ruleName] || []).push({
                index: parser.startIndex,
                content: content
            });
        };

        parser.on('comment', function (comment) {
            var commentInfo = util.extractCommentInfo(comment);

            // if no valid info
            if (!commentInfo) {
                return;
            }

            var operation = commentInfo.operation;

            switch (operation) {

                case 'enable':
                case 'disable':
                    var targets = commentInfo.content;
                    var targetAll = !targets;

                    rules.forEach(function (rule) {
                        if (targetAll || targets.indexOf(rule.name) >= 0) {
                            collect(rule.name, operation, reporterCfg);
                        }
                    });
                    break;

                case 'config':
                    var cfg = commentInfo.content;
                    for (var ruleName in cfg) {
                        if (cfg.hasOwnProperty(ruleName)) {
                            collect(ruleName, cfg[ruleName], rulesCfg);
                        }
                    }

                default:
            }
        });

        return {
            rules: rulesCfg,
            reporter: reporterCfg
        };
    },

    /**
     * Do lint parser.
     *
     * @param {Parser} parser - the HTML parser, instance of htmlparser2.Parser
     * @param {Reporter} reporter - the reporter
     * @param {Object} cfg - config
     * @param {Object} inlineCfg - inline config
     * @param {string} code - target code
     * @return {Object} rules export
     */
    lintParser: function (parser, reporter, cfg, inlineCfg, code) {
        cfg = util.extend({}, cfg);

        // lint parser
        this.list('parser').forEach(function (rule) {
            var getCfg = function (index, ruleName) {
                index = index == null ? parser.startIndex : index;
                ruleName = ruleName == null ? rule.name : ruleName;

                return util.getCfgByIndex(ruleName, index, inlineCfg, cfg);
            };

            rule.lint(
                getCfg,
                parser,
                reporter.bindRule(rule.name),
                code
            );
        });

        return this;
    },

    /**
     * Do lint document.
     *
     * @param {Node} document - the document node
     * @param {Reporter} reporter - the reporter
     * @param {Object} cfg - config
     * @param {Object} inlineCfg - inline config
     * @param {string} code - target code
     * @return {Object} rules export
     */
    lintDocument: function (document, reporter, cfg, inlineCfg, code) {
        cfg = util.extend({}, cfg);

        // lint document
        this.list('document').forEach(function (rule) {
            var getCfg = function (index, ruleName) {
                index = index == null ? -1 : (index.startIndex || index);
                ruleName = ruleName == null ? rule.name : ruleName;

                return util.getCfgByIndex(ruleName, index, inlineCfg, cfg);
            };

            try {
                rule.lint(
                    getCfg,
                    document,
                    reporter.bindRule(rule.name),
                    code
                );
            }
            catch (e) {}
        });

        return this;
    },

    /**
     * Do format document.
     *
     * @param {Node} document - the document node
     * @param {Object} cfg - config
     * @param {Object} inlineCfg - inline config
     * @param {Object} options - options for format
     * @return {Object} rules export
     */
    format: function (document, cfg, inlineCfg, options) {
        // format document
        rules.forEach(function (rule) {
            if (rule.format) {
                var getCfg = function (index, ruleName) {
                    index = index == null ? -1 : (index.startIndex || index);
                    ruleName = ruleName == null ? rule.name : ruleName;

                    return util.getCfgByIndex(ruleName, index, inlineCfg, cfg);
                };

                try {
                    rule.format(
                        getCfg,
                        document,
                        options
                    );
                }
                catch (e) {
                    console.warn('Error:', e.stack || e);
                }
            }
        });

        return this;
    }
};

rulesManager.init();

module.exports = rulesManager;
