/**
 * @file class Reporter
 * @author nighca<nighca@live.cn>
 */

var util = require('./util');

/**
 * class Reporter
 *
 * @constructor
 * @param {Object} options - options for reporter
 */
function Reporter(options) {
    options = options || {};

    this._options = options;
    this._results = options.results || [];
    this._rule = options.rule || null;
    this._cfg = options.cfg || null;
}

/**
 * Config reporter with config info.
 *
 * @param {Object} cfg - reporter config info
 * @return {Reporter} new bound reporter
 */
Reporter.prototype.config = function (cfg) {
    this._cfg = cfg;
    return this;
};

/**
 * Create a new reporter bound with given rule (use as default rule).
 *
 * @param {string} rule - name of rule
 * @return {Reporter} new bound reporter
 */
Reporter.prototype.bindRule = function (rule) {
    return new Reporter({
        results: this._results,
        rule: rule,
        cfg: this._cfg
    });
};

/**
 * The report item.
 *
 * @typedef {Object} Report
 * @property {string} type - typeof the message, one of "info", "warn", "error"
 * @property {number} pos - position index (in code content) of report
 * @property {string} code - code of the report
 * @property {string} message - message of the report
 * @property {string} rule - name of the report's rule
 */

/**
 * Save given report.
 *
 * @param {Object} item - given report item
 * @return {Reporter} reporter itself
 */
Reporter.prototype.report = function (item) {
    item = util.extend({
        type: 'WARN',
        pos: 0,
        code: null,
        message: '',
        rule: this._rule
    }, item);

    if (this._cfg) {
        var cfg = util.getInlineCfgByIndex(item.rule, item.pos, this._cfg, 'enable');
        if (cfg === 'disable') {
            return this;
        }
    }

    this._results.push(item);

    return this;
};

/**
 * Report with type "info"
 *
 * @name Reporter.prototype.info
 * @type Function
 * @param {number} pos - position index in code content
 * @param {string} code - code of the report
 * @param {string} message - message of the report
 * @param {string} rule - name of the report's rule
 * @return {Reporter} reporter itself
 */

 /**
 * Report with type "warn"
 *
 * @name Reporter.prototype.warn
 * @type Function
 * @param {number} pos - position index in code content
 * @param {string} code - code of the report
 * @param {string} message - message of the report
 * @param {string} rule - name of the report's rule
 * @return {Reporter} reporter itself
 */

 /**
 * Report with type "error"
 *
 * @name Reporter.prototype.error
 * @type Function
 * @param {number} pos - position index in code content
 * @param {string} code - code of the report
 * @param {string} message - message of the report
 * @param {string} rule - name of the report's rule
 * @return {Reporter} reporter itself
 */

['info', 'warn', 'error'].forEach(function (type) {
    Reporter.prototype[type] = function (pos, code, message, rule) {
        var item = {
            type: type.toUpperCase(),
            pos: pos,
            code: code,
            message: message
        };

        if (rule) {
            item.rule = rule;
        }

        return this.report(item);
    };
});

/**
 * Get result report list.
 *
 * @return {Array.Report} report list
 */
Reporter.prototype.result = function () {
    this._results.sort(function (a, b) {
        return a.pos - b.pos;
    });

    return this._results;
};

/**
 * Get result report num.
 *
 * @return {number} report num
 */
Reporter.prototype.num = function () {
    return this._results.length;
};

module.exports = Reporter;
