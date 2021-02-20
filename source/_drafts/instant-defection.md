title: 瞬间叛逃！直接切到CloudFlarePage
author: CYF
tags:
  - Hexo
  - 集成部署
  - CloudFlare
  - CloudFlarePage
categories:
  - 好方法
des: 直接切走！0ms回源的前端部署Hexo，实现国内加速访问
key: CloudFlare,CloudFlarePage,Hexo,Hexo
date: 2021-2-20 9:24
index_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1613785796000.jpg
banner_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1613785796000.jpg
excerpt: 众所周知，CloudFlare曾开放CloudFlarePage内测资格申请，如今我获得了资格，免费享受边缘部署岂不美哉！
---

据我所知，使用CloudFlare做hexo无非以下两种：

- GithubPage+CloudFlareCDN
- CloudFlareWorkerKV+ClouFlareWorkerSite

CloudFlare早先时候支持WorkerSite，当时KV照实没有免费，我也不想为了`100ms`的回源耗时而花费金钱。不过后来KV在一定额度上免费了，打开WorkerSite的文档，第一步wrangler直接把我劝退。

笑话，国内使用wrangler，那还不如CloudFlare+GithubPage。

[苏卡卡大佬写的一篇文章](https://blog.skk.moe/post/deploy-blog-to-cf-workers-site/)讲述了自己部署WorkerSite的经历，[ChrAlpha's Blog](https://blog.ichr.me/post/cf-workers-site-deploy/)也曾提到过迁移的过程。不过我懒![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/62.jpg)，我觉得`100ms`回源不算什么，赔个Worker还是有点亏。

2020年11月份，偶然得知CFPage[正在公开招聘Pagebeta计划](https://www.cloudflare.com/zh-cn/pages-jamstack-platform-beta-sign-up/)，抱着试试看的心理，我简单写了些就交了上去。凭借着对CloudFlare发布新产品小心翼翼的态度，我揣摩估计很难申请到。果不其然，年都过了，连封邮件都没通知我。

2021年2月20日，我先日常翻了遍邮件，0。正准备继续开发HexoPlusPlus，登陆CloudFlare，却发现右边多了个新玩意：

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1613786871000.png)

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/156.jpg)

不愧是我，我一眼就看出来我的CFPage申请到了。

# 迁移

由于我的博客源码在Github上，而CFPage只能从Github上获取源码。
我面向中国大陆CDN有一部分用的也是CloudFlare，通过BNXB第三方接入。

那么我看起来确实是最佳的接入选择。

