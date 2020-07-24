title: GooseDesktop桌面鸭_网课好宠物
author: CYF
tags:
  - 宠物
  - 桌面
  - GooseDesktop
categories:
  - 繡软件
date: 2020-03-24 08:24:00
index_img: https://img.cyfan.top/pic/cover/5.png
banner_img: https://img.cyfan.top/pic/cover/5.png
---
# GooseDesktop

<a class="btn" href="https://g.cyfan.ga/Public/DesktopGoose%2520v0.3.7z">
              >>点我去下载
            </a>



可玩性非常高:


- 会随机拖出一些~~治愈人心~~毒鸡汤(可以自定义)
	![](https://img.cyfan.top/pic/post/10.gif)
- 会随机拖出一些你珍藏多年的图片(可以自定义)
	![](https://img.cyfan.top/pic/post/11.gif)
- 关闭它拖出了来的图片会导致它追你的鼠标,追到就咬住,鼠标暂时失控.
- 双击它也会追鼠标(可以关闭)
- 自定义鸭子的颜色

好的,也就这么多,更多的可以自己用VSCode写一些mod.

试着想一下,这是不是特别适合网课的时候玩呢<img src="https://img.cyfan.top/pic/moji/huaji.png">?

# 配置

下载下来,打开来应该是这样:

![upload successful](https://img.cyfan.top/pic/post/pasted-91.png)

进入 `Assets`:


![upload successful](https://img.cyfan.top/pic/post/pasted-92.png)

`Images\memes`,里面是鸭子随机拖出来的图片,我的版本里已经预置了10张美图+2张脖子以下不能看.jpg<img src="https://img.cyfan.top/pic/moji/bx.png">.注意不要在家长旁边打开!当然你也可以替换成别的,文件名随意.

在 `/Assets/Text/NotepadMessages` 里是鸭子拖出来的文本,里面已经预置了1222句毒鸡汤,句句治愈人心<img src="https://img.cyfan.top/pic/moji/yhuaji.png">.当然你也可以替换成别的,文件名随意.

打开 `/config.ini` 应该是这样:

```
Version_DoNotEdit=1
EnableMods=false
SilenceSounds=false
Task_CanAttackMouse=True
AttackRandomly=False
UseCustomColors=true
GooseDefaultWhite=#ffffff
GooseDefaultOrange=#ffa500
GooseDefaultOutline=#d3d3d3
MinWanderingTimeSeconds=10
MaxWanderingTimeSeconds=10
FirstWanderTimeSeconds=1
```

第二行指开不开启mod,目前它还没有很多mod,保持false即可.

`SilenceSounds` 指鸭子发布发出声音,false表示发出,默认false.

`Task_CanAttackMous` 指点击它会不会咬,默认为true(否则桌面鸭意义何在)

`AttackRandomly` 指会不会随机咬,默认保持false,这个最好不要开起来(否则后果难以想象)

`UseCustomColors` 使用自定义颜色,默认false

下面三行是颜色自定义.

`MinWanderingTimeSeconds` 鸭子随机拖出文件等待时间最小值,单位秒,建议:30
`MaxWanderingTimeSeconds` 鸭子随机拖出文件等待时间最小值,单位秒,建议:120

`FirstWanderTimeSeconds` 第一次打开鸭子后多久开始拖,随意

# 基本操作

## 关闭

**回到桌面** 其他应用无效,长按Esc即可.

或双击运行 `Close Goose.bat` 快速关闭

或直接运行: `taskkill/f /im goosedesktop.exe` 也行.

## 静音

配置文件 `SilenceSounds=true` 即可

## 惹怒

双击它,它就会追着你的鼠标,咬到了就是将近5秒鼠标失控时间,鼠标就会被这只鸭子叼着走.

或关闭它拖出来的文件,也是同样的效果.

# 后言

这篇水的有点彻底啊....
