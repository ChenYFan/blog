/**
 * @file 文件或者Module Id过滤的操作
 * @author leeight(liyubei@baidu.com)
 */

var path = require('./path');

function xsatisfy(pattern, item) {
    return path.satisfy(item, pattern);
}

/**
 * @see {https://github.com/ecomfe/edp/issues/187}
 *
 * new MyProcessor({
 *   files: [
 *    'dep/** /*.js',
 *    '!dep/esui/** /extension/*.js',
 *    'dep/esui/** /extension/TableEdit.js'
 *   ]
 * })
 *
 * 1. 对于include的pattern来说，从allCandidates选择，然后放到结果的集合里面去
 * 2. 对于exclude的pattern来说，从结果的集合里面排除.
 *
 * @param {Array.<string>} patterns files的pattern.
 * @param {Array.<*>} allCandidates 所有的待选项.
 * @param {(function(string, *):boolean)=} comparator 用来判断是否符合要求的函数，如果符合返回true.
 *
 * @return {Array.<*>}
 */
exports.filter = function (patterns, allCandidates, comparator) {
    var result = [];
    comparator = comparator || xsatisfy;

    for (var i = 0; i < patterns.length; i++) {
        var pattern = patterns[i];
        if (pattern[0] === '!') {
            pattern = pattern.substring(1);
            // exclude pattern
            var len = result.length;
            while (len--) {
                if (true === comparator(pattern, result[len])) {
                    result.splice(len, 1);
                }
            }
        }

        /* jshint ignore:start */
        else {
            // include pattern
            allCandidates.forEach(function (item) {
                if (result.indexOf(item) !== -1) {
                    return;
                }

                if (true === comparator(pattern, item)) {
                    result.push(item);
                }

            });
        }
        /* jshint ignore:end */
    }

    return result;
};

/**
 * @param {string} item 需要检查的项目.
 * @param {Array.<string>} patterns pattern的集合.
 * @return {boolean}
 */
exports.match = function (item, patterns) {
    if (patterns.length <= 0) {
        return false;
    }

    for (var i = 0; i < patterns.length; i++) {
        if (xsatisfy(patterns[i], item)) {
            return true;
        }
    }

    return false;
};

/**
 * 调用glob.sync过滤掉一批文件
 * 支持exclude的写法，类似 edp.glob.filter
 *
 * @param {string|Array.<string>} patterns 需要匹配的Pattern.
 * @param {Object=} options 一些额外的配置.
 */
exports.sync = function (patterns, options) {
    var glob = require('glob');
    var fs = require('fs');

    options = options || {};

    var cwd = options.cwd || process.cwd();

    function filter(candidates) {
        var path = require('path');
        return candidates.filter(function (item) {
            var stat = fs.statSync(path.join(cwd, item));
            return !stat.isDirectory();
        });
    }

    var allCandidates = null;
    if (typeof patterns === 'string') {
        allCandidates = glob.sync(patterns, options);
    }
    else if (Array.isArray(patterns)) {
        if (!patterns.length) {
            return [];
        }

        allCandidates = glob.sync(patterns[0], options);
        if (patterns.length > 1) {
            for (var i = 1; i < patterns.length; i++) {
                var pattern = patterns[i];
                if (pattern[0] === '!') {
                    pattern = pattern.substring(1);
                    var len = allCandidates.length;
                    while (len--) {
                        // edp.path.satisfy就是基于minimatch的
                        if (xsatisfy(pattern, allCandidates[len])) {
                            allCandidates.splice(len, 1);
                        }
                    }
                }
                else {
                    allCandidates.push.apply(allCandidates, glob.sync(pattern, options));
                }
            }
        }
    }

    if (options.nodir === true) {
        return filter(allCandidates);
    }

    return allCandidates;
};
