---
title: 每日bing美图获取
tags:
  - Bing
  - PHP
  - 美图
categories: 爱学习
copyright: true
abbrlink: 3fae9307
date: 2019-08-08 13:22:00
updated: 2019-08-12 12:07:27
---
# 前言（废话）：
(*Φ皿Φ*)百忙之中抽出来更一更。
关于Bing美图获取，早就有想法了，来源于[刘明野大佬的工具箱](http://tool.liumingye.cn/bingimg/)
然而该方式有个特点,获取到的图片会以301方式跳到bing图床上.
本来也没有什么问题,我写了一个C++开机自动下载bing图片,可是当我使用wget(on Windows10)时工具,给我来了这么一出:

```
--13:12:33--  http://tool.liumingye.cn/bingimg/img.php
           => `img.php'
Resolving tool.liumingye.cn... 47.52.74.81
Connecting to tool.liumingye.cn|47.52.74.81|:80... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://www.bing.com/th?id=OHR.NubbleLight_EN-US4307721919_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp [following]
https://www.bing.com/th?id=OHR.NubbleLight_EN-US4307721919_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp: Unsupported scheme.
```

注意一下,刘明野的bing是跳向了https的bing文件,
而原生wget是不支持https的!
这就有点尴尬了。
于是我把方向集中到wget下载https中：
rpm安装：

```
curl http://www.stargard.ca/aix/RPMS/wget-1.12-1ssl.aix6.1.ppc.rpm > wget-1.12-1ssl.aix6.1.ppc.rpm
rpm -e wget
rpm -ivh wget-1.12-1ssl.aix6.1.ppc.rpm
```

可这语言是liunx的啊!!!!!!

`砸桌子ing|(*x*)|~`

# 自己解决!
然后我就在想,可不可以自己写一个php不跳转呢??
点击刘明野的工具箱下的<kdb>源码</kdb>,进入了他的博客,里面有源码:

```php
<?php
/*
    * @author www.liumingye.cn
*/
$filename = "./cache.json";
if (file_exists($filename) === false) {
    file_put_contents($filename, "");
}
$handle = fopen($filename, "r");
$contents = fread($handle, filesize($filename));
fclose($handle);
$contents = json_decode($contents, true);

if (filesize($filename) === 0) {
    // echo "获取\r\n";
    getBingImg();
} else {
    if ($contents['time'] === date("Ymd")) {
        // echo "缓存\r\n";
        Header("Location: ".$contents['url']);
    } else {
        // echo "过期\r\n";
        getBingImg();
    }
}
function getBingImg() {
    $str = file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
    if (preg_match("/<url>(.+?)<\/url>/ies", $str, $matches)) {
        $imgurl = 'https://cn.bing.com' . $matches[1];
    }
    if ($imgurl) {
        global $contents;
        if($contents['url'] !== $imgurl){
            global $filename;
            $data = array(
                "time" => date("Ymd") ,
                "url" => $imgurl
            );
            $data = json_encode($data);
            file_put_contents($filename, $data);
        }
        Header("Location: ".$imgurl);
        exit();
    } else {
        exit('error');
    }
}
```

可见原理是先缓存json到本地,接着读取源地址.
接着我注意到了第27行:

```php
 $str = file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
```
 
可见其`http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1`就是原址!
直接打开,得到一堆`xml`:
```html
<images>
<image>
<startdate>20190807</startdate>
<fullstartdate>201908070900</fullstartdate>
<enddate>20190808</enddate>
<url>
/th?id=OHR.LinyantiLeopard_ZH-CN9934758728_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
</url>
<urlBase>/th?id=OHR.LinyantiLeopard_ZH-CN9934758728</urlBase>
<copyright>
利尼扬蒂野生动物保护区中的一只雄性豹子，博茨瓦纳 (© Karine Aigner/Tandem Stills + Motion)
</copyright>
<copyrightlink>
https://www.bing.com/search?q=%E8%B1%B9%E5%AD%90&form=hpcapt&mkt=zh-cn
</copyrightlink>
<headline/>
<drk>1</drk>
<top>1</top>
<bot>1</bot>
<hotspots/>
</image>
<tooltips>
<loadMessage>
<message>正在加载...</message>
</loadMessage>
<previousImage>
<text>上一个图像</text>
</previousImage>
<nextImage>
<text>下一个图像</text>
</nextImage>
<play>
<text>播放视频</text>
</play>
<pause>
<text>暂停视频</text>
</pause>
</tooltips>
</images>
```

很明显，第六行`url`下就是图片地址啦!
我试着修改了一下参数,`idx`是天数,最多缓存七日,`n`是张数,`n`为几就返回几张图片.
那就写一个php吧!

```php
<?php $str=file_get_contents('https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');if (preg_match("/<url>(.+?)<\/url>/ies", $str, $matches)) { $imgurl='https://cn.bing.com'.$matches[1];}if ($imgurl) { header('Content-Type: image/JPEG'); @ob_end_clean(); @readfile($imgurl); @flush(); @ob_flush(); exit();} else { exit('error');}?>
```

下面是返回的图片(每天都不一样):

![bing](https://tools.cyfan.ga/bingpic/bing.php "今日bing美图")

修改了一下Cloudflare,支持http直接访问.
接着用wget下载:
```
--13:38:17--  http://tools.cyfan.ga/bingpic/bing.php
           => `bing.php.1'
Resolving tools.cyfan.ga... 104.28.17.222, 104.28.16.222
Connecting to tools.cyfan.ga|104.28.17.222|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [image/JPEG]

    [        <=>                                                                     ] 343,869     76.5K/s


```

下载中...
等一下后：

```
--13:38:17--  http://tools.cyfan.ga/bingpic/bing.php
           => `bing.php.1'
Resolving tools.cyfan.ga... 104.28.17.222, 104.28.16.222
Connecting to tools.cyfan.ga|104.28.17.222|:80... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [image/JPEG]

    [       <=>                                                                      ] 343,869      176K/s   in 1.9s

13:38:20 (176 KB/s) - `bing.php.1' saved [343869]

--13:38:20--  http://1.jpg/
           => `index.html'
Resolving 1.jpg... failed: Unknown host.
FINISHED --13:38:20--
Downloaded: 1 files, 336K in 1.9s (176 KB/s)

```

(〃￣︶￣)人(￣︶￣〃)搞定啦!
更多请前往[我的工具页](https://tools.cyfan.ga/bingpic/)了解更多!
# 危机来袭:
兴奋之余，我上了一下[https://bing.com](bing主页),结果一盆凉水泼下来:图片不一样!
????????
上了一下刘明野的工具箱,也是同样的问题!
懵逼ing......
不对啊,我用梯子上了一下Bing,结果返回又一样了!
emmmmmmmm.
查询一下IP:
我的tools是`美国 cloudflare公司cdn节点`，运行在`000webhost荷兰节点`,而刘明野的工具箱来自`香港特别行政区 阿里云`
(话说回来为什么Cloudflare不把我的ip解析到香港节点呢?Cloudflare不是有香港节点吗???)
接着用梯子上了一下`http://bing.com/HPImageArchive.aspx?idx=0&n=1`,得到:

```html
<images>
<image>
<startdate>20190807</startdate>
<fullstartdate>201908070000</fullstartdate>
<enddate>20190808</enddate>
<url>
/th?id=OHR.NubbleLight_ROW6148679105_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
</url>
<urlBase>/th?id=OHR.NubbleLight_ROW6148679105</urlBase>
<copyright>
Cape Neddick Light in York, Maine (© Haizhan Zheng/Getty Images)
</copyright>
<copyrightlink>javascript:void(0)</copyrightlink>
<headline/>
<drk>1</drk>
<top>1</top>
<bot>1</bot>
<hotspots/>
</image>
<tooltips>
<loadMessage>
<message>正在加载...</message>
</loadMessage>
<previousImage>
<text>上一个图像</text>
</previousImage>
<nextImage>
<text>下一个图像</text>
</nextImage>
<play>
<text>播放视频</text>
</play>
<pause>
<text>暂停视频</text>
</pause>
</tooltips>
</images>
```

~~瞬间懂了,原来是国内外bing提供的图片不同,php获取到的图片也不一样.
可是,在国内找到稳定高速的php运行商又有多困难?
算了算了,国外就国外吧.╮(╯▽╰)╭
~~
不对不对，后来查明原因了，原来是时差原因...
- - -




