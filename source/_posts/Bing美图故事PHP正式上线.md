title: Bing美图与故事PHP正式上线
author: CYF
tags:
  - PHP
  - Bing
  - 美图
  - 版权
copyright: true
categories:
  - 屌代码
date: 2020-03-16 10:44:00
index_img: https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/img/10.jpg
banner_img: https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/img/10.jpg
---
欸...自己挖的坑必须要自己填啊...

最近听信了某个·大佬·<span class="heimu" title="你知道的太多了">其实是把我做实验的</span>,在Hexo环境安装了dplayer,结果装到一半,断网了,重新安装就疯狂报错,以至于想要npm卸载都卸不了,结果手贱，手动删除了几个npm依赖，结果导致整个Hexo环境崩溃了<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-5.png" >，一旦进行 `hexo server -w` 就会冒出一大片红海。害的我不得不备份文章和主题后删除了整个Hexo环境，从头安装Hexo，结果忘记了我还安装了一大堆插件，只好一个一个安装回去，期间的痛苦我真的再也不想回忆一遍,新手可以自己安装一遍Hexo+数十个插件，体验一下。问题是还把鼠标按坏了,现在打字变成异常困难的事情了...<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-5.png">

欸，最近逃课太频繁，理科全挂科了，甚至在这一次<span class="heimu" title="你知道的太多了">尖子班</span>考试里化学挂科了，不应该这样的啊，我以前化学老棒老棒的了，看起来要拾回学习的心了。所以以后站点维护估计不会那么频繁了。

# 前言

这两天因为Heroku每月时间重置了，又可以接着用了，于是考虑了很长时间决定工具箱和私有云重新上线。


不过工具箱因为绝大部分都是静态，没几个是动态的，所以打算采用动静态前后分离，动态资源以接口形式接到静态页面上，这样可以尽可能减少动态Heroku的运行时间，同样由于前端CloudFlare缓存大大减少调用时间。而私有云静态不可能,所以完全动态,又因为Heroku的时间计算是一个没验证账户一个月600小时,上个月不知道分成两个应用运行...所以干脆私有云和接口并在了一起，加上CloudFlare2hours的缓存，600小时一个月应该够用了...

## 关于bing接口

以前我在博客上写过怎么用BingPHP,但当时是用缓存的方式写入,但换到heroku上缓存写入就不可能了,于是想想办法解决, `windows.location` 会导致强制https至bing,对于不支持http就很吃亏了,最终采用 `header` 注入方式.

由于如果没有获取版权总觉得空荡荡，所以又特地写了一个获取bingcopyright的PHP，同时好好恶补了一下正则获取和解析xml。

还有当时没空写UI,这次特地去淘了两个css3和html5漂亮的界面,同时解决了手机端莫名其妙的UI问题.采用js检测UA的方式实现移动端和桌面端分别跳转.

这是实际使用:

桌面端:

![实际使用](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/8.gif "桌面端动图")

手机端:


<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/9.gif" width="200%" height="200%">

解决手机端不兼容桌面端问题：

手机横屏bug（已修复）：


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-40.png)


以及我的头像版权镇压，保证没有bug（不要删除ヽ（≧□≦）ノ！）


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-41.png)

已开源，https://github.com/ChenYFan/Bing_Pic_and_Copyright_Catcher
不过暂时不允许转载删除版权和头像,因为修改这个花费我太多精力了,感谢您的理解!


今日Bing美图：

![Bing](https://pan.cyfan.top/api/bing/bing.php "今日Bing美图")

![](https://cdn.jsdelivr.net/npm/chenyfan-oss@1.1.11/213.jpg)