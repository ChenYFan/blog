title: 关于
comments: false
date: 2020-03-11 09:27:11
layout: about
---

<div align="center">

<img src="https://images.weserv.nl/?url=https://ghchart.rshah.org/chenyfan" alt="Github chart" width="70%"/>

<img src="https://images.weserv.nl/?url=https://s04.flagcounter.com/count2/KOtF/bg_FFE600/txt_86869C/border_58CCC4/columns_6/maxflags_250/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0">
<img src="https://images.weserv.nl/?url=https://travis-ci.org/ChenYFan/blog.svg?branch=master" >
</br>

<!--
<a class="btn" href="https://github.com/Chenyfan">
              >>Github
            </a>

<a class="btn" href="mailto:chenyf@cyfan.top">
              >>Email:chenyf@cyfan.top
            </a>-->
</div>

### 性别：可能是男孩纸吧【没有女装癖！】

### 年龄：0~50

### 常住地：天堂

### 专业：无

### 涉及：很多很多

### 联系方式:暂定

### 爱好：广泛

### 性格：~~暴戾难以控制~~ 乐天派

# 博客

### 性质：

非营利性的私人博客

### 方式：

以[Hexo](https://hexo.io/zh-cn/)为框架,主题为[NexT 5.1.4](http://theme-next.iissnan.com), ~~建立在Coding Pages上(原本想直接扔在Github上，但由于`不可告人`的秘密,速度哦出奇的慢)~~ 在2020年初发现Coding转型升级了，接着使用需要实名认证，无奈之下迁回Github，不过加了个CloudFlareCDN，速度在压力测试下 ~~大约稳定在80kb/s~~ ~~很抱歉通过 [站内自选CDN](/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/#more) 现在已经比Github打开还要快了,目前1.7Mb/s的凶狠速度是可以保证的，ip可以手动切换CloudFlare CDNIP以获得更好速度。~~ Vercel+JsdelivrCDN，前后端分离。

内部统计使用[百度统计](https://tongji.baidu.com),评论系统为~~Valine~~ Artalk。

目前本站并没有被 `墙` ,未来也尽可能保证不被墙.因为本站就是一个分享互联网知识的博客小站点,并没有包含任何反动的内容!

#### 极限设想:

由于CloudFlare在特殊时期不太稳定,假如有一天被封锁,那么请:
(注:以下方法均为技术层面上抵抗,并非代理,基本不用钱)

##### DNS污染

假如有一天本博客域名被 `DNS` 污染,那么请修改 `Hosts` ,将 `blog.cyfan.top` 绑定至以下任意一ip

```
108.162.236.1~24
172.64.32.1~24
104.16.160.1~24
172.64.0.0~24 
104.20.157.0~24 
104.28.14.0~24
104.23.240.0-104.23.243.254
162.159.208.4-162.159.208.103
162.159.209.4-162.159.209.103
162.159.210.4-162.159.210.103
162.159.211.4-162.159.211.103
104.20.157.2 
104.18.62.2 
141.101.115.3 
104.16.160.3
162.159.211.4-103
103.21.244.0/22
103.22.200.0/22
103.31.4.0/22
104.16.0.0/12
108.162.192.0/18
131.0.72.0/22
141.101.64.0/18
162.158.0.0/15
172.64.0.0/13
173.245.48.0/20
188.114.96.0/20
190.93.240.0/20
197.234.240.0/22
198.41.128.0/17
104.23.240.*
172.64.32.*
104.16.160.*
108.162.236.*
162.158.133.* 
198.41.214.*
198.41.212.*
198.41.208.*
198.41.209.*
172.64.32.*
141.101.115.*
172.64.0. *
172.64.16.* 
104.18.48.0-104.18.63.255
104.24.112.0-104.24.127.255
104.27.128.0-104.27.143.255
104.28.0.0-104.28.15.255
104.28.16.0-31.255
104.27.144.0-243.254
104.23.240.0-243.254
1.0.0.0-254
1.1.1.0-254
104.16.0.0-79.255
104.16.96.0-175.254
104.16.192.0-207.255
```

~~绑定方式如: `162.159.210.33 blog.cyfan.top`~~

Vercel助力，IP为 `76.76.21.21`

或:采用`DNS over HTTPS` 或 `DNS over TLS` 也就是常说的 `DoH` 和 `DoT`,可以修复所有DNS污染.

###### TCP重置

采用[Accesser](https://github.com/URenko/Accesser/releases) , 通过替换CA证书的方式抵抗TCP重置.(注:这个方法可以搞定所有被封锁的网站)

###### 端口/IP封锁

CloudFlare是大公司,与百度是有一定合作,目前看来这种情况不太可能.
当然在某些特殊时期不排除这种可能.
目前并没有解决这个问题的好方法,搭建镜像对于我一个学生来说有点吃力,所以也只能麻烦诸君使用代理了.

###### DDoS攻击


~~主站点 `blog.cyfan.top` 以及 `cyfan.top` 是通过CloudFlare Workers的，每天10万次请求，对于我这种日PV不到5的博主完全足够了，一般每天请求数不超过5000，但由于是有限度的，所以请各位NB大佬手下留情，谢谢。~~

~~当然还有直接受CFCDN保护的两个回源站点 `s.cyfan.top` 以及 `sblog.cyfan.top` 这两个不计算在CFWorker请求里，而且受CDN保护，只是速度极慢，是可以在博客崩塌时访问的。~~

直接采用CloudFlareCDN，速度不快，但是前后端分离后速度还是可以接受的。

### 域名:

~~.ga免费域名~~  =====》 .top白菜价(首年9RMB,续费26RMB/年)域名

~~**(预计在2020年换一个付费域名)** 买了，不过没有进行实名认证被·SeverHold·了，而且身份证落老家了！！！所以换域名这事迟早会实现，不过不是最近罢了。~~ 已更换.

### 主要描写：

+ 好方法
+ 好网站
+ 好东西
+ 好软件
+ 好事情




# 写博客的初衷：

想些博客这一想法在2年前就有了。当时看到别人的博客，心里就感到非常的激动，希望自己也能写出来。
然后就在本地写了一个`html`,连标签都没有。o((⊙﹏⊙))o.
渐渐的，我明白了，写博客不是炫耀给别人看的，也不仅仅是证明自己的能力，而是对自己的知识一个概括，同时在将来也能够随时找到。
所以，在如今，我建立起了这个博客。
<details>
<summary>（点击展开）个人博客存在的意义 转载：https://joyqi.com/develop/how-to-manage-your-personal-website.html</summary>

个人网站这个以前很时髦的名词正随着时间慢慢被人忘记，互联网的门槛越来越低，个人网站显然不再成为一个重要的入口。甚至连电脑都已经不是首选的上网平台了。

那么现在还有必要为自己搭建个人网站吗？

## 不是人人都有料
不可否认的是，个人网站由于其具有一定的专业性，所以搭建它是要付出一定的成本的，不论是金钱上的还是时间上的。有成本付出就会有回报的期望。每个坚持写博的人背后肯定有它的动力在支撑，但是我看到的是越来越多的个人博主荒废了它当初付出成本来打理的网站。

为什么？因为没有人看，一个人写有啥意思，如果只是写写笔记放到本地也可以，速度还更快。你既然选择了放到网上，那么心里肯定还是期望有读者的。但是理想是美好的，现实是残酷的，你写的那些东西就是没人看。

## 你不是大明星
为啥人家徐静蕾一篇文章写几个字“今天好困啊”之类的，就有好几万的评论。你辛辛苦苦码了好几千字，又是配图又是又是写诗，唯一的访问者却只有搜索引擎的爬虫。

因为你不是 Big Boy ，而网上的访问者具有匿名性，他们基本上跟你生活毫无交集，他们也不关心你去了哪些地方，吃了啥东西。这些事情不能成为谈资，所以如果你希望在个人网站分享这类内容，我建议还是朋友圈，QQ 空间之类的地方比较好。起码还可以得到几个赞。

## 专家不是这么好当的
除了看看明星八卦，大多数网上的意见领袖都是各方面的专家，他们往往可以一呼百应。

但我始终坚持认为，就算是伪专家也是有他的过人之处的，更不要说真正的大牛了。很多人喜欢写技术文章，但首先你个人是一个默默无闻的路人，即使突然脑袋开窍撸了一篇可称大神级的文章出来，也会被埋没在信息的海洋里。更何况这种情况出现的概率基本为零，大多数情况下一般人写出来的文章就是没啥料的，不具备可读性。

而且现在还有各种各样的阅读平台，分享网站，以及垃圾站。你网站上的文章还没被爬到，就被他们抓走了，有点良心的还贴个来源链接，无良的直接连作者名都给你改了。

## 个人网站如何经营
这个标题一写出来，网上类似的文章一大把。但我不是从技术角度来讲，我首先要劝一些人放弃，如果你没有啥好写的东西，那还是放弃这个打算把。你把精力投入到微博，微信上可能效果还好些。

## 你一定要有一些别人没有的东西
如果你不是在某一方面浸淫多年特别擅长，那么要不然你帅的惊动 D 中央，要不然你特别有钱是个土豪。如果你说，我又没啥特长，长的也一般，也没啥钱，总之就是一个普通的路人，还有希望吗？

我知道你肯定希望我说出“有”这个字来给你信心，但是真没有。因为大部分人都是这样，别人凭啥去看你？所以经营网站的第一步是经营自己，让自己能够出类拔萃。

## 精心准备你的内容
当然如果你是大明星可以忽略这一点，脑残粉们根本不会在乎您发了什么。。。

内容是你制胜的关键，可以说在信息化同质严重的今天，内容的重要性不是降低而是升高了。有品位的内容往往能为你吸引来有价值的用户。在这个过程中你也可以获得不少成就感。

内容的选材也很重要，你需要去了解读者喜欢什么样的内容，既然是公开发表的内容，你就应该照顾别人的想法，这并不是要你埋没个性，相反在内容的组织上展示你的个性才是体现出你闪光点的好办法。

为什么你看到很多业界大神，总是喜欢写一些普及性的文章。但往往这类文章的点击率是最高的，因为大多数人需要这类文章，而怎么把这类文章写好也是需要挑战性的。深入浅出是一门技术活，很多人写着写着越来越晦涩难懂，不知道怎么样用浅显的道理表达出来。

## 快速分享
这一步反而是大多数人做的最好的，各种分享按钮，微博，朋友圈分发。这样非常好，可以为你带来固定的读者群，但对拓宽读者群体没有多大帮助，我个人觉得可以借助一些业内比较有影响力的分享渠道，当然前提是你的文章真的质量过硬，也要给别人带来好处。比如

- http://news.dbanotes.net
- http://v2ex.com
- http://segmentfault.com

值得注意的是，你不能把他们当成单纯的发广告的地方，这样会很快透支掉你的口碑。你需要用心经营你自己的品牌，多多形成双赢的局面，为别人网站也能带来干货

## 总结
其实我本人并不是擅长此道的专家，但是因为对这一个圈子接触比较多所以有这些感受。我见过太多怀揣着梦想进入个人网站这个圈子的好少年了，但大多数因为没有认清现实而浪费了很多资源。我这片文章的目的并不可能让大家马上牛逼起来，但如果能让大家稍稍认清点现实，也不枉费我这么多口舌了。

</details>

# 更新：
~~由于本人是在校住宿学生,学校禁止带手机,学期间平均下来一月两更吧。~~
~~有时候考试时就可能人间蒸发了.~~
学业繁忙，**学校禁止家里使用手机**，在学校每天晚上可以使用电脑但主要用于信息竞赛，留言基本会回复但这段时间不可能写博文。
当然,我会在寒暑假使劲补的!

# 版权©：

若是转载立刻注明。
同时提醒转载我的博客时请注明。
本站的*Logo*是早年在一个公开的网站找来的，虽然没有版权限制，但我依然想找到作者表示感谢。
如果你是作者，请联系<chenyf@cyfan.top>。谢谢！

# 《关于中国的互联网》

网络审查在各个国家都普遍存在着，它并不仅存在于中国。在全球的局势对中国都不利的当下，当局会过滤掉影响、危害到中国长远发展的信息，此时国家安全的意义更加重大。

互联网上存在着大量终究不现实的、不客观的，甚至自相矛盾的抹黑当局政府言论，它们背后一般有西方政府或非政府组织资金支持。这些媒体包括但不限于一些港媒、境外网站。

我们希望您能在遇到此类言论和见解时，不要不加思考地、情绪一度被煽动而不能克制地、盲目地相信这些片面或者歪曲事实的东西，而是要事实求是地思考，要摆脱情绪绑架的怪诞思维去理解。

我们需要了解到，中国的发展总基调是“稳中求进”，中国社会的最核心问题就是稳定。失去稳定的中国将会是一盘散沙，面临分裂和肢解的危险。我们希望您了解当今中国发展的根本保证是什么，发展的过程中哪部分是主旋律，哪些是噪音；哪些是进取的，哪些是会开历史倒车的。我们需要维新，而不是革命。

我们应该清醒和全面地认识问题，偏信西方媒体的言论、缺乏对国家的信任是不可取的。您的数据安全和隐私对您尤为重要。若这些信息不应当被西方掌握时，它对国家和民族的命运更为重要。出于此原因，当局可能会限制您的行为，我们不会也无法干预当局的任何政策和决定。

所以，我们希望您在使用不论任何组织提供的“爬城”服务时，不要盲目地攻击当局的做法。

# 给予有心人的话：

本站所有言论均与国家、政治、人民无关，本站仅仅记载个人学习的所见所闻，请有心人不要摘抄碎言片语来装饰自己的观点！

# 注意：
手机版用户右侧的目录无法展开，（同时背景也无法玩耍）（也不能戏弄看板娘ヽ（≧□≦）ノ）
所以建议使用电脑访问！

# Todo：

- [x] 建立博客
- [ ] ~~建立Wiki~~ 不再建立wiki
- [x] 建立主页
- [x] 建立工具页
- [x] 获取 ~~购买~~ 域名
- [ ] 写个`hexo-theme-appstore`

# 鸣谢：
+ Hexo-本博客框架
+ ~~NexT！~~ Fluid-本主题框架
+ ~~Gitalk~~ Artalk-本站评论系统
+ 百度统计-本站统计
+ 一位不知名的画家  感谢您的图片Logo！
+ CloudFlare-博客容灾站点
+ JSDelivr-静态资源CDN
+ Euserv-白嫖小鸡作为部分网站后端
+ DogeDoge-本站部分图床
+ BackBlaze-本站部分图床
+ ZhimgUnpkg镜像-本站部分图床
+ Velcel-本站CDN

感谢以下企业大佬的支持!


<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-28.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-29.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-30.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-31.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-33.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-32.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-34.png" width="25%">
<img src="https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/post/pasted-35.png" width="25%">

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
