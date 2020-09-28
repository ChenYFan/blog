title: 留言板
comments: true
hide: true
index_img: 'https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/back/2k.jpg'
banner_img: 'https://cdn.jsdelivr.net/gh/ChenYFan/CDN@master/img/back/2k.jpg'
date: 1949-10-01 23:59:59
update: 2020-02-27 08:48:09
---
有什么要说的可以写在这里
如果你想说悄悄话，发邮件到<chenyf@cyfan.top>
你可能需要注意：
1. <span class="heimu" title="不堪回首的更换评论系统记录"> ~~来比力服务器部署于韩国，可能无法加载或长时间空白。在无法加载情况下请刷新，在空白情况下请耐心等待。如果手机SNS登陆方式被遮挡，请横屏选择登陆方式！~~ ~~加载太TM慢了！！！！换作Valine吧！评论时要注明自己的邮箱，头像会来自[Gravatar](http://cn.gravatar.com)，同时你也会收到邮件通知。一定要正确！  蛋疼的是LeanCloud出了点小问题,于是跳槽到Gitalk了.使用Gitalk需要Github账号,而且很有可能需要梯子!国内对于Github相当不友好,很有可能加载不出来或者是网络错误! ~~ </span> Valine，我最终还是选择了你【吐血】
2. 拒绝包括但不限于色情、反动、低俗发言，拒绝抹黑当局的言论。
3. 拒绝无意义的言语，相信我，你打字要6秒，我删除只要1秒！
4. 拒绝机器人、小学生、广告主！务必使用**正确的邮箱**，故意不正确使用将会被直接拉黑1-3650天
5. 欢迎添加友情链接!不过您可能需要注意以下几点:

	
+ 0.首先确保有本站的友情链接:


```
标题: 陈YF的博客
地址: https://blog.cyfan.top
图像(如果有): https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/BLOGER.jpg
简介(如果有): 一个在互联网角落挣扎的小小博客，很小很小
```


+ 1.存活时间不小于3个月。

+ 2.确定不会随随便便删库跑路。

+ 3.时间达到30天无法正常访问的将会被踢除。

+ 4.免费顶级域名看情况接受,二级域名(如\*.cyfan.top)则需验证主域名所有权，验证方式（设置顶级域名的TXT记录为二级记录的SHA256值，如我的顶级域名是 `cyfan.top`,我的二级域名是 `blog.cyfan.top`,则txt记录为： `cyfan.top 0370E381DE878A0799F3B72600C2805AC4BCEA76AA0A6539812F77361E696353` ,【大小写不严格】，这说明对于 \*.github.io 和 \*.coding.me 这种公有域名给予拒绝）
    
+ 5.确保站点可以以HTTPS访问,允许不强制,可以没有HSTS(为什么要https原因很显然,这里不阐述) 。当然有例外，如果是我恳求加友链的https可以作为不是特别重要的原因。

+ 6.确保站点内容不违反中国大陆法律.

+ 7.拥有尽可能多的原创内容,越多优先级越高。

+ 8.如果因特殊原因而更换地址，请留言或PR。


+ ~~9.1 添加方式：留言。格式如下：~~


```
求友链！
标题: #尽可能简短，不得大于10字
地址: https://
```

> 我们拒绝了留言的方式添加友链，任何以留言形式添加友链都将被我们拒绝，请采用PR形式添加友链
	
+ 9.2另一种添加方式：Pull Request:

+ 9.2.1 进入[存储Blog的Repo](https://github.com/ChenYFan/blog), ~~Fork~~(新版本的Github已经自动完成了,无需手动Fork),直接修改(主题配置文件)[https://github.com/ChenYFan/blog/blob/master/themes/fluid/\_config.yml ] 在倒数第二行按照示例规则添加友链【务必注意缩进、空格和换行】:
    
```
    - {        
    title: '博客名字【不得大于9字，否则会被截断】',
    link: '网页链接，需进行主域名认证',
    intro: 'Slogan【不得大于15字，否则会被截断】',
    image: 'icon图片链接【推荐使用jsdelivr加速链接或者sm.ms链接，使用github直接做图床未经加速将受到警告】',
    }
```

由于PR的特殊性，没有遵守以上任何一条条款将无条件拒绝并ClosePR。同样，为了维护公平，我们**拒绝了**留言方式添加，~~除非你和CYF是好朋友~~

# 封禁名单：	

 `IP:171.106.203.242` ：恶意发送广告、伪造昵称、伪造邮箱，**永久封禁**
 `IP:222.217.145.99` ： 恶意发送广告、伪造昵称、伪造邮箱，**永久封禁**
  
  
    

    

<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/TK.jpg" class="full-image" />

- - -
以下是留言区:


<link href="https://cdn.jsdelivr.net/gh/ChenYFan-Tester/Artalk@gh-pages/Artalk.css" rel="stylesheet">
  <div id="ArtalkComments"></div>
 
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/gh/ChenYFan-Tester/Artalk@gh-pages/Artalk.js"></script>
  <script>
  new Artalk({
    el: '#ArtalkComments', // 元素选择
    placeholder: '开车不规范，亲人两行泪', // 占位符
    noComment: '快来搬沙发！', // 无评论时显示
    defaultAvatar: 'mp', // 参考 https://cn.gravatar.com/site/implement/images/#default-image
    pageKey: location.pathname,
    serverUrl: 'https://artalk-mini.cyfan.top/index.php',
    readMore: { // 阅读更多配置
      pageSize: 5, // 每次请求获取评论数
      autoLoad: false // 滚动到底部自动加载
    },
	gravatar: {
    cdn: 'https://dn-qiniu-avatar.qbox.me/avatar/'
    },
	emoticons: {	  
		"滑稽":{"inputType":"image","container":{"原味稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d26b7ae13.png","还是算了":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/riySFlu75fJdG4p.png","蓝纹稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/jyh5IVzpqXsHuvU.jpg","随稽应变":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896e6ec1d528.jpg","蠕动":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896e9712a3c1.gif","束手无稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/dF8sTOpgomj7qf5.jpg","微笑默叹以为妙绝":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53daa84f24a.png","喝嘤料":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d63d8c6af.jpg","暗中观察":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dd21a2e7b.jpg","高兴":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d1b9e5f38.jpg","惊稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d1e2ad89f.jpg","可这和我的帅有什么关系":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece29a8e0.jpg","狱稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/cUEQrVYGFiDjqhy.jpg","梆":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/TlAGjm6IvJSMVpq.jpg","吃鱼摆摆":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ec2cb7f39.gif","跃跃欲试 3":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece2ac5a2.gif","突然滑稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53cf2a457f1.jpg","扶墙怂":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece2ab57a.jpg","阔以":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/7EYyq1TcBKa3eQ2.jpg","不得行":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/KoqBGauX7TEfeyn.jpg","少儿不宜":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/nt2ZWRozUNjBxAK.jpg","稽日可期":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/FmfYcoMJesi2Ddq.jpg","哎":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/ps7PTIANgSErqnU.jpg","别看丢人":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d4f89ea29.jpg","地稽 2":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dbae85687.jpg","地稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/BnTMX35EPxleVmA.jpg","老阔有点扣":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/fhDXbA9T1zJPlKk.gif","啊哈哈":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dc2947d84.jpg","无稽可奈":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/UyxTzB2fS3LtH7Q.jpg","老实巴交":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/7DgSoyqwtYBxchE.jpg","紧张":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896e8a408253.jpg","摇摆稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d1904dcb2.gif","又不是不能用":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53ce897ab55.jpg","一时滑稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d5d28e22c.jpg","无法接受":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53cee8422fc.jpg","嘤雄豪稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/sbtw6o7iKaM4Nmq.jpg","相视双稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d5a093149.jpg","稽皮发麻":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece2a019f.jpg","地稽 3":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dbe510bcf.jpg","地稽委屈":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d76e250da.jpg","地稽抚摸":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/cavZ6nNzMPimLy7.gif","地稽捶打":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/vFVPynXaHR5sitk.gif","绝望":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dc0ba2303.jpg","气稽败坏":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d216f3c60.jpg","当场去世":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/sogxHMTFWbE2lrP.jpg","喝酒":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d78c3f4a5.jpg","老衲摆摊算命":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece29d8a5.gif","老哥，稳":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896ece29ebb0.jpg","自闭稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d6603ee24.jpg","无话可说":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53d6a77b7e4.jpg","跃跃欲试":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5896e9710dfd5.jpg","跃跃欲试 2":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53dcc057350.jpg","满脑子骚操作":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/xJXcUtO2BryHAsa.gif","稽之舞":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/5c53de1a4d14d.gif","将稽就稽":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/KVwf8qCrZts6WOT.gif","吐血":"https://rmt.dogedoge.com/fetch/hi-c-oss/storage/tx.png","右滑稽": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/yhuaji.png","中滑稽": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/huaji.png","左滑稽": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/zhuaji.png",}},
		"阿鲁":{"inputType":"image","container":{"不出所料.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/不出所料.png",
            "不说话.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/不说话.png",
            "不高兴.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/不高兴.png",
            "中刀.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/中刀.png",
            "中指.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/中指.png",
            "中枪.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/中枪.png",
            "亲亲.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/亲亲.png",
            "便便.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/便便.png",
            "内伤.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/内伤.png",
            "击掌.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/击掌.png",
            "口水.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/口水.png",
            "吐.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/吐.png",
            "吐舌.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/吐舌.png",
            "吐血倒地.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/吐血倒地.png",
            "呲牙.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/呲牙.png",
            "咽气.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/咽气.png",
            "哭泣.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/哭泣.png",
            "喜极而泣.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/喜极而泣.png",
            "喷水.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/喷水.png",
            "喷血.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/喷血.png",
            "坐等.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/坐等.png",
            "害羞.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/害羞.png",
            "小眼睛.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/小眼睛.png",
            "尴尬.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/尴尬.png",
            "得意.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/得意.png",
            "惊喜.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/惊喜.png",
            "想一想.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/想一想.png",
            "愤怒.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/愤怒.png",
            "扇耳光.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/扇耳光.png",
            "投降.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/投降.png",
            "抠鼻.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/抠鼻.png",
            "抽烟.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/抽烟.png",
            "无奈.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/无奈.png",
            "无所谓.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/无所谓.png",
            "无语.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/无语.png",
            "暗地观察.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/暗地观察.png",
            "期待.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/期待.png",
            "欢呼.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/欢呼.png",
            "汗.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/汗.png",
            "深思.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/深思.png",
            "狂汗.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/狂汗.png",
            "献花.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/献花.png",
            "献黄瓜.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/献黄瓜.png",
            "皱眉.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/皱眉.png",
            "看不见.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/看不见.png",
            "看热闹.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/看热闹.png",
            "瞅你.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/瞅你.png",
            "肿包.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/肿包.png",
            "脸红.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/脸红.png",
            "蜡烛.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/蜡烛.png",
            "装大款.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/装大款.png",
            "观察.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/观察.png",
            "赞一个.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/赞一个.png",
            "邪恶.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/邪恶.png",
            "锁眉.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/锁眉.png",
            "长草.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/长草.png",
            "阴暗.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/阴暗.png",
            "高兴.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/高兴.png"}},
	"猫羽雫":{"inputType":"image","container":{"stick_1.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_1.png",
            "stick_10.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_10.png",
            "stick_11.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_11.png",
            "stick_12.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_12.png",
            "stick_13.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_13.png",
            "stick_14.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_14.png",
            "stick_15.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_15.png",
            "stick_16.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_16.png",
            "stick_17.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_17.png",
            "stick_18.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_18.png",
            "stick_19.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_19.png",
            "stick_2.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_2.png",
            "stick_20.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_20.png",
            "stick_21.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_21.png",
            "stick_22.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_22.png",
            "stick_23.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_23.png",
            "stick_24.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_24.png",
            "stick_25.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_25.png",
            "stick_26.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_26.png",
            "stick_27.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_27.png",
            "stick_28.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_28.png",
            "stick_29.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_29.png",
            "stick_3.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_3.png",
            "stick_30.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_30.png",
            "stick_31.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_31.png",
            "stick_32.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_32.png",
            "stick_33.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_33.png",
            "stick_34.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_34.png",
            "stick_35.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_35.png",
            "stick_36.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_36.png",
            "stick_37.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_37.png",
            "stick_38.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_38.png",
            "stick_39.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_39.png",
            "stick_4.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_4.png",
            "stick_40.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_40.png",
            "stick_41.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_41.png",
            "stick_42.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_42.png",
            "stick_43.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_43.png",
            "stick_44.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_44.png",
            "stick_45.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_45.png",
            "stick_46.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_46.png",
            "stick_47.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_47.png",
            "stick_48.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_48.png",
            "stick_49.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_49.png",
            "stick_5.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_5.png",
            "stick_50.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_50.png",
            "stick_51.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_51.png",
            "stick_52.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_52.png",
            "stick_53.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_53.png",
            "stick_54.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_54.png",
            "stick_55.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_55.png",
            "stick_56.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_56.png",
            "stick_57.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_57.png",
            "stick_58.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_58.png",
            "stick_59.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_59.png",
            "stick_6.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_6.png",
            "stick_60.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_60.png",
            "stick_61.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_61.png",
            "stick_62.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_62.png",
            "stick_63.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_63.png",
            "stick_64.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_64.png",
            "stick_65.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_65.png",
            "stick_66.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_66.png",
            "stick_67.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_67.png",
            "stick_68.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_68.png",
            "stick_69.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_69.png",
            "stick_7.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_7.png",
            "stick_70.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_70.png",
            "stick_71.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_71.png",
            "stick_72.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_72.png",
            "stick_73.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_73.png",
            "stick_74.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_74.png",
            "stick_75.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_75.png",
            "stick_76.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_76.png",
            "stick_77.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_77.png",
            "stick_78.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_78.png",
            "stick_79.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_79.png",
            "stick_8.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_8.png",
            "stick_80.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_80.png",
            "stick_81.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_81.png",
            "stick_9.png": "https://rmt.dogedoge.com/fetch/hi-c-oss/storage/stick_9.png"}},
			  "颜文字": {
    "inputType": "emoticon",
    "container": {
      "Hi": "|´・ω・)ノ",
      "开心": "ヾ(≧∇≦*)ゝ",
      "星星眼": "(☆ω☆)",
      "掀桌": "（╯‵□′）╯︵┴─┴",
      "流口水": "￣﹃￣",
      "捂脸": "(/ω＼)",
      "给跪": "∠( ᐛ 」∠)＿",
      "哈？": "(๑•̀ㅁ•́ฅ)",
      "斜眼": "→_→",
      "加油": "୧(๑•̀⌄•́๑)૭",
      "有木有WiFi": "٩(ˊᗜˋ*)و",
      "前方高能预警": "(ノ°ο°)ノ",
      "纳尼": "(´இ皿இ｀)",
      "吓死惹": "⌇●﹏●⌇",
      "已阅留爪": "(ฅ´ω`ฅ)",
      "去吧大师球": "(╯°A°)╯︵○○○",
      "太萌惹": "φ(￣∇￣o)",
      "咦咦咦": "ヾ(´･ ･｀｡)ノ\"",
      "气呼呼": "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃",
      "我受到了惊吓": "(ó﹏ò｡)",
      "什么鬼": "Σ(っ °Д °;)っ",
      "摸摸头": "( ,,´･ω･)ﾉ\"(´っω･｀｡)",
      "无奈": "╮(╯▽╰)╭ ",
      "脸红": "o(*////▽////*)q ",
      "悲哀": "＞﹏＜",
      "静静地看着你": "( ๑´•ω•) \"(ㆆᴗㆆ)",
      "不要哇": "(｡•ˇ‸ˇ•｡)"
    }
  }
	}
  });
  </script>
<style>
.artalk>.artalk-editor>.artalk-editor-textarea-wrap .artalk-editor-textarea{
    background: var(--board-bg-color);
	color: var(--text-color);
	border: 1px solid transparent;
}
.artalk>.artalk-editor>.artalk-editor-header{
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk-editor-plug-emoticons .artalk-emoticons-list-wrap {
    background: var(--board-bg-color);
	color: var(--text-color);
    border: 1px solid transparent;
}
.artalk-editor-plug-emoticons .artalk-emoticons-types {
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk-editor-plug-emoticons .artalk-emoticons-types>span.active, .artalk-editor-plug-emoticons .artalk-emoticons-types>span:hover {
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk>.artalk-editor>.artalk-editor-bottom .artalk-editor-bottom-part.artalk-right {
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk>.artalk-editor>.artalk-editor-bottom .artalk-editor-bottom-part.artalk-left {
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk>.artalk-editor>.artalk-editor-bottom {
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk-editor-plug-preview {
    background: var(--board-bg-color);
	color: var(--text-color);
}
.artalk>.artalk-editor {
    background: var(--board-bg-color);
	border: 1px solid transparent;
	color: var(--text-color);
}
.artalk>.artalk-editor>.artalk-editor-bottom {
	border-top: 1px solid transparent;
	color: var(--text-color);
}
.artalk>.artalk-editor>.artalk-editor-bottom .artalk-editor-bottom-part.artalk-right {
	border-top: 1px solid transparent;
	color: var(--text-color);
}
.artalk-editor-plug-emoticons .artalk-emoticons-types {
	border-top: 1px solid transparent;
	color: var(--text-color);
}
.artalk-comment-wrap>.artalk-comment>.artalk-comment-main>.artalk-body>.artalk-content>p{
	color: var(--text-color);
	border: 1px solid transparent;
}
.artalk-comment-wrap {
	border: 1px solid transparent;
}
.artalk>.artalk-list>.artalk-list-header {
    border: 1px solid transparent;
}
.artalk>.artalk-editor>.artalk-editor-plug-wrap {
    border: 1px solid transparent;
}
.artalk>.artalk-editor>.artalk-editor-bottom .artalk-editor-action:not(:last-child){
    border: 1px solid transparent;
	}
.artalk>.artalk-list>.artalk-list-header .artalk-comment-count {
	color: var(--text-color);
}
.artalk>.artalk-editor>.artalk-editor-textarea-wrap .artalk-editor-textarea{
	color: var(--text-color);
}
</style>
 <script type="text/javascript">
function downloadJSAtOnload() {
var element = document.createElement("script");
element.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.body.appendChild(element);
}
if (window.addEventListener)
window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
</script>
<!-- ADs-in-Blog-Under-Valine -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1878991317600808"
     data-ad-slot="6517667779"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
