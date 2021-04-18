---
title: Valine：一款极简评论系统的安装到升级
tags:
  - 站长必备
  - Hexo
  - 评论
  - Valine
categories:
  - 丆插件
copyright: true
abbrlink: 90e223e4
date: 2019-08-17 15:30:00
---
# 前言：

> 这可能就是这个暑假最后一篇了，好怀念啊(ノへ￣、)

几天前我的博客评论系统还是来比力的，这几天我把它换成了Valine，为什么呢？我列了一张表，你可以参考一下：

（这些都是还活着、中国能访问的评论系统）

项目&评论系统：|Gitalk|Gitment|Livere|Valine|畅言|
--- | ---- | ---- | ---- | ---- | ---- |
需要备案？|❌|❌|❌|外国版❌，国内版未来✔|✔|
评论系统存储服务器地址？|Github issues|Github issues|Livere服务器|Leancloud|畅言服务器|
速度？|较快|快|很慢|快|较快|
延迟？|<6s|<6s|>10s|<3s|<3s|
支持匿名？|❌|❌|✔|✔|未知|
登陆方式？|Github账号|Github账号|多种SNS账号|邮箱|多种SNS账号|
UI风格？|极简|一般|一般|极简|一般|
缺陷|只支持Github账号|只支持Github账号|加载极慢|免费版每天强制休眠6小时|要备案|

这么看来，还Valine最优秀。

# What's Valine?

Valine 诞生于2017年8月7日，是一款基于LeanCloud的快速、简洁且高效的无后端评论系统。

理论上支持但不限于静态博客，目前已有Hexo、Jekyll、Typecho、Hugo、Ghost 等博客程序在使用Valine。

## 特性
- 快速
- 安全
- Emoji 😉
- 无后端实现
- MarkDown 全语法支持
- 轻量易用(~15kb gzipped)
- 文章阅读量统计 v1.2.0+

# 开始安装：

## 注册LeanCloud账号。

> 注意一下，如果你不想手持身份证拍照，还是乖乖使用国际版吧！

