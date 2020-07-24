Lesslint
===

[![lesslint](https://travis-ci.org/ecomfe/node-lesslint.svg?branch=master)](https://travis-ci.org/ecomfe/node-lesslint)
[![npm version](https://badge.fury.io/js/lesslint.svg)](http://badge.fury.io/js/lesslint)
[![Coverage Status](https://img.shields.io/coveralls/ecomfe/node-lesslint.svg?style=flat)](https://coveralls.io/r/ecomfe/node-lesslint)
[![Dependency Status](https://david-dm.org/ecomfe/node-lesslint.png)](https://david-dm.org/ecomfe/node-lesslint)
[![devDependency Status](https://david-dm.org/ecomfe/node-lesslint/dev-status.png)](https://david-dm.org/ecomfe/node-lesslint#info=devDependencies)

Lesslint 是一个基于 NodeJS 以及 EDP 的一个 lint 工具，使用它可以 `lint` 你的 less code，目前的 lint 规则是基于 ecomfe 的[Less编码规范 [1.0]](https://github.com/ecomfe/spec/blob/master/less-code-style.md)。

经过了一段时间的重构，终于来到这个全新的版本。在这个版本中，`less` 解析器切换成 [postcss](https://github.com/postcss/postcss) 以及一个 [less 的解析插件](https://github.com/webschik/postcss-less)。这个版本里，改变了实现方式，没有依赖 Less 本身的 parser 以及 visitor 来进行解析，因此性能较以前的版本有比较大的提升。(这是个重构版本，因此并未对功能上做扩充，下个版本会对功能上做一些扩充，尽请期待~)

具体的配置参见 [config](https://github.com/ecomfe/node-lesslint/blob/master/lib/config.js)

已经实现的 lint 规则：

+ [@import 检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#import-%E8%AF%AD%E5%8F%A5)：@import 语句引用的文件必须（MUST）写在一对引号内，.less 后缀不得（MUST NOT）省略（与引入 CSS 文件时的路径格式一致）。引号使用 ' 和 " 均可，但在同一项目内必须（MUST）统一。`import`

+ [颜色检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E9%A2%9C%E8%89%B2)：颜色定义必须（MUST）使用 #RRGGBB 格式定义，并在可能时尽量（SHOULD）缩写为 #RGB 形式，且避免直接使用颜色名称与 rgb() 表达式。`hex-color`, `shorthand`

+ [注释检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E6%B3%A8%E9%87%8A)：单行注释尽量使用 // 方式。`single-comment`

+ [数值检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E6%95%B0%E5%80%BC)：对于处于 (0, 1) 范围内的数值，小数点前的 0 可以（MAY）省略，同一项目中必须（MUST）保持一致。`leading-zero`

+ [选择器检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E9%80%89%E6%8B%A9%E5%99%A8)：当多个选择器共享一个声明块时，每个选择器声明必须（MUST）独占一行。`require-newline`

+ [变量检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E5%8F%98%E9%87%8F)：变量命名必须（MUST）采用 @foo-bar 形式，不得（MUST NOT）使用 @fooBar 形式。`variable-name`





+ [0 值检验](https://github.com/ecomfe/spec/blob/master/less-code-style.md#0-%E5%80%BC)：属性值为 0 时，必须省略可省的单位（长度单位如 px、em，不包括时间、角度等如 s、deg）。`zero-unit`

+ [运算](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E8%BF%90%E7%AE%97)：+ / - / * / / 四个运算符两侧必须（MUST）保留一个空格。+ / - 两侧的操作数必须（MUST）有相同的单位，如果其中一个是变量，另一个数值必须（MUST）书写单位。`require-around-space`, `operate-unit`

+ [属性、变量](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E5%B1%9E%E6%80%A7%E5%8F%98%E9%87%8F)：选择器和 { 之间必须（MUST）保留一个空格。`require-before-space`

+ [缩进](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E5%B5%8C%E5%A5%97%E5%92%8C%E7%BC%A9%E8%BF%9B)：必须（MUST）采用 4 个空格为一次缩进， 不得（MUST NOT）采用 TAB 作为缩进。`block-indent`

+ [属性、变量](https://github.com/ecomfe/spec/blob/master/less-code-style.md#%E5%B1%9E%E6%80%A7%E5%8F%98%E9%87%8F)：属性名后的冒号（:）与属性值之间必须（MUST）保留一个空格，冒号前不得（MUST NOT）保留空格；定义变量时冒号（:）与变量值之间必须（MUST）保留一个空格，冒号前不得（MUST NOT）保留空格。`require-after-space`

安装与更新
-------

lesslint 已发布到 npm 上，可通过如下命令安装。`-g`是必选项。

    $ [sudo] npm install lesslint -g

升级 lesslint 请用如下命令。

    $ [sudo] npm update lesslint -g
    

使用
------

lesslint 目前就一条命令，后面带 `-v` 参数，会显示版本信息；后面带目录或者文件名就会对目录或文件执行 lesslint。

    $ lesslint -v   // 显示版本信息
    $ lesslint [filePath|dirPath]   // 对 file 或 dir 执行 lesslint


TODO
------

1. 覆盖更多的规则，现在还未实现的规则如下:

   `disallow-mixin-name-space`, `vendor-prefixes-sort`, `extend-must-firstline`


   
### [CHANGELOG](https://github.com/ecomfe/node-lesslint/blob/master/CHANGELOG.md)