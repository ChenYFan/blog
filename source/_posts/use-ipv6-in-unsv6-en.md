---
title: 在不支持ipv6的路由器下使用ipv6
author: CYF
tags:
  - 网络
  - ipv6
  - 代理
  - SS
  - 奇淫巧技
categories:
  - 好方法
index_img: 'https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-134.png'
banner_img: 'https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-134.png'
abbrlink: 536a1a2d
date: 2020-04-05 15:34:00
---
从奶奶家回到城里，立刻有个问题困扰着我，我将处于没有ipv6的环境下。

拜托，都0202年了，你怎么连ipv6都没有？

因为家里情况有点小特殊，有三个路由器：


![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-127.png)

移动路由器网关：楼下。100Mbps。通常使用LAN口直接网线插进去，一般不用无线功能，实际上老早支持ipv6了。

小米路由器：楼下。有线连接移动网关，因为支持5GHz的WiFi，所以在楼下一般手机都是接入小米路由器。

水星路由器：楼上。有线链接移动网关，不支持5GHzWiFi，不过2.4GHz一般满足日常使用，峰值可达44Mbps，对等网速4MB/s保持的住，也就不计较速度慢了。扯淡的是由于生产日期过早，居然不支持ipv6！！！

我在楼上，身边有个2008年买来的水星路由器，这个路由器通过百兆网线链接楼下的移动网关，也就是套了两层路由器。

恼火的是，由于是2008年的产物，这破玩意是不支持ipv6的。


![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-128.png)

问题是，没有公网ipv6就意味着我的BTSYNC将处于疯狂的中继服务器，欸，不可忍耐。

以至于百度的ipv6都上不去。

![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-129.png)

甚至连自己ipv6站点都上不去。<img src="https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/moji/huaji.png">

这谁忍得住啊。

# 坐下来好好想想

之前去问过姨父，姨父是个非常屌的男人。

我问：“阿姨丈（方言称呼），怎样在不支持ipv6的路由器下使用ipv6啊，把局域网下电脑做代理可以吗？”

姨父：（一脸鄙夷地瞟了我一眼）“硬件解决不了的的事情还想用软件解决？”

好，那我就用软件解决硬件解决不了的事情！

刷固件？我不知道这种行不行的通，刚才问了一下 [winkiller](https://winkiller.jamjams.xyz) 刷硬件的大佬,回答是应该不行.


![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-130.png)

不行就不行吧,反正我也没指望刷硬件.

想一想,对了,父母那台电脑不是挺适合拿来做代理服务器吗?

思考一下:

- [x] 我是笔记本,他们是台式电脑,他们电脑每天开机,早6:00到网上11:00一直开着,也就是我开机的时间他们绝对开着.
- [x] 父母根本就没有ipv6这个需求,他们最多上爱奇艺央视看视频,ipv4和ipv6是啥都不知道,不过那台机子ipv6常开.
- [x] 父母网速需求不大,我因为路由器一层限制速度最多4MB/s,而家里带宽是12.5MB/s,基本不会影响.
- [x] 楼下那台绝大多数情况是空闲的╮(╯▽╰)╭
- [x] 楼下那台为了方便我把它设置成静态ip了

那就把父母那台机子做代理吧!

# 安装

首先要思考拿什么做代理.

VPN?算了吧,配置太麻烦,还是SS好.

欸你没看错,没错,把父母电脑作为SS服务端.

查了查,有一个东西叫做[libQtShadowsocks](https://github.com/shadowsocks/libQtShadowsocks/releases)

不过最新版本有点问题,于是我下载了1.10.0版

那就下载吧,为了防止楼下Github连不上去,我打包好了

<a class="btn" href="https://drive.cyfan.top/shadowsocks-libqss-v1.10.0-win64.zip"> >>去网盘下载
            </a>


解压,我的版本里已经预置了一下内容,可以修改,如果是用原版的同学请继续.

在 `shadowsocks-libqss.exe` 同目录的文件夹下新建 `config.json` ,里面填上:

```json
{  
    "server":"0.0.0.0",  
    "server_port":8023,  
    "local_address":"127.0.0.1",  
    "local_port":1080,  
    "password":"password",  
    "timeout":600,  
    "method":"aes-256-cfb",  
    "http_proxy": false,  
    "auth": false  
}
```

- `server` 表示监听的ip, `0.0.0.0` 表示监听来自局域网的ip,保持默认即可
- `server_port` 表示监听的端口,随意,只要不被占用即可
- `password` 密码
- `method` 加密方式.

上面的配置看情况修改,我这里就这样.

运行,出现个黑色框框碍眼,还报错?


![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-132.png)

不要紧,因为没有指定配置,在底下新建 `Start.vbs` 里面填上：

```vbs
Set ws = CreateObject("Wscript.Shell")
ws.run "shadowsocks-libqss.exe  -c config.json -S",vbhide 
```

双击解决,隐藏运行.

## 开机自启

难道每天早上我都要手动去运行?

不可能.

所以要设置开机自启动.

注册表 `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`,里头新建一个字符串值,名字随意,值为vbs的绝对路径.

# 测试

![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-133.png)

添加浏览器代理.

于是出现封面如此不可思议的景象.


![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-134.png)

![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-188.png)

完成!

# 后言

实际上原理是这样的:


![upload successful](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/post/pasted-135.png)

另外,不知道是不是楼下360杀毒的锅,http链接经常不能跳转成https,导致一些网页没办法好好运行,emmm,加个HTTPSEverywhere解决问题。

<a class="btn" href="https://pan.cyfan.top/%E6%8F%92%E4%BB%B6/crx/HTTPS_Everywhere.7z"> >>去私有云下载HTTPSEverywhere
            </a>
            
因为代理在局域网内，速度损耗和延迟基本不计入在内，也就是全天挂在这里都没问题，想要全局笼罩建议加个Proxifier


<a class="btn" href="https://drive.cyfan.top/PHPnow-1.5.6.zip"> >>去网盘下载Proxifier
            </a>