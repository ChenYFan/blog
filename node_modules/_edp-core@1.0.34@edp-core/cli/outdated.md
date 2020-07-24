outdated
---------

### Usage

    edp outdated

### Description

1. 检查`edp`安装的扩展包的版本，如果有必要的话，给出更新的提示。
2. 如果是在`edp`的项目目录下面，同时也会检查`dep`下面的package版本，如果有必要的话，给出更新的提示。

默认访问的是`http://npm.internal.baidu.com`，如果需要更改的话，可以通过

    edp config npm.registry http://registry.npmjs.org
