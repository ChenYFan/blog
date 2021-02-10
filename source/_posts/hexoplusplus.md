title: HexoPlusPlus-从一个妄想到现实
author: CYF
tags:
  - Hexo
  - 集成部署
categories:
  - 好方法
description: Worker是什么?开发者怎么使用Worker做的更好?难道Worker只能用JSproxy吗?作为HexoPlusPlus开发者,我想和大家谈谈我从一个小白开始慢慢写一个基于CloudFlareWorker程序的Hexo后台管理
date: 2021-2-5 15:40
index_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612929292000.jpg
banner_img: https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612929292000.jpg
---

我一直都习惯在线写作，但因为口袋里没钱，不能买服务器用动态博客，使用Hexo，即使实现了集成部署，想要在github上直接书写，尤其是出门在外有所灵感，国内手机登陆github真的是极其糟糕的体验。博客本就是碎片化写作和高质量文章发布处，使用hexo却使我无法发挥博客的用处。

先前，我曾使用白嫖的Euserv搭建的Typecho，也是用过wordpress.com白嫖的wordpress，但两个都不符合我对速度和可用性的追求，一个连CloudFlare能不能连上都是问题，另一个中国支持贼差【虽然可以用万能Worker可以替换加解决,但是就是不想用啊】。免空的选择又难以择手![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/194.jpg)，弄来弄去还是用回Hexo。

但是Hexo就是有一点不爽，每次使用的时候就必须要在本地进行构建静态网页，然后上传到GithubPage。后来实现了集成部署【没想到折腾了很长时间的集成部署最后用到这里了】，方便了不少，直接在Github上面改源代码。但相较于Typecho和Wordpress，没有后台的写作总感觉十分不方便![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896e9710dfd5.jpg)，每次更改源代码都要上Github![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896ece2ab57a.jpg)，在国内这种大环境下总是不方便的。

2020年最后一个月，我总是在想如何解决这个问题，我的要求很简单，能弄个在线书写环境就好了。

由于我的文件是存储在Github上，于是我第一个先去Github文档查找相关资料，果不其然，Github的API能够上传、删除、下载【废话】、列表文件，并且能通过base64上传，直接免去了手写头的问题.关于调用限制，没鉴权时每个ip每小时只有**60次**，但一旦鉴权每个用户每小时就有**5000次**。这些api完全能够支撑起一个在线写作的环境,<https://developer.github.com/v3/guides/getting-started/>更是详细讲解并提供了数个例子。

这篇文章,就是详细讲解我如何把这个梦想变成现实.具体步骤很多,请慢慢咀嚼![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896ece2ab57a.jpg)

