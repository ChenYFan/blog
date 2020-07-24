/**
 * @file util methods
 * @author nighca<nighca@live.cn>
 */

// copy properties from src to target
var extend = function (target, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) {
            target[key] = src[key];
        }
    }
    return target;
};

// 'a${x}c', {x:'b'} -> 'abc'
var format = function (template, vars) {
    return template.replace(/\$\{([^\{\}]*)\}/g, function (_, name) {
        var value = vars[name.trim()];
        return value == null ? '' : value + '';
    });
};

// repeat a string in given times
var repeat = function (str, num) {
    return Array.prototype.join.call({length: num + 1}, str);
};

// generate indent content
var indent = function (level, type, size) {
    return repeat(type === 'tab' ? '\t' : repeat(' ', size), level);
};

// is in an array
var isIn = function (obj, arr) {
    return arr.indexOf(obj) >= 0;
};

module.exports = {
    extend: extend,
    format: format,
    repeat: repeat,
    indent: indent,
    isIn: isIn
};
