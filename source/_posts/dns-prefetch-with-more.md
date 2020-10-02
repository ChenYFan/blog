title: 多域名线程并发与DNS预解析
author: CYF
index_img: https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-24%20204123.jpg
banner_img: https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-24%20204123.jpg
tags:
  - DNS
  - 预解析
  - 优化
categories:
  - 好方法
date: 2020-08-24 21:08:38
lushkey: dns-prefetch-with-more.md
---


军训结束,感想不多,就一句话

> 【这就是个无限循环，每天重复训练一套动作，直到结束为止，毫无意义】

回家之后我帮父母看店,顺便点开了浏览器,浏览器卡死了30s,终于完全加载出了一个花花绿绿的主页,是大名鼎鼎的2345主页.

虽然我很反感这种杂七杂八的傻逼导航,我也试图将主页换成magi或dogedoge,但是父亲就很不习惯,原因很难以接受:

```
儿子啊，这样我怎么看天气啊。
```

。。。

于是我顺手右键点开了源代码，闲着无聊看看，结果却刚看看就找到了好~~康~~看的东西：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-24%20175355.jpg)

```
<link rel="dns-prefetch" href="https://union2.50bang.org">
<link rel="dns-prefetch" href="//h.2345cdn.net">
<link rel="dns-prefetch" href="//image.2345.com">
<link rel="dns-prefetch" href="//00imgmini.eastday.com">
<link rel="dns-prefetch" href="//01imgmini.eastday.com">
<link rel="dns-prefetch" href="//02imgmini.eastday.com">
<link rel="dns-prefetch" href="//03imgmini.eastday.com">
<link rel="dns-prefetch" href="//04imgmini.eastday.com">
<link rel="dns-prefetch" href="//05imgmini.eastday.com">
<link rel="dns-prefetch" href="//pos.baidu.com">
<link rel="dns-prefetch" href="//p.tanx.com">
<link rel="dns-prefetch" href="//gma.alicdn.com">
```



欸，`dns-prefetch` 是什么?

好吧，看起来你我都不懂.



## 多并发请求



请问，一号网页和二号网页哪个加载更快？

> 假设每张图片的大小为无限小,传输速度为无限大,`exmple1.com`是 `exmple.com` 的镜像



一号：

```
<!doctype html>
<html>
<body>
<img src="https://exmple.com/1.jpg">
<img src="https://exmple.com/2.jpg">
<img src="https://exmple.com/3.jpg">
<img src="https://exmple.com/4.jpg">
<img src="https://exmple.com/5.jpg">
<img src="https://exmple.com/6.jpg">
<img src="https://exmple.com/7.jpg">
<img src="https://exmple.com/8.jpg">
<img src="https://exmple.com/9.jpg">
<img src="https://exmple.com/10.jpg">
<img src="https://exmple.com/11.jpg">
<img src="https://exmple.com/12.jpg">
</body></html>
```

二号：

```
<!doctype html>
<html>
<body>
<img src="https://exmple.com/1.jpg">
<img src="https://exmple.com/2.jpg">
<img src="https://exmple.com/3.jpg">
<img src="https://exmple.com/4.jpg">
<img src="https://exmple.com/5.jpg">
<img src="https://exmple.com/6.jpg">
<img src="https://exmple1.com/7.jpg">
<img src="https://exmple1.com/8.jpg">
<img src="https://exmple1.com/9.jpg">
<img src="https://exmple1.com/10.jpg">
<img src="https://exmple1.com/11.jpg">
<img src="https://exmple1.com/12.jpg">
</body></html>
```



好了公布答案了,很显然<span class="heimu">二</span>号加载更快。



这时候有人就会问了，凭什么啊！不是说图片无限小吗？右边的反而会增加dns解析时间，难道不会更慢吗？



好吧好吧，实际上，你以为的加载时间是这样的



![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-24%20180740.jpg)



可是实际上是这样子的：



![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-24%20200044.jpg)



欸这就很有意思了同学们，为什么最后六张会出现Pending状态？



实际上，浏览器是有并发请求数目限制【通常是2-8个】，虽然这种比较坑人，但这也是为了避免同时大量并发导致资源占用过度，并且只针对同一个域名的（例如向cdn.jsdelivr.net发送请求）。即一时间针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞并进入Pending状态。



