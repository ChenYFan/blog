---
title: 图床的千层套路
tags:
  - 图床
  - 白嫖
  - PicGo
  - JSDelivr
categories: 随心记
copyright: true
author: CYF
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912212615.jpg?q=75'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912212615.jpg?q=75'
abbrlink: eb490c73
date: 2020-09-12 21:27:41
des: 关于公开的或各种奇怪的方式的图床，能够解决图床选择困难症以及不知道用什么图床的同学，包括jsdelivr、npm、dogedoge
key: 图床,白嫖,PicGo
lushkey: hey-picbed.md
---


>  博客最近在细心打磨终于上95分了，其中我认为图片功劳不可没。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/cUEQrVYGFiDjqhy.jpg)



2020年8月9日[Jsdelivr发布了一次使用政策：Create Acceptable Use Policy](https://github.com/jsdelivr/jsdelivr/pull/18247/files)，其中第4条Prohibited Use引起了众多议论：



```markdown
4. Prohibited Use

The following behavior is prohibited:

 1. Hosting or accessing content that:
     - contains malware or harmful code in any form,
     - violates proprietary rights of others,
     - is sexually explicit,
     - is potentially illegal in the EU or the USA.

 2. Abusing the service and its resources, or using jsDelivr as a general-purpose
    file or media hosting service. This includes, for example:
     - running an image hosting website and using jsDelivr as a storage for all
       uploaded images,
     - hosting videos, file backups, or other files in large quantities.

    We recognize that there are legitimate projects that consist of a large number
    of files, and these are not considered abuse. For example: icons packs, apps,
    or games with a large number of assets.

```



其中`running an image hosting website and using jsDelivr as a storage for all uploaded images` 这一句相当的有歧义，要多少的图片才能算是图站？博客里面图片放里面算吗？上传的图片怎样才不行？![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/TlAGjm6IvJSMVpq.jpg)



反观网上流传的白嫖Github做图床，基本点进去都是`https://cdn.jsdelivr.net/gh/` 这样子的图床，这种行为，我不敢妄加评论。但是，jsdelivr诞生的意义似乎并不是为了图床而生的，这种行为也很难判断成滥用。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece29a8e0.jpg)



使用政策发布之后，一时间，QQ群、v2ex、知乎上立刻就炸了锅。很多人猜测jsdelivr是不是滥用过度而禁止将其作为图床？免费图床的白嫖日子要结束了吗？更多的人，是在哭诉和询问那里还有像jsd一样优秀的**图床**可以白嫖，微博炸了，那里还有免费图床啊？



实际上，我一般采用的是`BackBlaze+CloudFlare` 但是自从八月底移动开始改道，从原先优秀的CMI绕路LAX后，国内CloudFlare访问质量再次暴跌，这不得不使我将博客迁至Vercel。好在八月份我有幸申请到了`doegdoge图床`使用权限，获得了国内较高速的图床.



但是，对于哪些没有没有图床的人来说，免费图床真的这么难以获得吗？



不好意思，**免费图床非常多**，只是你不会用而已，这篇文章，就是拯救面前陷入图床危机的你【当然是面向小白，大佬也可以在底下给我提意见鸭】。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_56.png)



# 公益图床



## sm.ms

<https://sm.ms>

推荐程度：★

首先推荐的是这个图床，loli.net域名经典重现。三年前此图床域名还有备案采用的是国内CDN，可惜后来因为滥用吊销备案号而被迫迁移国外，用的是CloudFlare。实际使用效果面向国内确实不太好，建议备用。

你不需要注册，拖拽直接上传，只要不违反大陆和香港法律，他就能永久保留你的图片



![](https://i.loli.net/2020/09/12/OxvnMBwd3VA8uyD.jpg)



可搭配PicGo



## Imgur

<https://imgur.com>

推荐程度：★★



国外一家牛逼的图片托管服务商，你可以选择注册或不注册，同样的，拖拽上传，永久保留，其SLA有着相当高的保证。



然而很可惜的是，这种网站很早就在国内被**DNS域名污染**，也就意味着访客无法正常加载你的图片。这也就是被打为两颗星的原因。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E4%B8%8D%E8%AF%B4%E8%AF%9D.png)



