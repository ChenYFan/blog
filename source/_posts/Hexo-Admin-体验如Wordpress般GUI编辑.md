title: 'Hexo-Admin:体验如Wordpress般GUI编辑'
author: CYF
tags:
  - 插件
  - Hexo
  - 编辑
  - 神器
  - 黑科技
categories:
  - 丆插件
date: 2020-03-11 09:29:00
copyright: true
---
先放图：

![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/pasted-0.png "Hexo-Admin")

怎么说，逛Github时偶然间发现了这个插件，感觉还不错。

等到现在在用的时候真的感觉不仅仅是不错了,简直就是舒爽啊.

# 简介:

官网地址: [Github](https://github.com/jaredly/hexo-admin)

安装:

一句话的事:

```
npm install --save hexo-admin
```

> npm下载慢??? [>>点此](/2019/07/19/国内加快NPM下载速度/)

<style>
  .alignleft { 
display: inline; 
float: left; 
} 
//居右
.alignright { 
display: inline; 
float: right; 
} 
//居中
.aligncenter { 
clear: both; 
display: block; 
margin:auto; 
} 
</style>
至于安装的时候出现很多很多报错,这是版本不兼容原因,不过并不影响正常使用,比如我随随便便报了这么多错误

```
√ Installed 1 packages
√ Linked 221 latest versions
√ Run 0 scripts
deprecate hexo-admin@2.3.0 › bcrypt-nodejs@0.0.3 bcrypt-nodejs is no longer actively maintained. Please use bcrypt or bcryptjs. See https://github.com/kelektiv/node.bcrypt.js/wiki/bcrypt-vs-brypt.js to learn more about these two options
deprecate hexo-admin@2.3.0 › connect-auth@0.6.1 › connect@2.7.x connect 2.x series is deprecated
deprecate hexo-admin@2.3.0 › browserify@11.2.0 › glob@4.5.3 › minimatch@^2.0.1 Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
deprecate hexo-admin@2.3.0 › less@2.7.3 › request@2.81.0 › hawk@~3.1.3 This module moved to @hapi/hawk. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
deprecate hexo-admin@2.3.0 › less@2.7.3 › request@2.81.0 › hawk@3.1.3 › cryptiles@2.x.x This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
deprecate hexo-admin@2.3.0 › less@2.7.3 › request@2.81.0 › hawk@3.1.3 › sntp@1.x.x This module moved to @hapi/sntp. Please make sure to switch over as this distribution is no longer supported and may contain bugs and critical security issues.
deprecate hexo-admin@2.3.0 › less@2.7.3 › request@2.81.0 › hawk@3.1.3 › boom@2.x.x This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
deprecate hexo-admin@2.3.0 › less@2.7.3 › request@2.81.0 › hawk@3.1.3 › hoek@2.x.x This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
Recently updated (since 2020-03-04): 2 packages (detail see file E:\bloghexo\node_modules\.recently_updates.txt)
  Today:
    → hexo-admin@2.3.0 › browserify@11.2.0 › deps-sort@1.3.9 › subarg@1.0.0 › minimist@^1.1.0(1.2.3) (03:08:24)
√ All packages installed (210 packages installed from npm registry, used 45s(network 44s), speed 213.53kB/s, json 222(516.55kB), tarball 8.67MB)
```

而且在运行 `hexo server -w` 时也随随便便报了一个警告：

```
(node:7628) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated.
```

不过根本不影响正常使用,反正我Hexo-Admin现在还能使用

## 好处

### 直接在写的时候就能看到预览

之前编辑博客时一直使用的是NotePad++,因为很喜欢它的代码高亮,甚至支持MarkDown,但是就是没有预览.

还记得当时打字时省麻烦, `>` 应用符号懒得换行,结果导致在部署完成后才发现有点不对,害的我又一行一行换行过去.

但是使用Hexo-Admin后,我每新增一行,右边就会实时出现文章.


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-1.png "预览")

爽翻了.

甚至上下滑动它都会自动同步:

![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/1.gif "Hexo-Admin上下滑动自动同步")

### 草稿制


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-0.png "草稿")


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-2.png)


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-3.png)

当我点击 `New Post`时，它的显示就变成了灰色，这说明这是草稿形式，并不会真正发布。

这对于我这样的手残党真的很有用。虽然hexo自带草稿功能，但是同样是通过命令实现，写完之后还是要手动转正，那我还不如新建文本文档写完后剪切粘贴呢。

但是，Hexo-Admin的发布只要按一下 `Publish`,所有的事情就交给Hexo吧!

