---
title: Live2D：为你的hexo博客添加萌萌哒看板娘
date: 2019-08-15 14:09:51
tags:
- Live2D
- Hexo
- 萌萌哒
- 站长必备
- 看板娘
categories: 爱学习
copyright: true
---
# 前言：

19号我就要上学了，以后可能会突然失踪一段时间，9月1号正式开学后，我会恢复到2周一更新的频率。在这里对所有关注我博客的人说声抱歉。

我寥寥无几的评论区里突然有人问我右下角的看板娘是怎么做到的：

> wpaladins •\*\*\*\*\*\*\*\*\*@163.com •2019-08-13 13:33:44
> 你网站的各种东西确实很炫，只是打开你的博客之后我垃圾mba的风扇就一直转个不停😂我想知道左下角的妹子怎么搞？😁

这让我感动了一分钟....

本来我就有写这一篇文章的感觉，只是没有这个打算，既然您问了，那我就写吧。

live2D for hexo 作者：[原作大大的博客](https://huaji8.top/post/live2d-plugin-2.0/)

# 材料：
- Hexo：如果你不是使用Hexo，那很抱歉，我们不会也没有提到其他博客的部署方法，不过这里添加几个链接：
	- Wordpress用户看这里：[WordPress插件给博客加上live2d伊斯特瓦尔](https://www.mom1.cn/4231.html)
	- Typecho用户试一试：[Live2D看板娘来了！typecho插件](https://qqdie.com/archives/l2d233.html)
	- Jekll用户可以参考： [如何给你的Jekyll博客添加可爱的二次元看板娘(Live2D)](https://done.moe/tutorial/2018/08/11/how-to-add-cute-live2d-in-jekyll-blog/)
	- 野路子用户： （很抱歉没有教程）
- Node.js (>=6.0)

# 简单开始：

## 安装Live2D：

请先cd到你的hexo安装目录下！

如果你安装过低版本的Live2D，那先运行：`npm uninstall hexo-helper-live2d` 。
安装： `npm uninstall hexo-helper-live2d`

> 注意
> 中国用户由于`显而易见的原因`，速度超级慢，具体解决方案前往[我早年写的文章](/2019/07/19/国内加快NPM下载速度/#more) 查看

安装完成之后，就会在博客的根目录`package.json`文件中存在依赖,同时出现`node_moduels`文件夹
## 选择模型：
原生模型：

- Epsilon2.1
- Gantzert_Felixander
- haru
- miku
- ni-j
- nico
- nietzche
- nipsilon
- nito
- shizuku
- tsumiki
- wanko
- z16
- hibiki
- koharu
- haruto
- Unitychan
- tororo
- hijiki

额外模型：
可以前往[summerscar大佬的Github](https://github.com/summerscar/live2dDemo)查看。

模型预览：
进入<https://summerscar.me/live2dDemo/>，在`modelName:`键入模型名即可。

## 安装模型：

原生模型： 在hexo文件夹根下键入`npm install --save live2d-widget-模型名`即可。
额外模型： 把文件夹下载到`node_moduels`下即可。

## 配置：

打开`站点配置文件`,在末尾填上:

```
live2d:
  model:
    scale: 1
    hHeadPos: 0.5
    vHeadPos: 0.618
    use: live2d-widget-model-tororo // 下载的动画模型名称
  display:
    superSample: 2
    width: 120
    height: 200
    position: left // 模型在网页显示位置,left为左,right为右
    hOffset: 20
    vOffset: 50
  mobile:
    show: true  // 移动设备是否显示,true则显示,false则不显示
    scale: 0.5
  react:
    opacityDefault: 0.7
    opacityOnHover: 0.2
```

接着`hexo server`看看吧!

# 进阶:

你看到别人的的看板娘会说话,能拍照,还能打游戏?
那你也能!

> 警告:
> 这会严重拖慢你的网站加载速度,并且功能比较鸡肋,并不建议添加.如果你的博客建立在Github Pages上,添加会造成加载困难以致无法加载!

> 由于我没有使用进阶版,本文以下部分转载来自<https://blog.csdn.net/qq_39610915/article/details/90679768>

使用大神定制作品
<https://github.com/stevenjoezhang/live2d-widget>

按照教程
<https://blog.pangao.vip/Hexo博客NexT主题美化之新增看板娘(能说话、能换装)/>
设定了一番
但网页中并没有出现看板娘
如果你和我一样是纯新手，而且完全按照上述教程进行，那么恭喜你，看板娘一定不会出现！
这是为什么呢？
首先我们去查看这个项目的说明

> ## 依赖 Dependencies
> 本插件需要jQuery和font-awesome支持，请确保它们已在页面中加载，例如在`<head>`中加入：  
> jQuery and font-awesome is required for this plugin. You can add this to `<head>`:
```xml
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
```
> 否则无法正常显示。（如果你的网页已经加载了jQuery，就不要重复加载了）

而教程中并没有指出这一点，因此缺少依赖的博客，一定不会加载出看板娘。
其次是autoload.js的路径设置问题。

正确的步骤如下
### 第一步
下载大神项目，解压到本地博客目录的`themes/next/source`下，修改`autoload.js`文件，将其中
```
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";
```
改为

```
const live2d_path = "/live2d/";
```

`autoload.js`中的注释的绝对地址指的是，将资源打包放到`hexo/theme/next/source`中后，以`hexo/theme/next/source`为根目录（/）的绝对路径，一般我们下载下来的是master分支，那么修改路径就是`/live2d-widget-master/xxx.js`，`autoload.js`的最后一个函数initWidget("/live2d-widget-master/", “https://api.fghrsh.net/live2d”); 中的第二个参数不要变，是一个后台api。我选择将文件夹重命名为“live2d”，因此按照如上方式修改。

### 第二步
在`/themes/next/layout/_layout.swing`中,`<body>`标签中新增如下内容，`########`为你自己的github账号：

```
<script src="https://########.github.io/live2d/autoload.js"></script>
```

`<head>`标签中新增如下内容：一定一定要加上依赖！！！！！

```
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css"/>
```

### 第三步
在主题配置文件`_config.yml` 中,新增如下内容：

```
live2d:
  enable: true
```

想修改看板娘大小、位置、格式、文本内容等，可查看并修改 `waifu-tips.js` 、 `waifu-tips.json` 和 `waifu.css`。

最终效果如图：
![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/KBN.png "最终效果")
后端API地址：
<https://github.com/fghrsh/live2d_api>

特别提醒！！！！！！
根据原作者反映，2018年十月，使用人数过多曾让该api暂时停止提供服务，更稳妥的方法是自建api。
- - -
