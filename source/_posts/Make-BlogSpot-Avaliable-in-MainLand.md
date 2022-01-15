---
title: 打造一个可国内访问的Blogger（Blogspot）方法
tags:
  - Blogger
  - Blogspot
  - 谷歌
  - 博客
categories: 好方法
copyright: true
author: CYF
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/10.jpg'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/10.jpg'
abbrlink: 620f3e8d
date: 2020-07-29 10:43:19
---

Blog‍‌‍‌​‌‌‌‌​‌​‍‌​‍‌‍‍​‌‌‍‌​‌‍​‍‌​​‍‌‌‌​‌‍‌‌​‍‍‍​‍‍‌​​‍‌‍‌​‍‌‍‍​‌‌‍‌​‌‍​‍‌​​‍​‍‍‍​‌‍‍‌ger,一个干爽、免费的博客发布平台，作为主流的发布，提供免费的托管，免去了Typecho&Wordpress高昂的服务器费用，避免了Hexo&Jekyll静态博客无后台的缺陷，与CSDN、简书相比，可以绑定域名，界面干净，无广告【当然可以自己放自己的广告】。

实际上，当今写博客的软件数不胜数，主要分为一下三类：

- 服务器部署：典型代表：Wordpress\Typecho
- 无服务器托管：典型代表：Hexo\Jekyll\Gidea\Hugo\Hola等等
- 集成型网站：Blogger、简书、CSDN、cnblog、wodemo等等

上面所有软件，优缺点都有，具体看个人选择

当然，个人认为Typecho适合做个人博客，Hexo可以作为要求不高的人。集成性网站最主要的是只要安安心心写文章，不用管后端乱七八糟的代码。当然，最有问题的是大多数都不支持绑定域名，而且经常往网站上塞广告，自定义范围也不够。

接下来，我们扯扯集成博客中的一股清流：Blogger

> Blogger.com是由Pyra Labs公司创立，是目前全球用户数量最多的个人网志服务提供商。Pyra Labs和Blogger.com均被Google公司收购，成为其旗下的一项服务内容。
> Blogger提供免费主机Blogspot.com存放博客，用户不必写任何代码或者安装服务器软件或脚本，通过所见即所得界面轻松地创建、发布、维护和修改自己的网志。
> Blogger允许有经验的用户自行设计博客界面，其模板支持使用HTML和CSS进行编辑

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20084428.jpg)

实际上，由于Blogger托管于谷歌，写作域名 `www.blogger.com` 和托管域名 `*.blogspot.com` 均被MainLand所Ban。但是接下来来，我会讲讲如何打造一个能在国内大陆访问的Blogger

# 1. 注册Blogger

> 众所周知，请善用技术上网。

用谷歌账号登录 (https://www.blogger.com) ，没有？不是⑧不是吧不是扒，都0202年了，还不会去注册一个谷歌账号？

进入控制台，新建一个博客：

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20084652.jpg)

绑定域名,这一步随意,因为我们还要绑定一个自定义域名.

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20084847.jpg)

点击确定,一个博客就搭建好了!快吧?


![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20085021.jpg)


这时候,我们**善用技术上网**访问之前的域名,我这里是: `cyfblogger.blogspot.com`，打开：

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20085021.jpg)

搞定！搞完之后才知道，Blogger真正做到了什么叫1分钟创建一个博客，但这还不够，中国访客实际上还是打不开这个网站[1]。所以，接下来，我们要让这个网站能在中国访问。

目前我们有一下思路:

- 选择一个未被官方屏蔽的Blogger节点,此方法几年前还是可用的,最近不大灵光了,被屏蔽的差不多了
- 使用服务器反向代理Blogger,不推荐,有这个闲工夫你还不如直接用Typecho呢
- CloudFlareCDN反向代理,这似乎是唯一一个解决的办法.

[1]: 大多被污染到莫名其妙的ip去了,例如Facebook和Twitter

# 2.绑定自定义域名

由于 `*.blogspot.com` 泛域名被屏蔽,所以你必须要有一个自己的域名.

不推荐免费域名，因为免费域名无法自选CF节点，当然你也可以换别的方式。

这里推荐一个买域名的好网站：`https://namebeta.com/` namebeta并不是购买域名的地方,但是它可以帮你货比三家,让你跳出更优惠的方案,并且自带各种温馨提示,包括能不能备案,有没有被注册等等,比较适合刚入门想买域名的小白.

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20090113.jpg)

购买绑定NS不在谈论范围内,有域名的看下去

以下演示方便在CloudFlare官网里进行,采用免费域名演示,实际用笨牛CNAME解析为好.



![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20091514.jpg)

点击【设置】-【正在发布】-【自定义域名】

接着会报错：

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20092548.jpg)

提示没验证，没关系，去CloudFlare加上CNAME，注意验证过程中切记把橙色云朵点灰[2]：

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20092736.jpg)

回去，点击确定，勾选HTTPS可用性。

谷歌SSL验证和办法真的慢，没办法，喝杯茶，写点作业，过了10min，显示颁发成功：

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20093118.jpg)

回到CloudFlare，把访客访问的那条记录点亮橙色云朵，作为验证的记录不点亮.

国内访问试试？

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20094026.jpg)

这时候我们发现，虽然国内能直连了，但是背景图加载不出来，整个网页加载缓慢。控制台以下，我们就会发现，Blogspot请求了国外谷歌边缘节点的内容，包括背景图片和部分js。

