title: HexoPlusPlus-从一个妄想到现实
author: CYF
tags:
  - Hexo
  - 集成部署
categories:
  - 好方法
date: 2021-2-5 15:40
index_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612828904000.jpg
banner_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612828904000.jpg
hide:true
---

我一直都习惯在线写作，但因为口袋里没钱，不能买服务器用动态博客，使用Hexo，即使实现了集成部署，想要在github上直接书写，尤其是出门在外有所灵感，国内手机登陆github真的是极其糟糕的体验。博客本就是碎片化写作和高质量文章发布处，使用hexo却使我无法发挥博客的用处。

先前，我曾使用白嫖的Euserv搭建的Typecho，也是用过wordpress.com白嫖的wordpress，，虽然但两个都不符合我对速度和可用性的追求，一个连CloudFlare能不能连上都是问题，另一个中国支持贼差【虽然可以用万能Worker可以替换加解决,但是就是不想用啊】。免空的选择又难以择手![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/194.jpg)，弄来弄去还是用回Hexo。

但是Hexo就是有一点不爽，每次使用的时候就必须要在本地进行构建静态网页，然后上传到GithubPage。后来实现了集成部署【没想到折腾了很长时间的集成部署最后用到这里了】，方便了不少，直接在Github上面改源代码。但相较于Typecho和Wordpress，没有后台的写作总感觉十分不方便![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896e9710dfd5.jpg)，每次更改源代码都要上Github![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896ece2ab57a.jpg)，在国内这种大环境下总是不方便的。

2020年最后一个月，我总是在想如何解决这个问题，我的要求很简单，能弄个在线书写环境就好了。

由于我的文件是存储在Github上，于是我第一个先去Github文档查找相关资料，果不其然，Github的API能够上传、删除、下载【废话】、列表文件，并且能通过base64上传，直接免去了手写头的问题.关于调用限制，没鉴权时每个ip每小时只有**60次**，但一旦鉴权每个用户每小时就有**5000次**。这些api完全能够支撑起一个在线写作的环境,<https://developer.github.com/v3/guides/getting-started/>更是详细讲解并提供了数个例子。

# 原理

譬如罢，上传一个文件，首先你要鉴权，在header中写入：

```url
Authorization: "token  ${hpp_githubimagetoken}"
```

> Anyone,你也可以在url后面加上`?access_token=`传参，但是这样不安全，Github官方也是提示将在明年彻底禁用传参鉴权

但是记得GithubAPI不允许空User-Agent，所以你还得在header中加入UA：

```url
user-agent: "GoogleChrome",
```

OK这么一搞鉴权这一块就完毕了，接下来，我们要搞基本功能

Github更改一个文件的url是一样的，为了方便接下来的书写和表达，我们统一将以下url称为RESTURL：

```url
https://api.github.com/repos/${Github用户名}/${Github仓库名字}/contents/${Github文件路径}/${Github文件名}?ref=${Github分支}
```

## 新建

如果是新建,body中这么写

```json
{
    branch: ${上传的分支},
    message: ${上传的信息},
    content: ${base64过的文件}, 
    sha: ""
}
```

接着使用`PUT`形式访问RESTURL

创建成功后状态码应该返回：

```status
201 Created
```

## 更新

body与新建类似，但是首先你要获取该文件sha值，使用GET访问`RESTURL`