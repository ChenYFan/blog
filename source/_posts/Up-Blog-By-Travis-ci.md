---
title: 利用Travis-CI实现在线更新Hexo
author: CYF
tags:
  - Travis-CI
  - Hexo
  - 在线更新
  - 奇淫巧计
categories:
  - 好方法
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200920192014.png?q=45'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200920192014.png?q=45'
lushkey: Up-Blog-By-Travis-ci.md
abbrlink: e626cb30
date: 2020-06-29 13:31:00
---
Hexo作为静态博客，好处相当明显，开销少，并且对于那种DDosS和CC套上CDN毅然不动。当然，最蛋疼的莫过于更新了，每次在自己电脑上辛辛苦苦码好字，一个push，hexo绿色光芒在命令提示符上闪烁着光芒，突然发现把仓库名字 `ChenYFan` 打成 `CehnYFan` <span class="heimu">真实事件</span> ，异或着是用手机查看自己的博客，突然发现：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629135012.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/stick_7.png)

由于hexo基于nodejs+git，手机无法更新；同时如果换了台电脑，hexo就要重装。这种事情hexo用户应该体会得到，我也就不多说了。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E4%B8%AD%E5%88%80.png)

那么，hexo用户如何进行在线更新呢？

正常来讲，**服务器法** 最直接，但也是最没用的。用服务器就意味着丧失了hexo的最优点-节省开支。当然，Hexo+Nginx+HexoAdmin确实可以实现很棒的书写环境，但是与其这么麻烦你还不如直接用Typecho&Wordpress呢。![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E4%B8%8D%E9%AB%98%E5%85%B4.png)

曾经在 [Hexo官方](https://hexo.io) 上看过 [利用Travis-ci自动部署GithubPages](https://hexo.io/zh-cn/docs/github-pages) 不过我一看到这么多步骤直接 ~~**萎缩**~~ ![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E6%8A%95%E9%99%8D.png) 

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629140241.jpg)

后来,促使我改变主意的,是我得知中考之后放假三天接着上课[高中],我\*\*\*,然后突然想起来博客不方便更新,接着手一抖,把博客的Repo删掉了.

...

既然删了，那么就这么干吧。

其实后来发现这并不困难，只是我刚开始想多了而已。

# 简介

> Travis CI是在软件开发领域中的一个在线的，分布式的持续集成服务，用来构建及测试在GitHub托管的代码。这个软件的代码同时也是开源的，可以在GitHub上下载到，

实际上你会发现，当你把博客Push到Github上时，你的计算机会在NodeJS环境下生成静态文件，然后push到Github。这些步骤其实完全可以用Travis CI做到。

最好在 `source` 下新建一个 `CNAME` 文件,并将绑定的域名写进去,不然直接在 `gh-page` 分支里弄Travis-ci会覆盖掉的.

# 开始

## 本地搭建环境

这一步必不可少，额具体方法网上一搜一大堆，这里就不说了。请注意，最好事先选好主题和插件，配置完成后自己测试一下。完毕后进入下一步。这里不在演示了【毕竟搭建环境与此博文几乎无关】

## 上传

默认情况下，直接在hexo博客根目录上链接repo上传，不会把 `node_modules/` 上传上去，因为 `.gitignore` 中包含这么一行：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629140732.jpg)

但是当时以为我拓展是不能上传的，于是手一滑，删掉那一行，上传上去了。

结果后来发现这就是个错误的选择。

1. `node_modules/` 中，文件比较小

2. `node_modules/` 中，文件比较多

所以：

3. `node_modules/` 中，文件比较碎

嗯，![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/stick_38.png)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629141017.jpg)

我 `git add .` 了一下,它运算了半小时, `git commit` 又花了半小时,幸好`git push` 是打包上去的,不然我估计又要花半个小时.

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629141259.jpg)

结果戏剧性的是,当我去看travis-ci部署记录时,我发现:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629141542.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/tx.png)

> 所以,还没用Travis-ci的同学,请不要手贱删掉 `.gitignore` 中的 `node_modules/`

## 部署

> 这里暂时不说私有怎么部署,这里讲的是PublicRepo.

### 1.注册travis-ci.org

