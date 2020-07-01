---
title: Gitalk详细踩坑记录
date: 2020-02-26 09:11:17
update: 2020-07-01 11:03:12
tags:
- 踩坑
- 手动填坑
- 评论系统
- 评论
- Gitalk
- Github
categories: 爱折腾
copyright: true
index_img: 'https://img.cyfan.top/pic/postpic/20200701111700.JPG'
banner_img: 'https://img.cyfan.top/pic/postpic/20200701111700.JPG'
---
# 前言

没想到怎么快就更新一篇了。

这真的是踩了个巨坑啊。

## 为什么又要切换回Gitalk？

咳咳，这事情还得从上一年12月说起。

当时正忙于学业，等到期末考完以后接受到一份LeanCloud邮件，大概内容就是我的API1个月没有调用被强制归档了。

<span class="heimu" title="你知道的太多了">那也不能怪我啊！我博客没人来就说我缘故咯？</span>

然后登陆上LeanCloud，恢复数据，然后就没有然后了。

昨天刚刚更新了一篇白嫖记录，登入博客后却发现没有更新。

接着去Coding，告诉我Coding转型了，接着用Pages要实名认证。<span class="heimu" title="你知道的太多了">我要是能实名认证那我不早就买一台国内服务器备案了？？？</span>

没办法，只好又迁回Github。好在Github可以给每一个仓库绑定一个域名，（大不了以后更新博客麻烦点罢了。）

接着折腾了Github好一会儿，包括后来解决Coding赖着域名不放，国内ip解析错误的原因。

结果今天早上登陆却发现：

