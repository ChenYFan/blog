/**
 * @file amd相关的一些常用函数
 * @author errorrik(errorrik@gmail.com)
 */

/**
 * @param {string} code js代码.
 * @return {*}
 */
exports.getAst = function (code) {
    var ast = null;

    try {
        ast = require('esprima').parse(code);
    }
    catch (ex) {
        return null;
    }

    return ast;
};

/**
 * @param {Object} ast 模块代码的ast
 * @return {Object|Array} 模块信息，或模块信息数组。
 *                        每个模块信息包含id, dependencies, factoryAst, actualDependencies
 */
exports.analyseModule = function (ast) {
    return require('./amd/analyse-module')(ast);
};

/**
 * 获取module文件路径
 *
 * @param {string} moduleId module id
 * @param {string} moduleConfigFile module配置文件路径
 * @param {Object=} moduleConfig module.conf的内容
 * @return {string}
 */
exports.getModuleFile = function (moduleId, moduleConfigFile, moduleConfig) {
    return require('./amd/get-module-file')(moduleId, moduleConfigFile, moduleConfig);
};

/**
 * 获取项目里面所有的module ids.
 * 希望module.conf里面的内容是正确的，否则build的时候就可能出错
 *
 * @param {string} moduleConfigFile 项目的module.conf路径.
 * @param {string=} dir 指定的目录，没有指定的话，默认扫描module.conf里面的配置的目录.
 * @return {Array.<string>}
 */
exports.getAllModules = function (moduleConfigFile, dir) {
    return require('./amd/get-all-modules')(moduleConfigFile, dir);
};

/**
 * 获取module id
 *
 * @param {string} moduleFile module文件路径
 * @param {string} moduleConfigFile module配置文件路径
 * @return {Array.<string>}
 */
exports.getModuleId = function (moduleFile, moduleConfigFile) {
    return require('./amd/get-module-id')(moduleFile, moduleConfigFile);
};

/**
 * 将相对的module id转换成绝对id
 *
 * @param {string} id 要转换的id
 * @param {string} baseId 基础id
 * @return {string}
 */
exports.resolveModuleId = function (id, baseId) {
    return require('./amd/resolve-module-id')(id, baseId);
};

/**
 * 从内容中读取loader配置信息
 *
 * @param {string} content 内容
 * @return {Object}
 */
exports.readLoaderConfig = function (content) {
    return require('./amd/read-loader-config')(content);
};

/**
 * 根据moduleId计算它的文件路径.
 *
 * @param {string} moduleId 模块的Id.
 * @param {string} baseId 所在模块的Id.
 * @param {string} baseFile 如果是匿名模块的话，就必须传递匿名模块所在的文件路径了.
 * @param {string} moduleConfigFile module.conf的文件路径.
 */
exports.toUrl = function (moduleId, baseId, baseFile, moduleConfigFile) {
    return require('./amd/to-url')(moduleId, baseId, baseFile, moduleConfigFile);
};