### 迅速添加tag和categories

看到右上角的齿轮了吗，点击它，


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-4.png)

时间作者都能改，这个不重要，Tag和Categories换行就是随便填写，这个舒爽度直接爆表啊有木有。

### 随手添加一张图片

这个功能我觉得是Hexo-Admin亮点，没有之一。

你体验过在Hexo里添加一张图片的痛苦吗？？？？

以前用NotePad++，添加一张截图要这样：

1.  <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>PrtSc</kbd> 截图
2. 新建jpg空白图像
3. 右键，编辑，粘贴
4. 重命名文件
5. 剪切到 `/sourcehttps://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/` 文件夹里，必要的时候会新建一个文件夹
6. 回到NotePad++，键入：`![标题](路径 "标题")`

现在用了Hexo-Admin:

1. <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>PrtSc</kbd> 截图
2. <kbd>Ctrl</kbd>+<kbd>V</kbd>
3. 删掉一个多余的`/`
4. 添加标题

直接舒爽了好几倍,以后添加图片再也不用那么吃力了.

(幸好添加了懒加载,这样就可以放肆的添加图片啦)

至于图片本来就以一个文件存在,那就有点麻烦了,剪切,改名,添加,完成!

<img class="alingleft" src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-5.png">


PS:Hexo Admin可以直接复制图片粘贴，然后自动下载到指定目录并重命名。但在Windows中粘贴后会出现裂图。这时就需要手动把括号中的前后两个斜杠去掉，就能正常显示。

### 设置密码

这对于静态玩家来说毫无关系，毕竟人家权限再大也打不过你，不过如果是部署在000webhost类似的免费可修改空间，或者是纯粹在本地装B的，也可以。

点击Setting：


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-6.png)

点击 `Setup authentification here.`


![输入](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-7.png)

输入用户名、密码、和密钥。

密钥建议手滚键盘，反正你也不用记。


在下面会生成代码块，类似于这样：

```
# hexo-admin authentification
admin:
  username: username
  password_hash: $2a$10$L.XAIqIWgTc5S1zpvV3MEu7/rH34p4Is/nq824smv8EZ3lIPCp1su
  secret: my super secret phrase
  
```

密码是依靠哈希加密，完全不用担心泄漏。

把这一串代码复制到站点配置文件 `_Config.yml`,重启hexo,完成!



### 一键部署

什么，你连 `hexo d` 都不想打？好吧，Hexo-Admin deploy满足你。

首先需要绑定Hexo 《=》 Github 的SSH公钥，这个教程网上都有，在此暂时不讲。

接着在 hexo根目录下创建一个批处理文件 `push.bat`,里面填上:

```bat
hexo g -d
```
打开站点配置文件 `_Config.yml`,在同目录的admin下换行按一下<kbd>Tab</kbd>,写上 

```
deployCommand: 'push.bat'
```

重启Hexo server,点击Deploy,进入以下画面:


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-8.png)

什么都不用填,直接点击 `Deploy` 即可.

### 实时保存

这个功能和NotePad++的缓存保存差不多效果,不过NotePad的缓存保存一般性修改的是副本,而Hexo-Admin则直接修改源文件.

不过用起来还是差不多的,无非都是防止手贱随手关掉没保存的现象出现.

不过Hexo-Admin的保存是真的快.在我打好这句话后发了一下呆o_o ....,右上角就出现这样的字:


![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-9.png)

...都做到这样了,我还能说什么呢?

### 语法校对

这个是我最哭笑不得的功能.

点击右上角的勾,进入校对界面:

![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-10.png)

不过这个功能仅仅对于英文来讲,而且对于代码的语法校对似乎没有这么准确,我又不写英文,有点鸡肋.

### 还有很多...

## 一些小问题

Hexo-Admin能做到这样,我已经很满足了,不过我使用的时候,发现有几个问题:

### 打字的时候浏览框会不自觉的向上飘:

![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/2.gif)

### 不能拖拽放入图片

![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/3.gif)

### 以及...直接粘贴的图片斜杠方向是反的！！！



### 自定义css无法使用

<span class="heimu" title="你知道的太多了">你看的到我吗???</span>


<img class="alingleft" src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-5.png">

![图片](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/4.gif)

不过这到不是大问题,就是编辑的时候没法用罢了

### 性能问题

Nodejs从以前内存占用120MB编程220MB了,比较吃内存

# 结尾

至少在我看来,Hexo-Admin真的至少比Notepad++好多了,虽然依旧不能解决静态无法在线修改的硬伤,不过至少也能用.