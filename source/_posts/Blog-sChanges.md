title: 博客DNS解析是不是发生了亿点点变化
author: CYF
tags:
  - CloudFlare
  - DNS
  - CDN
categories:
  - 又双叒叕是水文
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200628102330.jpg'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200628102330.jpg'
date: 2020-06-07 11:54:00
update: 2020-06-28 09:59:08
---

啊,还有三星期就要中考了,中考完就休息两天是想灭了我吗?博客感觉要永久性拖更了，大概也就一两个月更一篇吧。累了累了（╯︿╰）.![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/抽烟.png)

这个星期回来呢，博客从内部发生了一些小变化，来来来，说说这些变化:


原先接入CloudFlare的时候呢,是通过NS官方接入的,当然了,官方默认的CDN直接给我绕道大洋彼岸去了,什么CN2都没有,速度只有几十KB,后来[也有了自创NS官方接入加速方法](/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/).走香港日本确实好了很多.

然而问题很多,比如说没有负载均衡,联通走1.0.0.\*直接绕道加拿大,卡的一批,延迟甚至达到`300ms`.

或者说比较头疼的并发数限制,一分钟1000次直接抛异常[后来图片迁出解决了这个问题].而且反代两次流量很大。

再比如说网站域名问题也很大，我是在万网购买的，但是万网的DNS很差，后来就放在CloudFlare上，但是万网续费嫁给比腾讯贵一块钱，所以我就悄悄地迁移到腾讯上，正好赶上6|4，将近10天才迁移完毕。

所以趁迁移的机会，接入了bnxb，实现了真正的加速 ![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E6%97%A0%E6%89%80%E8%B0%93.png).

当然，负载均衡还是做得很好的，移动直接走香港，相当的快，延迟<50ms:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607133744.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607134252.png)

电信走美国CN2线路和日本大阪线路,延迟压在200ms还是可以的:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607134104.png)

~~就NM联通离谱,就没有什么好线路链接,走香港都给我绕道新加坡.延迟高的吓人：~~

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607134345.png)

~~这里就对联通用户说声对不起了~~

抱歉啊，这个星期刚发现 `104.16.246.*` 和 `104.16.245.*` 对联通相当好，速度500kb/s都没问题<span class="heimu">【虽然延迟还是很大】</span>
![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200628090939.png)
![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200628095806.png)

~~真香。~~

Google评分也高了不少,电脑端评分上90了。
![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200628091136.png)
当然，本站基本上都是托管于CloudFlare的，我也没这个闲工夫把每一个域名负载均衡，最简单的就是设置一个已经负载均衡的域名，然后直接CNAME，本站加速域名为 `cdn.cyfan.top` ,如果你不想自己设置10个ip负载均衡也可以选择我的,配置如下

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607134808.png)

当然CDN我会时不时调整一下,以实现访问加速

关于图床呢,现在直接用PicGo了,上传图片粘贴复制即可,快了不少,剪贴板直接上传,可为神器一枚:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607134957.png)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200607135057.png)

以及这里再问候一下腾讯云海外加速总管的祖宗，出口怎么就是Amazon了？连日本CDN海外加速节点都是200ms，你玩我呢？CDN一天收费0.5元，你是坑我呢？现在图床CDN换成CloudFlare了，速度还可以。

6|4那一天我ping了一下我的博客,延迟虽然很严重200ms,但至少还能连上???下次懒得在那一天闭站保护了.

溜了溜了,应该是中考前最后一篇水文章.
