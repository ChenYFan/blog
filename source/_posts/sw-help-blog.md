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

# 起因

# 巨厦坍塌

2021/12/20日，赶在旧年的末尾，一则`JSdelivrSSL证书错误`缓缓上了v2ex论坛热点。

此前JSD由于各种原因,曾经不正常了一段时间,所以大家并未对此感冒.正当人们以为这只是JSdelivr每年一度的`年经`阵痛,发个issue,过一段时间就好了的时候.官方直接爆出大料:**JSDelivr had lost their ICP license**

由此可见,过去的几年里,当人们发现JSD对个人面向国内加速拥有者无与伦比的效果时,各种滥用方式层出不穷:图床曾一阵流行,国内搜索引擎JSdelivr十有八九都是作为图床的,连PicGo插件都出了Github+JSdelivr图床;猛一点的,直接做视频床,甚至为了突破单文件20M限制开发了一套ts切片m3u8一条龙服务;作妖的,托管了不少突破网络审查的脚本和规则集;寻死的,添加了大量的政治宗教敏感,有些甚至不配称为宗教,直接上来就是骗钱的.

jas并不是没有发布许可条款，但这并不能阻止白嫖大军的进程。在羊毛大军中，只要是你是免费的、公益的，你就要做好被薅爆的结果。但是薅羊毛的前提是羊还活着，倘若羊背号死了，哪来的羊毛给诸君所薅？

总之，不管怎样，JSDelivr在决定将节点设置为`NearChina`，可以肯定的是，在最近很长一段时间内，我们都无法享受国内外双料同时加速的快感，换句话说，jsd在中国就被永久地打入了冷宫。

视线转向国内，jsd的替代品并不少。早在我写[图床的千层套路](https://blog.cyfan.top/p/eb490c73.html)我就试着假想jsd不可用时，我们该用什么。最终我给出的一份较为完美的答案-npm图床，优点无非就是镜像多速度快，许可条款较为宽松，缺点也很明显，需要安装node，用专门的客户端上传。