当然，你也可以通过[#图像缓存服务](#图像缓存服务) 从而实现国内访问。

可搭配PicGo【需注册】



## 去不图床

[https://7bu.top/](https://7bu.top/)

推荐程度：★★★★

由[杜老师](https://dusays.com/241/)提供的个人公益图床，存储于阿里和腾讯的COS，官方保证SLA>=99%，是一个不错的选择，当然，7bu毕竟是个人维护的图床，能不能永久撑下去还是个问题，我也没有做过深度评测，无法表明其可用性。



可搭配PicGo。



```yml
接口地址：https://7bu.top/api/upload
post参数：image
回调json：data.url
```

[更准确的API文档](https://7bu.top/index/api.html)

![](https://7.dusays.com/2020/09/13/aa555748a9f38.jpg)

> ~~而且，就在我上传测试图片的时候，明明已经表明图片已经上传，打开却发现COS提示404，这一点我不得陷入思考，个人维持的公益项目真的能保证SLA吗？![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E4%BE%BF%E4%BE%BF.png)~~

> 昨天上传的时候撞上服务器维修了，很抱歉做出了不够恰当的评价.7bu采用的是全国腾讯云CDN加速，国内访问速度十分优良。然而请注意，7bu刚开始建立的目的并不是面向全球【仅面对中国大陆游客】，这导致其大陆以外基本解析至国内西藏腾讯，访问效果并不好。并且，这是通过腾讯云的鉴黄，可能会存在误杀行为。具体使用请个人斟酌【不过作为开发环境还是可行的】。



# 白嫖的



## 阿里图床

~~推荐程度：★★★★~~

~~我个人搭建的API：<https://picbed.cyfan.top> 不保证上传SLA![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53ce897ab55.jpg)~~

~~由于小鸡联通国内网络不太好，很有可能无法正常上传，[原项目已经开源](https://github.com/ChenYFan-Tester/Alibaba_pic) ，你完全可以通过在国内的机子或者是本地搭建以获得更佳体验。~~

~~如果上传成功了，图片将会托管于阿里云的CDN，无论是速度还是延迟都相当的优秀。~~

~~官方大厂，下载SLA有保障。~~

~~可搭配PicGo。~~

```yml
接口地址：https://picbed.cyfan.top/update.php
post参数：file
回调json：data.url
```

**已失效，切勿使用**

## DogeDoge图床



推荐程度：★★★★★



![TEST](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912192303.jpg)



其实很早就看到[V2EX的那篇征文了](https://v2ex.com/t/659652)：



![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912190301.png?q=45)



可是当时我不够优秀啊<span class="heimu">虽然现在同样不优秀</span>，博客也没满一年啊，于是白嫖的心态搁浅了。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896e8a408253.jpg)



后来突然看到<a href="https://blog.jalenchuh.cn/" content="nofollow">Jalen的博客</a>也用了DogeDoge图床，这才突然意识到原来我已经满一年了。于是抱着试试看的心态向doge官方邮箱发送了邮件，结果真过了。。。



dogedoge拥有着国内相当不错的CDN，国内访问飞快，但是国外的访问质量的确不如人意。【反正此博客面向中国大陆】



而且，DogeDoge拥有着很良心的处理参数：



```yml
w：宽
h：高
mode：模式 - crop 裁剪、clip 缩略
fmt：格式 - jpg、png、webp（原图为 gif，且没有 frame 参数时，不做任何裁切、缩略处理）
frame：1 - EOF帧，默认为 1 （对动画有效）
q：压缩质量 - 1 - 100（默认 90 ）
rect：指定位置裁剪 - top,left,w,h（若与 w / h 参数同时存在，则 会在 rect 裁剪过后，继续按照 w / h 的要求缩略）
pos：（配合 w / h ）裁剪位置 - top-left、top、top-right、left、center、right、bottom-left、bottom、bottom-right，默认为center
pos 还有一个特殊的值 auto，该值目前为 alpha 状态，可以根据图片重点来进行 pos 的位置取舍。
```



话说回来，DogeDoge也可以搭配PicGo使用。



```yml
接口地址：https://www.dogedoge.com/tools/upload/{Your_Token}
post参数：file
回调json：data.o_url
```

当然，现在的Doge图床还是处于免费的试用期【Creater】，不过好在试用期过后价格也比较合理，一般的tester也足够使用，目前看来SLA还是不错的。



不过，申请不到dogedoge图床也没关系，看下去你就会发现，白嫖的路千千万万，何必执着于一条。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_34.png)

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912205753.png?q=45)

## BackBlaze



推荐程度：★★★

具体可以看看[这篇文章](/p/ce240368.html)


## 千奇百怪的



## Github+JSDelivr



正如我所说的，这种组合已经被广大博主所采纳，并且网上教程已经泛滥了，在这里不再阐述。



## npm+JSDelivr&&Zhimg&&bdstatic&&自定义镜像



推荐程度：★★★★★

为什么很多文章都没有提到用npm做图床？我想其中很大的原因是，白嫖jsd做图床的，很多都是小白【或者不愿花时间在于此的大佬】，同样的，这些文章面向的都是这些人，毕竟，以拖拽方式上传的Github和命令行方式上传，我想，大都数人会选择前者吧。



可是，你们没有想到的是，github文件镜像【github.com.cnpmjs.org是站点镜像】只有jsd一个，npm镜像可远远不止这一个啊！



让我们看看分别镜像在jsd、zhimg、bdstatic的文件怎么样：



![](https://cdn.jsdelivr.net/npm/chenyfan-oss@0.0.1/1.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@0.0.1/2.jpg)

![](https://code.bdstatic.com/npm/chenyfan-oss@0.0.1/3.jpg)



【unpkg镜像用的是CloudFlare，国内加速效果不好，暂时不写】



jsd就不必多说了，国内拥有强劲的网宿节点支撑【虽然以前出现过网宿下游投毒】，速度丝滑无比，国外也有强劲的CloudFlare上岗，可谓国内外两不误。而且，jsd对于npm的package单文件没有大小限制，也就是说泡个视频也不是问题。



zhimg是知乎的unpkg镜像，也是一个不错的选择【阿里CDN】，知乎官方也未对此做出限制，日常使用是可以的。



bdstatic是百度的内用npm镜像，速度也很好【百度CDN】，但是请注意，bdstatic作为内用cdn，其拉取频率较慢，经常出现无法及时更新。



啊哈？不会上传？
![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_31.png)去[npm](https://npmjs.org)
官网注册个账号去,然后先：



```bash
npm login
```



接着：



```bash
npm init
npm publish
```

请注意，如果你之前用过淘宝镜像，那么请先手动切回源：



```bash
npm config set registry https://registry.npmjs.org
```



每一次发布图片后，你可以将原来的图片删除，更改`package.json` 版本号【向上增加】,然后`npm publish`即可



这个似乎可以搭配picgo，不过好像没这个插件，写起来也麻烦。。。



unpkg的国内镜像其实远远不止这些，包括七牛、饿了么、腾讯都有，不过这个就要自己找了。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/7DgSoyqwtYBxchE.jpg)

一些推荐的npm【or unpkg镜像】：

```markdown
【jsd出品，网宿国内节点】https://cdn.jsdelivr.net/npm/
【知乎出品，网宿国内节点】https://unpkg.zhimg.com/
【百度出品，网宿国内节点】https://code.bdstatic.com/npm/
【饿了么出品，网宿国内节点】https://shadow.elemecdn.com/npm/
【怎么都是网宿的】
```

或者说，你还可以自建unpkg镜像。

啊，你说你没有服务器反向代理unpkg？

其实，七牛的对象存储，腾讯的COS和阿里的OSS都是支持镜像回源的鸭！

七牛http流量每月免费10GB，腾讯的国内免费60GB6个月，作为自用完全足够了！

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/L6LVJL_1ZUM2ISQ]10R%7B3HF.png?q=45)

## ipfs



我曾经[写过关于ipfs的讲解](/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/) ,作为一个去中心化的存储系统拿来做公开图床其实挺不错的。

我个人搭建的ipfs镜像【托管于CloudFlareWorkers】：[https://ipfs.cyfan.top](https://ipfs.cyfan.top) ![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d78c3f4a5.jpg)

我个人搭建的ipfs上传API：<https://ipfsupload.cyfan.top>



```yml
接口地址：https://ipfsupload.cyfan.top/api/v0/add?pin=true
post参数：file
回调json：Hash
```



> 此处Hash获得的是文件的Qmhash，你还要依托ipfs镜像，如https://ipfs.cyfan.top/ipfs/{QmHash}



![](https://ipfs.cyfan.top/ipfs/QmctXmCyxkN72nzoHMAgw1geR7u9XvK7sLo72W4bDZsCm2)



顺便收录一些ipfs网关【可访问】：



```html
【北京 阿里云】https://hashnews.k1ic.com/
【香港 阿里云】https://ipfs.jbb.one/
【美国 DigitalOcean】https://ipfs.telos.miami/
【Amazon】https://ipfs.oceanprotocol.com/
```

你可以在<https://ipfs.github.io/public-gateway-checker/>找到更多



# 图片缓存服务



正如[##Imgur](##Imgur)所说的，imgur在国内已经无法访问了，但是，图片缓存服务可以啊！



![](https://search.pstatic.net/common/?src=https://i.imgur.com/Usdr0IT.jpg)





收集了一些图片缓存服务：



```http
【国内网宿节点，只能加载特定图床图片如imgur】https://search.pstatic.net/common/?src=
【Akamai节点，没有使用限制】https://imageproxy.pimg.tw/resize?url=
【CloudFlare节点】https://images.weserv.nl/?url=
【CloudFlare节点】https://pic1.xuehuaimg.com/proxy/
```



# PicGo的搭配使用



PicGo默认已经集成了部分图床，其拖拽上传、自动复制剪贴板实在赢得了无数人的心。但是，对于一些冷门的图床支持似乎就不太好，这时候你需要用自定义web图床实现这一切：



![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912205225.png?q=45)



我在上方介绍的图床如果支持web端上传，基本上就会写一个post请求，你可以依葫芦画瓢填写进去



![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912205449.png?q=45)



这样子你就可以实现较为丝滑的上传图片了：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912210009.jpg?q=45)







![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200912210420.gif?q=45)

【为了压缩方便删除了部分帧】



# 后言



实际上最保险的莫过于使用各大厂商的对象存储，当然这笔钱不大好使。
你也可以用自己的VPS搭建Chevereto，当然前提是你有VPS![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53de1a4d14d.gif)
