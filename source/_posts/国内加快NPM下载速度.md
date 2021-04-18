---
title: 国内加快NPM下载速度
tags:
  - NPM
  - 奇淫巧技
  - Node.js
categories: 好方法
copyright: true
abbrlink: eb4a371e
date: 2019-07-19 12:25:27
---
# 前言
大家都知道，在国内下载Github上文件是什么情景。
对＜（＾－＾）＞，就是那个8kb/s的结果！
这是因为`不为人知的秘密`所造成的。
同样，在NPM下载中也是很痛苦的。
以下载cnpm为例：
在命令提示符中键入`npm install -g cnpm`,结果可能是这样:
```
C:\Users\CYF>npm install -g cnpm
[...................]fetchMetadata: sill resolveWithNewModule cnpm@6.1.0 checking installable status
```

就这样卡半天。
5分钟后:

```
C:\Users\CYF\AppData\Roaming\npm\cnpm -> C:\Users\CYF\AppData\Roaming\npm\node_modules\cnpm\bin\cnpm
+ cnpm@6.1.0
added 691 packages from 924 contributors in 308.39s
```
308.39秒啊啊啊啊啊,这到底卡了多久啊!
# 如何解决？
## 方法一：
在每行npm后加上[npm淘宝镜像](registry.npm.taobao.org)(不是那个淘宝),加上`--registry=https://registry.npm.taobao.org`.
如`npm install -g cnpm`变成`npm install -g cnpm --registry=https://registry.npm.taobao.org`
那样能快很多。先卸载cnpm：
```
npm uninstall cnpm
```
会得到:
```
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
audited 9067 packages in 26.562s
found 0 vulnerabilities
```
呃呃呃,卸载还比安装快.
再安装:
```
C:\Users\CYF\AppData\Roaming\npm\cnpm -> C:\Users\CYF\AppData\Roaming\npm\node_modules\cnpm\bin\cnpm
+ cnpm@6.1.0
added 691 packages from 924 contributors in 97.818s
```
## 方法二：
直接使用`cnpm`代替`npm`.
如`npm install -g cnpm`变成`cnpm install -g cnpm`
原理与方法一相同，不再阐述。

## 方法三：
可以用全局代理软件如`Proxifier`给`npm`挂代理,使他绕过`不为人知的秘密`,加快下载速度.
但不建议,因为这种方法麻烦,用方法一二完全可以代替.

# F&Q：
## Q：镜像站是什么？
## F：所谓镜像站，就是把你现有的网站放在另外一个地方的服务器上，当然，这个服务器既可是你购置而托管的，又可是虚拟的服务器。如果你把网页放在两个以上不同国家或地区的服务器上，那就说明你已为你的网站建立了多重镜像站，这样可以加快你的网站的访问速度，称之为“多重镜像站”。镜像站就跟镜子一样。一般是个人网站的站长为自己的站做一个备份，也就是说，一个站由于流量或其它原因访问不到时，人们可以去另一个一模一样的站看。这个站还可以起到分流，减少服务器压力的作用。不过，这些都是由于个人网站的服务器不能接受太多的访问量而采取的办法。商业网站一般不用这样的办法。因为用户要记两个域名，内容要上传两次，要随时保持两个地方一致，内容一多非常麻烦。而淘宝npm的服务器构建在国内，加快了访问速度。（部分摘自百度百科：镜像站）

## Q：如果镜像站上没有npm的文件，怎么办？
## F：从 registry.npm.taobao.org 安装所有模块. 当安装的时候发现安装的模块还没有同步过来, 淘宝 NPM 会自动在后台进行同步, 并且会让你从官方 NPM registry.npmjs.org 进行安装. 下次你再安装这个模块的时候, 就会直接从 淘宝 NPM 安装了.

- - -

