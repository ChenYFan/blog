/**
 * @file 根据模块Id获取模块的文件路径
 * @author errorrik[errorrik@gmail.com]
 */

/**
 * 将相对的module id转换成绝对id
 *
 * @param {string} id 要转换的id
 * @param {string} baseId 基础id
 * @return {string}
 */
module.exports = exports = function (id, baseId) {
    if (/^\.{1,2}/.test(id)) {
        var basePath = baseId.split('/');
        var namePath = id.split('/');
        var baseLen = basePath.length - 1;
        var nameLen = namePath.length;
        var cutBaseTerms = 0;
        var cutNameTerms = 0;

        pathLoop: for (var i = 0; i < nameLen; i++) {
            var term = namePath[i];
            switch (term) {
                case '..':
                    if (cutBaseTerms < baseLen) {
                        cutBaseTerms++;
                        cutNameTerms++;
                    }
                    else {
                        break pathLoop;
                    }
                    break;
                case '.':
                    cutNameTerms++;
                    break;
                default:
                    break pathLoop;
            }
        }

        basePath.length = baseLen - cutBaseTerms;
        namePath = namePath.slice(cutNameTerms);

        basePath.push.apply(basePath, namePath);
        return basePath.join('/');
    }

    return id;
};
