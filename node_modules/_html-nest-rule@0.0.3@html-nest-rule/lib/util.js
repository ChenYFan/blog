/**
 * @file nest-rule-relative util methods
 * @author nighca<nighca@live.cn>
 */

var rules = require('./core');
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
 * Curry given method
 *
 * @param {Function} method - the given method
 * @param {?number} expects - expected num of arguments
 * @return {Function} curried method
 */
var curry = function (method, expects) {
    expects = arguments.length <= 1 ? method.length : expects;

    return function () {
        var given = arguments.length;
        if (given >= expects) {
            return method.apply(this, arguments);
        }

        var args = Array.prototype.slice.call(arguments);
        return curry(
            function () {
                return method.apply(
                    this,
                    args.concat(Array.prototype.slice.call(arguments))
                );
            },
            expects - given
        );
    };
};

/**
 * Oppose operation for curried methods
 *
 * @param {Function} method - the curried method
 * @return {Function} opposed method
 */
var not = function (method) {
    return function () {
        var ret = method.apply(this, arguments);
        return typeof ret === 'function'
            ? not(ret)
            : !ret;
    };
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

    (root[childrenKey || 'children'] || []).forEach(function (child) {
        walk(child, handler, childrenKey);
    });
};

/**
 * Get rule for given element.
 *
 * @param {Element} element - given element
 * @return {Object|undefined} corresponding rule
 */
var getRule = function (element) {
    return rules[element.tagName.toLowerCase()];
};

/**
 * Get categories of given element.
 *
 * @param {Element} element - given element
 * @return {Array.string} element categories
 */
var getCategories = function (element) {
    var rule = getRule(element);
    return rule
        ? rule.getCategories(element)
        : [];
};

/**
 * Get description for given element.
 *
 * @param {Element} element - given element
 * @return {string} element description
 */
var nodeInfo = function (element) {
    return '<' + element.tagName.toLowerCase() + '>';
};

/**
 * Get categories description of given element.
 *
 * @param {Element} element - given element
 * @return {string} element categories description
 */
var nodeCategoriesInfo = function (element) {
    var categories = getCategories(element);
    return nodeInfo(element)
        + ' ( '
        + (
            categories.length
            ? categories.join(' | ')
            : 'none'
        )
        + ' )';
};

/**
 * Get description for given element sequence.
 *
 * @param {Array.Element} sequence - given element sequence
 * @return {string} sequence description
 */
var sequenceInfo = function (sequence) {
    return '[ '
        + sequence.map(function (child) {
            return child.tagName.toLowerCase();
        }).join(', ')
        + ' ]';
};

/**
 * If given element matches given category(s).
 *
 * @param {string} expect - expected category(s)
 * @param {Element=} element - given element
 * @return {boolean|Function} if matches, or match method
 */
var isCategory = curry(function (expect, element) {
    if (!getRule(element)) {
        return true;
    }

    var expects = expect.split('|');
    var categories = getCategories(element);
    for (var i = 0, l = expects.length; i < l; i++) {
        if (categories.indexOf(expects[i]) >= 0) {
            return true;
        }
    }

    return false;
});

/**
 * If given element does not match given category.
 *
 * @param {string} expect - expected category
 * @param {Element=} element - given element
 * @return {boolean|Function} if does not matches, or match method
 */
var isNotCategory = not(isCategory);

/**
 * If given element matches given tag(s).
 *
 * @param {string} expect - expected tag(s)
 * @param {Element=} element - given element
 * @return {boolean|Function} if matches, or match method
 */
var isTag = curry(function (tag, element) {
    return element && element.tagName && tag.split('|').indexOf(element.tagName.toLowerCase()) >= 0;
});

/**
 * If given element does not match given tag(s).
 *
 * @param {string} expect - expected tag(s)
 * @param {Element=} element - given element
 * @return {boolean|Function} if does not match, or match method
 */
var isNotTag = not(isTag);

/**
 * Get ancestors of given element.
 *
 * @param {Element} element - given element
 * @return {Array.Element} ancestors of given element
 */
