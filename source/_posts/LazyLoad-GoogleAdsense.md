title: 怎么才能让GoogleAdsense不拖慢速度
author: CYF
tags:
  - Google
  - Adsense
  - LazyLoad
  - 赚钱
categories:
  - 好方法
date: 2020-07-06 14:19:00

index_img: 'https://img.cyfan.top/pic/postpic/20200706170836.jpg'
banner_img: 'https://img.cyfan.top/pic/postpic/20200706170836.jpg'
---
GoogleAdsense嘛，著名的赚钱大师，<span class="heimu">虽然只给我40美分，但毕竟我没有做很好的优化嘛，这也不怪谷歌</span>。由于以前用的是 `.ga` 的免费域名,在上一年将近4个月荒凉,基本日PV在没有和1之间徘徊.后来过年的时候买了一个 `.top` 总算撑起一层牌面,但是由于 `COVID19` ,嗯,所以每次提交2星期就给我来这么一出:

![](https://img.cyfan.top/pic/postpic/20200706143949.jpg)

嗯,![](https://img.cyfan.top/pic/moji/%E5%8F%A3%E5%90%90%E8%8A%B3%E8%A8%80.jpg)


后来呢,六月初提交了一次,结果显示,到第13天,百度统计才接收到来自台湾的Google流量,一天之后审核完毕.

真的懒啊， ![](https://img.cyfan.top/pic/moji/stick_60.png)

然而呢，GoogleAdsense也是著名的拖慢加载速度的JS。一年前的GoogleAdsense的js获取是链接美国，谷歌嘛，连不上也是正常的，现在基本解析都是上海和北京的谷翔，速度还行，但是加载广告的速度依旧难以忍受【实际也就6s的速度】。

欸，博客快满一周年了，当时建站的时候根本不管速度如何，能加载就成，不像现在，为了几百毫秒的事情纠结。![](https://img.cyfan.top/pic/moji/%E5%B0%8F%E7%9C%BC%E7%9D%9B.png)

# GoogleAdsense在后台偷偷加载的事情：



![](https://img.cyfan.top/pic/postpic/20200706154324.png)



可以看到，一个1.1kb的网页（上面的文字是通过js自动生成的），谷歌广告加载，需要将近10s加载完毕，加载大小将近1.5MB。

最夸张的是，我是通过海外代理访问的，如果放在大陆打开，这甚至好几次加载失败。

虽然谷歌拥有所谓的【异步加载】，可仍然会严重拖慢速度,并且，当用户没有打算看广告时，广告仍然会加载：

![](https://img.cyfan.top/pic/postpic/20200706154831.gif)

简单统计了一下，我打开网页用了1s，剩下9s我的浏览器上方一直在转【表示加载】，这种情况非常的讽刺，因为谷歌在PageSpeedLight中口口声声说需要降低js的渲染速度和外部链接加载。

实际上呢，刚刚的广告，谷歌向服务器发送了57次请求，其中26次js加载，总渲染达到3.87秒，接着是图片，总共将近9个，总大小1.4MB。

这种地步，已经让我无法忍耐了，可以想象，在打开博客，最开始跳出来的不是博文的内容，而是毫不相关的广告，这种情况，访客好感度能好才怪呢。![](https://img.cyfan.top/pic/moji/%E5%86%85%E4%BC%A4.png)

那么，怎么解决？

# 万物皆可懒加载！

![](https://img.cyfan.top/pic/postpic/20200706155515.gif)

访客在上方浏览时，广告不加载，直到划到最底下，广告才开始加载，这样大大提升好感【虽然总加载速度和时间还是这个样，但是在访客看来就很舒服】

应该给广告挑个好位置，那么在哪里最好呢？就我个人而言，我最希望看完博文和评论之后，在移动鼠标到下一篇的间隙稍微看看别的东西。就比如说那种3.3￥/月的主机广告我就忍不住想点一下【当然，发布者是不能点击自己的广告的】。那么，我就可以把广告代码扔在Valine评论框以下即可。

我们可以顺手拿一个谷歌广告实例开刀,我的博客广告单元是这样的;

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1878991317600808" data-ad-slot="6517667779" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

可以看到 `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` 即核心js,那么我们只要把这个js压住懒加载,直到划到底下才显示即可

那么问题来了,怎么压?

答: `window.addEventListener`

```
 <script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>
```

所以,简单的就这么做:

修改  `Valine.ejs` ，末端填上

```html

 <script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>

<!-- ADs-in-Blog-Under-Valine -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1878991317600808"
     data-ad-slot="6517667779"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

```

![](https://img.cyfan.top/pic/postpic/20200706163849.gif)

就比如现在这样【诶呀，顺手捞一把嘛】


 <script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>

<!-- ADs-in-Blog-Under-Valine -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1878991317600808"
     data-ad-slot="6517667779"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>




---

> 好了,我相信很多营销号【如果有】，绝对会把我上面的文章直接抄走。嗯，我非常讨厌营销号，对的，我在这里提前鄙视你们。以下是我关于这件事情的很多想法，如果你就是想简单优化，这就足够了，如果你有兴趣了解，你可以继续：


# 关于更多的优化


谷歌论坛上有人提到过，懒加载谷歌广告是否合规，标题是这样的：**Lazy Load Adsense fine with the policies?**

[原文](https://support.google.com/adsense/thread/31438569?hl=en)如下：

```
Many have already been asked, but unfortunately they have not received an answer. :-(

I like to optimize site speed in the browser, not AMP.
My questions are:

- Is lazy load for ads below the fold usefull?
- Is it fine with the policies? 

I've seen some pieces of code to implement it (https://css-tricks.com/lazy-loading-responsive-adsense-ads/, https://betterstudio.com/blog/lazy-load-google-adsense-wordpress/, https://gulshankumar.net/setup-lazy-loading-google-adsense-ad-units/). Are such examples allowed code to implement AdSense lazy loading?

Thanks!
```

噫,好,又是~~生肉~~.

简单的说,这位用户的担忧确实很值得思考,确实,AMP对于我来说就是个鸡肋，尤其是想我一样面向中国大陆访客，**AMP需要你能访问国外谷歌**。担忧的理由也写的很清楚，一是能不能起作用，二是违不违反政策。

可惜，所谓的QuickResponse依旧很答非所问，印证了用户的 **Many have already been asked, but unfortunately they have not received an answer**

嗯， **it makes sense NOT to have lazy loading on them** 、 **There is no "yes" or "no" answer to this in the policies** ，用户问有没有违反，可你只能回答【没有确切答案？】、【不需要懒加载？】

这谷歌客服<span class="heimu">一事无成</span>，像极了我的人生

不过说回来，有一件事情确实意思：

```
As such, it could be argued that behaviour draws attention to those elements. 
Drawing attention to ads is a policy violation.

所以，这可以说这种行为吸引了人们对这些要素变化的关注。
请注意这种吸引用户关注行为是违反政策。
```

所以，这就解释了我为何不用 `onscroll` 和 `IntersectionObserver API` ,
而采用不那么灵敏的 `window.addEventListener` 。

实际上，在刚刚的论坛问答里，提到了很多的lazyload方法，以 [https://css-tricks.com/lazy-loading-responsive-adsense-ads/] 这篇文章为例子:

![](https://img.cyfan.top/pic/postpic/20200706163646.gif)

这种方法在谷歌广告商增加一个遮罩层,加载网页时先加载遮罩,广告不加载;当滚动完成时,遮罩层消失,加载广告.可惜，此方法已失效，加载的时候谷歌检测到有遮罩层就会拒绝加载。

无论怎么说，懒加载广告，速度~~咻~~一下上去了，口袋里零花钱也多了。钱速双收，何为不乐乎？

最后，我瞟了一眼，看到了广告：

![](https://img.cyfan.top/pic/postpic/20200706164523.jpg)

阿里支付宝什么时候沦落到要打广告了？
