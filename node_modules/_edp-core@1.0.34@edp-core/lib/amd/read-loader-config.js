/**
 * @file 根据模块Id获取模块的文件路径
 * @author errorrik[errorrik@gmail.com]
 */

/**
 * 从内容中读取loader配置信息
 *
 * @param {string} content 内容
 * @return {Object}
 */
module.exports = exports = function (content) {
    var outputInfo = {};
    var index = content.search(/(require\.config\(\s*\{)/);
    if (index < 0) {
        return;
    }

    index += RegExp.$1.length - 1;

    // 取文件内容
    outputInfo.content = content;

    // 取缩进层级
    var whitespace = 0;
    var startIndex = index;
    while (content[--startIndex] === ' ') {
        whitespace++;
    }
    outputInfo.indentBase = whitespace / 4 + 1;

    // 查找loader config串的开始和结束位置
    var len = content.length;
    var braceLevel = 0;
    outputInfo.fromIndex = index;
    do {
        switch (content[index]) {
            case '{':
                braceLevel++;
                break;
            case '}':
                braceLevel--;
                break;
        }

        index++;
    } while (braceLevel && index < len);
    outputInfo.toIndex = index;

    // 取配置数据
    content = content.slice(outputInfo.fromIndex, index);

    try {
        outputInfo.data = eval('(' + content + ')');  // jshint ignore:line
    }
    catch (ex) {
        outputInfo.data = null;
    }

    return outputInfo;
};
