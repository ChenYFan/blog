---
title: 免·爬·城·国内管理分享GoogleDrive
author: CYF
tags:
  - 干货
  - 脚本
  - CloudFlare
  - Workers
  - GoogleDrive
  - 下载
  - 网盘
categories:
  - 撸羊毛
copyright: true
index_img: 'https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/img/15.jpg'
banner_img: 'https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/img/15.jpg'
abbrlink: 74e90c90
date: 2020-03-18 08:38:00
---
昨天网上早早写完作业在Github上瞎逛，话说回来Github Explorer有时候真的很神奇给我推荐一些稀奇好用或正好急缺的东西，比如Accesser、MusicPlayer2、PHPProxy等等等等。结果昨天搜罗了这么一个极棒的玩意：[GDIndex](https://github.com/maple3142/GDIndex)。

## 这个是拿过来干什么的

基于rClone和CFWorkers的脚本，可以免F下载上传管理GoogleDrive。

国内访问GoogleDrive总会被...咳咳...那个...对了...嗯...你懂的东西干掉,所以只能隔洋兴叹.说实话个人使用googledrive真的不频繁,当时注册的时候只有4GB,2017年注册至今,我就放了一部400MB的视频,根本没有用多少. 至于当时为什么不用,这是后面的事情了,这里暂时不讲.
只是不知道为什么,现在我的谷歌硬盘变成15GB了,emmmm,也不差.

这个脚本有两个作用:1.在国内管理GoogleDrive2.快速分享给国内用户.

说实话,这个正好填充我的缺陷,小文件我直接扔在Heroku+CF Always Online,静态文件缓存我调到一星期,勉强支撑私有云的下载;太大的文件直接放百度网盘上,虽然下载速度慢了点,但对于分享还是可以的;

但那种不大不小的文件,比如一个80MB的安装包,你让我放哪?放heroku?由于它有500MB的限制,似乎不可能;放百度网盘?就因此要启动一个客户端,还那么慢,我觉得估计没人会下载.

因此,原先准备放OneDrive上,但OneIndex脚本运行在Heroku上失败了...这个时候我看到了GDIndex.

...  
简直上天!这是我搭好的公开分享:
[https://drive.cyfan.top ]
避免和谐,有用户密码,均为User.主要分享一些不是特别大的安装包,当然不会
放那些违反中国大陆法律的东西,某些人就省省心吧.

## 搭建:

搭建过程变得异常简单:

准备:

- Google账号(没有可以注册一个)
- CloudFlare账号(可以没有自己的域名)

### 1:代码生成

(确保在代理情况下进行,因为要登入googledrive)

进入[https://gdindex-code-builder.glitch.me/ ],


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-52.png "界面")


点击<kbd>Click me</kbd>


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-53.png)

点击登入,允许(此时需要你的谷歌账号授权,如果你觉得这对你的账号造成了危险,可以换一个不常用的谷歌账号,反正我个人使用时没有问题)

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-54.png)
获取密钥:
回到[https://gdindex-code-builder.glitch.me/ ]，粘贴密钥

关于 `Default Root ID` 如果你只是管理自己个人网盘,私有使用,那么请保持默认,但如果和我一样是公开的,而且只希望访问其中一个文件夹内容,那么:

登入自己的谷歌drive

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-55.png)

进入希望分享的文件夹,比如 `Public`


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-56.png)

那么地址栏就会变成这样:

```
https://drive.google.com/drive/folders/1Gv9Un9FGJtbpVY4-xuxI3ELsUzAlxwrx
```

folders后面就是文件夹ID,我这里是 `1Gv9Un9FGJtbpVY4-xuxI3ELsUzAlxwrx`

回到[https://gdindex-code-builder.glitch.me/ ]，粘贴ID

`Enable authentication` 强烈建议开启,如果你不希望自己搭起来的GDIndex被和谐,请听信我的话!即使是公开分享,也最好设置一个!

`Enable file uploading` 如果只是个人使用,请开启,如果公开分享...你肯定不希望你的网盘被拿来做公开网盘.

点击<kbd>Get Code</kbd>,底下会生成代码,这里就不公开展示了

### 2.部署代码

回到cloudflare,点击workers,新建,粘贴代码,重命名workers（比如pdrive）,点击部署,完成!

(我甚至都懒得贴图了,这一步真的没什么技术含量可言)

这个时候的地址是：`https://#WorkersName.#UserName.workers.dev` 把它输入地址栏直接访问，看看行不行。

### 3.自选CDN(可选)

实际上到这一部已经完成了,直接访问workers网址就可以使用了,但速度很慢，而且搞不好某一天 `「羲农去我久」1PjT8X/2TCX3i。` 发威，把workers全盘封禁怎么办？

（这一步需要有你自己的域名，没有自己域名的可以不做，但速度就很慢了）

进入cloudflare，点击workers,新建路由，选择之前新建的Workers，写入需要绑定的域名：


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-57.png)


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-58.png)

