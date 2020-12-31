title: CFWorker-ODIndex中文文档&使用教程
author: CYF
index_img: https://rmt.dogedoge.com/fetch/hi-c-oss/storage/back21.jpg
banner_img: https://rmt.dogedoge.com/fetch/hi-c-oss/storage/back21.jpg
tags:
  - Workers
  - CloudFlare
  - 目录列表
categories:
  - 撸羊毛
date: 2020-08-14 09:51:23
---

> **写在最前面**
> 自从这篇博文发布后，OneIndex迎来了一次重大更新，去除了FireBase依赖，转用KV存储刷新令牌。本片教程已过时，具体会在春节前后更新最新版本。

OneDrive，相信大家都不陌生，微软家的网盘，虽说有类似于OneManager一样的目录列表程序，但是直连海外总是会遭受严重的丢包，得到极其糟糕的体验。这时候CLoudFlare作为不那么好使的CDN就排上用场了，项目[onedrive-cf-index](https://github.com/spencerwooo/onedrive-cf-index) 解决了这个问题,但是据我观察,这个仓库作者应该是个中国人,但是readme文档可不是中文,这对一些使用者造成了一定的困扰,而且文档相当**言简意赅**![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E4%B8%AD%E6%9E%AA.png),这一篇文章相当于文档的中文翻译和使用教程.

> **使用前言**
> 部署此项目较为麻烦,请确保你满足以下俩个及以上想法后,才继续往下读:
> 1. 我非常需要搭建于CloudFlare的OneDrive目录列表吗?![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E5%B0%8F%E7%9C%BC%E7%9D%9B.png)
> 2. 我非常需要这个版本的目录列表吗?![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E8%82%BF%E5%8C%85.png)
> 3. 我有这个耐心吗?![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E6%83%B3%E4%B8%80%E6%83%B3.png)
> 如果没有,那么我们建议你可以使用另一个功能和UI稍差的cf目录列表[OneDrive-Index-Cloudflare-Worker](https://github.com/heymind/OneDrive-Index-Cloudflare-Worker) 这个版本有不是很详尽的中文文档,并且较为简单,或者试试一步生成的GDIndex,可以参考我之前写的[GDIndex部署参考](https://blog.cyfan.top/2020/03/18/%E5%85%8D%C2%B7%E7%88%AC%C2%B7%E5%9F%8E%C2%B7%E5%9B%BD%E5%86%85%E7%AE%A1%E7%90%86%E5%88%86%E4%BA%ABGoogleDrive/)

# 简介

**新功能**
- 新设计： spencer.css。
- 根据文件类型呈现的文件图标。
- 使用“Font Awesome icons” 图标代替材料设计图标（以获得更好的设计一致性）。
- 使用github-markdown-css进行README.md渲染
- 添加Cookie以更好地进行目录导航。
- 支持文件预览：
- 图片：.png，.jpg，.gif
- 纯文本：.txt
- 文档：.md，.mdown，.markdown
- 代码：.js，.py，.c，.json。
- PDF：延迟加载，加载进度和内置的PDF查看器
- 音乐/音频： .mp3，.aac，.wav，.oga
- 视频： .mp4，.flv，.webm，.m3u8

...


- 代码语法以GitHub样式突出显示。（使用PrismJS。）
- 图像预览支持中型缩放效果。
- 使用Google Firebase实时数据库缓存和刷新令牌。（对于那些负担不起Cloudflare Workers KV存储的人。 😢）
- 在Turbolinks®的帮助下进行延迟加载。（从folder转到时有些问题file preview，但不会降低用户体验。）
...

在这表面下:

- 一直以来都是CSS动画。
- 使用wrangler和webpack打包源代码。
- 转换所有CDN以使用jsDelivr加载。
- 没有外部JS脚本，所有脚本都已通过webpack加载！（除了某些库。）


...
所有其他功能

请参阅：[新功能| OneDrive-Index-Cloudflare-Worker](https://github.com/heymind/OneDrive-Index-Cloudflare-Worker#-%E6%96%B0%E7%89%B9%E6%80%A7-v11)。


# 开始

## 导入此项目

> **请注意!**
> 请不要Fork此项目![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_4.png),
> 在这个过程中你将会获取到数串token,fork的仓库无法转为私有仓库,这将会对你的数据造成威胁.

点击右上角的 `+` 号选择Import项目

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14065738.jpg)

原先仓库地址填写<https://github.com/spencerwooo/onedrive-cf-index>,新仓库名称随意,仓库类型必须改为Private私人,最后导入

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14065831.jpg)

导入成功,进入repo:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14065940.jpg)

## 获取Token

进入<https://heymind.github.io/tools/microsoft-graph-api-auth> 开始准备你所需要的东西：


进入<https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade>，注册一个新app【使用微软账号】

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14070907.jpg)

几番跳转后，来到这样的界面：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14071032.jpg)

> 注意，我们强烈建议用英文界面，中文界面可能存在翻译错误产生误导

点击OneIndex，进入应用详情

点击 `Redirect URIs` 修改跳转链接:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14071305.jpg)

将此处改为 `https://heymind.github.io/tools/microsoft-graph-api-auth`

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14071416.jpg)

设置API：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14091941.jpg)

至少选择 `offline_access, Files.Read, Files.Read.All .`

