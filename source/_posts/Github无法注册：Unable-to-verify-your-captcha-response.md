---
title: Github无法注册：Unable to verify your captcha response
tags:
  - Github
  - 错误
  - 人机验证
  - 科学上网
categories: 干问题
copyright: true
abbrlink: 6708e52c
date: 2019-07-27 15:17:34
---
# 前言：
前几天就想注册一个Github账号，话说回来早就该注册了。
前面注册时也是正常的，结果在人机验证（Github Captcha）卡住了。
点击<kbd>Create an Account</kbd>,结果...
# 注册时报错：
```
Unable to verify your captcha response. 
Please visit https://help.github.com/articles/troubleshooting-connectivity-problems/#troubleshooting-the-captcha
for troubleshooting information.
```
一脸懵逼...
什么鬼,可是在按下之前人机验证不都是打钩了吗？U•ェ•*
???
# 试图解决：
网上查了一下，也有很多类似的事，如<https://blog.csdn.net/m0_37617778/article/details/83098985>
其中博主提出解决方案：
> 使用IE就可以了.

(/≧▽≦)/,笑死我了,连Chrome都做不到,怎么可能在IE中做到?
后来在评论中看到这样的话:

> **欧二lord：**
> 科学上网吧，我换了三个浏览器都不行，后来科学上网用chrome就可以了.

科学上网么...
我挂上代理后再次进入,结果还是老样子:
![老样子](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/GITHUB_ERROR.jpg "还是老样子啊")

...

# 最后解决:
然后我一直点着<kbd>Create an Account</kbd>,一直报错.大概点了5下后:
![新样子](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/GITHUB_CAPTCHA.jpg "=_=换了个样子")
终于报出真正的人机验证了!点进去,人机验证的方式是旋转小狗小牛到正确的位置.
人机验证完成,我就直接被跳到邮箱验证了.
^3^,终于解决了!
# 总结:
1. 浏览器:
	- [x] Chrome
	- [x] Firefox
	- [x] Chromium
	- [ ] IE
2. 网络状态
	- [x] 科学上网
3. 连续点击直到出现真正的人机验证
OK!
- - -

