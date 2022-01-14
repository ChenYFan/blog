---
title: 欲善其事，必利其器 - 论如何善用ServiceWorker
author: ChenYFan
tags:
  - JSdelivr
  - ServiceWorker
  - 黑科技
categories:
  - 随心扯
des: 从唯一一个拥有国内节点能够加速海外资源的静态文件分发站JSDelivr因为各种滥用和敏感被封杀这一事件讲起，谈谈关于ServiceWorker奇技淫巧
hide: true
key: 'serviceworker,sw'
abbrlink: c0af86bb
index_img: 'https://npm.elemecdn.com/chenyfan-os@0.0.0-r2'
banner_img: 'https://npm.elemecdn.com/chenyfan-os@0.0.0-r2'
date: 2022-01-08 21:57:45
---

ServiceWorker作为前端革命领袖，毫不夸张地被誉为前端黑科技，此文将阐述如何巧妙的使用它来实现一些看起来匪夷所思的事情。

<!--more-->

> 从2022/1/8开始，本文将持续更新。当前状态：更新中

# 起因 - 巨厦坍塌

2021/12/20日，赶在旧年的末尾，一则`JSdelivrSSL证书错误`缓缓上了v2ex论坛热点。

此前JSD由于各种原因,曾经不正常了一段时间,所以大家并未对此感冒.正当人们以为这只是JSdelivr每年一度的`年经`阵痛,发个issue,过一段时间就好了的时候.官方直接爆出大料:**JSDelivr had lost their ICP license**

由此可见,过去的几年里,当人们发现JSD对个人面向国内加速拥有者无与伦比的效果时,各种滥用方式层出不穷:图床曾一阵流行,国内搜索引擎JSdelivr十有八九都是作为图床的,连PicGo插件都出了Github+JSdelivr图床;猛一点的,直接做视频床,甚至为了突破单文件20M限制开发了一套ts切片m3u8一条龙服务;作妖的,托管了不少突破网络审查的脚本和规则集;寻死的,添加了大量的政治宗教敏感,有些甚至不配称为宗教,直接上来就是骗钱的.

jas并不是没有发布许可条款，但这并不能阻止白嫖大军的进程。在羊毛大军中，只要是你是免费的、公益的，你就要做好被薅爆的结果。但是薅羊毛的前提是羊还活着，倘若羊被薅死了，哪来的羊毛给诸君所薅？

总之，不管怎样，JSDelivr在决定将节点设置为`NearChina`，可以肯定的是，在最近很长一段时间内，我们都无法享受国内外双料同时加速的快感，换句话说，jsd在中国就被永久地打入了冷宫。

