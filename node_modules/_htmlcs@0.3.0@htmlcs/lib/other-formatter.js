/**
 * @file formatters for non-html content (js, css)
 * @author nighca<nighca@live.cn>
 */

var jformatter = require('jformatter');
var cssbeautify = require('cssbeautify');

/**
 * 自定义formatter方法格式
 *
 * formatter
 * @param {string} content 标签内部的内容
 * @param {Node} node 标签节点
 * @param {Object} opt 当前format配置
 * @param {Object} helper 辅助方法(具体格式见下)
 * @return {string} format后的结果
 *
 * helper
 * @property {function} indent 为内容添加缩进，具体长度取决于当前节点层级及format配置(具体格式见下)
 * @property {function} trim 移除内容首尾的空行(无内容或仅含\s\t)(具体格式见下)
 *
 * indent
 * @param {string} content 原始内容
 * @return {string} 添加缩进后的结果
 *
 * trim
 * @param {string} content 原始内容
 * @return {string} 移除内容首尾空行后的结果
 */

module.exports = {

    script: function (content, node, opt, helper) {
        var type = node.getAttribute('type');

        // javascript content
        if (!type || type === 'text/javascript') {
            var formatted = jformatter.format(content);

            // add indent
            content = helper.indent(formatted);
        }

        return helper.trim(content);
    },

    style: function (content, node, opt, helper) {
        var formatted = cssbeautify(content);

        // add indent
        content = helper.indent(formatted);

        return helper.trim(content);
    }

};