返回，获取 `Application (client) ID`

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14071558.jpg)

在这里填上复制的client id，并点击AUTHORIZE验证

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14071904.jpg)

你会发现跳转一段时间后又回到了拉取界面,不过多了一个提示框,上面写着已经获取到Code

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14072357.jpg)

接着我们获取Secrets,点击 `Certificates & secrets`,进入该选项卡:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14080315.jpg)

新增一个:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14080233.jpg)

名字随意,期限为永久:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14080315.jpg)

复制生成的密钥,请注意此处密钥仅**出现一次**,以后就不会再出现了

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14080438.jpg)

将获得密钥粘贴进第五步:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14080508.jpg)



点击GetToken,将跳转至如下界面:

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14080438.jpg)

> 此处若失败，请重试第四步

将获得字段的refresh_token写入，重新制得token：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14082011.jpg)

取得token：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14081337.jpg)

妥善保管，接下来我们会用到。

OneDriveToken完毕，接下来进入FireBase教程：

> 作为数据库存储，原本采用的是cloudFlareKV存储，但考虑到大部分用户没有这个钱去买KV，于是采用了第三方存储。

进入<https://firebase.google.com/>

开始创建项目：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14082334.jpg)

项目名字随意，下一步

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14082421.jpg)

一直下一步，稍后将进入管理界面

选择Database，将其设置为发布模式，禁用写入权限，在数据一栏中添加key，名字为`value`,值为 `https://项目名.firebaseio.com/auth.json` ，如我的：
`https://oneindex-chenyfan.firebaseio.com/auth.json`

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14082523.jpg)

点击右上角的小齿轮-项目设置-服务账号-旧版凭据-数据库账号-显示密钥，复制密钥。

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14082614.jpg)

FireBase教学完毕。

## 配置CloudFlare

登录你的CloudFlare，点击右上角，账户设置：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14083511.jpg)

选择API令牌选项卡，生成新的API：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14083707.jpg)

选择自定义令牌：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14083741.jpg)

配置至少如下，可以选择增加

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14083836.jpg)

点击获取API令牌

接着还要获取账户ID和区域ID

进入任意一域名，右侧拦里头会有俩ID，复制：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14083918.jpg)



到这里，你获取了以下所有密钥：

- Azure-refresh_token
- Azure-client_id
- Azure-client_secret
- GoogleFireBase-firebase_url
- GoogleFireBase-firebase_token
- CloudFlare-APIToken
- CloudFlare-ZoneID
- CloudFlare-AccountID

八个Token，切勿丢失![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E5%92%BD%E6%B0%94.png) 累死我了

## 配置OneDrive

用微软账户登录OneDrive，新建文件夹，名字为“Public”

## 本地wrangler部署

> 由于此篇教程具体将GithubAction实现无服务器部署，本块内容一笔带过，请直接看到GithubAction部署一块
 
本地安装依赖环境

```
yarn global add @cloudflare/wrangler
yarn install
```


用wrangler登录CloudFlare

```
wrangler config
```


`wrangler.toml`  修改

```
name: The draft worker's name, your worker will be published at <name>.<worker_subdomain>.workers.dev.
account_id: Your Cloudflare Account ID.
zone_id: Your Cloudflare Zone ID.
```

`src/config/default.js` 修改:

```
client_id: Your client_id from above.
base: Your base path from above.
firebase_url: Your firebase_url from above.
```

添加环境变量:

```
wrangler secret put REFRESH_TOKEN
wrangler secret put CLIENT_SECRET
wrangler secret put FIREBASE_TOKEN
```


部署命令:

```
wrangler publish
```


## GithubAction部署

### GithubAction部署

进入你导入的仓库，点击 `wrangler.toml` 

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14084906.jpg)

- `name` ==> 默认生成为<#name>.<#User>.workers.dev，随意
- `account_id` ==> CloudFlare-AccountID
- `zone_id` ==> CloudFlare-ZoneID

进入`/src/config/default.js`

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14085133.jpg)

- refresh_token ==> Azure-refresh_token
- client_id ==> Azure-client_id
- client_secret ==> Azure-client_secret
- redirect_uri ==> 'https://heymind.github.io/tools/microsoft-graph-api-auth'
- firebase_url ==> GoogleFireBase-firebase_url

#### 修改样式

`src/render/htmlWrapper.js` : 修改标题

`src/folderView.js` : 修改介绍

#### 设置密钥

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14092907.jpg)

密钥名：`CF_API_TOKEN`

内容: ==> CloudFlare-APIToken

#### 激活Action：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14085647.jpg)

### 设置CloudFlare变量

进入新创建的Worker：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14090207.jpg)

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14090302.jpg)

- CLIENT_SECRET ==> Azure-client_secret
- FIREBASE_TOKEN ==> GoogleFireBase-firebase_token
- REFRESH_TOKEN ==> Azure-refresh_token

部署，发布，绑定域名【可选】：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14090933.jpg)

成品：

![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/2020-08-14091129.jpg)

Demo:<https://onedrive.cyfan.top> ![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/huaji.gif)

# 后言

其实默认才5GB，还不如GoogleDrive香，但是据说白嫖E5开发者还不错。

OK就到这了，还不懂的欢迎评论区，或者去官方github地址发issues。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E6%AC%A2%E5%91%BC.png)