所以，我们还要对博客主题进行加工。

[2]: 实际上下面那条记录是为了验证你有没有主域名控制权。

# 3.更改主题

> 演示方便，用Contempo Light主题
> 实际上用其它主题也差不多的，注意替换掉外链即可

![](https://npm.elemecdn.com/chenyfan-oss@1.0.1/2020-07-29%20094333.jpg)

点击备份，下载主题:

用Notepad++打开，方便处理

## 屏蔽加载

将`<head>`替换为`&lt;!--<head>--&gt;&lt;head&gt;`

将`</head>`替换为`&lt;/head&gt;&lt;!--</head>--&gt;`

将`</body>`替换为`&lt;!--</body>--&gt;&lt;/body&gt;`

## 替换背景

在49行左右，有这么一段代码：

```xml
<Variable name="body.background" description="Background"
      color="$(body.background.color)"
      type="background"
      default="$(color) none repeat scroll top left"  value="$(color) url(https://themes.googleusercontent.com/image?id=L1lcAxxz0CLgsDzixEprHJ2F38TyEjCyE3RSAjynQDks0lT1BDc1OxXKaTEdLc89HPvdB11X9FDw) no-repeat scroll top center /* Credit: Michael Elkan (http://www.offset.com/photos/394244) */;"/>
```

将其中的

```
https://themes.googleusercontent.com/image?id=L1lcAxxz0CLgsDzixEprHJ2F38TyEjCyE3RSAjynQDks0lT1BDc1OxXKaTEdLc89HPvdB11X9FDw 
```

替换为背景外链.

## 必要的JS替换

打开F12,我们会发现,有一个资源阻塞了请求:

`https://resources.blogblog.com/blogblog/data/res/2629068285-indie_compiled.js`

但这个是必须的,我们要保留,搜索 `<b:template-script async='true' name='indie' version='1.0.0'/>` 并删除,将其替换成: 
`<script async='async' src='https://cdn.jsdelivr.net/gh/chenyfan/chenyfan.github.io/1468123664-indie_compiled.js'></script>`

> 当然你也可以用自己的链接.

## 解决缩略图问题

【感谢阿虚同学的博客解决此方法】

将 此JS 代码放置于 </body> 标签前：

```xml
<b:if cond='data:blog.pageType in {"index","searchQuery","searchLabel","archive"}'> <!--如果当前页是首页，搜索页，标签页，那么代码继续执行-->
    <script defer='defer'>
        //<![CDATA[
        var postThumbnails = document.getElementsByClassName("post-thumbnail");
        var postContents = document.getElementsByClassName("post-text");
        for (var i=0;i<postContents.length;i++)
        {
            var postContent = postContents[i].innerText;
            var imgReg = /<img.*?(?:>|\/>)/gi;
            var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
            var imgTags = postContent.match(imgReg);
            imgSrcs = imgTags[0].match(srcReg);
            imgSrc = imgSrcs[1];
            postThumbnails[i].setAttribute('src', imgSrc);
        }
        //]]>
    </script>
</b:if>
```

修改模板，搜索data:post.featuredImage，在缩略图处改成下代码：

```xml
<b:if cond='data:post.featuredImage'>  <!--判断文章内是否有图片，有则代码继续执行-->
    <div class='snippet-thumbnail'>  <!--创建一个 div 容器，缩略图放置在这里-->
        <img class='post-thumbnail' sizes='(max-width: 800px) 20vw, 128px' src='https://ae01.alicdn.com/kf/HTB1Gb7LUmzqK1RjSZFL5jcn2XXac.gif'/>  <!--预先放置一个加载图片，增强用户体验-->
        <textarea class='post-text' style='display:none;'><data:post.body.escaped/></textarea> <!--这里放置文章全文，图片从中提取，样式设置为不显示-->
    </div>
</b:if>
```

## 头像、icon设置

搜索 `profile-img` 约3899行：

```xml
  <img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:authorPhoto.height' expr:src='data:authorPhoto.image' expr:width='data:authorPhoto.width'/>
```

将其直接改成

```xml
<img class='profile-img' src="你的头像外链地址">
```

## 字体问题

我测试时没有发现字体相关问题，请求字体的网址gstatic.com在国内可以访问，虽然部分地区莫名其妙解析到澳大利亚facebook，但大多数都正确解析时国内谷翔。

## 评论问题

默认的Google评论肯定时不行的，留着还拖慢加载，推荐用DiqusJS或Valine.

修改主题，搜索 `<b:includable id='comments' var='post'>` 约3453行至 `</b:includable>` 3511行,全部删除,将以下代码填写回原处

```
<b:includable id='comments' var='post'>
                      <div id='disqus_thread'/>
                      
</b:includable>
```

在末端 ` &lt;!--</body>--&gt;&lt;/body&gt;` 前添加:

```
<script>
var dsqjs = new DisqusJS({
    shortname: '',
    siteName: '',
    identifier: '',
    url: '',
    title: '',
    api: '',
    apikey: '',
    admin: '',
    adminLabel: ''
});
</script>
```
以上代码具体配置前往  [https://github.com/SukkaW/DisqusJS#%E4%BD%BF%E7%94%A8 ] 配置

完

Demo&&以后的日记本:[https://moe.cyfan.top ]

---

推荐自选CDN加速.

注意以后写文章图片必须是外链,可以试试sm.ms
