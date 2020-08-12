---
title: CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！
date: 2019-09-01 10:42:13
tags:
- SSL
- TLS
- CloudFlare
categories: 好方法
copyright: true
---
# 前言：

大半月没更新了，博客长草了，今天过来除一除。

LeanCould是支持CNAME别名解析滴，这也是个不错的建站选择。

然而比较蛋疼的是，LeanCloud国际版虽然可以CNAME，可是SSL证书要自己配啊。（不知道国内会不会送一个(lll￢ω￢)）
![蛋蛋的忧伤](https://assets.cyfan.top/file/CYF-PicBed/pic/LCSSL.png "蛋蛋的忧伤")
于是我就开始了漫漫SSL证书寻找之旅。

# 蠢方法：

我直接在百度上搜索`免费SSL证书`，当我按下搜索键时，心里咯噔一下，完了，待会儿出来一堆广告。
![果不其然](https://assets.cyfan.top/file/CYF-PicBed/pic/BAIDUSSL.png "果不其然")

默默按下了关闭按钮....

## 试试腾讯SSL：

腾讯的SSL似乎是有赛门铁克的免费的SSL，况且也有一年的有效期。

![勉强选购](https://assets.cyfan.top/file/CYF-PicBed/pic/TSSL.png "勉强选购")

`实名认证`...我不喜欢的又来了.

然而注意到了吗：*仅支持绑定一个一级域名或者子域名，例如 domain.com、ssl.domain.com、ssl.ssl.domain.com 分别为一个域名,注意 domain.com 不包含 ssl.domain.com 等子域名，如果需要支持所有二级或三级域名，请购买通配符证书。*

也就是不支持*泛域名*！

那么问题来了，泛域名又是多少呢？

![Oh！SHIT！](https://assets.cyfan.top/file/CYF-PicBed/pic/PSSL.png "Oh！SHIT！")

1699.15元/年！个人需求也要那么多？腾讯想钱想疯了吧？？？

# 比较聪明的方法：

## <http://freessl.cn>

国内一家不错的SSL颁发，支持单/泛域名！有效期分别为12个月和3个月！

*而且不用实名！只用邮箱！*

可惜泛域名时间短了些，看看别的吧。

## <https://www.sslforfree.com>

这一家也是相当不错,和腾讯相似,单域名一年,而且不用实名！不过年限还是有点小.

# 重磅来袭:

我后来想起来CloudFlare似乎有送SSL的,幸好本生就DNS放在CloudFlare上托管，已经有了账号。点击网址,选择`SSL/TLS`,翻到了`Origin Certificates`

![eem](https://assets.cyfan.top/file/CYF-PicBed/pic/CFSSL.jpg)

点击`Creat Certificate`,弹出提示框

![eem](https://assets.cyfan.top/file/CYF-PicBed/pic/CFCSSL.png)

第一行默认`RSA`就这个吧(我也不知道这是什么(￣▽￣)")
第二行支持泛域名,也不错.
第三行年限.....15年???????????????
这个年限有点超乎我的期望。
![What?](https://assets.cyfan.top/file/CYF-PicBed/pic/WHAT.jpg "什么鬼")

点击创建,证书就出来了.

这简单的感觉我都撞到了鬼.

登记，输入，查看证书：有效期高达2034年。

而且可以强制过期和重新注册。
天呐，这也太强大了吧。

# 那么问题来了，为什么要注册呢？

很简单，我新建的是valine评论管理，有邮箱密码，以http发送很容易被截获。但是https不会被截获（被加密了）。

虽然CloudFlare自签名会出现种种浏览器不信任的问题，但是自己用是足够了的。