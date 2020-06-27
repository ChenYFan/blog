title: Heroku~Websocket~Workers浅谈
author: CYF
tags:
  - 科学上网
  - Heroku
  - CloudFlare
  - Workers
categories:
  - 撸羊毛
date: 2020-03-21 08:08:00
index_img: https://img.cyfan.top/pic/cover/3.jpg
banner_img: https://img.cyfan.top/pic/cover/3.jpg
---
不好意思，我又抛弃了 `diaspora`(刚满一天),跳槽到了 `fluid`<img src="https://img.cyfan.top/pic/moji/huaji.png"> 而且感觉用户体验比 `diaspora` 好多了,因为以前 `NexT`是不能添加图片表情的，因为图片会强制居中，~~那玩意叫表情~~,所以只能使用emoji😭,可是emoji没有我想要的表情,<span class="heimu">比如滑稽</span>,所以一般使用颜文字（〃｀ 3′〃）,<span class="heimu">但颜文字还是没有滑稽</span>,所以一般强制居左居右;现在这个主题,图片默认靠左,而且可以环绕,~~所以很适合添加表情~~<img src="https://img.cyfan.top/pic/moji/yhuaji.png">.而且现在看来, `fluid` 并不比 `NexT` 差,该有的还是有,而且个性化程度很高,基本常用的插件都自己集成了<img src="https://img.cyfan.top/pic/moji/xy.png">,比如懒加载<img src="https://img.cyfan.top/pic/moji/zhuaji.png">.所以我可以随意添加图片啦!!!于是决定用这个主题了。

好了,今天带来的又是一篇撸羊毛的技巧.


> # 警告
> 脚本作者承认了该脚本违反了Heroku使用条款,所以使用该脚本造成Heroku账号被封本站概不负责!

# 简介

我这个脚本Fork了自己的Github小号，我以前的小号Fork的是onplus的repo,onplusFork并改版了mrluanma的repo了,而mrluanma是fork了shadowsocks组织的php项目,所以这个脚本是8年前的.....<img src="https://img.cyfan.top/pic/moji/lh.png">

不得不说这个脚本的生存时间是真的强，从2012年至今，这个脚本依旧可以用<img src="https://img.cyfan.top/pic/moji/xy.png">，只不过速度被硬生生压到了20kb/s，不过，我有提速的秘诀~~废话，没点真本事我在这儿瞎晃？~~

原理非常好理解，虽然教程上口口声声说原理是SS，但实际上脚本是基于NodeJS的WebSocks技术，所以其实就是个代理。

# 搭建

Heroku免费dyno也有550H/mo,自己用完全足够了,不过公开的话就够呛了,这个脚本注定只能偷偷摸摸的使用.(谁挂代理24小时挂着的呀)

本教程为了避免 `教授方法` 故此避嫌（其实就是懒得写），具体可以看看[我Fork的项目](https://github.com/ChenYFan/shadowsocks-heroku),里面写的已经很详细了,所以不要问我了....

# 测试

这个脚本虽然开源了，但是至今仍然能被正常访问，但经历了 `「羲农去我久」1PjT8X/2TCX3i。` 特别关照，80端口已经被限速成了一副狗样，如果不加速，那速度...上传慢速,下载20kb/s,勉强与i2p争锋.

# 加速

这个脚本并不是特别加速heroku的,我有一次在外网tele群里看到了有人说可以用workers复活加速V2Ray + ws + tls,当时我就灵光一闪,Heroku的Websocks也是同样基于这种想法的,为何不试试呢?

<details>
<summary>避免大规模泛滥和爬虫，已用很简单的方式加密脚本，点击展开</summary>

```
YWRkRXZlbnRMaXN0ZW5lciUyOCUwQSUyMmZldGNoJTIyJTJDZXZlbnQlMjAlM0QlM0UlMjAlN0IlMEFsZXQlMjB1cmwlM0RuZXclMjBVUkwlMjhldmVudC5yZXF1ZXN0LnVybCUyOSUzQiUwQXVybC5ob3N0bmFtZSUzRCUyMnNzLWJ5Y3lmLWV1MS5oZXJva3VhcHAuY29tJTIyJTNCJTBBbGV0JTIwcmVxdWVzdCUzRG5ldyUyMFJlcXVlc3QlMjh1cmwlMkNldmVudC5yZXF1ZXN0JTI5JTNCJTBBZXZlbnQuJTIwcmVzcG9uZFdpdGglMjglMEFmZXRjaCUyOHJlcXVlc3QlMjklMEElMjklMEElN0QlMEElMjk=
```

</details>


解密,替换第四行的herokuapp地址。

下载我repo里的ss-win32/64或ss-mac，选择对应系统，解压，编辑 `conf.json` 替换地址为workers的地址。

# 自选节点

由于workers默认解析至美国，延迟太大速度太低，可以绑定域名自选CDN或hosts修改。推荐hosts修改，这样省得DNS污染导致无法正常使用。

可以试试1.1.1.\*，日本节点,对于各种运营商支持不错.或者使用ipv6,避免水管拥堵.

# 表现:


![upload successful](https://img.cyfan.top/pic/post/pasted-77.png)

无论是作为备用还是主用,表现都还可以.毕竟老是白嫖我同学康哥在JMS的搬瓦工花的每月20多美元的SS线(100MBps)总是觉得愧疚.


# 后言

<span class="heimu">~~很好,又水了一篇~~</span>

但是前面说的很清楚,拿来应个急还可以,你要是拿来主用...那么很容易引起Heroku注意,账号封锁了就不要怪我喽<img src="https://img.cyfan.top/pic/moji/huaji.png">.

Heroku的服务器用的是Amazon的,所以不要指望带宽和延迟能很好.

非常推荐自定义域名后故意手动污染DNS至一些封锁ip避免引起 `「羲农去我久」1PjT8X/2TCX3i。` 注意,这个脚本如果加上privoxy,在监听至0.0.0.0,还可以给手机做代理,速度也就一般吧.