前往 [https://travis-ci.org] 用Github账号注册 **注意了啊,注意了啊,** 是 `.org` 而不是 `.com` ! 鬼知道我在这上面浪费了多少时间! `travis-ci.org` 是免费给公开repo部署的,`travis-ci.com` 是收费的,但是 `travis-ci.com` 却是可以绑定并免费部署公开Repo的.最有问题的是这两个网站其中一个绑定repo后,另一个就不能绑定了!! 害得我以为是缓存搞出来的事,搞了半天没解决,一看地址栏人都傻了.![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/tx.png)

### 2.绑定travis
 前往 [https://github.com/marketplace/travis-ci] 绑定travis-ci到你的github后 继续前往 [GitHub 的 Applications settings](https://github.com/settings/installations) ,点击 `Travis CI`配置你的repo能被TravisCI访问 
 
![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629142607.jpg)

### 3.新建Token

前往 GitHub [新建 Personal Access Token](https://github.com/settings/tokens) 

新建一个Token:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629142812.jpg)

然而请注意,官方文档里说只需勾选 `repo` 全部权限即可,但是据我测试,**只勾选则会导致401验证错误**.似乎还要勾选 `read:public_key` 和 `read:user` ,当然如果你足够懒,你也可以全勾上, **但请不要把Token泄露出去**,否则你的Github就不太好使了.

点击生成Token：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629143305.jpg)

记得复制下来保存！不然下次你就看不到你的Token了！

### 4.修改Repo


进入Repo的 **Master** 分支，新建一个 `.travis.yml` ，里面塞上：

```yml
sudo: false
language: node_js
node_js:
  - 10 # use nodejs v10 LTS
cache: npm
branches:
  only:
    - master # build master branch only
script:
  - hexo generate # generate static files
deploy:
  provider: pages
  skip-cleanup: true
  github-token: $GH_TOKEN
  keep-history: true
  on:
    branch: master
  local-dir: public
```

对,改都不要改,就这么塞进去.

### 5.Token导入Travis-ci

Token很重要,你必须要告诉Travis-ci,因为它要获取对你的repo的写入权,但你也不能明文写在Repo里面,因为别人看得到.

所以,在 [### 4.修改Repo] 中,`github-token:` 后面跟着的不是明文,而是变量  `$GH_TOKEN`.

进入 [https://travis-ci.org/github/{用户名}/{仓库名}/settings] 中,看到 **Environment Variables** ,Name选择 `GH_TOKEN` ,Value把[### 3.新建Token] 中的Token粘贴到里面去.BRANCH直接默认.

**特别注意!,将后面DISPLAY VALUE IN BUILD LOG弄成灰色,不然你的Token将会公开!**,如果你不慎公开Token,请前往GithubPersonalToken删除并重新生成一个Token!

最终应该是这样子的:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629145235.jpg)

在日志里面,搜索Token,应该是这样子的:

```
$ export GH_TOKEN=[secure]
```

### 6.打开触发器

前往 [https://travis-ci.org/account/repositories](https://travis-ci.org/account/repositories),打开目标Repo后面的按钮:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629145630.jpg)

### 7.触发Travis-ci

修改文件或新建Readme,让Travis-ci触发并开始工作.

比如说我更新 `留言板.md` ,Github上一更新,Travis-ci自动开始工作:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629150414.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629150525.jpg)

![麻烦无视左上角的亮度调节](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629150600.jpg)

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200629152935.jpg)

本次日志地址 <https://api.travis-ci.org/v3/job/703061869/log.txt>

### 8.以后

更新博客直接在Github上更改，或者写好之后直接上传，或者pull到本地写好后push到Github，此后操作用户无需本地使用Hexo，也不用调整Travis-ci，安心写博客吧！

# 草稿问题

其实这个比较简单，在修改时新建一个branch，名字叫 `drafts` ,由于 `.travis.yml` 规定只捕获 `master` ,草稿分支不会触发，修改的时候全部在drafts上修改，修改好了直接PullRequest，完事！

**这么干以后,一定要注意,以后所有修改无论大小,都必须先在  `drafts` 里修改,然后发起PR,然后合并.不然直接在 `master` 里修改有可能会导致无法合并! **

# 后记

总之，这样就可以安心用手机或者在学校更新Blog了！

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/stick_54.png)
