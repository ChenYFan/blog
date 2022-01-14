title: 失败的光速叛逃！CloudFlarePage初体验
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
index_img: https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613785796000.jpg
banner_img: https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613785796000.jpg
abbrlink: 363f2ff1
---

众所周知，CloudFlare曾开放CloudFlarePage内测资格申请，如今我获得了资格，免费享受边缘部署岂不美哉！可万万没想到，简单的迁移过程会出现如此问题

<!--more-->

据我所知，使用CloudFlare做hexo无非以下两种：

- GithubPage+CloudFlareCDN
- CloudFlareWorkerKV+ClouFlareWorkerSite

CloudFlare早先时候支持WorkerSite，当时KV照实没有免费，我也不想为了`100ms`的回源耗时而花费金钱。不过后来KV在一定额度上免费了，打开WorkerSite的文档，第一步wrangler直接把我劝退。

笑话，国内使用wrangler，那还不如CloudFlare+GithubPage。

[苏卡卡大佬写的一篇文章](https://blog.skk.moe/post/deploy-blog-to-cf-workers-site/)讲述了自己部署WorkerSite的经历，[ChrAlpha's Blog](https://blog.ichr.me/post/cf-workers-site-deploy/)也曾提到过迁移的过程。不过我懒![](https://npm.elemecdn.com/chenyfan-oss@1.1.11/62.jpg)，我觉得`100ms`回源不算什么，赔个Worker还是有点亏。

2020年11月份，偶然得知CFPage[正在公开招聘Pagebeta计划](https://www.cloudflare.com/zh-cn/pages-jamstack-platform-beta-sign-up/)，抱着试试看的心理，我简单写了些就交了上去。凭借着对CloudFlare发布新产品小心翼翼的态度，我揣摩估计很难申请到。果不其然，年都过了，连封邮件都没通知我。

2021年2月20日，我先日常翻了遍邮件，0。正准备继续开发HexoPlusPlus，登陆CloudFlare，却发现右边多了个新玩意：

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613786871000.png)

![](https://npm.elemecdn.com/chenyfan-oss@1.1.11/156.jpg)

不愧是我，我一眼就看出来我的CFPage申请到了。

# 迁移

由于我的博客源码在Github上，而CFPage只能从Github上获取源码。
我面向中国大陆CDN有一部分用的也是CloudFlare，通过BNXB第三方接入。
因为之前用的就是GithubAction的集成部署，所以`package.json`已经配置完成了。

那么我看起来确实是最佳的接入选择。

{% note warning %}
非常操蛋的是，我无法删除已经添加的CloudFlarePage域名，所以我没有办法重新演示我如何安装，下面的截图是删除时的错误：
![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613787919000.png)
![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613787960000.png)
{% endnote %}

首先，进去，点击`创建项目`选择博客的github存储库，获得GithubAccess权限后跳转到这：

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613788198000.png)

勾选需要接入的项目

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613788329000.png)

- 构建设置 - 框架预设

由于之前吃过Vercel的亏，不想选Hexo，但是抱着试试看的心态，还是选择了内置的hexo。

选择之后，后面的构建命令和构建输出也直接填好了，保存并部署？

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613789246000.png)

> 因为本博客使用了neat而不是gulp插件压缩html~~管他呢反正丢CI~~，所以构建时间会比较长。

修改CNAME记录和TXT记录，分别去BNXB修改CNMAE和DNSPOD【NS所在处】修改TXT记录

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613790247000.png)

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613790482000.png)

就好了？就好了。

<span class="heimu">这是我最快的迁移速度</span>

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613789961000.png)

NetWork选项卡里出`x-server: Cloudflare Pages`说明迁移完毕。

# 使用体验

简洁，加载速度快，这是我第一个感受。

用GithubAction老是卡在同一个界面不会动，要手动刷新一下才能出来，而且加载的东西贼多，我这台破笔记本有点卡。

CloudFlarePage则轻巧的多，并且部署状况很快就能体现出来。

无缝切换，这是我的第二个体验。

