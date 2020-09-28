title: PHPnow-Windows下最轻巧的PHP运行软件，没有之一
author: CYF
tags:
  - PHP
  - Windows
  - 精简
categories:
  - 繡软件
index_img: https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-162.png
banner_img: https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-162.png
date: 2020-03-29 08:20:00
---
虽然作为一个静态博客的博主，但是还是有调试PHP的需求，<span class="heimu">（搭建静态是因为静态博客省钱）</span>，之前用过PHPStudy，不得不说功能真的非常强大，~~但我很多功能都不需要~~ ，而且相当吃内存，我一个笔记本主要是追求轻巧，PHPStudy一个安装包将近50MB。最头疼的是，我的80端口已经被系统监听了，无法终结，PHPStudy即使改了端口也没用，导致MySQL服务刚启动就停止的奇葩现象，害的我一年都没有好好调试过PHP。

至于这个安装包哪里来的，讲个笑话，在植物大战僵尸贴吧个人网址flash试玩版里提到：


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-143.png)

然后我就把PHPnow提取出来了，一个只有20MB的PHP运行包。

<a class="btn" href="https://drive.cyfan.top/PHPnow-1.5.6.zip"> >>去网盘下载
            </a>
            
            
 **请注意，PHPnow已经终止开发，最后一版的更新时间是2012-02-03** ，默认官网是<http://phpnow.org>,现在已经重定向至<http://servkit.org/?from=phpnow.org>,最高PHP是5.2.14,最高MySQL是5.1.50,框架只有Apache,最高2.2.16,并且与Windows10存在一定的bug,请仔细阅读下面的文档!
 
# 安装


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-152.png)

解压：


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-153.png)

有个7z.exe说明这是个解压Package.7z包，

Win10因为有UAC，直接双击Setup.cmd有问题，右键管理员也不行，要手动启动管理员命令行，cd到相应文件夹，输入 `Setup` 安装！否则会安装失败！


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-154.png)


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-155.png)

输入22


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-156.png)

输入51

接着是一番解压，不要管。

![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-157.png)

输入y


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-158.png)


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-159.png)

Windows10家庭版不知道为什么80端口被禁用了，所以只能选1，我这里端口为4001


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-160.png)

安装，设置root密码


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-161.png)

任意键后，出现以下


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-162.png)

安装完成！

# 控制面板

安装完成后输入 `pncp` ,进入管理界面


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-163.png)

下次启动输入20,关闭输入30,其它的具体看情况

# 放入

将php放入 `htdocs` 即可!

# 测试Typecho

由于版本真的很古老,安装Typecho之类的请安装0.9,安装最新版1.\*会导致错误!


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-164.png)


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-165.png)

一路确认，数据库填写test，安装完成


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-166.png)


![upload successful](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-167.png)

毕竟是古老的php,至少笔记本跑起来真的毫无压力,作为测试环境也完全足够了.