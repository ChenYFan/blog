title: Euserv正确打开优化方式
author: ChenYFan
tags:
  - 白嫖
  - Euserv 
categories:
  - 白嫖怪
des: 一篇如何优化使用Euserv免费小鸡的文章
key: 白嫖
date: 2021-03-14 11:12:41
index_img: https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615695647000.png
banner_img: https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615695647000.png
lushkey: how-to-use-euserv.md
---

Euserv，盛名远扬【老白嫖怪了】，但是如何合理打开它，却是一个难题。这篇文章就是简单讲讲合理使用其免费的纯IPv6小鸡

<!--more-->

首先是bench测试普通小鸡

```sh
----------------------------------------------------------------------
 CPU Model             : AMD Phenom(tm) II X6 1055T Processor
 CPU Cores             : 1
 CPU Frequency         : 3101.198 MHz
 CPU Cache             : 512 KB
 Total Disk            : 9.8 GB (3.4 GB Used)
 Total Mem             : 976 MB (334 MB Used)
 Total Swap            : 976 MB (0 MB Used)
 System uptime         : 76 days, 21 hour 6 min
 Load average          : 16.17, 19.45, 20.53
 OS                    : CentOS Linux release 7.9.2009 (Core)
 Arch                  : x86_64 (64 Bit)
 Kernel                : 4.20.8-1.el7.elrepo.x86_64
 TCP CC                : cubic
 Virtualization        : LXC
 Organization          : AS29432 TREX Regional Exchanges Oy
 Region                : Pirkanmaa
----------------------------------------------------------------------
 I/O Speed(1st run)    : 19.3 MB/s
 I/O Speed(2nd run)    : 28.5 MB/s
 I/O Speed(3rd run)    : 34.0 MB/s
 Average I/O speed     : 27.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    288.12 Mbps       350.72 Mbps         46.84 ms 
```

这是一张简单优化后的小鸡

```sh
----------------------------------------------------------------------
 CPU Model             : Intel(R) Xeon(R) CPU E3-1270 v3 @ 3.50GHz
 CPU Cores             : 1
 CPU Frequency         : 3740.322 MHz
 CPU Cache             : 8192 KB
 Total Disk            : 9.8 GB (0.9 GB Used)
 Total Mem             : 976 MB (60 MB Used)
 Total Swap            : 976 MB (0 MB Used)
 System uptime         : 0 days, 0 hour 36 min
 Load average          : 5.06, 6.01, 7.01
 OS                    : Debian GNU/Linux 10
 Arch                  : x86_64 (64 Bit)
 Kernel                : 4.20.8-1.el7.elrepo.x86_64
 TCP CC                : cubic
 Virtualization        : LXC
 Organization          : AS13335 Cloudflare, Inc.
 Location              : Frankfurt am Main / DE
 Region                : Hesse
----------------------------------------------------------------------
 I/O Speed(1st run)    : 71.8 MB/s
 I/O Speed(2nd run)    : 58.1 MB/s
 I/O Speed(3rd run)    : 57.3 MB/s
 Average I/O speed     : 62.4 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    203.45 Mbps       105.67 Mbps         9.28 ms     
 Beijing    CU    71.94 Mbps        112.58 Mbps         271.97 ms   
 Shanghai   CU    89.92 Mbps        111.97 Mbps         245.60 ms   
 Guangzhou  CT    0.18 Mbps         131.79 Mbps         234.00 ms   
 Guangzhou  CU    103.38 Mbps       118.68 Mbps         284.22 ms   
 Shenzhen   CU    82.26 Mbps        115.67 Mbps         268.41 ms   
 Hongkong   CN    81.69 Mbps        141.33 Mbps         274.20 ms   
 Singapore  SG    99.51 Mbps        108.96 Mbps         330.77 ms   
 Tokyo      JP    104.81 Mbps       85.70 Mbps          246.56 ms   
----------------------------------------------------------------------
```

# 安装 - Debian10

这里务必要安装Debian系统，不然后面可能会有点小问题


![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615692757000.png)

可能要很长一段时间，完毕后`ServerData`记录ipv6地址和密码备用

# 链接SSH

由于次小鸡用的是纯ipv6,鉴于国内ipv6的部署情况您很有可能连接不上,请选择以下五种方式链接

