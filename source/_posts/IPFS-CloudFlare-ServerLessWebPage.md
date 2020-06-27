title: IPFS+CloudFlare=ServerLessWebPage
author: CYF
tags:
  - IPFS
  - CloudFlare
  - 撸羊毛
categories: 爱学习
index_img: https://img.cyfan.top/pic/cover/ipfs.jpg
banner_img: https://img.cyfan.top/pic/cover/ipfs.jpg
date: 2020-04-07 16:29:02
---
IPFS，这个2018年诞生出来的小东西，似乎掀起了一阵热潮，然后被忘性极大的互联网吃瓜群众所抛弃，但不得不说这个东西可玩度非常高。

# IPFS是什么

网上一大堆文绉绉气昂昂极富学术气息的营销号整天吹嘘着ipfs是跨时代下一时代的比特币，我只能说呵呵，真的想要了解ipfs是什么的，建议左转维基百科或百度百科。

抄一下wikipedia上的介绍：

>（InterPlanetary File System，缩写IPFS）是一个旨在创建持久且分布式存储和共享文件的网络传输协议。它是一种内容可寻址的对等超媒体分发协议。在IPFS网络中的节点将构成一个分布式文件系统。

其实按我的话来说,ipfs就是一个神奇的东西,你放上去一个文件,就会立刻被瓜分成数个文件碎片,每一台运行着ipfs的电脑和矿机就会争先恐后来抢夺你的碎片,并且抢到的人就会获得系统的奖励,而你却一分钱也不用付出.

是不是听起来很神奇?对的,你没有付出任何东西,别人却能获得奖励,而且你既满足储存文件的需求,储存你文件的人也能得到金钱.这种机制,叫做FileCoin.

你可以把它想象成Bittorrent+BitCoin的结合物,实际上他就是这样的<img src="https://img.cyfan.top/pic/moji/huaji.png">.当然不完全是,但核心理念就是这样的.只不过,BitCoin付出的是算力,而FileCoin付出的是硬盘.

IPFS的主要目标是取代HTTP,说是取代,那刚开始就必须兼容,所以目前ipfs可以通过官网ipfs.io获取.

# 工作原理

与bt下载类似,我们需要先介绍BT.

## Bittorrent：分布式哈希表技术

### 先来一个故事

很久很久以前，有一位老头，叫做刘XX。

他是一位很有资格的老师，为了顽固学生们的学习效果，他发送给所有学生一部视频：