var getAncestors = function (element) {
    var ancestors = [];
    var parent;

    while (parent = element.parentElement) {
        ancestors.push(parent);
        element = parent;
    }

    return ancestors;
};

/**
 * Walk through all descendants of given element.
 *
 * @param {Element} element - given element
 * @param {Function} handler - handler to execute with each descendant
 */
var walkDescendants = function (element, handler) {
    walk(element, function (target) {
        if (target !== element) {
            handler(target);
        }
    });
};

/**
 * Validate categories of given elements.
 *
 * @param {string} expect - expected category
 * @param {Array.Element} elements - given elements
 * @return {Array} validate result
 */
var validateCategory = function (expect, elements) {
    return elements.reduce(function (result, child) {
        if (isNotCategory(expect, child)) {
            result.push({
                expect: expect,
                got: nodeCategoriesInfo(child),
                target: child
            });
        }
        return result;
    }, []);
};

/**
 * Validate children sequence of given element.
 *
 * @param {Object} expect - expected sequence info
 * @param {Array} expect.sequence - expected sequence
 * @param {string} expect.desc - description for expected sequence
 * @param {Function=} expect.filter - method for filter before validate
 * @param {Element} element - given element
 * @return {Array} validate result
 */
var validateChildrenSequence = function (expect, element) {
    var children = element.children.slice();

    if (expect.filter) {
        children = children.filter(expect.filter);
    }

    var createElementValidator = function (expects) {
        expects = expects.split('|');

        return function (element) {
            return element && expects.reduce(function (valid, expect) {
                var check = isTag;
                if (/^category\:/.test(expect)) {
                    expect = expect.slice(9);
                    check = isCategory;
                }
                return valid || check(expect, element);
            }, false);
        };
    };

    var unexpect = function (unexpected) {
        return [
            {
                expect: expect.desc,
                got: sequenceInfo(element.children),
                target: element
            }
        ];
    };

    for (var i = 0, l = expect.sequence.length, expectInfo, validate, num; i < l; i++) {
        expectInfo = expect.sequence[i];

        validate = typeof expectInfo[0] === 'function'
            ? expectInfo[0]
            : createElementValidator(expectInfo[0]);

        num = expectInfo[1];

        switch (num) {

            // zero or one
            case '?':
                if (validate(children[0])) {
                    children.shift();
                }
                break;

            // zero or more
            case '*':
                while (validate(children[0])) {
                    children.shift();
                }
                break;

            // one or more
            case '+':
                if (!validate(children[0])) {
                    return unexpect(children[0]);
                }

                do {
                    children.shift();
                } while (validate(children[0]));
                break;

            // exact num
            default:
                while (num--) {
                    if (!validate(children[0])) {
                        return unexpect(children[0]);
                    }
                    children.shift();
                }
                break;
        }
    }

    return children.length ? unexpect(children[0]) : [];
};

var TRANSPARENT_TAGS = {
    'audio': 1,
    'video': 1,
    'a': 1,
    'del': 1,
    'ins': 1,
    'map': 1,
    'object': 1
};

function isTransparentContentModel(element) {
    var tagName = element.tagName;
    return tagName && TRANSPARENT_TAGS[tagName.toLowerCase()] ;
}

function getContentModelParent(element) {

    while (element.parentElement) {

        if (!isTransparentContentModel(element.parentElement)) {
            return element.parentElement;
        }

        element = element.parentElement;

    }

    return null;

}

module.exports = {
    extend: extend,
    curry: curry,
    not: not,
    walk: walk,
    getRule: getRule,
    getCategories: getCategories,
    nodeInfo: nodeInfo,
    nodeCategoriesInfo: nodeCategoriesInfo,
    sequenceInfo: sequenceInfo,
    isCategory: isCategory,
    isNotCategory: isNotCategory,
    isTag: isTag,
    isNotTag: isNotTag,
    getAncestors: getAncestors,
    walkDescendants: walkDescendants,
    validateCategory: validateCategory,
    validateChildrenSequence: validateChildrenSequence,
    getContentModelParent: getContentModelParent
};