从用户的角度来说，浏览器不可能无限量的并发请求，因此衍生出来了并发限制和HTTP/1.1的Keep alive。 所以，IE6/7在HTTP/1.1下的并发才**2**，但HTTP/1.0却是**4**。 而随着技术的发展，负载均衡和各类NoSQL的大量应用，基本已经足以应对C10K的问题。 但却并不是每个网站都懂得利用domain hash也就是多域名来加速访问。因此，新的浏览器加大了并发数的限制，但却仍控制在8以内。



然而从服务器的角度来讲，我们也可以窥见，无限制的并发请求无异于一次小型CC，对于保护服务器和优化用户体验还是相当重要的。



从网站上入手，实际上这一点相当容易理解,2345一打开就是少则五十多张图片同时加载,甚至那些下拉箭头为了兼容ie都还是图片而非fontawesome,如果不绕过并发限制,岂不是一片空白.



那么问题来了，如何避免堵塞？



答案显然易见,多换几个域名不就行了??这样图片分别从两个域名获取，直接避免恼火的Pending，



2345主页中 `00imgmini.eastday.com` 至 `05imgmini.eastday.com` 五个域名均是拿来绕开并发限制的。



## Cookie Free

每请求一次资源，就会生成一次新的Cookie。如果网站每个资源cookie有1 KB、网站首页共150个资源时，用户在请求过程中需要发送150 KB的cookie信息，在512 Kbps的常见上行带宽下，需要长达3秒左右才能全部发送完毕。 尽管这个过程可以和页面下载不同资源的时间并发，但毕竟对速度造成了影响。 而且这些信息在js/css/images/html等静态资源上，几乎是没有任何必要的。



 解决方案是启用和主站不同的域名来放置静态资源，也就是cookie free。



> 注意此处所指的是主域名而非子域名，子域名的Cookie会和主域名共存



但是这样，就孪生出一个极其严重的问题，多个域名，必然会加重**DNS解析时间**和**SSL的握手时间**



## 避免DNS拥堵

一旦采用**多域名的方式绕开并发量限制**，就会导致浏览器在请求时必须一个一个解析过去，从`00imgmini.eastday.com`至`05imgmini.eastday.com`，然而DNS解析时间虽然短，但是多个解析必然导致严重拖慢速度，此时我们就需要进行预解析。



> 请注意，预解析在部分主流浏览器中支持，但是并不是所有页面和条件下都支持。



正常情况下打开一个网页，浏览器会做出以下动作：



1. 浏览器向请求网址发起DNS解析

2. 浏览器向服务器一个GET请求，拉起进入Pending

3. 浏览器解析html，完成初步CSS渲染【此时标题栏显示标题】

4. 进行js解析，并请求额外的资源



DNS解析时间的浪费主要阻塞在第四步，为避免解析时间的阻塞，我们采用`dns-prefetch`进行优化.



在html头添加

```html
<meta http-equiv="x-dns-prefetch-control" content="on" />
```

向浏览器表明我需要预解析。



接着【建议】在`<meta charset="UTF-8">` 后添加

```html
<link rel="dns-prefetch" href="//exmple.com">
<link rel="dns-prefetch" href="//exmple1.com">
```

表明强制解析这些域名。并且以后会一直记住这个域名的解析结果直到关闭为止。

\/\/开始是为了适配 `https` 和 `http` 。就是当前请求链接是https ，那么这个\/\/前面自动补充https ，反则补充http 。

# 建议

切记 `dns-prefetch` 不能滥用，它虽然能一定提升网页打开速度，但也会对浏览器产生一定负担。

这边的建议是，作为个人，我并不推荐将此方法运用于个人博客。原因很简单，你博客一次能有几张图片？如果你是开图站的，那么这个方法刚好可以运用到你的网站里，只要进行多域名分开并dns欲解析就可以进一步提升网站体验了。

最后上生肉：

> DNS prefetching is an attempt to resolve domain names before a user tries to follow a link. This is done using the computer's normal DNS resolution mechanism; no connection to Google is used. Once a domain name has been resolved, if the user does navigate to that domain, there will be no effective delay due to DNS resolution time. The most obvious example where DNS prefetching can help is when a user is looking at a page with many links to various domains, such as a search results page. When we encounter hyperlinks in pages, we extract the domain name from each one and resolving each domain to an IP address. All this work is done in parallel with the user's reading of the page, using minimal CPU and network resources. When a user clicks on any of these pre-resolved names, they will on average save about 200 milliseconds in their navigation (assuming the user hadn't already visited the domain recently). More importantly than the average savings, users won't tend to experience the "worst case" delays for DNS resolution, which are regularly over 1 second.
