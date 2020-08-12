---
title: 【致歉】全能音乐搜索Bug修复
date: 2019-08-15 14:08:41
tags:
- 音乐
- 致歉
copyright: true
categories: 爱学习
---
# 前言：

就在昨天，一位孜孜不倦的网友 [qwqdanchun](https://github.com/qwqdanchun) 跑到我的issues中，追了我一整天，原因是音乐搜索出现程序错误。

刚开始我有点不以为然，本来有些接口就坏掉了，打不开又以为是php服务商的问题，后来ta部署到heroku上，搜索功能有问题，只能显示主页，帮助页显示也有问题，一搜索直接刷新了，这才意识到严重性。

后来我打开电脑，仔细查看，终于发现了问题。

# 问题：

我打开储存在本地的文件，和压缩包内文件进行比较，终于发现少了一个文件：`.htaccess`

这个文件丢了可就了不得了，这会导致伪静态直接找不到自己在哪。

原来在解压时，Windows不允许创建一个无名字的文件，而Liunx允许，这导致我的阉割版好压直接略过错误不报提醒。

找到问题就好办了。

# 解决：

直接在Github储存库添加一个`.htaccess`，里面填上：

```php
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php [L,E=PATH_INFO:$1]
</IfModule>
```
# 结果：

![修复完成](https://assets.cyfan.top/file/CYF-PicBed/pic/MUSIC/OK.jpg "修复完成")

# 心得：

凡事都要细心，不能毛糙，要及时比对啊！！！

- - -