![图片](https://img.cyfan.top/pic/gitalk/1.jpg "LeanCloud报错")

...

打开LeanCloud官方文档,并没有找到答案.

也就是说,我还不知道错误发生在归档后还是在迁移后的.

况且本来LeanCloud开发版每天休眠6h我也受够了,于是打算迁到Gitalk.

# 正文

## 数据:

数据肯定是没法恢复了,毕竟是要Github账号的.

## 配置:

Gitalk官方说明安装只有简单的几句话:


``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<!-- or -->
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
```

> ...
> 添加一个容器：
> `<div id="gitalk-container"></div>`
> 用下面的 Javascript 代码来生成 gitalk 插件：
> 


```
var gitalk = new Gitalk({
  clientID: 'GitHub Application Client ID',
  clientSecret: 'GitHub Application Client Secret',
  repo: 'GitHub repo',
  owner: 'GitHub repo owner',
  admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')
```

当然,在hexo里面使用估计就没有那么简单了,所以我最终按照里面自带集成的Gitment模板以及文档整理了一份.

实际上Gitment和Gitalk的核心原理是一样的,内容现实,所以最终还是成功了.

## 注册:

> 无图警告！


点开 [https://github.com/settings/applications/new], 注册一个App

:: Register a new OAuth application
必填.填写这个app的名字(其实随便起就好了)
:: Homepage URL
必填,博客根目录,不能在最后带`/`
:: Application description
胡乱填写的简介
:: Authorization callback URL
必填。与Homepage URL一样,是回显目录

点击Register，注册成功！

接着会跳转，此处就不截图了。

其中Client ID和Client Secret在后面的配置中需要用到，到时复制粘贴即可

## 配置：

根据Gitment样式，整理如下

### 1
进入 `\themes\next\layout\_third-party\comments\` 新建 `gitalk.swig` 文件,里面填写一下内容:

```html
{% raw %}
{% if page.comments && theme.gitalk.enable %}

  &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/gitalk/dist/gitalk.css&quot;&gt;
  &lt;script src=&quot;https://unpkg.com/gitalk/dist/gitalk.min.js&quot;&gt;&lt;/script&gt;
   &lt;script type=&quot;text/javascript&quot;&gt;
        var gitalk = new Gitalk({
          clientID: &#x27;{{ theme.gitalk.ClientID }}&#x27;,
          clientSecret: &#x27;{{ theme.gitalk.ClientSecret }}&#x27;,
          repo: &#x27;{{ theme.gitalk.repo }}&#x27;,
          owner: &#x27;{{ theme.gitalk.githubID }}&#x27;,
          admin: [&#x27;{{ theme.gitalk.adminUser }}&#x27;],
          id: location.pathname,
          distractionFreeMode: &#x27;{{ theme.gitalk.distractionFreeMode }}&#x27;
        })
        gitalk.render(&#x27;gitalk-container&#x27;)           
       &lt;/script&gt;
{% endif %}
{% endraw %}
```

### 2

修改 `\themes\next\layout\_third-party\comments\` ,在最后一行填下:

```
{% raw %}
{% include 'gitalk.swig' %}
{% endraw %}
```

### 3

修改 `\themes\next\layout\_partials\comments.swig` ,在 `{if}` 之下, `{elseif}` 之上填下:

```html
{% raw %}
{% elseif theme.gitalk.enable %}
 &lt;div id=&quot;gitalk-container&quot;&gt;&lt;/div&gt;
{% endraw %}
```

### 4

新建 `\themes\next\source\css\_common\components\third-party\gitalk.styl` ,填下:

```css
.gt-header a, .gt-comments a, .gt-popup a
  border-bottom: none;
.gt-container .gt-popup .gt-action.is--active:before
  top: 0.7em;
```


### 5

修改`\themes\next\source\css\_common\components\third-party\third-party.styl`,最后一行填下

```css
@import "gitalk";
```

### 6

最后,在`\themes\next\_config.yml`最后一行填下:

```yml
gitalk:
  enable: true
  githubID: github帐号  #如ChenYFan   
  repo: 仓库名称   # 例：blog
  ClientID: Client ID
  ClientSecret: Client Secret
  adminUser: github帐号 #指定可初始化评论账户
  distractionFreeMode: true
```

### 结束?

打开博客,你会发现有一些博文评论是正常的,但是有一些博文你可能会看到:

Error:Validation Failed

没错，这不是我的错<span class="heimu" title="别打我！">滑稽狗头保命</span>。

这个错误在Gitalk用户里非常常见。

为什么？

这还得从官方文档讲起：

```
...
- owner String

-必须. GitHub repository 所有者，可以是个人或者组织。

-admin Array

-必须. GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。

-id String

-Default: location.href.

-页面的唯一标识。长度必须小于50。
...
```

注意一下id,这个最终会成为Github issues中的lable之一,但是lable是有字数限制的,50个英文单词.

但是有人会问我的中文名加上去之后也没有50字啊.

对啊,可是Gitalk会将其转码,比如说`留言板`三个字最终会转成`/%E7%95%99%E8%A8%80%E6%9D%BF/`<span class="heimu" title="你知道的太多了">这又♀长又♂粗</span>的文字.

但是第一个Lable不能重复,重复后两个issues的两个Lable就相同了,这样两个评论就混在一起了.

所以网上就有人开始讨论怎么解决了.

### 规避解码:

毕竟Github Lable其实是支持中文的...<span class="heimu" title="你知道的太多了">你怎么不早说!</span>,所以思路很简单,规避解码即可.

返回步骤1,第11行,默认值是`location.pathname`也就是路径,规避解码很简单,把它替换成`decode(location.pathname)`就可以啦.

当然这个办法最终还是有效的:

![图片](https://img.cyfan.top/pic/gitalk/2.jpg "规避解码")

但是,但是,你还记得我有一篇文章的题目吗: `CloudFlare%EF%BC%9A%E5%8F%AE%E5%92%9A%EF%BC%81%E6%82%A8%E7%9A%8415%E5%B9%B4%E5%85%8D%E8%B4%B9%E6%B3%9B%E5%9F%9F%E5%90%8DSSL%E8%AF%81%E4%B9%A6%E5%88%B0%E4%BA%86%EF%BC%81`


没错,解码以后就是: `CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！`
加上博客域名和路径,将近60字.

这个方法依旧没有解决根本问题.


### 时间

~~这个最终还是被我采用了,原因是它修改起来真的很简单.~~ 最终这个办法还是被舍弃了。

返回步骤1,第11行,默认值是 `location.pathname` 也就是路径,把它替换成 `J3t7cGFnZS5kYXRlfX0n` (直接输入page.date被识别成nodejs语言执行了,只能通过base64编码,解码即可)(请解码后替换即可).

最终的lable会变成时间戳(还是毫秒级别的),时间戳就是目标时间距离1970-01-01 08:00:00(UTC +8)的毫秒

![图片](https://img.cyfan.top/pic/gitalk/3.jpg "完结撒花")

这个是创建时间,也就是说只要我不是故意去更改时间,是几乎不可能碰撞的<span class="heimu" title="你知道的太多了">废话,我怎么可能在同一时间内写好两篇博文</span>

而且时间戳到50位...9999年12月31日23点59分59秒的时间戳253402271999000（刚刚好15位），也就是说用到我200代都够用。

但是，

### MD5压缩字符

> 2020年2月27日最终选择。

为什么？

因为后来发现使用时来作为Lable会导致在下一次修改后Lable改变。

因为选择的page.date并不是开头的date，而是根据电脑里面的修改时间判定的。

所以即使是改成page.update也没用...

所以最终采用了MD5

既然你最多50字,那么干脆用MD5强制压缩至32个字从根本解决问题,而且MD5只要不是恶意去碰撞基本不会相同.

毕竟MD5是一个比较著名的hash算法嘛.

~~但是,使用MD5需要额外添加很长一段js,在进行初始化估计就要一段时间了.~~

~~所以,此处不推荐使用MD5,如果你有这个需求,可以去gitalk或gitment官方github的issues中查看.~~

修改方式：在进入 `\themes\next\layout\_third-party\comments\gitalk.swig` ,修改成这样：

```html
{% raw %}
{% if page.comments && theme.gitalk.enable %}

  &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/gitalk/dist/gitalk.css&quot;&gt;
  &lt;script src=&quot;https://unpkg.com/gitalk/dist/gitalk.min.js&quot;&gt;&lt;/script&gt;
  &lt;script src=&quot;https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js&quot;&gt;&lt;/script&gt;
   &lt;script type=&quot;text/javascript&quot;&gt;
        var gitalk = new Gitalk({
          clientID: &#x27;{{ theme.gitalk.ClientID }}&#x27;,
          clientSecret: &#x27;{{ theme.gitalk.ClientSecret }}&#x27;,
          repo: &#x27;{{ theme.gitalk.repo }}&#x27;,
          owner: &#x27;{{ theme.gitalk.githubID }}&#x27;,
          admin: [&#x27;{{ theme.gitalk.adminUser }}&#x27;],
          id: md5(location.pathname),
          distractionFreeMode: &#x27;{{ theme.gitalk.distractionFreeMode }}&#x27;
        })
        gitalk.render(&#x27;gitalk-container&#x27;)           
       &lt;/script&gt;
{% endif %}
{% endraw %}
```

至于担心更换域名后Lable不匹配的问题,在这里说明一下,Lable采用的是相对目录,比如 `\留言板\` ,这个经过md5后是 `b31b6a578fce950674accdd14100e448`


所以只要不改题目都没问题。

咳咳,<span class="heimu" title="你知道的太多了">还是MD5大法好b（￣▽￣）d　</span>

# 结语

看起来自己解决问题就是好啊。

另外，国内用户如果看到评论框有：Error: Network Error字样或长时间加载或没有评论框，可以尝试修改一下DNS至国外如1.1.1.1、1.0.0.1、8.8.8.8、8.8.4.4，如果还是不行，那就，那就拿梯子吧。

毕竟GXX对于Github尤其是API很不友好...

呃,听说三月七号开学,估计博客又要荒凉了,高中生活好啊...