[国内LeanCloud](https://leancloud.cn) [国外LeanCloud](https://leancloud.app) 

好在国际版也支持中文。

注册->绑定手机号（这一步逃不了的）->手持身份证拍照（海外版可以跳过这一步）->创建一个应用，选择开发板

![创建应用](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/VALINE/CREATE.jpg "创建应用")

到此注册已完成了，确实很简单吧？

## 安装Valine

### 获取`App ID`和`App Key`
进入设置->应用Key,可以看到`App ID`和`App Key`,`Master Key`用不着,先不用管.


> ## 安全提示 ##
> Master Key 是最高权限的 Key，一旦泄露，请立刻使用「重置」按钮重置。
> App Key 是客户端中使用的 Key，理论上客户端中所有请求都不应被信任，默认应认为 App Key 是泄露的。
> 防御恶意请求，不应通过加密 App Key，而应通过设置 ACL（访问权限控制列表）来实现，详细请参考 [「数据与安全文档」 ](https://console.leancloud.app/docs/data_security.html)。

### Hexo+NexT用户：
打开`/theme/next/_config`文件,搜索`Valine`,你会看到类似的字样:
```
# Valine.
# You can get your appid and appkey from https://leancloud.cn
# more info please open https://valine.js.org
valine:
  enable: false
  appid: 
  appkey: 
  notify: false # mail notifier , https://github.com/xCss/Valine/wiki
  verify: false # Verification code
  placeholder:  # comment box placeholder
  avatar: mp # gravatar style
  guest_info: nick,mail,link # custom comment header
  pageSize: 10 # pagination size
```

这里解释一下:
- `enable`: 表示Valine是否开启,请把它修改为`true`
- `appid`: 你的`App id`
- `appkey`: 你的`App Key`
- `notify`: 邮箱提醒,这个功能并不完善,请保持为`false`,以后我们会有更好的邮件系统.
- `verify`: 人机验证,最好开起来,避免恶意灌水,但是发的评论越多,题目越难,有点反人类.
- `placeholder`: 默认在评论框内显示的文字
- `avatar`: 没有留下[Gravatar](https://cn.gravatar.com) 账号的用户默认头像，具体前往<https://valine.js.org>查看更多。
- `guest_info`: 默认显示的三个信息输入框
- `pageSize`: 单页显示评论量，默认十条。

接着`hexo g`自己看一看吧!

### 其它用户:
先在`<head>`和`</head>`间添加:

```Javascript
<script src='//unpkg.com/valine/dist/Valine.min.js'></script>
```

接着在`<body>`和`</body>`间在你要添加的区间添加:

```html
    <div id="vcomments"></div>
    <script>
        new Valine({
            el: '#vcomments' ,
			appId: '<APP_ID>',
			appKey: '<APP_KEY>',
			notify: false, 
			verify: false, 
			avatar: 'mp', 
			placeholder: 'just go go' })
    </script>
</body>
```

与上面相同:
- `appid`: 你的`App id`
- `appkey`: 你的`App Key`
- `notify`: 邮箱提醒,这个功能并不完善,请保持为`false`,以后我们会有更好的邮件系统.
- `verify`: 人机验证,最好开起来,避免恶意灌水,但是发的评论越多,题目越难,有点反人类.
- `placeholder`: 默认在评论框内显示的文字
- `avatar`: 没有留下[Gravatar](https://cn.gravatar.com) 账号的用户默认头像，具体前往<https://valine.js.org>查看更多。

> **手动填坑**
> 在 `:`后一定要有一个<kbd>Space</kbd>!

搞定了!

## 去除`Powered by Valine`

在`</script>`前添加以下文字:

```javascript
var infoEle = document.querySelector('#comments .info');
if (infoEle && infoEle.childNodes && infoEle.childNodes.length > 0){
  infoEle.childNodes.forEach(function(item) {
    item.parentNode.removeChild(item);
  });
}
```

你会看到版权神秘失踪了.

# 升阶:

Valine主打无后台,虽然避免了种种麻烦的事,但为管理造成了一定麻烦.

况且邮箱发送提醒也有很大缺陷,这时,我们就要祭出神器: `Valine-Admin` !

感谢[杨学峰](https://gitee.com/a1401358759/Valine-Admin) 的贡献!本篇转载以下。

## 部署环境:

在Leancloud中`云引擎`->`设置`->`源码部署`->`代码库`,设置为<https://github.com/ChenYFan/Valine-Admin.git>,接着进入`云引擎`->`部署`,点击部署,过一下就部署完成啦!

## 设置变量:

|变量 | 示例 | 说明
|--- | ------ | ------
|SITE_NAME | CYFの博客 | [必填]博客名称
|SITE_URL  | https://blog.cyfan.ga | [必填]首页地址 
|**SMTP_SERVICE** | 163 | [新版支持]邮件服务提供商，支持 QQ、163、126、Gmail 以及 [更多](https://nodemailer.com/smtp/well-known/#supported-services) ,不建议使用QQex.
|SMTP_USER | xxxxxx@163.com | [必填]SMTP登录用户
|SMTP_PASS | xxxxxxxx | [必填]SMTP登录密码（QQ邮箱需要获取独立密码,建议使用163） 
|SENDER_NAME | CYF | [必填]发件人 
|SENDER_EMAIL | xxxxxx@163.com | [必填]发件邮箱
|ADMIN_URL | https://xxx.avosapps.us/ | [建议]Web主机二级域名，用于自动唤醒
|BLOGGER_EMAIL | xxxxx@gmail.com | [可选]博主通知收件地址，默认使用SENDER_EMAIL
|AKISMET_KEY | xxxxxxxxxxxx | [可选]Akismet Key 用于垃圾评论检测，设为MANUAL_REVIEW开启人工审核，留空不使用反垃圾

接着`云引擎`->`Web主机域名`,自主设置,比如`xxx`,然后访问<https://xxx.avosapps.us/sign-up>，快速注册自己的管理员账号。

> 注：使用原版Valine如果遇到注册页面不显示直接跳转至登录页的情况，请手动删除_User表中的全部数据。

> 注: 国内版更可能是`xxx.leancloudapp.cn`,具体看情况.

此后，可以通过`https://xxx.avosapps.us/`管理评论。
## 定时任务设置

开发版有限制，每天强制休眠6小时和每半小时睡眠。

解决：

目前实现了两种云函数定时任务：(1)自动唤醒，定时访问Web APP二级域名防止云引擎休眠；(2)每天定时检查24小时内漏发的邮件通知。

进入云引擎-定时任务中，创建定时器，创建两个定时任务。

### 自动唤醒

选择self-wake云函数，Cron表达式为`0 0/30 7-23 * * ?`，表示每天早7点到晚23点每隔30分钟访问云引擎，`ADMIN_URL`环境变量务必设置正确：

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/VALINE/SW.png "自唤醒")

> 不建议添加该函数，这回导致你的评论系统在半夜无法正常运行。

### 邮件通知

选择resend-mails云函数，Cron表达式为`0 0 8 * * ?`，表示每天早8点检查过去24小时内漏发的通知邮件并补发：
![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/VALINE/MAIL.png "邮件通知")

~~**添加定时器后记得点击启动方可生效。**~~

[2020年6月6日更新]

注意!LeanCloud于2020-4-14 流控：
[官网链接](https://forum.leancloud.cn/t/topic/22595)

```
我们近期发现有大量云引擎的体验版（免费版）用户创建了在同一时刻触发的定时任务唤醒容器运行，会对服务的负载产生一定影响。因此我们决定根据服务器的负载，对这些定时任务添加流控，通过定时任务唤醒容器将有可能会失败。这个改动不会对云引擎的标准版（付费版）用户产生影响。
```

简单地说就是赶人,拒绝自动唤醒.这可以理解,毕竟这么多人白嫖也不对;但同时还有一个问题,你一个LeanCloud商业版一天30￥，这怎么说我都觉得付不起，我认为，搞个0.1￥/日的套餐没准白嫖的人就少些呢

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200606145909.png)

所以,要么就不添加定时任务【此时评论依旧可以导入，只不过不会发邮件而已】，要么就外部自唤醒【可以试试GithubAction、CloudFlareWorkers、CronJob，甚至最简单的UpTimeRobot都可以】。至于我么，懒得自唤醒了，毕竟所有评论都是要我手动审核的，审核完了才发邮件，这个时候老早就唤醒了。

**至此，Valine Admin 已经可以正常工作，更多以下是可选的进阶配置。**

| 环境变量 | 示例 | 说明
| --- | ------ | ------
|MAIL_SUBJECT | ${PARENT_NICK}，您在${SITE_NAME}上的评论收到了回复 | [可选]@通知邮件主题（标题）模板
|MAIL_TEMPLATE | 见下文 | [可选]@通知邮件内容模板
|MAIL_SUBJECT_ADMIN | ${SITE_NAME}上有新评论了 | [可选]博主邮件通知主题模板
|MAIL_TEMPLATE_ADMIN | 见下文 | [可选]博主邮件通知内容模板

邮件通知包含两种，分别是被@通知和博主通知，这两种模板都可以完全自定义。默认使用经典的蓝色风格模板（样式来源未知）。

默认被@通知邮件内容模板如下：

```html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">            ${SITE_NAME}</a>上的评论有了新的回复</h2> ${PARENT_NICK} 同学，您曾发表评论：<div style="padding:0 12px 0 12px;margin-top:18px"><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;">            ${PARENT_COMMENT}</div><p><strong>${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> ${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb" href="${SITE_URL}" target="_blank">${SITE_NAME}</a>。<br></p></div></div>
```

效果如下图：

![mail-blue-template](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/VALINE/MB.png)

@通知模板中的可用变量如下（注，这是邮件模板变量，请勿与云引擎环境变量混淆）：

模板变量 | 说明
----|----
SITE_NAME | 博客名称
SITE_URL | 博客首页地址
POST_URL | 文章地址（完整路径）
PARENT_NICK | 收件人昵称（被@者，父级评论人）
PARENT_COMMENT | 父级评论内容
NICK | 新评论者昵称
COMMENT | 新评论内容

默认博主通知邮件内容模板如下：

```html
<div style="border-top:2px solid #12ADDB;box-shadow:0 1px 3px #AAAAAA;line-height:180%;padding:0 15px 12px;margin:50px auto;font-size:12px;"><h2 style="border-bottom:1px solid #DDD;font-size:14px;font-weight:normal;padding:13px 0 10px 8px;">您在<a style="text-decoration:none;color: #12ADDB;" href="${SITE_URL}" target="_blank">${SITE_NAME}</a>上的文章有了新的评论</h2><p><strong>${NICK}</strong>回复说：</p><div style="background-color: #f5f5f5;padding: 10px 15px;margin:18px 0;word-wrap:break-word;"> ${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}" target="_blank">查看回复的完整內容</a><br></p></div></div>
```

博主通知邮件模板中的可用变量与@通知中的基本一致， `PARENT_NICK` 和 `PARENT_COMMENT` 变量不再可用。 


这里还提供一个彩虹风格的@通知邮件模板代码：

```html
<div style="border-radius: 10px 10px 10px 10px;font-size:13px;    color: #555555;width: 666px;font-family:'Century Gothic','Trebuchet MS','Hiragino Sans GB',微软雅黑,'Microsoft Yahei',Tahoma,Helvetica,Arial,'SimSun',sans-serif;margin:50px auto;border:1px solid #eee;max-width:100%;background: #ffffff repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);"><div style="width:100%;background:#49BDAD;color:#ffffff;border-radius: 10px 10px 0 0;background-image: -moz-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));background-image: -webkit-linear-gradient(0deg, rgb(67, 198, 184), rgb(255, 209, 244));height: 66px;"><p style="font-size:15px;word-break:break-all;padding: 23px 32px;margin:0;background-color: hsla(0,0%,100%,.4);border-radius: 10px 10px 0 0;">您在<a style="text-decoration:none;color: #ffffff;" href="${SITE_URL}"> ${SITE_NAME}</a>上的留言有新回复啦！</p></div><div style="margin:40px auto;width:90%"><p>${PARENT_NICK} 同学，您曾在文章上发表评论：</p><div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${PARENT_COMMENT}</div><p>${NICK} 给您的回复如下：</p><div style="background: #fafafa repeating-linear-gradient(-45deg,#fff,#fff 1.125rem,transparent 1.125rem,transparent 2.25rem);box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);margin:20px 0px;padding:15px;border-radius:5px;font-size:14px;color:#555555;">${COMMENT}</div><p>您可以点击<a style="text-decoration:none; color:#12addb" href="${POST_URL}#comments">查看回复的完整內容</a>，欢迎再次光临<a style="text-decoration:none; color:#12addb"                href="${SITE_URL}"> ${SITE_NAME}</a>。</p><style type="text/css">a:link{text-decoration:none}a:visited{text-decoration:none}a:hover{text-decoration:none}a:active{text-decoration:none}</style></div></div>
```

效果如图：

![彩虹模板](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/VALINE/RB.png)


## 垃圾评论检测

> Akismet (Automattic Kismet)是应用广泛的一个垃圾留言过滤系统，其作者是大名鼎鼎的WordPress 创始人 Matt Mullenweg，Akismet也是WordPress默认安装的插件，其使用非常广泛，设计目标便是帮助博客网站来过滤留言Spam。有了Akismet之后，基本上不用担心垃圾留言的烦恼了。
> 启用Akismet后，当博客再收到留言会自动将其提交到Akismet并与Akismet上的黑名单进行比对，如果名列该黑名单中，则该条留言会被标记为垃圾评论且不会发布。

如果还没有Akismet Key，你可以去 [AKISMET FOR DEVELOPERS 免费申请一个](https://akismet.com/development/)；
**当AKISMET_KEY设为MANUAL_REVIEW时，开启人工审核模式；**
如果你不需要反垃圾评论，Akismet Key 环境变量可以忽略。

**为了实现较为精准的垃圾评论识别，采集的判据除了评论内容、邮件地址和网站地址外，还包括评论者的IP地址、浏览器信息等，但仅在云引擎后台使用这些数据，确保隐私和安全。**

**如果使用了本站最新的Valine和Valine Admin，并设置了Akismet Key，可以有效地拦截垃圾评论。被标为垃圾的评论可以在管理页面取消标注。**

|环境变量 | 示例 | 说明|
| --- | ------ | ------|
|AKISMET_KEY | xxxxxxxxxxxx | [可选]Akismet Key 用于垃圾评论检测|

到此位置，Valine设置完全啦！赶紧试一试吧！