![图片](https://img.cyfan.top/pic/BT/视频.bmp "大视频")

（注：老刘的带宽是8Mbps，即最大带宽1MB/s，每一个学生的带宽也是8Mbps）

我们假设有5位学生需要这部视频，则可以画这样一幅图：

![图片](https://img.cyfan.top/pic/BT/down1.png "组团下载ing...")

这只视频是`88.8MB`大小,按照这样的速度,同学需要花费`1024*88.8MB/(204.8kb/s)=444s`即`7分钟24秒`

这还往往只是最理想状况.现在,我们来假设一下现象的出现:

1. 由于视频过于好看,引起广泛关注.现在有200个同学要求下载.则单个人下载完需要17760s即296min也就是约5h!
2. 刘老师觉得单个视频教学质量不够好,决定上传一个8880GB的超大视频.(下载时间大于一天)
3. 几个同学与刘老师搞好了关系,刘老师给他们较高的下载速度,导致带宽分配不均匀,没有关系的学生下载速度更慢了.(百度网盘既视感)

![图片](https://img.cyfan.top/pic/BT/down-VIP.png "A1拥有VIP专线")

4. 由于刘老师给的视频过于激烈,在下载了一段时间后,FBI```open the door!```敲上门来带走了刘老师,视频被查封了!!!(下载速度0)

![图片](https://img.cyfan.top/pic/BT/FBI.jpeg "FBI！Open the door！")

可是，学习是必须的，这可怎么办呢？？？

这时....

刘老师突然想起来，为什么不让每一个学生互相连接，贡献自己已经下好的部分，以来获得最大的下载速度呢？？

请注意，在上述下载中，每一个人都没有充分利用自己的最大带宽，对不对？

那，解决办法就来了:

### P2P：

以256KB为一包，我们就可获得356块文件

![图片](https://img.cyfan.top/pic/BT/file.png "分包")

回到下载界面，我们看到，所有人都与其他人获得连接，那么，连接完成后：

![图片](https://img.cyfan.top/pic/BT/down-each.png "连接")

（为了方便观察，我们将不必要的连接全部去掉）

现在，我们重新开始下载：

我们假设，A1下载了第一块，A2下载了第二块...

两秒后，所有人手上都拥有了一块文件：

![图片](https://img.cyfan.top/pic/BT/down-part1.png "下载")

接下来，在不影响下载的情况下，A1与A2交换下载好的部分，同时与A3、A4、A5交换

![图片](https://img.cyfan.top/pic/BT/down-part2.png "贡献&下载")

看到了吗，所有人都得到了更高的速度，所有人的带宽都得到了最充分的利用，包括原先看起来毫无用处的上传带宽。

接着4秒后，所有的贡献分块都下载好了，而每一个人都从文件发布者身上又得到新的文件碎片。

![图片](https://img.cyfan.top/pic/BT/down-part3.png "下载！")

所以，这种情况回一直持续下去，直到每一个人都下载完成，每一个人都只需下载149秒即2分29秒！相对于单点时间大大减少！

![图片](https://img.cyfan.top/pic/BT/down-finish.png "完整！")

### 人数多&文件大 问题

现在，我们来假设第一个问题，200人下载怎么办？

我们可以明白，人数越多，文件交换越密集，对不对？

显然会见的，这个问题显得异常白痴，可以体会的是，在最佳条件下，每个人的带宽都达到了最大，如果每个人都下载了不同的分块，同时每个人都在贡献。

那么，每个人的下载速度，根本不会受到很大影响。

这对于传统下载（http/https/ftp）不同，传统下载仅仅由一台服务器贡献，人数多对于这台服务器压力极大。

但是，在这个环境里，服务器不仅仅是一台，而且，每当加入一个人，每一个人都可以当作服务器，这样，下载速度反而会大大提升。

反而文件很大是个硬梗，不过相对于传统下载，这种下载方式还是有一定能力解决这个问题的。

**回到这里**

## IPFS的原理

ipfs的世界有个东西叫做cid,大概类似于这样一串: `QmZCvMHrE56VqsejmG53xd9bW4RZjtFpLz46QMQjA81orL` ,前面的 `Qm` 是固定的,后面是SHA256密钥.cid又分为用户密钥和文件密钥,这个暂时不讨论.SHA256强度目前看来基本不会碰撞,毕竟64位十六进制的字符串,能实现16^64个文件的存储,也就是1.1579208923731619542357098500869e+77个id,有生之年能看到它碰撞也不是一件容易的事情

### 上传

如同BT,在短短几秒内,需要分享的文件被分块完毕,但此时,文件还是乖乖的窝在硬盘里,没有分享出去.

当有任何一个人试图获取资源时，你的ipfs会联系距离最近的节点,询问他们有没有意愿存东西.请注意此处的 `距离` ,这可不是物理距离,而是逻辑距离.

节点大都都会很高兴的同意,当然有些节点可能就是混口饭吃不想存,于是这些节点就会帮你联系离他最近的节点要不要,直到所有碎片瓜分完毕.这种算法,像极了DHT.

几分钟内,全球数个硬盘里就会出现你的文件的碎片,只要一声令下,这些文件就会调出.

此时,纵使文件发布者下线,文件照样流传.重复上传的文件,拆碎后被校验到与存在的文件相同则不会被上传.

上传完毕,文件就会拥有自己的id,也称为指纹,取回这些文件则需要id.

### 下载

你可以通过客户端下载,这个下载方式和btDHT其实原理是一样的;当然IPFS为了向下兼容http,自己也有网关,不过网关由于是公开的,一方面是速度,另一方面是已经引起了G||F||\\/\\/の注意，目前并不推荐使用网关下载，当然对于一些小文件比如网页和图片，这些都是随意的。


# IPFS的作用

与一些网盘相反，ipfs反而非常鼓励你往里面塞东西，越多越好，但是作为个人网盘并不适合，一方面ipfs的资源会随着下载的人越多，缓存的机器也会越多，速度更快，私人文件反而速度不佳；另一方面ipfs一旦上传，任何人包括你自己永远无法彻底删除这些文件，即使你在ipfs客户端删除了你分享的文件，这些文件仍然会得到传播。所以ipfs其实可以作为公开下载，甚至是图床，网页托管等等。

在中国，ipfs实际上并没有得到很大的限制，分享文件和下载文件其实很容易做到，麻烦的只是不能从ipfs网关获取罢了。

下面是我放在ipfs上的一张图片，即使我下线，这个文件依旧流传于网络之间。

![](https://ipfs.cyfan.top/ipfs/QmU4Eh586TBCBP5KwKF3zvcXCKcnkw9wD9nKCqxTi15f4n)

但是，ipfs反感在网关下载大文件，因为这样会造成不必要的带宽浪费，下载大文件请使用ipfs客户端+ipfs伴侣

# 搭建无服务器网页

很多人网页放在Github+CloudFlare，其实换个思路，为什么不用IPFS+CloudFlare呢？

开始吧！

## 下载ipfs

官网因为自带网关已经封锁了，请自带梯子访问。

## 写html

请注意，在ipfs上写网页时，请尽量不要使用外链，对于js和css请直接写在网页中，图片请使用base64或上传至ipfs后使用相对链接。

## 上传


![upload successful](https://img.cyfan.top/pic/post/pasted-189.png)

点击添加按钮，上传


![upload successful](https://img.cyfan.top/pic/post/pasted-190.png)

接下来，重点来了！

ipfs分享文件有两种方式，是ipfs和ipns，前者采用文件hash辨别文件，文件内容一旦改变，原来的链接无法更新，链接格式为 `https://ipfs.io/ipfs/QmZCvMHrE56VqsejmG53xd9bW4RZjtFpLz46QMQjA81orL` ；后者采用用户id辨别,内容允许更新，但是用户在线时间过短会导致无法同步，并且有可能暴露用户信息，后者格式为： `https://ipfs.io/ipfs/QmQQKZphgJdEGhTp18NRvVdSJ3RJArRst2keKk3tZvmfPz?filename=index.html` .

如果你只是单个文件网页，此处比较建议使用ipfs，ipns可能离线时间过长导致无法下载。具体看个人所好。

ipfs链接获取：点击 `···` ,选择复制哈希，在前面加上网关域名即可。

ipns连接获取：点击 `···` ,选择分享，复制链接即可。

在科学上网的前提下访问 `https://ipfs.io/ipfs/QmZCvMHrE56VqsejmG53xd9bW4RZjtFpLz46QMQjA81orL` 显示目标界面

![](https://ipfs.cyfan.top/ipfs/QmSGR6p5PxFJqQdEbDySG9QUpBx4WnQcVfxDPohgQ4pDoL)

> 请注意，每次上传后一定要先访问一遍资源，否则文件是不会上传到ipfs服务器的！

## CloudFlare设置

~~不知道为什么CloudFlare的ipfs服务器有点问题，使用官方说明一直爆404 page not found，官方地址在这里<https://www.cloudflare.com/distributed-web-gateway/> 反正我是折腾失败了。<img src="https://img.cyfan.top/pic/moji/lh.jpg">~~

↑以上为放屁，现在来讲一下怎么正确绑定：

### dnslink绑定

这个方法无论你的dns服务商在哪都能绑定，只不过不在CloudFlare托管的用户要多一步。

1.将需要绑定的域名,以CNAME形式指向 `www.cloudflare-ipfs.com` ,比如我需要让 `showtime.cyfan.top` 成为ipfs出口，则这么设置。


![upload successful](https://img.cyfan.top/pic/post/pasted-191.png)

2.使用txt记录绑定ipfs hash，新建txt记录，名字是 `_dnslink.yourwebsite` 一定要加上yourwebsite！比如我绑定的是 `showtime.cyfan.top` ，则名称一行填上 `_dnslink.showtime` !接着内容是 `dnslink=/ipfs/` 后面接上hash，比如showtimehtml的hash是： `QmWAvNck7QBhUAYAEgBFvbvvsMxDC9s55NXVJXeJTjTM1Y` 则大概这么填:


![upload successful](https://img.cyfan.top/pic/post/pasted-192.png)

3.如果你本来就是托管在CloudFlare上的,到此为止就可以了,如果不是托管在Cloudflare上,类似dnspod\alicdn之类的,那还要获取证书,进入<https://www.cloudflare.com/distributed-web-gateway/> 拉到最底下


![upload successful](https://img.cyfan.top/pic/post/pasted-193.png)

输入域名，获取证书即可。

**但问题是，`www.cloudflare-ipfs.com` 已经被dns污染了，你用cname绑定是无法正常访问的啦！所以只能用Workers绕路啦！**




### JSProxy反代ipfs.io


老办法，Workersjsproxy反向代理ipfs网关，解决<img src="https://img.cyfan.top/pic/moji/wc.jpg">

网址：https://showtime.cyfan.top

# 其他的用处

我在Github上看了很多奇奇怪怪的用法，有的拿来做博客，有的拿来做网盘，有的拿来做图床，欸，真的是脑洞大开，幸好ipfs经得起折腾，越折腾他们赚的越多<img src="https://img.cyfan.top/pic/moji/huaji.png">