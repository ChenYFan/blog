---
title: PanList：ServerLess百度网盘列表直链程序
author: CYF
tags:
  - 百度网盘
  - 网盘
  - CloudFlareWorkers
  - CloudFlare
  - 薅羊毛
categories:
  - 好方法
index_img: 'https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/banner.jpg'
banner_img: 'https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/banner.jpg'
lushkey: panlist.md
abbrlink: 32883f0c
date: 2021-01-06 21:44:55
---

{% note success %}
### 警告
本篇文章在panlist发布后两天内写成，panlist尚处于高速迭代状态，本篇教程随时会失效！
{% endnote %}

>  ~~百度网盘2021年最新不限速下载方式是怎么回事呢？百度网盘相信大家都很熟悉，但是百度网盘2021年最新不限速下载方式是怎么回事呢，下面就让小编带大家一起了解吧。~~
> ~~百度网盘2021年最新不限速下载方式，其实就是PandownloadCloudFlareWorkers版本，大家可能会很惊讶百度网盘怎么会2021年最新不限速下载方式呢？但事实就是这样，小编也感到非常惊讶。~~
> ~~这就是关于百度网盘2021年最新不限速下载方式的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！~~


之前写过[GoogleDrive](/p/74e90c90.html)、[OneDrive](/p/4fb070ca.html) 的CloudFlare列表程序，这两个有个共同点，那就是国内都无法很好的下载，所以用CloudFlareWorkers作为中间件转发流量。

比较讽刺的是，CloudFlareWorkers用的都是国外节点，但以上两个运行于此的目录列表程序支持的下载速度却远远大于国内有节点的百度网盘，不说是移动BGP走香港有多好，至少我在『电信』网络环境下的下载速度都远远大于百度网盘。很显然，百度网盘作为垄断国内网盘市场的资本，既然已经度过了烧钱的时间，那么现在自然是能剩多少省多少，这就是『吃相难看』。

两年前，当微博上的人们开始质问突然『诈尸』的百度网盘微博账号，网友们才纷纷意识到自己的百度网盘被恶意限速了，紧接着，破解百度网盘限速的方式层出不穷。只是后来，这些方式一点一点被打压下去，最终戛然而止。

最近这几天因为在写[HexoPlusPlus: A ServerLess Hexo Dashboard](https://github.com/HexoPlusPlus/HexoPlusPlus) 正在努力学习CloudFlareWorkers。由于评论模块需要数据结构有关知识，可惜这一块知识大都都被一些所谓白嫖CloudFlareWorkers的教程所淹没：

!["Google上CloudFlareWorkers搜索结果"](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101043.jpg)

在查询有关资料的时候，Github上一颗冉冉新星引起了我的注意，[PanList](https://github.com/teardr0p/PanList) ,根据其Commit显示,这个仓库仅仅是两天前刚刚开辟的,但是本文写是就有61Star和21Fork 【当然我也有Star】，可见其热门程度。不过简单的翻看了一下我就明白其为何如此热门，第一，它是专门对付令人头疼的百度网盘，第二，它是构建于CloudFlareWorkers。

# 起步

电脑登录百度网盘：

!["百度网盘"](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101056.jpg)

按下F12进入开发者模式，选择`Application`模块，点击`Cookies`:

!["Cookies"](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101101.jpg)

在这里，我们需要获取两个Cookie：`BDUSS`和`STOKEN`

# 获取

|Github|JSDelivr|
|---|---|
|[原版Github下载地址](https://raw.githubusercontent.com/teardr0p/PanList/master/index.js)|[原版JSDelivr下载地址](https://cdn.jsdelivr.net/gh/teardr0p/PanList@master/index.js)|

修改前面四行代码，分别为

```js
const BDUSS = ''
const STOKEN = ''
const USERNAME = ''
const PASSWORD = ''
```

将获取到的Cookie复制到第一行和第二行。第三、四行是登录后台所需的账号密码。

> AnyWay，你也可以将这些写入到后台变量

新建一个Worker，将处理好的代码直接复制进去：

![复制代码](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101307.jpg)

保存并部署，确定。

# 绑定域名

![绑定域名](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101107.jpg)

路由：`{待绑定的域名}/*` [后面\*的原理是覆盖该路径下所有文件]
Worker：你新建的Worker名字

# 评测

登陆界面：

![login](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101115.jpg)

打开后：

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101118.jpg)

> 挺讽刺的是，去除了百度网盘原始界面乱七八糟的东西，CloudFlareWorkers的国外服务器打开速度都比百度网盘快

Chrome直接下载速度

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101447.jpg)

传递Cookie后IDM下载速度：

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101120.jpg)

注：单线程下载速率最终取决于百度网盘的限制，也就是说无论如何你也无法逃避百度网盘对源头的遏制，就在我下完`Soul`这部将近2GB的电影后，我的账号就被百度拉入黑名单，现在即使用IDM也只有80kb/s <span class="heimu">但是还是比原来的客户端快</span>

# 尾声

本质上panlist无非就是通过baidu没有公开的API通过Cookie鉴权来获取文件列表和下载，虽然依旧没有突破单线程下载限速，但至少实现了直链下载和多线程下载的功能，并且部署在CloudFlareWorkers上的方式确实大开眼界，无服务器应用的范围又扩展了一步，我十分看好这个项目。

另外，本人也在努力开发一款同样基于CloudFlareWorkers的评论系统，以下是截图：

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/101127.jpg)

最后，来一句姗姗来迟的新年祝福：

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.5/happy.jpg)
