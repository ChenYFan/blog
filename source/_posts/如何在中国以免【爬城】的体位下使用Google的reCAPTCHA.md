---
title: 如何在中国以免【爬城】的体位下使用Google的reCAPTCHA
date: 2019-07-29 15:11:19
tags:
- 科学上网
- Google
- 人机验证
- 奇淫巧技
- Tampermonkey
- JavaScript
categories: 好方法
copyright: true
---
# 前言：
在中国，每每用到[clipconverter](https://www.clipconverter.cc)时下载youtube上的视频,reCAPTCHA一直没有加载出来.
后来意识到Google的人机验证好像在中国**不能用**.
......
这是就进入`前有狼后又虎的尴尬状态了`,,ԾㅂԾ,,.
不代理,人机验证加载不出来,挂代理,50Mbps的代理速度估计是要把我活生生等死.
## 为什么在中国不能用??????
自2014年5月27日后，Google 公司的各项服务遭到疑似来自`不可告人的秘密`的~~善~~意干扰，导致中国大陆地区的用户无法正常使用其服务的事件。自当天起，来自中国大陆的用户发现 Google 旗下的各个分站以及 Google 的其他服务（Google 搜索、Google Play、Gmail 等）均无法正常访问与使用，所有 google.cn 以外的 Google 服务均受影响无法使用，用户甚至无法登陆 Google 账户。然而，不同于 2009 年至 2013 年仅针对敏感时期的行为规律，XX运动纪念日结束后攻击者对 Google 的~~善意~~打扰仍未停止。——维基百科
而 reCaptcha 人机验证就是 Google 的服务之一。所以，reCaptcha 也没能逃过这次封锁，才导致国内 reCaptcha 验证码无法显示。

> **现在打个岔**
> 本文图片较少,故接下来要强制添加图片:
> ![强制有图](https://img.cyfan.top/pic/QZYT.png "强制有图")
> 哈哈哈哈哈哈哈哈(●'◡'●)开玩笑.

## reCaptcha有哪些,有什么用?
reCaptcha有三个版本V1、V2、V3,通常现在使用的是v2.
这些往往在原网站上的去，铀用上recaptcha的网站，比如谷歌镜像之类的。

# 试图解决:
## 直接绕开:
既然你不让我用,那我就不用了.(￢︿̫̿￢☆)
打开`开发者工具`找到js脚本,指向空白.
当然这样行不通了.
## ATP 
~~就是[Ass-To-Pussy](https://baike.baidu.com/item/atp/10948513?fr=aladdin)~~
w(ﾟДﾟ)w我在说什么????千万不要点链接啊啊啊!
呸呸呸,就是指在爬出去的情况下通过人机验证,再回来下载.
而这也很快被防盗链挡住了.
emmmmmmm......

# 后来解决:
其实大家都没想到,reCaptcha在国内还是有镜像的.
网址是:<http://recaptcha.net>,很简单暴力的域名.
甚至连维基中文都认为镜像网址挂了。因为你直接打开,恭喜,你会收获这个

<font size=92>Not Found</font>
<font size=67>Error 404</font>

于是就孪生了两种方法:
## 小白解法：
Tampermonkey脚本：(感谢原作者an_anthony的贡献！)
```Javascript
// ==UserScript==
// @namespace			xyz.tree0
// @name					reCaptcha 验证码镜像加载
// @description		替换使用官方地址的 reCaptcha 为官方镜像地址，让墙内用户的 reCaptch 能正常显示。
// @description		似乎只能用于 reCaptcha v2
// @author				an_anthony
// @version				0.1.2
// @grant					none
// @match             *://*/*
// ==/UserScript==

var scrArr = document.getElementsByTagName("script");
for(var k = 0;k < scrArr.length;++k)
{
	if(scrArr[k].src !== null && scrArr[k].src.indexOf("https://www.google.com/recaptcha/api.js") != -1){
		var scrAppend = document.createElement("script");
    scrAppend.src = scrArr[k].src.replace("google.com","recaptcha.net");
		scrAppend.type = "text/javascript";
    scrAppend.async = true;
    scrArr[k].parentNode.appendChild(scrAppend); 
    scrArr[k].parentNode.removeChild(scrArr[k]);
    alert("已替换该页面的 reCaptcha 地址，如果还未显示出 reCaptcha Logo，请稍等(约30s)");
		break;
	}
	
}
```

> **Attention！**
> 对那些使用了 Content-Security-Policy 属性的网站无效。Content-Security-Policy 属性会验证资源的地址，导致更换的镜像地址被阻止。如果你查看了 F12，会发现很多类似下面的错误信息：
>> Refused to load the script ‘xxx’ because it violates the following Content Security Policy directive
> 解决方案:请使用大神解法：

## 大神来此：
打开开发者工具，搜索`www.google.com/recaptcha/api.js`
`.com`之类的以情况而定.
接着把他替换成`https://recaptcha.net/recaptcha/api.js`
等一会儿就好了.
其实这与js原理相同，但此种解法在CSP检测完成后进行，相当于绕开CSP。

完毕!

- - -

