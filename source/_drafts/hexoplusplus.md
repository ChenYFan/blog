title: HexoPlusPlus-从一个妄想到现实
author: CYF
tags:
  - Hexo
  - 集成部署
categories:
  - 好方法
date: 2021-2-5 15:40
index_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612509080000.jpg
banner_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612509080000.jpg
hide:true
---

我一直都习惯在线写作，但因为口袋里没钱，不能买服务器用动态博客，使用Hexo，即使实现了集成部署，想要在github上直接书写，尤其是出门在外有所灵感，国内手机登陆github真的是极其糟糕的体验。博客本就是碎片化写作和高质量文章发布处，使用hexo却使我无法发挥博客的用处。

先前，我曾使用白嫖的Euserv搭建的Typecho，也是用过wordpress.com白嫖的wordpress，，虽然但两个都不符合我对速度和可用性的追求，一个连CloudFlare能不能连上都是问题，另一个中国支持贼差【虽然可以用万能Worker可以替换加解决,但是就是不想用啊】。免空的选择又难以择手![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/194.jpg)，弄来弄去还是用回Hexo。

但是Hexo就是有一点不爽，每次使用的时候就必须要在本地进行构建静态网页，然后上传到GithubPage。后来实现了集成部署【没想到折腾了很长时间的集成部署最后用到这里了】，方便了不少，直接在Github上面改源代码。但相较于Typecho和Wordpress，没有后台的写作总感觉十分不方便![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896e9710dfd5.jpg)，每次更改源代码都要上Github![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896ece2ab57a.jpg)，在国内这种大环境下总是不方便的。

2020年最后一个月，我总是在想