确定，回到DNS，添加A记录，名字为刚刚绑定的那个，ip地址请去我博客-关于界面查看所有CFIPv4地址，这里比较推荐1.0.0.* CN2线路，速度不错。

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-59.png)

最好在加个ipv6，这样对于ipv4小水管比较好解决问题，本站暂时不添加，因为国内ipv6环境真的不是很好。

完成，试试自己的谷歌硬盘吧！

## 一些比较棒的功能

### 支持密码保护

此处不详解。

### 支持直接上传


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-60.png)

自选CDN，上传速度很可观

但是有个问题，上传大于100MB的文件会随机失败，这应该是Workers的限制，因为免费Workers每分钟最多支持1000次，超过了就会暂时宕机

### 支持离线下载

这是我远远没有想到的，没想到还可以从网址获取，可惜不支持种子磁力电驴，也许可以和WebTorrent结合。


打开Upload From Url，输入网址：

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-61.png)



![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-62.png)

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-63.png)

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-64.png)

不过上面也写的很清楚，由于CFWorkers的限制，下载大文件有可能会失败。

### 支持免F下载


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-65.png)

速度很可观，将近1.5MB/s，但请不要使用IDM！本来速度就可以了，如果使用IDM多线程，会导致CFWorkers提早达到每分钟阈值导致无法下载！

### 支持在线预览视频文档音乐


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-66.png)

### 支持放一些XXX福利的东西

这就是谷歌硬盘和百度网盘最大的区别（笑）
但我绝对不会在公开云上放这些的！（认真脸！）


## 一些比较严重的缺陷

### 上传很容易失败


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-78.png)

这个问题是在我试图上传htmlDesigner时发现的，上传上传就卡住了，原来是达到100MB,CloudFlare免费计划最多上传100MB限制，而且有时候上传完成却没有出现等等。这个就比较影响用户体验了。

### 没有新建文件夹功能

这个还行

### 没有删除功能

这个就比较糟心了

### 水管有限

这个倒还好，只要不太过分就行


# 后言

至少我已经很满意了，起码可以充分利用那15GB空间，而且可以外链，所以拿来当图床还行，只是延迟大了点。更棒的是只要不大规模分享，放些XXX还是可以滴.....

至于为什么以前不用GD原因:
- 任何操作(哪怕是删除)就要F一次,我真的没这个耐心.
- 上传个大文件就很糟心了,免费代理的上传速度就...而且丢包断线常有,经常上传失败
- 4GB(GoogleDrive)<2TB(BaiduDrive)
- 没有离线下载功能
- 当时百度限速还没有这么严重,哪怕是油猴脚本+IDM轻松跑满速(12.5MB/s),下部4GB电影6分钟完成

现在百度网盘下载速度真的是...PanDownload是很聪明,采用Aria2多线程尽可能突破百度单线程限速,采用分享下载绕开账号限制,采用打包下载绕开IP限制...架不住百度网盘铁了心收费，现在单线程下载只有可怜的10kb/s...  

网上很多在疯传除了PanDownload的下载器,都是声称不限速,其实还没有pandownload聪明,有的用cookie登陆其实和账号密码登陆一样,只是多了个障眼法,让用户感觉安全一些;  

有的说爱奇艺播放器...好吧我这个不能驳回，但当时我下载了两部哈利波特电影将近12GB后又被限速了...

或者还有一个还可以说机智的下载器:ENFI下载器,采用P2P下载,这样从根本解决源头慢的问题,但是有流量限制,而且资源不热门时就根本没有加速效果了..

甚至现在百度网盘变本加利,多了个临时下载加速流量券,所以百度网盘这是侧面承认限速了吗???

欸,毕竟百度网盘采用新用户2TB本身就是个错误,虽然采用哈希储存的方式,架不住下载人多速度快.