> **这篇不是[使用文档](https://hexoplusplus.js.org/),而是教程**

# 原理 - GithubAPI

譬如罢，上传一个文件，首先你要鉴权，在header中写入：

```url
content-type: "application/json;charset=UTF-8"
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

## 拉取信息

默认情况下，直接`GET` `RESTURL`就能获取该文件/文件夹的信息,例如获取我`AVorBV.md`源文件,那么`RESTURL`如下:

```
https://api.github.com/repos/ChenYFan/blog/contents/source/_posts/AVorBV.md?ref=master
```

直接`GET`[我的是公开仓库,不需要鉴权就能获取],得到数据如下:

```json
{
"name": "AVorBV.md",
"path": "source/_posts/AVorBV.md",
"sha": "a0bd826f999a9bb73ac56251415f9e57199600a7",
"size": 15742,
"url": "https://api.github.com/repos/ChenYFan/blog/contents/source/_posts/AVorBV.md?ref=master",
"html_url": "https://github.com/ChenYFan/blog/blob/master/source/_posts/AVorBV.md",
"git_url": "https://api.github.com/repos/ChenYFan/blog/git/blobs/a0bd826f999a9bb73ac56251415f9e57199600a7",
"download_url": "https://raw.githubusercontent.com/ChenYFan/blog/master/source/_posts/AVorBV.md",
"type": "file",
"content": "dGl0bGU6IEFWP0JWIQphdX...",
"encoding": "base64",
"_links": {
"self": "https://api.github.com/repos/ChenYFan/blog/contents/source/_posts/AVorBV.md?ref=master",
"git": "https://api.github.com/repos/ChenYFan/blog/git/blobs/a0bd826f999a9bb73ac56251415f9e57199600a7",
"html": "https://github.com/ChenYFan/blog/blob/master/source/_posts/AVorBV.md"
}
}
```

这样子,我们只要提取json中的sha,就能知道到hash,进而进行修改.
但这样子有个非常尴尬的一点,单文件获取会把`content`一口气拿过来
例如下面的`RESTURL`

```url
https://api.github.com/repos/ChenYFan/CDN/contents/img/hpp_upload/1612843011000.jpg?ref=master
```

你获取的时候会发现返回了这个:

```json
{
"message": "This API returns blobs up to 1 MB in size. The requested blob is too large to fetch via the API, but you can use the Git Data API to request blobs up to 100 MB in size.",
"errors": [
{
"resource": "Blob",
"field": "data",
"code": "too_large"
}
],
"documentation_url": "https://docs.github.com/rest/reference/repos#get-repository-content"
}
```

很显然,直接用GithubAPI不能获取单个文件的hash值

那怎么办？

答：列表获取

我们把之前的`RESTURL`去掉小尾巴,变成这样:

```url
https://api.github.com/repos/ChenYFan/CDN/contents/img/hpp_upload?ref=master
```

这样就能获取这个目录下整个列表,然后用json循环查找遍历name,再通过name拉hash即可.

只是这样查询时间会略微变长.

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

body与新建类似，但是首先你要通过拉取信息获取该文件sha值.

```json
{
    branch: ${上传的分支},
    message: ${上传的信息},
    content: ${base64过的文件}, 
    sha: "${此文件hash}"
}
```

接着使用`PUT`形式访问`RESTURL`

更新成功后状态码应该返回：

```status
200 OK
```

## 删除

相对来说,删除就更简单了

```json
{
    branch: ${删除文件的分支},
    message: ${删除的信息},
    sha: "${此文件hash}"
}
```

hash这一步逃不掉,用`DELETE`形式访问`RESTURL`,返回`200`说明删除成功

# 原理 - CloudFlareWorkers

之前看过[Laziji-VBlog](https://github.com/GitHub-Laziji/VBlog)项目,这个项目新颖的一点是将文章发布在gists,然后用户通过api访问获取.

但这样有两个致命问题:

1.API没鉴权，每小时单个ip只能访问60次，一开就爆
2.在国内受干扰，不稳定

并且什么迁入迁出麻烦、token容易忘记等等问题

最最最早版本中,我是打算纯静态实现文章编辑和更改的，但很快我就遇到了和VBlog一样的缺陷，这逼使我切换了平台。

好诶，既然直连效果那么差，我们就选择中继。利用服务器中继我们首先排除【用Hexo基本就是贪无服务器】。目前比较流行的无服务器平台有Heroku、CloudFlareWorker和Vercel，Heroku支持了多种服务器语言，CFWorker基于GoogleV8，因为JSProxy在国内意外走红，Vercel在国内拥有较好的运营商线路。

我们第一个排除heroku，冷启动唤醒需要10s，并且无法绑定域名【这里其实也可用worker反代（bushi】。目光看向worker和vercel，又有一个新问题出来，自定义配置存哪？![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896e6ec1d528.jpg)

存变量里当然是个好主意，但是很难修改。外部存储也不是什么大问题，mongodb、firebase、~~Leancloud~~都可以上手，但我个人终究不喜欢为了查询而发送子请求。![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/194.jpg)

由于我是OIer【虽然很差】，习惯使用C++的逻辑，因为JS的逻辑和C++其实差不多，所以我更倾向用WorkerJS书写。

非常赞的是，去年11月，[CloudFlare官方宣布KV在一定额度内免费](https://blog.cloudflare.com/workers-kv-free-tier/)，并且免费额度喜人：

```
存：1GB大小
读：10W次/天【注：这里和Worker免费版本调用次数相同】
写：1k次/天
删：1k次/天
列：1k次/天
单个限额：25MB
```

并且worker里面使用KV函数异常简单，绑定KVNAME后：

```js
async function FUNCNAME(){
await KVNAME.get(INDEX) //读
await KVNAME.put(INDEX,VALUE) //写
await KVNAME.delete(INDEX) //删
}
```

按照[官方文档](https://developers.cloudflare.com/workers/learning/how-kv-works)的说法，实际读取与读取静态页面差不多，我写了个简单测试函数，根据时间戳判断，单次读取只需要不超过2ms。

并且worker有非常赞的fetch函数，无痛自定义header，拉取后端无压力。

好，那么就开始吧。

# 实现 - 迈出的第一步

首先你要绑定个监听器：

```js
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
```

由于`fetch`只能在`async`函数执行,于是我们写个`async`:

```js
async function handleRequest(request) {
return new Response()
}
```

可以，这样我们就简单实现了一个无服务器函数![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5c53d1904dcb2.gif)

接下来的函数就应该在async这个主函数写。

然后是最基本的fetch，fetch应该说是worker里最特色的函数了。

如果直接返回，那么就不用加`await`,因为在`async`里面返回了一个`await`

```js
return fetch('https://api.github.com/repos/ChenYFan/blog/contents/source/_posts')
```

如果要拉回来做运算，那么要加`await`

```js
const res = await fetch('https://api.github.com/repos/ChenYFan/blog/contents/source/_posts')
```

CFWorker能用`.text()`函数和`.json()`函数处理返回的内容：

```js
const first_name = await JSON.parse(await(await fetch('https://api.github.com/repos/ChenYFan/blog/contents/source/_posts')).text())[0]["name"]
return new Response(first_name)
```

这个其实等价下面的：

```js
const first_name = (await(await fetch('https://api.github.com/repos/ChenYFan/blog/contents/source/_posts')).json())[0]["name"]
return new Response(first_name)
```

当然显然是下面的好写,但我习惯测试方便都用上面的![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/stick_18.png)

我们也可以通过自定义方式来自定义header完成鉴权和UA设置:

```js
const getinit = {
          method: "GET",
          headers: {
            "content-type": "application/json;charset=UTF-8",
            "user-agent": `${USERAGENT}`,
            "Authorization": `token ${TOKEN}`
          },
}
const first_name = await JSON.parse(await(await fetch('https://api.github.com/repos/ChenYFan/blog/contents/source/_posts',getinit)).text())[0]["name"]
return new Response(first_name)
```

那么接下来就很简单了。

# 实现 - 面板的设计

Worker支持返回数据的设置，我们可以通过修改`content-type`达到返回页面的效果,并且可以通过JS奇妙的语法完成PHP难以做到的事情。

首先先定义一个网页：

```js
const re_html =  `<h1>Hello,World!</h1>`
```

然后要返回吧：

```js
return new Response(re_html, {
    headers: { "content-type": "text/html;charset=UTF-8" }
})
```

这个地方`content-type`务必要设置,不然默认返回是文本形式

然后打开预览就能看到了:

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612929973000.png)

然后关于拼接,其实完全不必用`+`连接，可以用\`\`包裹,然后用`${变量名}`来代替

```js
const inner = `Hello,World!`
const re_html =  `<h1>${inner}</h1>`
return new Response(re_html, {
    headers: { "content-type": "text/html;charset=UTF-8" }
})
```

<span class="heimu">这种写法帮我省下精力重看代码</span>

面板怎么说,其实直接用[material-dashboard](https://www.creative-tim.com/product/material-dashboard)套的

# 实现 - 后端API的设计

后端API本质上是一个中继,简单如我![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/7EYyq1TcBKa3eQ2.jpg)

废话不说直接上代码。

## 问题解决 - 存储问题

KV是能存东西.配置是符合键值的,一个键名配对一个键值,这和KV的存储方式相同.但是这么多配置项,如果一个一个读过去,KV迟早比worker早读爆.缓存没用,还得赔一个清除缓存的APIKey,太亏了.

所以HPP将所有配置`JSON.stringify`后存储到了一个键名为`hpp_config`的键.

那关于账户密码,难道不能存KV吗?

能,当然能,但是问题是如果在登录页面还要读KV,那被打了怎么办![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/67.jpg)

况且,在粘贴代码完后到设置界面,中间有一段时间,万一有个人搞你咋办呢.![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/5.jpg)

所以HPP学习Twikoo进行强鉴权,在保证不被盗取的情况下还能减少KV读取量,岂不美哉![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/stick_64.png)


## 问题解决 - 多层文件夹

默认情况下，访问无文件名的`RESTURL`会列出当前文件夹下的所有文件,但列不出文件夹下的文件.我们先看获取示例，以`https://api.github.com/repos/ChenYFan/blog/contents/source/_drafts?ref=master`为例子:

```json
[
    {
        "name": "TEST.md",
        "path": "source/_drafts/TEST.md",
        "sha": "3b12464976a5fd9e07d67dd7d5cf4f0f10188410",
        "size": 4,
        "url": "https://api.github.com/repos/ChenYFan/blog/contents/source/_drafts/TEST.md?ref=master",
        "html_url": "https://github.com/ChenYFan/blog/blob/master/source/_drafts/TEST.md",
        "git_url": "https://api.github.com/repos/ChenYFan/blog/git/blobs/3b12464976a5fd9e07d67dd7d5cf4f0f10188410",
        "download_url": "https://raw.githubusercontent.com/ChenYFan/blog/master/source/_drafts/TEST.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/ChenYFan/blog/contents/source/_drafts/TEST.md?ref=master",
            "git": "https://api.github.com/repos/ChenYFan/blog/git/blobs/3b12464976a5fd9e07d67dd7d5cf4f0f10188410",
            "html": "https://github.com/ChenYFan/blog/blob/master/source/_drafts/TEST.md"
        }
    },
    {
        "name": "TEST",
        "path": "source/_drafts/TEST",
        "sha": "18391dac960bd390d4213818b7a79c63dcd2fb44",
        "size": 0,
        "url": "https://api.github.com/repos/ChenYFan/blog/contents/source/_drafts/TEST?ref=master",
        "html_url": "https://github.com/ChenYFan/blog/tree/master/source/_drafts/TEST",
        "git_url": "https://api.github.com/repos/ChenYFan/blog/git/trees/18391dac960bd390d4213818b7a79c63dcd2fb44",
        "download_url": null,
        "type": "dir",
        "_links": {
            "self": "https://api.github.com/repos/ChenYFan/blog/contents/source/_drafts/TEST?ref=master",
            "git": "https://api.github.com/repos/ChenYFan/blog/git/trees/18391dac960bd390d4213818b7a79c63dcd2fb44",
            "html": "https://github.com/ChenYFan/blog/tree/master/source/_drafts/TEST"
        }
    }
]
```

文件夹是`dir`,文件是`file`,甚至可以通过`self`往下找,连路径都不用拼接了,那事情就好办了,写个搜索递归吧.

> 这个地方在群里我一直和2X吵架,因为我觉得此处用广搜比较好,然后我一直想写BFS,结果写着写着就成DFS了,你甚至现在还能看到一个叫`fetch_bfs`的函数![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/BnTMX35EPxleVmA.jpg)

```js
async function fetch_bfs(arr, url, getinit) { //开始深搜
          try {
            const hpp_getlist = await JSON.parse(await (await fetch(url, hpp_githubgetdocinit)).text()) //拉取github列表
            for (var i = 0; i < getJsonLength(hpp_getlist); i++) { //循环查找
              if (hpp_getlist[i]["type"] != "dir") { //如果不是文件夹
                arr.push(hpp_getlist[i])//弹到目标数组末尾
              } else { //否则
                await fetch_bfs(arr, hpp_getlist[i]["_links"]["self"], getinit) //进入该文件夹深搜
              }
            }
            return arr;
          } catch (e) { return {} }
}
```

代码本意很简单,传入一个空数组,抓取列表,循环递归,如果不是文件夹就扔到数组,是的话就向下搜索<span class="heimu">其实就是DFS嘛</span>

用`try`的原因是因为莫些人没有草稿，不用try的话这个函数就会炸，没草稿返回空数组。

然后就试试呗，以获取草稿列表为例：

```js
if (path == "/hpp/admin/api/get_draftlist") { //判断路径
          let hpp_doc_draft_list_index = await KVNAME.get("hpp_doc_draft_list_index") //获取索引
          if (hpp_doc_draft_list_index === null) {//如果没有索引
            const filepath = githubdocdraftpath.substr(0, (githubdocdraftpath).length - 1) //分离路径
            const url = `https://api.github.com/repos/${hpp_githubdocusername}/${hpp_githubdocrepo}/contents${filepath}?ref=${hpp_githubdocbranch}` //拼接RESTURL
            hpp_doc_draft_list_index = await JSON.stringify(await fetch_bfs([], url, hpp_githubgetdocinit)) //开始深搜
            await KVNAME.put("hpp_doc_draft_list_index", hpp_doc_draft_list_index) //保存索引
          }
          return new Response(hpp_doc_draft_list_index, { //返回路径
            headers: {
              "content-type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": hpp_cors
            }
          })
}
```

我们来做个小实验：

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612936420000.png)

结构如下：

```
-source/_drafts
  ~TEST.md
  -TEST
    ~TEST.md
    -TEST
      ~TEST.md
      -TEST
        ~TEST.md
