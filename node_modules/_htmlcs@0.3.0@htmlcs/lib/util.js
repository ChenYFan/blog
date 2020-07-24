/**
 * @file util methods
 * @author nighca<nighca@live.cn>
 */

var emitter = require('events').EventEmitter.prototype;
var ElementType = require('domelementtype');
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Copy properties from src to target.
 *
 * @param {Object} target - target object
 * @param {?Object} src - src object
 * @return {Object} target object
 */
var extend = function (target, src) {
    for (var key in src) {
        if (hasOwnProperty.call(src, key)) {
            target[key] = src[key];
        }
    }
    return target;
};

/**
 * Define attributes for target object.
 *
 * @param {Object} target - target object
 * @param {Object} attributes - attributes
 * @return {Object} target object
 */
var extendAttribute = function (target, attributes) {
    for (var name in attributes) {
        if (attributes.hasOwnProperty(name)) {
            Object.defineProperty(target, name, attributes[name]);
        }
    }
    return target;
};

/**
 * Make given method result-cachable.
 *
 * @param {Function} getter - given method
 * @return {Function} result method which caches result automatically
 * @property {Function} clear - clear cache
 */
var cachable = function (getter) {
    var storage = {};

    var get = function (key, refresh) {
        storage[key] = (refresh || !(storage.hasOwnProperty(key))) ? getter(key, refresh) : storage[key];
        return storage[key];
    };

    var clear = function () {
        storage = {};
    };

    return extend(get, {clear: clear});
};

/**
 * The position info.
 *
 * @typedef {Object} Position
 * @property {number} line - line number
 * @property {number} column - column number
 */

/**
 * Get position (line & column) in or a position method for given content.
 *
 * @param {string} content - given content
 * @param {number=} index - target index
 * @return {Position|Function} position method / position info
 */
var getPosition = function (content, index) {
    var start = 0;
    var line = 0;
    var column = 0;

    // the position method (index -> line & column)
    // indexes should be passed with pos-low-to-high
    var position = function (index) {
        for (; start < index; start++) {
            column++;

            if (content[start] === '\n') {
                column = 0;
                line++;
            }
        }

        return {
            line: line + 1,
            column: column + 1
        };
    };

    return arguments.length > 1 ? position(index) : position;
};

/**
 * Extract config info from comment content.
 *
 * @param {string} comment - comment content
 * @return {?Object} config info
 */
var extractCommentInfo = function (comment) {
    // htmlcs-disable img-alt, attr-value-double-quotes
    var ablePattern = /^[\s\n]*htmlcs-(\w+)(?:\s+([\w\-]+(?:,\s*[\w\-]+)*)?[\s\n]*)?$/;
    // htmlcs "img-alt": false
    var configPattern = /^[\s\n]*htmlcs\s([\s\S]*)$/;

    var result;

    if (ablePattern.test(comment)) {
        result = ablePattern.exec(comment);

        return {
            operation: result[1],
            content: result[2] ? result[2].split(/\s*,\s*/g) : null
        };
    }

    if (configPattern.test(comment)) {
        result = configPattern.exec(comment)[1]
            .replace(/([a-zA-Z0-9\-\/]+):/g, '"$1":')
            .replace(/(\]|[0-9])\s+(?=")/, '$1,');

        try {
            result = JSON.parse('{' + result + '}');
            return {
                operation: 'config',
                content: result
            };
        }
        catch (e) {}
    }

    return null;
};

/**
 * Walk a tree (pre-order).
 *
 * @param {Object} root - the root node of the tree
 * @param {Function} handler - the handler
 * @param {string} childrenKey - key of children property
 */
var walk = function (root, handler, childrenKey) {
    handler(root);

    var list = root[childrenKey || 'children'];
    list && list.forEach(function (child) {
        walk(child, handler, childrenKey);
    });
};

var getInlineCfgByIndex = function (rule, index, inlineCfg, initial) {
    var result = initial;

    var cfgs = inlineCfg[rule];
    if (!cfgs) {
        return result;
    }

    for (var i = 0, l = cfgs.length; i < l; i++) {
        if (index >= 0 && cfgs[i].index > index) {
            break;
        }

        result = cfgs[i].content;
    }

    return result;
};

var getCfgByIndex = function (rule, index, inlineCfg, cfg) {
    return getInlineCfgByIndex(rule, index, inlineCfg, cfg[rule]);
};

/**
 * Make target emittable &
 * emit event "xxx" on target while target._cbs.onxxx called.
 *
 * @param {Object} target - the target
 * @param {Array} events - events need to emit
 * @return {Object} target itself
 */
var emittable = function (target, events) {
    var cbs = target._cbs;

    // make target emittable
    extend(target, emitter);

    // wrap methods based on given event list
    events.forEach(function (event) {

        // emit "xxx" on target while method "onxxx" in cbs called
        var methodName = 'on' + event;
        var method = cbs[methodName];

        cbs[methodName] = function () {
            var args = Array.prototype.slice.call(arguments);
            target.emit.apply(target, [event].concat(args));
            return method ? method.apply(this, args) : null;
        };
    });

    return target;
};

module.exports = {
    nodeType: ElementType,
    isElement: ElementType.isTag,
    extend: extend,
    extendAttribute: extendAttribute,
    cachable: cachable,
    getPosition: getPosition,
    extractCommentInfo: extractCommentInfo,
    walk: walk,
    getInlineCfgByIndex: getInlineCfgByIndex,
    getCfgByIndex: getCfgByIndex,
    emittable: emittable
};