- CloudFlareSpectrum + UcloudGlobalSSH
- 嘿哟终端
- 挂ipv6代理
- 使用另一台已安装宝塔的Euserv小鸡,用宝塔自带的终端ssh中继到另一台服务器
- 使用ipv4+ipv6双栈vps,用ssh链接

篇幅所限,只讲第一种

## CloudFlareSpectrum + UcloudGlobalSSH

**这个方案比较推荐,就是需要白嫖一个CloudFlarePro**

 UcloudGlobalSSH只能支持ipv4,所以你需要一个CloudFlareSpectrum中继

CloudFlareSpectrum每月5GB流量,仅SSH链接完全足够

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615692972000.png)

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693007000.png)

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693064000.png)

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693130000.png)

这一步之后需要注意解析你的专属ip，CloudFlareSpectrum使用的ip不是供用的。

Windows命令提示符使用

```cmd
nslookup abc.cyfan.top.cdn.cloudflare.net
```

或者使用我的DNS over HTTPS

```url
https://api.cyfan.top/ohhhdns?name=abc.cyfan.top.cdn.cloudflare.net&host=true
```

请自己更改abc.cyfan.top这个域名。

解析的ip形如`172.65.124.0`,但这个ip并不好,三网都很差,所以用UcloudGlobalSSH

UcloudGlobalSSH拥有免费版一天1GB,完全足矣

<https://console.ucloud.cn/upathx/globalssh>

新建一个隧道

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693476000.png)

将之前解析的ip写入，区域建议香港，点击确定，生成专属域名

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693543000.png)

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693601000.png)

然后链接，我这里用的是XShell，其实客户端自己看喜好

域名就是ucloud的专属域名，**端口是922而不是22**，密码是Euserv的密码，用户直接用`root`


![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693743000.png)

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693767000.png)

然后就直接链接

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/img/hpp_upload/1615693951000.png)

使用此方式链接方式如下

```
你 - 中国 <=40ms=> Ucloud - 中国香港 <=10ms=> CloudFlareSpectrum - AnyCast <=Argo 横跨北半球,150ms=> Euserv - 德国
```

也就是说链接直连可以与美国vps媲美


# DNS设置 -DNS64

Euserv只有一个ipv6地址,没有ipv4网卡,所以只能链接纯ipv6网站

使用DNS64可以强制把域名解析到ipv6地址,并且原来只有ipv4的也能通过算法解析到ipv6

由于你要安装Warp,为了下载来自外网的软件,需要使用DNS64

```
nano /etc/resolv.conf
```

大概是这样的

```

search blue.kundencontroller.de
options rotate
nameserver 2a02:180:6:5::1c
nameserver 2a02:180:6:5::1e
nameserver 2a02:180:6:5::1d
nameserver 2a02:180:6:5::4
```

删除最后4行nameserver,添加

```
nameserver 2001:67c:2b0::4
nameserver 2001:67c:2b0::6
```

# Warp安装

> Debian安装时若意外退出则需要相当麻烦解除锁定,所以建立一个稳定的隧道是必须的

首先安装一些必要依赖

```sh
apt update
apt install curl sudo lsb-release -y
```

添加 back­ports 源,并安装wireguard

```sh
echo "deb http://deb.debian.org/debian $(lsb_release -sc)-backports main" | sudo tee /etc/apt/sources.list.d/backports.list
sudo apt update
sudo apt install net-tools iproute2 openresolv dnsutils -y
sudo apt install wireguard-tools --no-install-recommends
```
然后因为是LXC虚拟内核,无奈之下只能使用go语言编译的内核

```sh
curl -fsSL git.io/wireguard-go.sh | sudo bash
```

安装wgcf【第三方注册器】，注册并生成配置

```sh
curl -fsSL git.io/wgcf.sh | sudo bash
wgcf register
wgcf generate
```

修改配置

```sh
nano wgcf-profile.conf
```

几个关键配置

```
DNS = 2606:4700:4700::1111
AllowedIPs = 0.0.0.0/0
Endpoint = [2606:4700:d0::a29f:c001]:2408
```

输入以下命令

```sh
sudo cp wgcf-profile.conf /etc/wireguard/wgcf.conf
sudo systemctl start wg-quick@wgcf
sudo systemctl enable wg-quick@wgcf
echo 'precedence  ::ffff:0:0/96   100' | sudo tee -a /etc/gai.conf
```