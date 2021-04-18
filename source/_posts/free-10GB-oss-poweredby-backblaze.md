---
title: 白嫖！10GB免流海外BackBlaze对象存储【可套CDN】
author: CYF
tags:
  - 图床
  - COS
  - 对象存储
  - 免流
categories:
  - 爱分享
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-07-09%20110742.jpg'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-07-09%20110742.jpg'
lushkey: free-10GB-oss-poweredby-backblaze.md
abbrlink: ce240368
date: 2020-07-09 09:37:00
---
腾讯云的COS就是个暗坑，进去的时候大肆宣扬用户前六个月免费，但实际上免费仅针对于存储于国内的bucket，而存储于国外的阶梯定价又极不合理，我的COS在一个月走了流量1.6GB。按照官方定价

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20094557.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20094840.jpg)

大概就是0.7左右。

但是，腾讯云从来就是不满1GB按1GB计算的jier，我瞟了一下账单：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20095520.jpg)


不是吧啊Sir，一个月一块多，那我为什么要用你的东西啊![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E5%90%90.png)！

很难让人理解，我CDN设置为一个月的超长缓存，但腾讯还是给我计价1GB，和回源没什么区别。

后来F12看了一下，腾讯悄悄地在header里添加max-cache为43200s，12个小时强制清除缓存。Asir，赚钱不带这么玩吧。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E4%B8%AD%E6%9E%AA.png)

最让我憋屈的是，`cyfan.top` 是没有备案的，使用国内的bucket就不给绑定域名，害的我只能用香港，但是香港的绑定域名是不给SSL的，偏要套一层CDN才行。可\*\*\*腾讯云默认CDN是亚马逊的，速度渣的很，用来用去还是用回CloudFlare。可是，既然有CloudFlare，那我为什么不用免费的Github服务啊！![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E5%93%AD%E6%B3%A3.png)

这就是逼着我要换一个图床啊么![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/qgbf.png)。

后来twitter上有人发推推荐 `backblaze` 的海外存储，使用了一下，发现完全满足需求。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/stick_27.png)

# Backblaze

2015年9月，Backblaze推出了新产品B2 Cloud Storage。作为基础架构即服务（IaaS），它的目标是软件集成（尽管也提供Web前端和API）。它直接与类似服务Amazon S3，Microsoft Azure和Google Cloud竞争。在2018年4月，Backblaze宣布了云计算合作伙伴关系，它将直接将Backblaze的数据中心与其合作伙伴Packet和ServerCentral连接起来，为存储在B2 Cloud Storage中的数据提供高性能的云计算，而无需支付任何费用。

B2 Cloud Storage非常客气，有以下优点：

- 用户永久免费**10GB**直链存储
- 每天**1GB**下行流量
- 无限量的上传流量
- 每天下载请求**2500**次免费
- 每天上传请求**2500**次免费
- 基于CloudFlareCDN

而且超出免费额度的价钱也十分合理【不过我不会往里头冲一分钱的！】 ![https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20100931.jpg](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20100931.jpg)

然而我偶然得知，Backblaze加入了CloudFlare的 [带宽联盟（ Bandwidth Alliance）](https://www.cloudflare.com/bandwidth-alliance/) Backblaze与CloudFlare之间的流量直接免费，也就是每天**无限量**下行流量，配上CloudFlare超长缓存，每天下载请求无限次免费。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E5%BE%97%E6%84%8F.png)

而且这样与我用COS的速度是差不多的，那我何必用付费的COS呢？

# 注册：

去[B2 云存储](https://www.backblaze.com/zh_CN/cloud-storage.html)注册，可以用Google快捷登录：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20101845.jpg)

注册之后可能会要求你绑定手机号，乖乖的绑定自己的中国手机号吧【可能会产生短信费用，大概0.1￥】，不要想什么歪门邪道
，毕竟很多公开的手机号是不能用的，而且GoogleVoice也被拒绝了。

新建一个桶，设置为公开：

上传一个文件，点击右边的信息按钮，我们要在这里获取一些信息：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20102255.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20102940.jpg)

看到那个友好链接吗，这就是CloudFlare加速的链接，但这个不是我们想要的链接，我们要自定义域名，毕竟默认的加速相当蛋疼。

# 自定义域名

这一步需要你有个域名，开个子域给图床：

由于我是bnxb接入的CloudFlare，所以我首先要去 `cdn.bnxb.com` ，将 `assets.cyfan.top` 指向 `f000.backblazeb2.com` 【每个人都可能不一样，自己看情况】，并开启CDN，然后在DNSPOD里CNAME负载均衡一下，这里就不放图了。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E6%9C%9F%E5%BE%85.png)


# 缩短链接

默认即使绑定域名后，链接大概是这样滴：

```
https://assets.cyfan.top/file/CYF-PicBed/pic/postpic/2020-07-09%20102255.jpg
```

可以看到,中间多了 `/file/CYF-PicBed/` ,这并不是我所需要的,所以我们要把它变成这样:

```
https://img.cyfan.top/pic/postpic/2020-07-09%20102255.jpg
```

你要知道，我有一大堆图片都是直接以 `https://img.cyfan.top` 存在底下的，NotePad++可以批量改，但是我在外链也放了很多啊.所以只能改域名。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E5%90%90%E8%A1%80%E5%80%92%E5%9C%B0.png)

前往CloudFlare,设置页面规则,进行301转发:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20103634.jpg)

其中 `$1` 是CloudFlare的匹配符号，此规则意思是将所有的 `https://img.cyfan.top/*` 跳转向 `https://assets.cyfan.top/file/CYF-PicBed/*` 

去 `cdn.bnxb.com` ，将 `img.cyfan.top` 指向 任意一ip,比如 `1.0.0.1` 并开启CDN，然后在DNSPOD里CNAME。

此后,所有访问图片都会在里头跳转一下,外面基本看不出来有什么差别.

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20104238.jpg)

# 开启CORS|加长缓存时间

就这样结束了么？没有，你会发现访问的链接里所有的资源都是MISS，这是因为Backblaze默认不缓存![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/stick_65.png)。

所以，自己设置呗！


点击桶，进入桶设定：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20104802.jpg)


里头写上:

```
{"cache-control":"max-age=43200000"}
```

这个意思是强制缓存 `43200000` ,大约是50天.然而这里注意一下，时间太长有个问题，你修改一张图片，外面可以能要50天才能更改，这样只能通过手动清除缓存做到了。

点击CORS设置,选择:

```
与所有HTTPS来源共享此存储桶中的所有内容。
```

即可.

# 实测


![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/2020-07-09%20105402.jpg)

免费额度基本用不完.

可惜PicGo没有支持Backblaze，我只能通过网页端上传![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E8%A3%85%E5%A4%A7%E6%AC%BE.png)。

然而有一件事情非常蛋疼，你丫的根目录上传的时候是不会创建文件夹的，一次上传会把文件夹里的图片全部上传到根目录。所以，我只能手动创建文件夹，这个痛苦我真的是，![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/tx.png)。

嗯，用了一个晚上，感觉还是挺香的，鹅厂的COS收费确实不合理，也要学学外面人家收费啊！

---

溜了溜了，作业还没写完呢![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/邪魅一笑.jpg)