```

那么CloudFlareWorker会这样搜索:

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612937339000.jpg)


~~其实我本来想这样的~~

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612937329000.jpg)

【考虑到大多数人都没有建立文件夹的习惯，本来bfs的效率会更高的(´இ皿இ｀)】

【但其实两者子请求数目是一样的】

我们去CloudFlare发一个请求啊，结果非常Amazing啊：

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612938453000.gif)

dfs完美解决嵌套问题。



## 问题解决 - 缓存问题

### 手机端POST之谜

之前开发网页的时候，我总是希望缓存越长越好，因为有些资源从来没有变过却要重复使用。于是，我给博客加上了`ServiceWorker`<span class="heimu">~~这就是我咕咕咕的理由~~</span>

但hpp不能进行太强的缓存,否则可能造成获取文件不够及时.

于是，在文章获取这一块，我故意将`get`写成`post`,发送空值,电脑端乖乖的每次都把请求发出去,毫无异常.

然后手机端炸了![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5c53cee8422fc.jpg)

万万没想到,safari会将post请求给缓存了![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896ece29a8e0.jpg)

缓存也就罢了,结果ajax连`onreadystatechange`都缓存了不返回,然后接下去的函数全炸了![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.8/5896ece2a019f.jpg)

没办法,只好在post里面加时间戳

```js
ajax.send(new Date().getTime());
```

### 文章索引问题

然后是索引问题【本质上是把结果缓存在KV里】，因为在文件夹众多的情况下dfs会将每个文件夹找过去，先不说时间这个问题（毕竟一次子请求大约在60ms-150ms徘徊，文件夹多的情况下也尚能忍受），主要是文件夹一多，子请求跟着多起来了，worker子请求超时是30s（10ms是运算时间，我寻思只要没有上亿篇文章，加个数组应该不会炸10ms时间），并且子请求算总请求，要是这么搞一次，worker怕是不够用了，所以得加个KV强缓存：

```js
await KVNAME.put("hpp_doc_list_index", hpp_doc_list_index)
await KVNAME.put("hpp_doc_draft_list_index", hpp_doc_draft_list_index)
```

在发布、删除等**可能**会导致缓存失效的情况下清除KV缓存：

```js
await KVNAME.del("hpp_doc_list_index")
await KVNAME.del("hpp_doc_draft_list_index")
```

## 功能实现 - 自动更新

这怕是所有Worker程序里面第一个实现自动更新的程序了~~【所以我最近发包很快啊】~~![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612940443000.gif)

其实刚开始没想到这么多，后来[@MCSeekeri ](https://github.com/MCSeekeri)开了[#21](https://github.com/HexoPlusPlus/HexoPlusPlus/issues/21),其中提到了这一点,然后我就开了[#23](https://github.com/HexoPlusPlus/HexoPlusPlus/issues/23)。

查一遍[CloudFlareAPI文档](https://api.cloudflare.com/#worker-script-upload-worker)，我们就会发现这做起来简直轻而易举：

![](https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/hpp_upload/1612941346000.png)

```curl
curl -X PUT "https://api.cloudflare.com/client/v4/accounts/9a7806061c88ada191ed06f989cc3dac/workers/scripts/this-is_my_script-01" \
     -H "X-Auth-Email: user@example.com" \
     -H "X-Auth-Key: c2547eb745079dac9320b638f5e225cf483cc5cfdda41" \
     -H "Content-Type: application/javascript" \
--data "addEventListener('fetch', event => { event.respondWith(fetch(event.request)) })"
```

curl,我寻思fetch也能做到.

```js
const update_script = await (await fetch(`https://raw.githubusercontent.com/HexoPlusPlus/HexoPlusPlus/main/index.js`)).text() //获取更新脚本
const up_init = {
            body: update_script,//更新脚本内容
            method: "PUT",//method是put
            headers: {
              "content-type": "application/javascript",//content-type和文档一样
              "X-Auth-Key": hpp_CF_Auth_Key,//GlobalKey,账户最高Token
              "X-Auth-Email": hpp_Auth_Email//登录邮箱
            }
}
          const update_resul = await (await fetch(`https://api.cloudflare.com/client/v4/accounts/${hpp_account_identifier}/workers/scripts/${hpp_script_name}`, up_init)).text()//拼接workerid,请求url,上传
          return new Response(JSON.parse(update_resul)["success"])//查询更新状态
```