视线转向国内，jsd的替代品并不少。早在我写[图床的千层套路](https://blog.cyfan.top/p/eb490c73.html)我就试着假想jsd不可用时，我们该用什么。最终我给出的一份较为完美的答案-npm图床，优点无非就是镜像多速度快，许可条款较为宽松，缺点也很明显，需要安装node，用专门的客户端上传。

那事情就逐渐变得扑朔迷离起来了，我们应当如何选择合理的CDN加速器呢。

这时候，我想起了前端黑科技Serviceworker。是的，这种情况下使用SW最为巧妙不过，它可以在后台自动优选最佳的CDN，甚至可以用黑中黑`Promise.any`打出一套漂亮的并行拳。经过两天的完善，我终于写出了一套具有离线可达、绕备、优选CDN、跟踪统计合一的SW脚本。[此博客使用的SW](/sw.js)

接下来我将从头开始讲述ServiceWorker的妙用。

# Before Start

## What Is The ServiceWorker

网上对于SW的解释比较模糊，在这里，我将其定义为`用户浏览器里的服务器`，功能强大到令人发指。是的，接下来的两张图你应该能显著的看到这一差距：

![没有ServiceWorker中继，平淡无奇](https://npm.elemecdn.com/chenyfan-os@0.0.0-r5/1.jpg)

![ServiceWorker中继，刺激拉满](https://npm.elemecdn.com/chenyfan-os@0.0.0-r5/2.jpg)

在第一张图中，用户和服务器的关系直的就像电线杆，用户想要什么，服务器就还给他什么。

第二张图中，用户在被ServiceWorker控制的页面中，无论向哪个服务器发起请求，其过程都会被SW捕获，SW可以仿佛不存在一般单纯地请求服务器，返回原本应该返回的内容【透明代理】；也可以对当前服务器返回的内容进行随意的捏造、修改【请求修改结果】；甚至可以将请求指向完全另一台服务器，返回不是此服务器应该返回的内容【移花接木】；当然，SW也可以直接返回已经存储在本地的文件，甚至离线的时候也能返回【离线访问可达性】。

由于SW对于用户页面的操纵实在过于强大，因此，它被设计成`不可跨域请求`、`SW脚本必须在同一域名下`、`必须在HTTPS条件下运行`、`不可操纵DOM和BOM`，同样的，为了避免阻塞和延迟，SW也被特意设计成`完全异步的`。这些点将会在后面一一讲述。

> 当然，开发者至上，为了方便本地调试，本机地址`localhost`和`127.0.0.1`被浏览器所信任，允许以`非HTTPS`方式运行serviceworker。

## What Relationship Between ServiceWorker and PWA

很多人看到sw，第一反应是PWA，即渐进式Web应用。实际上，SW确实是PWA的核心与灵魂，但SW在PWA中起的主要作用是缓存文件，提供给离线访问。并没有完整地发挥出SW的巧妙用法。

SW可以完全脱离PWA存在，当然，PWA可离不开SW ：）

## And WorkBox ?

WorkBox是谷歌开发的一款基于SW的缓存控制器。核心依旧是SW，但还是没有SW原本的自定义程度高（

# Start From Zero

## 安装 / Install

首先，SW的本质是JS脚本，要安装它必须要经过一个html。毕竟，只有拿到了html，JS才能运行于DOM上下文。

剥离层层加成，安装的代码只有一行

```JavaScript
navigator.serviceWorker.register('/sw.js')
```

其中，`/sw.js`即为ServiceWorker脚本所在，由于安全性，你不能加载跨域的SW。

例如，当前网页为`https://blog.cyfan.top`，以下加载位置是允许的

```url
/sw.js
https://blog.cyfan.top/sw.js
```

以下加载是不允许的:

```url
http://blog.cyfan.top/sw.js#非HTTPS
https://cyfan.top/sw.js#非同一域名，视为跨域
https://119.91.80.151:59996/sw.js#虽然为同一文件,但非同一域名，视为跨域
./sw.js#容易造成SW脚本获取路径不一致
```

在加载前，我们最好判断一下dom是否加载完了，不然安装sw可能会卡dom

加载完成后，register函数将返回一个`Promise`，由于前端大多不适用于`异步`，我们通常以`同步`的方式`.then()`和`.catch()`来获取是否加载成功。

为了方便判断脚本是否能够加载，我们还要判断navigator里有无sw这一属性`'serviceWorker' in navigator`。

由于SW安装后，页面需要刷新后才能交给SW所宰割，同时为了避免浏览器缓存的影响，我通常采用修改`search`的方式强刷新，而不是通过`reload`函数。同样的，为了避免刚安装完就刷新的尴尬感，建议用`setTimeout`延迟一秒刷新。

简易的完整安装代码如下:

```index.html
<script>
window.addEventListener('load', async () => {
    navigator.serviceWorker.register(`/sw.js?time=${new Date().getTime()}`)
        .then(async reg => {
            //安装成功，建议此处强刷新以立刻执行SW
            setTimeout(() => {
                window.location.search = `?time=${new Date().getTime()}`
            }, 1000)
        }).catch(err => {
            //安装失败，错误信息会由err传参
        })
});
</script>
```

一刷新，世界就变成了ServiceWorker的瓮中之鳖，接下来，该是SW脚本正式登场的时候了。

## SW安装初始化 / Installations

首先，先尴尬的开一个空缓存：

```js
const CACHE_NAME = 'ICDNCache';//可以为Cache版本号，但这样可能会导致缓存冗余累积
let cachelist = [];
```

同时监听sw安装时开启此缓存空间：

```js
self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});
```

由于SW完全没有办法访问DOM，因此对于全局变量，不应当用`window`，而是`self`指代自己。

`addEventListener`这一监听器将监听`install`,也就是这一段代码只会在脚本首次安装和更新时运行.

`skipWaiting`的作用是促进新版本sw跳过waiting这一阶段，直接active。

> 关于SW的状态（waiting，installing，activing）将在文后详细解释。

`installEvent.waitUntil`的作用是直接结束安装过程的等待，待会在后台完成开启缓存空间这一操作。

