---
title: 无服务器搭建Artalk评论系统后端
tags:
  - Artalk
  - 评论
  - 无服务器
categories: 随心记
copyright: true
author: CYF
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001165456.jpg?q=75'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001165456.jpg?q=75'
date: 2020-10-01 16:57:09
des: 通过各种php托管商实现Artalk评论系统的部署，包括composer以及000webhost、gearhost。
key: Artalk,000webhost,gearhost
lushkey: NoServer-Deploy-Artalk.md
---


> 这篇的无服务器部署Artalk，指的是NoServer而不是Serverless



> 这篇所写的是部署后端，关于前端部署十分简单，这里不多阐述



[Artalk](https://artalk.js.org/)，一款简洁有趣的自托管评论系统。此时，Valine作为老大哥就不得不跳出来了。但是，作为Valine的Leancloud作为第三方托管，数据放在别人那里总是不舒服的，譬如[2020/9/24Leancloud华北节点云引擎被 DDoS 攻击](https://status.leancloud.cn/)![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d1e2ad89f.jpg?q=45)

![image-20201001071514956](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001071558.png?q=45)

或者说LeanCloud将开发版限额一限在限，亦或者leancloud多次宕机,作为自由开放的我自然不舒服。加上leancloud开发版的SLA实在令人担忧【不包括休眠时间，一个月内宕机超过20次（不过leancloud开发版确实没有保证SLA）】，以及比较严重的管理员冒充。我一直再找一个能用自己服务器托管评论系统，真巧，我找到了Artalk。Artalk的优点：

- 轻量简洁 (~23kB gzipped)

- 有趣有爱

- 自托管

- Markdown

- 表情自定

- 滑稽表情包

- **管理员密码，防冒名**

- 验证码，提交频率限制

- **通知中心**，邮件提醒

- 自定义某些页面**仅管理员可评论**

- 无限层级回复

- 滚动加载更多

- **评论折叠**

- 一页多个评论

- TypeScript

- **提交频繁验证码**

- **无数据库**

  <span class="heimu">当然没有垃圾评论检测就很蛋疼</span>



有服务器部署起来相当简单，宝塔【虽然被炸0day，不过修修补补还能用】+Artalk能实现5分钟部署完毕[【Jalen的Artalk 自托管评论系统的后端部署】](https://blog.jalenchuh.cn/posts/artalk-api-php/)，但是，习惯Valine的群友一看到后端部署就立刻皱起了眉头：我没有服务器，怎么办？![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/BnTMX35EPxleVmA.jpg?q=45)



Artalk的后端是PHP的，虽然作者也承诺了会开发别的后端`Go API / Node API / Python API`，但迟迟没有写出来，考虑到[QWQCODE](https://github.com/qwqcode)是个学生【我也是】，那么咕咕咕就情有可原了。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d78c3f4a5.jpg)



实际上，我用的是Euserv白嫖的，至少SLA还是过的去【>=99%】，但是无论是申请还是部署都非常麻烦。此时，我就在想，既然有免费的php托管商，何苦不用呢？![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896e9712a3c1.gif)



目前找到两个：Gearhost和000webhost



> 注意，heroku虽然也有免费容器部署php，但是heroku是沙盒制度，一个评论存储为文件后会删除，所以heroku并不适合作为artalk后端。



# 安装



## 设置Artalk



与其它评论系统不同，artalk本身并没有做到开箱即用这一特点，所以，你还要做一些事先准备。



### GithubAction+Composer安装



Artalk为了缩小原文件大小，并没有安装好依赖，依赖需要你自己安装。



如果你本地有composer，那就直接克隆本地运行composer。但不论其便携性还是效率都不高【composer安装起来比较麻烦】，所以，我建议此处用GithubAction实现composer安装。当然你有composer环境就可以直接clone在本地安装。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece29d8a5.gif)



进入[原项目](https://github.com/qwqcode/Artalk-API-PHP)，Fork到你自己的账户



![image-20201001073812407](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001073813.png?a=45)



![image-20201001073913581](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001073914.png?q=45)



新建一个文件，文件名为：`.github/workflows/composer.yml`

内容为：

```yml
name: composer

on: 
  push:
    branches: 
      - master # build master branch only

jobs:
  download:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2
      with:
        ref: master

    - name: Install
      run: |
        npm install composer
        composer install
        
        
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.TOKEN }}
        publish_dir: ./
```



![image-20201001074023800](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001074024.png?q=45)



设置Secret，NAME为`TOKEN`,内容为你的GithubTOKEN.【Token的获取与这篇文章关联不大】，请自行百度。



![image-20201001081902077](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001081903.png?q=45)

![image-20201001081941932](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001081942.png?q=45)





回到仓库，**新建一个空白的`.htaccess 文件夹，里面什么都不写`**[^1]，并删除根目录底下的`.gitignore`触发GithubAction![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/%E6%83%B3%E4%B8%80%E6%83%B3.png)



> 此处必须删除`.gitignore`【或者你自行修改】，否则接下来出错一律不管



![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001082247.png?q=45)

稍后即部署完毕



### 本地修改配置文件





Clone你的仓库，指定为gh-pages分支



```bash
git clone -b gh-pages https://github.com/ChenYFan-Tester/Artalk-API-PHP.git
```

> -b是强制指定分支的意思

> 速度慢试试github.com.cnpmjs.org，阿里github镜像



![image-20201001082653387](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001082654.png?q=45)

打开并修改`Config.example.php` 具体参照[官方文档](https://github.com/qwqcode/Artalk-API-PHP)

完毕后退出，将`Config.example.php`重命名为`Config.php`



此时,你的artalk安装终于告一段落,但是,你还没有将他们部署上去.



# 部署

## Gearhost



Gearhost其实是一个小有名气的托管商，Free计划提供了最高一线程、每小时256MB内存、每小时5%CPU周期和每月1GB流量，作为评论托管是完全足够的。并且不需要信用卡。

进入[Gearhost](https://www.gearhost.com/)注册一个账号,新建一个免费的CloudSite。





![image-20201001083231112](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001083231.png?q=45)

![image-20201001083258674](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001083259.png?q=45)

构建完毕后稍等片刻，进入面板设置：



![image-20201001083743275](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001083743.png?q=45)

PHP版本设置为7.1

![image-20201001085602629](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001085603.png?q=45)



`Virtual Directories`网址设置为`/`路径设置为`site\wwwroot\public\`

![image-20201001083959803](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001084000.png?q=45)

进入`Publish`选项卡，勾选`Local Git`，`Activate`这个方式



> 注意，我强烈不推荐你使用FTP上传，FTP看起来有图形化很方便，但是请注意，Composer后的文件将近**300+**，FTP最致命的上传方式是**每上传一个文件就会握一次手**，这样子会严重浪费你的时间。而是用Github链接的同学我就要考虑你的危险的想法了，如果**没有**将仓库设置为Private，那么用Github链接是一个非常**不明智**的选择



![image-20201001084334323](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001084334.png?q=45)



绑定git，上传三步走，`git init && git add . && git commit -m "OHH" && git push website master`



绑定域名什么不多说了，建议套一层CloudFlare。

Gearhost所用的共享ip，来自美国 科罗拉多州 丹佛，三网优化都不好。当然回源CloudFlare还是不错的。

DEMO：`https://artalk-pub1.cyfan.top/`

SLA：还在测试，大约95%，你可以前往<https://status.cyfan.top>查看详情![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d1904dcb2.gif)

在页面id为12345有几个测试评论，你可以去测试一下，跨域均设置为'\*'。

管理员用户名：admin

管理员邮箱：admin@admin.admin

管理员密码：admin

## 000webhost



[000webhost](https://www.000webhost.com/)也是个著名的免费php托管商，虽然早年的种种行为看着十分恶心，但是好歹也是个能白嫖的托管商。000webhost提供了每个账户一个免费的容器，每个容器每月3GB流量、300MB空间、1w个文件和每天25次邮箱发送。



000webhost的部署相对简单些，直接将所有文件拖拽上传【因为它不支持git上传】，稍等即可



![image-20201001150747082](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001150747.png?q=45)



上传至`public_html`子文件夹下：



![image-20201001151009729](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001151010.png?q=45)



000webhost不支持设置运行目录，这意味着data文件夹将会被曝光，但是我们可以设置000webhost的但目录密码保护：



![image-20201001151719382](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001151720.png?q=45)



这样，当有人试图访问`data/comments.data.json` 时，就会遭到密码拦截。





#### 绑定域名

由于000webhost域名验证需要一段时间，请先前往域名托管商设置记录。比如我的app名字是XXX.000webhostapp.com，我要绑定的是artalk-pub2.cyfan.top，就应该这样设置：

![image-20201001152944348](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001152945.png?q=45)

> 请注意000webhost验证域名是通过dns记录来验证的，在验证完毕前请不要开启CDN！





绑定域名，请鼠标移至卡片上，点击QuickActions，点击Details

![image-20201001152257105](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001152258.png?q=45)

![image-20201001152417027](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001152417.png?q=45)

点击My Domains,进入设置界面：

![image-20201001153112150](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001153113.png?q=45)

点击Add domain

![image-20201001153038499](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001153038.png?q=45)

选择PointDomain【毕竟把ns改到000webhost是不可能的】

![image-20201001153224077](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20201001153224.png?q=45)

如实填写，稍等即可。

DEMO:<https://artalk-pub2.cyfan.top/public/>

SLA：还在测试，大约90%，你可以前往<https://status.cyfan.top>查看详情

000webhost默认线路烂的和shit一样，强烈建议套CloudFlare

和另一个demo一样在页面id为12345有几个测试评论，你可以去测试一下，跨域为'\*'。

管理员用户名：admin

管理员邮箱：admin@admin.admin

管理员密码：admin



000webhost对于这些不能展现他的广告徽标的账户可能会存在限制处理，请注意【老恶心了】。



# 最后



国庆作业有点多，这篇要不是被我~~亲爱~~的群友催的要紧，我也不会水这一篇啊呜呜呜。![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece2a019f.jpg)



如果你的artalk卡在了转圈圈的问题上，你可以在html前面加上这一句


```html
<link href="https://XXX.XXX.XXX/index.php" rel="preconnect" crossorigin>
```


`preconnect`可以强制在渲染页面试并发一个请求，可以有效解决5s超时问题和并发过多不稳定导致cancel问题。



另外你也可以用我的artalk脚本：

```http
https://cdn.jsdelivr.net/gh/ChenYFan-Tester/Artalk@gh-pages/Artalk.js
https://cdn.jsdelivr.net/gh/ChenYFan-Tester/Artalk@gh-pages/Artalk.css
```



- 修改超时时间为60s
- 掩盖artalk标识
- **杰哥**提示语

如果你觉得不放心，你可以亲自检查[我做了什么](https://github.com/ChenYFan-Tester/Artalk/commits/master)，我会尽量保证与原仓库同步。





~~国庆快乐！~~写作业去了![](https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dbe510bcf.jpg)

[^1]:此处不写.htaccess，gearhost就会莫名其妙炸500错误
