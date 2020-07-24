title: 如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍
author: CYF
tags:
  - 奇淫巧技
  - 域名
  - 网站
  - DNS
  - 解析
  - 速度
categories:
  - 好方法
copyright: true
date: 2020-03-11 13:49:00
---
这是加速前的压力测试：
![图片](https://img.cyfan.top/pic/post/5.gif)

这是加速后的压力测试：
![图片](https://img.cyfan.top/pic/post/6.gif)


这是我头一次一天更新两篇博文.

# ：（

之前说过，Coding实名认证蛋疼，转到Github上又速度难受。

本来以为CloudFlareCDN能给我加速，结果今天博客压力测试时只有50kb/s

网上查了很多方法才明白，CloudFlare免费账户虽然能使用CDN，但是只有两条很慢的线。

ipv4：104.28.16.222以及104.28.16.223，速度慢的一撇。

本来以为CloudFlare炒鸡良心，现在发现其实还是个资本主义老大。

欸，能免费用DNS就不错了，不能这么贬低CF。

后来偶然间发现CloudFlareCDN之间消息互通基本没延迟，也就是CDN可以自选，网上搜罗了一堆CDN：


```
108.162.236.1/24 联通 走美国
172.64.32.1/24 移动 走香港
104.16.160.1/24 电信 走美国洛杉矶
172.64.0.0/24 电信 美国旧金山
104.20.157.0/24 联通 走日本
104.28.14.0/24 移动 走新加坡
104.23.240.0-104.23.243.254
162.159.208.4-162.159.208.103
162.159.209.4-162.159.209.103
162.159.210.4-162.159.210.103
162.159.211.4-162.159.211.103
104.20.157.2 
104.18.62.2 
141.101.115.3 
104.16.160.3
162.159.211.4-103
103.21.244.0/22
103.22.200.0/22
103.31.4.0/22
104.16.0.0/12
108.162.192.0/18
131.0.72.0/22
141.101.64.0/18
162.158.0.0/15
172.64.0.0/13
173.245.48.0/20
188.114.96.0/20
190.93.240.0/20
197.234.240.0/22
198.41.128.0/17
104.23.240.*
172.64.32.*
104.16.160.*
108.162.236.*
162.158.133.* 
198.41.214.*
198.41.212.*
198.41.208.*
198.41.209.*
172.64.32.*
141.101.115.*
172.64.0. *
172.64.16.* 
104.18.48.0-104.18.63.255
104.24.112.0-104.24.127.255
104.27.128.0-104.27.143.255
104.28.0.0-104.28.15.255
104.28.16.0-31.255
104.27.144.0-243.254
104.23.240.0-243.254
1.0.0.0-254
1.1.1.0-254
104.16.0.0-79.255
104.16.96.0-175.254
104.16.192.0-207.255
```
这些留着备用。

那么，怎么运用这些CDN呢，网上绝大多数说的是使用CloudFlareParterner的接入方式，我试了一下，直接入坑，差点爬不上来。

我是依照 [https://www.jianshu.com/p/7f38989ffa15 ] 上讲的，把CloudFlare改成笨牛CNAME解析，接着做下一步时发现Freenom站点差不多荒废了，根本进不去改NS。结果退回来想解除绑定，解除不了，又没有把解析记录弄完整，只好删除重新回到CloudFlare，差点解析记录全盘翻掉。

可是，难道我要忍受这50kb/s的速度吗？？？

不，不可能。

# 让我们理一下思路

+ CF拥有很多CDN
+ CF的CDN之间速度直接爆满
+ CF的CDN之间几乎没有延迟
+ CF所有CDN节点均免费，可以随便接入
+ CF默认的CDN速度很慢

那么，就有两种情况出现：

## 加速浏览别人的网站

很多站长，尤其是国内个人站点站长，如果服务器放在国外的，基本都会用CFCDN。

先不说别的，大名鼎鼎的 [loadbt](https://loadbt.com) 种子不限速离线下载就是用CF免费版的CDN，那速度下载只有60kb/s，而且经常断线。

![图片](https://img.cyfan.top/pic/post/pasted-11.png)

那么，如何加速？

很简单，上述提到的那么多IP，拿一个来，修改本地的Hosts，引导使用较快的ip来访问即可。

实际上我相当推荐 `1.0.0.1` ~ `1.0.0.254` 这个ip段作为回源ip,因为这个ip段用的是CN2,速度很好,延迟也很低;

```
ping 1.0.0.2

正在 Ping 1.0.0.2 具有 32 字节的数据:
来自 1.0.0.2 的回复: 字节=32 时间=68ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=50ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=57ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=54ms TTL=51

1.0.0.2 的 Ping 统计信息:
    数据包: 已发送 = 4，已接收 = 4，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 50ms，最长 = 68ms，平均 = 57ms
```

但是,问题是,如果你是站长呢?你总不可能让访客去修改Hosts吧!

## 加速自己的网站

先前提到:

+ CF拥有很多CDN
+ CF的CDN之间速度直接爆满
+ CF的CDN之间几乎没有延迟
+ CF所有CDN节点均免费，可以随便接入
+ CF默认的CDN速度很慢

以及:

+ CF免费提供Workers运行脚本
+ Workers目前已实现全部署,有Workers的服务器必是CDN
+ Workers每天免费处理10w条数据
+ JSProxy通过脚本镜像网站


那么,为何不用Workers来镜像自己的网站呢?而且这个办法零风险,不需要接入第三方即可使用,真正实现了CDN自选:

PS:这个办法适用于像我一样的站长,所有资源都存在同一个服务器.如果有外链则无法加速.

(由于在写博客之前我已经替换完毕主界面和博客的地址，不可能重新替换吧,以下演示用PS_Online)

### 镜像自己的网站：

`pss.cyfan.ga` 是回源网站，处于中间状态，不需要被外人知道，当然知道也没关系。 

`ps.cyfan.ga` 是主站点，就是你给别人看的，是要经过加速。

#### 复制脚本：

[https://raw.githubusercontent.com/EtherDream/jsproxy/master/cf-worker/index.js ] 或者是我Fork的地址 [https://raw.githubusercontent.com/ChenYFan/jsproxy/master/cf-worker/index.js ]
把里面的内容全部复制，进入下一步：

#### 设置CFWorker

进入Workers:


![图片](https://img.cyfan.top/pic/post/pasted-12.png)

点击Create a Worker


![图片](https://img.cyfan.top/pic/post/pasted-13.png)

清空左边的编辑框，将刚刚复制的代码粘贴进去。

修改第六行，把地址变成自己的。

~~娶~~ 取个霸气点的名字，不要想博主一样取ps那么弱小的名字。【手动滑稽】

最后Save and Deploy

#### 修改DNS：


![将正常需要回源的](https://img.cyfan.top/pic/post/pasted-14.png)

将正常需要回源的地址后面加个s，注意如果使用Proxied请暂时去除。

新建真正需要的地址：


![upload successful](https://img.cyfan.top/pic/post/pasted-15.png)

使用A记录，IP选择上面提到的，随意，建议1.0.0.\* ,速度快，丢包少，延迟低。

**千万不要勾选·proxied·！一定要改成·DNS Only·！**

#### 绑定Workers


![upload successful](https://img.cyfan.top/pic/post/pasted-19.png)

就照这个样子填就可以了。

#### 回到原网站：

Github更换绑定：


![upload successful](https://img.cyfan.top/pic/post/pasted-16.png)

可以看到修改DNS后报错了，把地址改成**回源后**地址，我这里是 `pss.cyfan.ga`

点击Save，接着有一行字：

```
Custom domain "pss.cyfan.ga" saved.
```

还没有完，翻到底下，你会发现Github提示：


![upload successful](https://img.cyfan.top/pic/post/pasted-17.png)

```
Enforce HTTPS — Not yet available for your site because the certificate has not finished being issued.
Please allow 24 hours for this process to complete. (pss.cyfan.ga) 
HTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to your site.
When HTTPS is enforced, your site will only be served over HTTPS. Learn more.
```

不急,申请TLS证书其实根本不需要24小时,过个2分钟,刷新一下:


![upload successful](https://img.cyfan.top/pic/post/pasted-18.png)

勾选Enforce https,刷新,可能会报成功,不急,再刷新一下就会报失败,过一段时间再刷新,如果报成功,那么恭喜成功!但还没完!

#### 回源代理

回到CloudFlareDNS,将pss.cyfan.ga勾选Proxies，但是ps.cyfan.ga千万不要勾选！

CF加速完成,试试吧!


# 原理：



![upload successful](https://img.cyfan.top/pic/post/pasted-20.png)


ping一下博客：

```

正在 Ping blog.cyfan.ga [1.0.0.2] 具有 32 字节的数据:
来自 1.0.0.2 的回复: 字节=32 时间=49ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=49ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=50ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=49ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=56ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=50ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=52ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=49ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=50ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=51ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=52ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=51ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=51ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=48ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=61ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=50ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=53ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=49ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=52ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=49ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=56ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=52ms TTL=51
来自 1.0.0.2 的回复: 字节=32 时间=52ms TTL=51

1.0.0.2 的 Ping 统计信息:
    数据包: 已发送 = 23，已接收 = 23，丢失 = 0 (0% 丢失)，
往返行程的估计时间(以毫秒为单位):
    最短 = 48ms，最长 = 61ms，平均 = 51ms
    
```

可以发现基本没丢包.说明`1.0.0.2`很稳定.

那么...

欢迎继续访问我的博客！

---

反正IP随便改，最近随便换了个香港线：

加速前


![upload successful](https://img.cyfan.top/pic/post/pasted-80.png)

`说实话有些看不懂这路是怎么绕的，为什么又从北京出口`

加速后

![upload successful](https://img.cyfan.top/pic/post/pasted-79.png)

实际上后面还有一端链接到Github，不过这一段可以忽略不计了。