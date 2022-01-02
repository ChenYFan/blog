---
title: 再见Z16，Hi Laffey！
author: CYF
tags:
  - Live2d
  - Z16
  - Laffey
categories:
  - 随心记
des: 将live2d v2升级到v3小记
key: live2d
index_img: 'https://unpkg.zhimg.com/chenyfan-cdn@2.0.0-img/hpp_upload/1618823392000.png'
banner_img: 'https://unpkg.zhimg.com/chenyfan-cdn@2.0.0-img/hpp_upload/1618823392000.png'
lushkey: update-live2d-to-v3-or-v4.md
abbrlink: a12e0ab7
date: 2021-04-19 16:26:23
---

2019-7-16 本站建成，第二天，Z16进入了我的博客。今天，我更换了陪伴我641天的看板娘。

<!--more-->

越来越多的模型采用了最新版本的Live2d Cubism 3或4【以下简称Live2d V3/V4】，而我用的hexo live2d插件[hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)已经很久没更新了，直接使用v3模型显然是不行的。

原来用的Z16【V2】模型地址：

```url
https://unpkg.zhimg.com/chenyfan-cdn@2.0.0/js/live2d-widget-model-z16/assets/z16.model.json	
```

格式如下：

```json
{
    "version": "Live2DViewerEX Config 1.0",
    "model": "moc/z16.moc",
    "textures": [
        "moc/z16.1024/texture_00.png"
    ],
    "layout": {
        "center_x": 0,
        "center_y": 0,
        "width": 2
    },
    "motions": {
        "idle": [
            {
                "file": "mtn/idle.mtn"
            }
        ]
    },
    "expressions": [
        {
            "name": "f00.exp.json",
            "file": "exp/f00.exp.json"
        }
    ],
    "physics": "z16.physics.json"
}
```

而V3模型普遍长这样：

```json
{
    "Version": 3,
    "FileReferences": {
        "Moc": "lafei_4.moc3",
        "Textures": [
            "textures/texture_00.png"
        ],
        "Physics": "lafei_4.physics3.json",
        "Motions": {
            "": [
                {
                    "File": "motions/complete.motion3.json"
                },
                ...
            ]
        }
    },
    "Groups": [
        {
            "Target": "Parameter",
            "Name": "LipSync",
            "Ids": [
                "ParamMouthOpenY"
            ]
        }
    ]
}
```


将所有除了Ver信息全部移入了`FileReferences`Key里面。

当然，V3和V2的差别肯定不止json格式的差异，所以我们很显然要一个新的js加载V3。

# 更新V3/4 Core

> Live2d官网已经决定后来的live2d版本都允许向前兼容到V3,所以V4的core还是能加载V3的模型[当然V2不行]

啃了一遍官文,我们首先需要这些js插件:

```
live2dcubismcore.js
live2dcubismframework.js
pixi.js
live2dcubismpixi.js
```

首先说`live2dcubismcore.js`,这是一个急需注意的js,由于版权原因,你需要自行去官网下载再上传到自己的cdn,所以不能随便找一个人的网站就爬下来**[包括我的]**,这样会收到官方警告的。


前往<https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js>下载。


然后剩下的你可以选择嫖我的

<https://cdn.jsdelivr.net/combine/npm/chenyfan-oss@2.0.3/pixi.min.js,npm/chenyfan-oss@2.0.3/live2dcubismframework.min.js,npm/chenyfan-oss@2.0.3/live2dcubismpixi.min.js>


# 加载模型

我选择白嫖<https://github.com/Himehane/live2d_on_website/blob/master/loadModel.js>

当然这有一点点小问题，比如上面这么配置：

```js
var baseModelPath = 'https://unpkg.zhimg.com/chenyfan-oss@2.0.2'
var modelNames = ["lafei_4"];
```

那么他会这么请求

```url
https://unpkg.zhimg.com/chenyfan-oss@2.0.2/lafei_4/lafei_4.model3.json
```

可是问题是我没有加一层文件夹。。。我的位置是

```url
https://unpkg.zhimg.com/chenyfan-oss@2.0.2/lafei_4.model3.json
```

修改loadModel 288行

```
- modelPath =  baseModelPath + modelName + "/" + modelName + ".model3.json";
+ modelPath = baseModelPath + "/" + modelName + ".model3.json";
```

# 样式调整

首先给live2d一个div位置

```html
<div id="live2d" class="live2d">
    <canvas id="live2dm" class="live2d" style="z-index: 999!important;"></canvas>
</div>
```

然后样式微调

```css
.live2d {
    position: fixed; 
    left: -100px;
    bottom: -20px;
    width: 500px !important;
    height: 437.5px !important;
    z-index: 998;
}
```

`bottom`将其固定页面底端，大小用`!important`强制固定~~【不规范写法，请勿模仿】~~

# 判断屏幕大小进行懒加载

嘿嘿，这么大的js怎么不能懒加载呢

```js
function loadScript(src, callback) {
        var script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0];
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.src = src;
        if (script.addEventListener) {
            script.addEventListener('load', function () {
                callback();
            }, false);
        } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function () {
                var target = window.event.srcElement;
                if (target.readyState == 'loaded') {
                    callback();
                }
            });
        }
        head.appendChild(script);
    }
    function loadlive2d() {
        if (document.body.clientWidth > 600) {
            document.onreadystatechange = function () {
                if (document.readyState == "complete") {
                    loadScript('https://unpkg.zhimg.com/chenyfan-os@0.0.0-r1/load.js',function(){
                        loadModel();

})
                }
            }
        }
    }
loadlive2d()
```

`document.body.clientWidth`判断可见宽度，`loadScript`强制异步执行loadModel，丢上去就行了

然后你就可以正常使用live2d了，这是一个demo：

```html
<style>
    .live2d {
        position: fixed;
        left: -100px;
        bottom: -20px;
        width: 500px !important;
        height: 437.5px !important;
        z-index: 998;
    }
</style>
<div id="live2d" class="live2d">
    <canvas id="live2dm" class="live2d" style="z-index: 999!important;"></canvas>
</div>
<script src="https://unpkg.zhimg.com/chenyfan-oss@2.0.3"></script>
```

![](https://unpkg.zhimg.com/chenyfan-cdn@2.0.0-img/hpp_upload/1618822975000.png)

然后添加到Hexo就改模板吧...没什么好说的![](https://unpkg.zhimg.com/chenyfan-oss@1.1.8/5896ec2cb7f39.gif)