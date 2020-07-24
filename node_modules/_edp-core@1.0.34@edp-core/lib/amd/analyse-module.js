/**
 * @file 分析AMD模块的AST 获取相关的模块信息
 * @author errorrik[errorrik@gmail.com]
 *         treelite[c.xinle@gmail.com]
 */

var estraverse = require('estraverse');
var SYNTAX = estraverse.Syntax;
var LITERAL_DEFINE = 'define';
var LITERAL_REQUIRE = 'require';

/**
 * 判断结点是否字符串直接量
 *
 * @inner
 * @param {Object} node 语法树结点
 * @return {boolean}
 */
function isStringLiteral(node) {
    return node
        && node.type === SYNTAX.Literal
        && typeof node.value === 'string';
}

/**
 * 分析define调用
 * 获取模块信息
 *
 * @inner
 * @param {Object} expr define ast
 * @return {Object} 模块信息
 */
function analyseDefineExpr(expr) {
    var moduleId;
    var dependencies;
    var factoryAst;
    var dependenciesMap = {};
    var actualDependencies = [];
    var args = expr['arguments'];

    var argument;

    function dependenciesWalker(item) {
        if (!isStringLiteral(item)) {
            return;
        }

        dependencies.push(item.value);
        if (!dependenciesMap[item.value]) {
            actualDependencies.push(item.value);
            dependenciesMap[item.value] = 1;
        }
    }

    // 解析参数
    for (var i = 0; i < args.length; i++) {
        argument = args[i];

        if (!moduleId && isStringLiteral(argument)) {
            // 获取module id
            moduleId = argument.value;
        }
        else if (!dependencies && argument.type === SYNTAX.ArrayExpression) {
            // 获取依赖
            dependencies = [];
            argument.elements.forEach(dependenciesWalker);
        }
        else {
            factoryAst = argument;
            break;
        }
    }

    // 计算factory function的形参个数
    var factoryParamCount = 0;
    if (factoryAst && factoryAst.type === SYNTAX.FunctionExpression) {
        factoryParamCount = factoryAst.params.length;
    }

    if (!dependencies) {
        actualDependencies = ['require', 'exports', 'module']
            .slice(0, factoryParamCount);
    }

    // 解析模块定义函数
    if (factoryAst.type === SYNTAX.FunctionExpression) {
        // 获取内部`require`的依赖
        estraverse.traverse(factoryAst, {
            enter: function (item) {
                // require('xxx')
                // new require('xxx')
                if (item.type !== SYNTAX.CallExpression
                    && item.type !== SYNTAX.NewExpression
               ) {
                    return;
                }

                if (item.callee.name === LITERAL_REQUIRE
                    && (argument = item['arguments'][0])
                    && isStringLiteral(argument)
                    && !dependenciesMap[argument.value]
               ) {
                    actualDependencies.push(argument.value);
                    dependenciesMap[argument.value] = 1;
                }
            }
        });
    }

    return {
        id: moduleId,
        dependencies: dependencies,
        actualDependencies: actualDependencies,
        factoryAst: factoryAst
    };
}

/**
 * 分析模块
 *
 * @param {Object} ast 模块代码的ast
 * @return {Object|Array} 模块信息，或模块信息数组。
 *                        每个模块信息包含id, dependencies, factoryAst, actualDependencies
 */
module.exports = exports = function (ast) {

    var defineExprs = [];

    estraverse.traverse(ast, {
        enter: function (node) {
            if (node.type === SYNTAX.CallExpression
                && node.callee.name === LITERAL_DEFINE
           ) {
                defineExprs.push(node);
                this.skip();
            }
        }
    });

    var modules = [];
    defineExprs.forEach(function (expr) {
        modules.push(analyseDefineExpr(expr));
    });

    switch (modules.length) {
        case 0:
            return null;
        case 1:
            return modules[0];
    }

    return modules;
};