以前换CI换CDN的时候，非得断掉先然后才能切换回来，现在两步走之后，直接在dns平台修改无缝迁移，体验良好，总耗时不超过10分钟。

鉴于CloudFlare在国内的连接情况，电信这一条线我还是切回vercel【也是0回源】，其他的走CloudFlarePage

平台还是beta，这是第三个感受。

我删不掉已经添加的域名，这是我最纳闷的一点。

然后我不想让cfpage检测我的`gh-pages`分支，因为GithubAction还有存在的必要，但是CFpage每每还是检测pages分支，然后扔出部署失败，提示错误。

这两个问题[我已经丢论坛里了](https://community.cloudflare.com/t/cloudflarepagebug-i-cannot-delete-my-site/246093)，目前还未回复

至于快多少，因为没有免费版本Argo做对比，也没有大量数据做对比，**目前**无法得出结论。

真的要说快多少，因为大部分静态资源切jsd上，所有经过cf的只有一个单html，至少我在国内大环境下，我还没体会出100ms能快多少(´இ皿இ｀)

另外CloudFlarePage用的证书很奇怪，可能是为了CNAME兼容性，不用自己自家的证书，反而用Let’s Encrypt，鉴于OSCP在国内阻断，ios用户可能会出现首次访问白屏，这一点我有点担心。

最好的一点莫过于完全贴合HexoPlusPlus了，以后我就有充分的理由宣传HPP了![](https://npm.elemecdn.com/chenyfan-oss@1.1.11/320.jpg)

# 额度

- 每月构建次数：500次

【用了HPP，构建次数再多也不够500/mo，这一点我还是放心的，再说我常年咕咕咕】

- 自定义域名：10个 【我也没这么多域名】

- 文件：2w个【绝对用不完】

- 总大小：25MB【图片啥的都扔图床，其实也就5MB】

- 带宽：无限制【！！！】

# 然后我切回来了

高高兴兴的搞完了CFPage部署，~~水了这篇文章~~去吃饭。吃完饭后回来一看谷歌统计，好家伙404的怎么这么多。

还好之前的GithubPage没有删掉，去bnxb赶紧切了回来。

~~完了我也经历了和Sukka大佬一样的问题~~

问题很容易定位，所有的404来自cfpage而非vercel。

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613795675000.png)

首先是Vercel，开代理的情况下国外访问均正确解析至vercel，可以在`x-vercel`头里看出来

地址是`https://blog.cyfan.top/p/52382e42.html`，相应代码是`200`

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613795874000.jpg)

关闭代理，将自动选择CloudFlareCDN+GithubPage，可以从`x-github-request-id`看出

地址是`https://blog.cyfan.top/p/52382e42.html`，相应代码是`200`

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613796163000.jpg)

然后是有问题的CFPage，可以在`x-server`头里看出来

地址是`https://blog-9una.pages.dev/p/52382e42.html`，相应代码是`308`**跳转**，跳向`https://blog-9una.pages.dev/p/52382e42`，**CFPage会把末尾.html抹掉**

抹掉就罢了,结果在vercel这边又出问题

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613796374000.jpg)

但是最奇葩的是,githubpage是允许不带html裸访

![](https://npm.elemecdn.com/chenyfan-cdn@2.0.0/img/hpp_upload/1613796456000.jpg)

这就是整个经过,CFPage必须抹掉后缀,GithubPage保持无所谓,Vercel必须不能抹掉

# 解决办法

先从自己入手，CFPage和vercel不能共留，干掉vercel？好主意，毕竟国内访问CF并无大碍，但是有个大问题梗在面前，评论怎么办，之前的收录怎么办，首页链接不一致怎么办？

我又不想抛弃CFpage，于是试图和Sukka大佬针对中文解码一样来个拯救计划，结果发现，CFPage不开源......

后来仔细翻了一遍[文档](https://developers.cloudflare.com/pages/platform/serving-pages#route-matching)才发现，这样是有意为之，故意删掉后缀名。

的，切回Github+CFCDN，这一早上的折腾白费了( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