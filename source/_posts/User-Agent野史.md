---
title: User-Agent野史
tags:
  - User-Agent
  - 历史
  - 浏览器
categories: 有故事
copyright: true
abbrlink: fbcbe4bc
date: 2019-08-13 15:59:58
updated: 2019-08-14 14:20:23
---
# 前言
关于这几天为什么不更新博客，原因很简单，台风来了，我家断电了。

![台风](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/TY.jpg "我在台风旁边啊！！！")

好吧，当我有网络后，我去 <https://baiduwp.com> 下载百度网盘上的东西时,弹出这样的一句话:

 > [公告] 因百度网盘服务器升级，目前需要修改浏览器UA才能获取到高速下载地址（点击查看教程）

点击就点击，进入后，Chrome要求下载[ User-Agent Switcher for Chrome ](https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg)，把UA改成`Opera`
当然，显然易见，你上不去的，本人备份了一份在私有云上

<a class="btn" href="http://pan.cyfan.top/%E6%8F%92%E4%BB%B6/crx/User-Agent_Switcher_for_Chrome.7z">
              >>CYF的私有云 
            </a>
			
顿时，我就好奇了，那Chorme的UA是什么？
于是在地址栏键入

```javascript
javascript:document.write(navigator.userAgent);
```

你也可以试一试!! <a href="javascript:document.write(navigator.userAgent);">点我看你的UA!</a>

返回：
```
Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36
```

..................

我当时就懵逼了，
话不能说清楚吗?
我TM\*\*一个`Chrome`怎么哪来`Mozilla`	这不是火狐的吗?`AppleWebKit`和`Safari`又是哪来的?????当我是`Safari`吗`?

不是说我不知道User-Agent,我也了解过,只是浏览器的标识而已,但是.....
标识有那么混乱吗??????

# What's User-Agent?

## UA
User Agent中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统及版本、CPU 类型、浏览器及版本、浏览器渲染引擎、浏览器语言、浏览器插件等。

一些网站常常通过判断 UA 来给不同的操作系统、不同的浏览器发送不同的页面，因此可能造成某些页面无法在某个浏览器中正常显示，但通过伪装 UA 可以绕过检测。

## 浏览器的 UA 字串

标准格式为： 浏览器标识 (操作系统标识; 加密等级标识; 浏览器语言) 渲染引擎标识 版本信息

## 浏览器标识

由于很多网站在进行 UA 检测的时候忽略了两位数版本号，所以可能造成 浏览器及之后版本收到糟糕的页面，因此自 浏览器 10 之后的版本中浏览器标识项固定为 浏览器，在 UA 字串尾部添加真实版本信息。

> 来自百度百科

# 野史:

> 可能有一些人和我写了同样的文章,如[Litten的博客](http://litten.me/2014/09/26/history-of-browser-useragent/)，好吧╮(╯-╰)╭，我承认，题目是抄他的，内容也是借鉴他的，但是由于他的内容是2014年的，比较古老，本人就顺便更新和补充他的博文吧（以书签形式夹在原文中。）。

### 大事年表

- 1990年: Nexus(WorldWideWeb)诞生
- 1993年1月23日：Mosaic诞生
- 1994年12月：Netscape(Mozilla)诞生
- 1995年4月：Opera诞生
- 1995年8月16日：Internet Explorer诞生
- 2002年9月23日：Firefox诞生
- 2003年1月7日：Safari诞生
- 2008年9月2日：Chrome诞生
- 2018年8月15日：红芯浏览器打脸

![UA](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/UA.jpg "不，这是你的UA")

## 一、盘古开天地

很久很久之前，上古大神Berners-Lee发明了WorldWideWeb，即万维网。同时，李大神也发明了第一款浏览器。真是具有跨时代意义的工具呀，好伟大呀，人们在想，叫什么好呢？
但大神就是大神，大神内心的想法又岂是尔等凡人能够肆意揣摩？

万万没想到，李大神说，我这浏览器，也叫WorldWideWeb！不行么？
行行行。

虽然李大神起名字这么拽，但他后来发觉，还是得赋予一点承上启下的历史意义，就改名成“Nexus”。值得注意的是，这浏览器，居然是可以兼容Unix跟Microsoft DOS的。它在当时流行的各种电脑上跑得飞起，应用也越来越广，被称为“杀手级应用”。杀手级…你们看互联网一开始就是这么的腥风血雨。

> 这里插一句话：你依然可以在现实中找到他。还记得你奶奶的老年机吗？接上`2G`,使用浏览器,内核就是他.
> 然而你没想到,它也可以玩游戏!
> 文字游戏.

但这个浏览器，还不支持图片的显示，这是出现UserAgent的导火索。

## 二、唐尧虞舜
93年，伊利诺大学的NCSA组织认为，浏览器无图无真相，这不好。因而他们发明了第一款可显示图片的浏览器。
真是具有跨时代意义的工具呀，好伟大呀，人们在想，叫什么好呢？
但大神就是大神，大神就是连起名字都让你惊心动魄。

NCSA组织说，它能显示图片，偏偏我们就要叫它“马赛克(Mosaic)”！不行么？
行行行。

> 老司机们别开车啦!!我都忍住了啦!!!

但有人就问了，Nexus不显示图片，Mosaic能显示，你们让html提供者怎么写代码？你们是不是想逼死选择困难症患者？有没有考虑过天秤座的感受？

因而UserAgent就诞生了。Mosaic将自己标志为`NCSA_Mosaic/2.0 (Windows 3.1)`，大家该怎么写代码就怎么写，但请求会带上这个信息，服务器就知道该不该返回能显示图片的html。UserAgent君，出生时跟我们设想的一样简单，仅仅标明了自己是什么浏览器，在什么系统运行，以及各自的版本号。

新旧浏览器们像彬彬有礼的君王，商议和让位是为了更好的繁荣。但风雨欲来。

## 三、楚汉争霸
像刘邦一样，走出来一个搅局的小流氓。当然他还是很有志向的，他的目标，就是战胜霸主Mosaic。后来，他还真的做到了。
如今，所有现代浏览器的UserAgent里都有它的标志，就像汉朝之后，我们都称为“汉”人。一群很有天赋的程序员，一起缔造了它的辉煌。

真是具有跨时代意义的工具呀，好伟大呀，人们在想，它叫什么呢？
但大神就是大神，大神就是让你永远也猜不到他们想了个什么名字。
大神们说，叫Mozilla，不行么？
行。但什么意思呢？

含义有二。其一，哥斯拉(Godzilla)谐音，诚然是一头野心勃勃的怪兽；其二，”Mosaic Killa”之意，Killa是俚语中Killer的拼法，即“马赛克的终结者”，赤裸裸的挑战。

惊呆了的Mosaic小心翼翼的念着Mozilla这发音：“Mo…摸咋了？”勃然大怒，“摸你妹！”

鉴于Mosaic当时的权势，Mozilla改名成`Netscape Navigator`(网景航海家)。小怪兽突然变成有点文艺小清新的名字，郁闷得很，但内心的血液沸腾着。虽然叫大名叫网景，但它把UserAgent偷偷设置成`Mozilla/1.0 (Win3.1)`。还是摸咋了？咬我？

## 四、宋元之战
很快，NetScape战胜了Mosaic，成为了新的霸主，因为其更优的展示。
NetScape最先支持了html框架显示，就是简单的table布局，内外边距之类，仅仅这点就将Mosaic抛诸身后。区别这两个浏览器，还是用的UserAgent。如果是UserAgent里含有“Mozilla”字样，那就发送支持框架的页面，否则，就发送不含框架的页面。

NetScape帝国日益庞大，歌舞升平，一切风平浪静，直到微软的铁骑挥军南下。

微软发布了一款跟系统强绑定的浏览器，真是具有跨时代意义的工具呀，好伟大呀，人们在想，它叫什么呢？
不用想了，就是IE。这命名也相当简单粗暴，`Internet Explorer`(网络浏览器)，直接把这工具的用途拍在你脸上。连说明书都可以免了。

IE也是支持html标准框架的，但由于前面的历史原因，人们只会给UserAgent里含有“Mozilla”字样的浏览器发送含框架的页面。但这点小事能难倒我大微软？IE呵呵一笑，把自己的UserAgent改成`Mozilla/1.22 (compatible; MSIE 2.0; Windows 95)`。看，我这里也有“Mozilla”字样，也能收到含框架的页面了！

> 这也是微软迫不得已啊.

当然，这个小流氓行为，跟后来把IE和Windows捆绑一起销售的大流氓行为比起来，根本不为足道。后面的故事我们也知道了，IE把NetScape干掉了。但它的身体上，却永远的烙上了“Mozilla”的印记。

## 五、康乾盛世
看过奥特曼的都知道，怪兽被打败了会再回来。别忘了NetScape曾拥有一批大神们，失败后，他们围绕着浏览器排版引擎Gecko(壁虎)成立了非正式组织Mozilla。小怪兽再次出发。大神们发明了另一款优秀的浏览器，它在插件拓展和开发调试领域做出的贡献，绝对可以载入互联网历史。

真是具有跨时代意义的工具呀，好伟大呀，人们在想，它叫什么呢？
但大神就是大神，大神就是即使你知道了Mozilla的命名都是野兽，却还是猜不到是什么。
Mozilla说，我们浴火重生，叫`Phoenix`(凤凰)！不行么？
真不行。

刚推出就被人告了，原来已经有一家公司叫做“凤凰科技”。
Mozilla瀑布汗，改名叫`Firebird`(火鸟)！还不行么？
我们得原谅一下他们的取名，虽然现在看来满满的山寨感，可放在那个时代，Firebird这名字很炫酷。就像你当初的QQ昵称叫赤炎天使感觉依然良好一样。

但是，他们发现，业内有个数据库系统，也叫的Firebird…泪流满面的Mozilla感慨重生好难呀。最后才决定叫`Firefox`(火狐)。

基于Gecko引擎的Firefox非常优秀，为了告诉大家，我使用了这个引擎，它标志自己的UserAgent为`Mozilla/5.0 (Windows; U; Windows NT 5.1; sv-SE; rv:1.7.5) Gecko/20041108 Firefox/1.0`。

> emmmmm,给自家打自家标签,确实没错.

这时候的UserAgent，虽然长了点，但它并不混乱，准确的标明了系统，排版引擎，浏览器名称等信息。虽然IE这时已经占有了很大的市场份额，但基本停步不前；而Mozilla经过一段时间的修生养息，Firefox在业内广受好评，得到了快速的发展。

时值2003年，web2.0的浪潮前夕，浏览器的发展达到了空前的盛世。
然而所谓否极泰来，盛极则衰。涅槃的Firefox迎来盛世，却又恰恰由于盛世，决定了UserAgent纠结的命运。

## 六、师夷长技
前面说到，微软靠Windows系统捆绑IE销售。而Windows自然也有它的对手，Linux。一个技术快速发展的时代，系统的世界里也是战火纷飞。Linux系统自从有了可视化界面，也需要浏览器呀。桌面系统KDE的缔造者们就发明了一个。

真是具有跨时代意义的工具呀，好伟大呀，人们在想，它叫什么呢？
但大神就是大神，大神就是讲究先从文字上占据压垮你的气势。
先有Navigator航海家，再有Explorer探索者，咱就叫Konqueror(Conqueror的变体)征服者吧。
行行行。我已懒得理这帮大神…

可是，问题来了。Konqueror使用KHTML排版引擎，即使它们认为自己跟Gecko引擎一样优秀，但用户不买单。你UserAgent里没有“Gecko”字样，我就不给你经过优良排版的html。
结果，Konqueror思来想去，做了一个艰难但很萌的决定，把UserAgent写成`Mozilla/5.0 (compatible; Konqueror/3.2; FreeBSD) (KHTML, like Gecko)`…
这就是现代浏览器里like Gecko这一萌词的由来。

就这样，伟大的排版引擎KHTML为了获得更好的资源，师夷长技。这并没什么不好，却造成了UserAgent的越发混乱。
KHTML与Gecko这一对，永远卿卿我我比翼双飞在UserAgent里面了。那个满含深意的“like”，有人觉得翻译成“像”，但也有人觉得应该是“喜欢”…

> 我觉得更有可能是`爱` \~\~\~\~

## 七、世界大战
首先是IE冷静下来了，他觉得，你们不带这么玩的？
就我年少时不懂事，首先改了个Mozilla字样，后面追究这历史我岂不是成了罪魁祸首？我改还不行吗？
在IE6，它明确自己`UserAgent为Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)`。除去已经注定不可抹去的“Mozilla”字样，其余信息简洁，准确，清晰。

微软脑子是转过来了,但事态已经不可收拾。

Opera给这狂躁的世界添了一把火。它觉得，易容术非常炫酷呀。Opera直接在菜单提供了三个UA:

- `Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en)Opera 9.51，`
- `Mozilla/5.0 (Windows NT 6.0; U; en; rv:1.8.1) Gecko/20061208 Firefox/2.0.0 Opera 9.51，`
- `Opera/9.51 (Windows NT 5.1; U; en)`

三个选择项。第一个是易容成IE，第二个是易容成火狐，第三个才是自己，选谁就是谁！

其实这并不是一件坏事。因为Opera是站在能够让用户通过选择，去获得更好的浏览体验的基础上的。你提供选择，或是不提供，混乱的UserAgent还是在这，不离，不弃。再者，这对网页的开发者有极大的好处，在某些情况，你不必同时打开几个不同的浏览器去调试。到目前，最新的Chrome浏览器更加炫酷，能够支持近40种不同的UserAgent，甚至你还可以自定义。当然这是后话。

> 这里又要打断一下啦.
> Opera自带了`普通节约`和`超级节约`两个功能.前者用的是`Mozilla/1.0 (Win3.1)`,`Nexus`的`UA`
> 后者一度导致`JS`和图片无法加载,而前者也有缺陷,阻止(其实是识别不了)了`SSL1.1`以上的安全连接

与此同时，苹果公司依靠内核WebKit，开发出Safari，命名UserAgent为`Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.5`。

有人就会问了，不是Webkit内核吗，怎么还有KHTML, like Gecko？注意，内核Webkit包含了一个排版引擎叫WebCore，而WebCore是KHTML衍生而来的。也就是说，WebCore是KHTML的儿子，子承父业，基因差不多。为了能够正常排版，safari只能这么写。

后来，google也开发了自己的浏览器Chrome，其内核也是Webkit，但它设定UserAgent为`Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13`。Safari一看，不对劲啊！你怎么也在后面写有Safari？Chrome呵呵一笑，你懂的。

因此，请让我一口气说完下面这一段：
Chrome希望能得到为Safari编写的网页，于是决定装成Safari，Safari使用了WebKit渲染引擎，而WebKit呢又伪装自己是KHTML，KHTML呢又是伪装成Gecko的。同时所有的浏览器又都宣称自己是Mozilla。

这就是整个UserAgent世界大战的格局…

## 八、军阀混战

![UA](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/3Q.jpg "军阀混战")

将目光聚焦到国内，更是狼烟四起，混乱不堪。大家都知道，浏览器是互联网的入口，这块肥肉谁也不想丢。因而一个接一个的“国产”浏览器进入斗兽场。
360，百度，QQ，UC，搜狗，猎豹，遨游，世界之窗…你能说出一大堆。连淘宝，酷狗，hao123都有浏览器，不信你搜。
注意我前面“国产”两个字必须加上双引号，因为这个`made in china`并不纯。国人并没能像远古大神一样，硬生生发明一个内核出来，我们更擅长“微创新”。

利用Trident（IE的内核），包装一下皮肤，美化一下，就可以说：完美兼容
利用Webkit，包装一下皮肤，美化一下，就可以说：极速浏览
把两个内核都包起来，就可以说：智能双核

是微创新！读书人的事，能叫偷吗？

在这插播一下，浏览器的“双核”，并不是你听说手机双核电脑双核那回事。再多个核，速度也不会更快，当然这么说，会显得很厉害的样子。德艺双馨，智勇双全，名利双收，才貌双绝，夫妻双双把家还，你看带“双”字的词都很牛的。

> 而且更慢了,你想想,同时开启两个浏览器,其中一个用不到,只用另一个,能不慢吗?

但我上面的叙述，的确有夸张的成分。浏览器的诞生，肯定不仅仅是包一下皮肤那么简单，国内的工程师们，也苦心研究做了许多工作。如果要说优化策略，我可以再写一篇超级长的文章。优化无止境，路漫漫其修远，向同行们致敬。只是我非常讨厌那些不把事实说清楚，纯粹靠文案去忽悠人的产品…

话说回来，这么多国产浏览器，总得靠不同UserAgent标志自己呀。
大家自动分为两个阵营：使用Trident内核的，在IE已有UserAgent后添加自己的名称；使用Webkit内核的，就在Chrome的UserAgent后面添加。

前者像QQ浏览器：`Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.7.26717.400)`。
后者像猎豹：`Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36 LBBROWSER`。
当然双核浏览器诚然就是墙头草，切换内核时UserAgent也需要跟着变化。

如此的混战格局，这厢的IE和Chome想必也是醉了。

## 九、3Q内战

> 我承认,3Q大战不是发生在我们的时代.所以,我连笔记都做不了.....

适者生存是不变的生存法则，国产浏览器们经过一段时间的用户筛选，自然优胜劣汰。时值2010年，真正还在运营和更新的浏览器数量慢慢下降，用户集中在几家表现更优异的厂商手中。就在这时，好看的故事来了——3Q大战爆发。

有人说，腾讯电脑管家的推出是导火索。其实这场仗，大家都忍了好久，推不推出，都一定会在某个事件后爆发。360浏览器是奇虎的重量级产品，用户量众多，2009年它推出一个功能：过滤其它网站的广告。诚然民众们都很喜欢。可是其他互联网公司肯定就不乐意了，用户看不到更点击不到广告，这钱还怎么赚？

因而在3Q大战爆发后，腾讯的一个手段就是：如果你使用360浏览器，就不能访问QQ的网站（单单QQ空间就有巨大的用户量），也直接反攻360的最大收入来源。一个艰难的决定背后，往往是需要无数种的技术战略支撑的。企鹅判断用户是否使用360浏览器，依靠的就是UserAgent里是否有“360SE”的字样。

战报传来：号外，360浏览器上不了QQ空间！已经买了黄钻的杀马特贵族急了呀！只能换浏览器了呀！感覺侢乜卟哙噯嘞呀！
2011年11月3日，腾讯网站封杀360浏览器
2011年11月4日，360浏览器访问量仅为昨日一半
2011年11月5日，360浏览器访问量几乎为0

有人说，腾讯就这么快赢了？恰恰相反，360浏览器通过一次强制的自动升级，又可以访问QQ的网站了。360的工程师们在5日使用了伪装术——把“360SE”字样从UserAgent中去掉！
意思就是，360浏览器的UserAgent跟IE完全一样，你根本判断不出来（因而访问量为0）。就怕流氓有文化！企鹅傻眼了，总不能把大微软的IE也一并给禁了吧…

这场土匪遇恶霸的耍流氓大战，最终通过法律而化解。企鹅在技术侧拿360没办法，而360则得到了一个跟IE一样的身份证。在这场内战中，受伤的除了广大网民们，其实还有令人心疼UserAgent君，以往让它越长越长就算了，这次长了还得阉割掉，真心dan疼呀。


## 十、疯狂打脸(￣ε(#￣)
> 原创，转载注明。

上面说的国产浏览器还是诚实的，起码它们自己承认了是双核Chrome+IE。

![RC](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/RC/RC.jpg "RedCore")

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=476114873&auto=0&height=66"></iframe>
（自己配上音乐读下面的话更带劲）

很久很久以前，国产一片混乱，带来了IE又带来了FF。
市场一片危机，UA一片乱糟，红芯跳了出来，大声喊：
我要打破美国垄断，拥有中国首个自主创新智能的浏览器内核！！我是世界第五,也是唯一一颗,属于中国人自己的浏览器内核——红芯Redcore!我还是中国第一个,也是唯一个，获得国产飞腾芯片和银河麒麟国产操作系统兼容性认证的浏览器!

（关音乐吧）

一天后，有人查看了它的UA：怎么和Chrome这么相似呢?

再解压红芯浏览器时，赫然发现该浏览器exe里全都是Chrome里的东西，用的还是好几年前的CHrome49版本内核……

好吧,Chrome49只是为了兼容XP.

接着,彩蛋降临:

号外号外!红芯浏览器也可以再没网时跳恐龙!!!(Chrome内置菜单)

红芯一看，完了完了，暴露了，赶紧把`谣言`压下去啊!

![RC](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/RC/NO.jpg "红芯：我不是在作假！！！")

接着,就出现了种种闹剧:

> 红芯浏览器一到应用商店，所有浏览器便都看着他笑，有的叫道，“红芯浏览器，你又偷chrome的内核了！”他不回答，对柜里说，“来两轮融资，2.5亿起步。”便排出浏览器的广告。
> 他们又故意的高声嚷道， “你一定又偷了人家的内核了！”红芯浏览器睁大眼睛说，“你怎么这样凭空污人清白……” “什么清白？我前天亲眼见你反复封装chrome浏览器的内核，被大家解包吊着打脸。”
> 红芯浏览器便涨红了icon，图标的青筋条条绽出，争辩道，“换内核不能算抄……半定制！……浏览器内核的事，能算抄么？”接连便是难懂的话，什么“中国首个自主内核”，什么“多个企业和部门都在使用”之类，引得众浏览器都哄笑起来：应用商店内外充满了快活的空气。

更有工程师拆代码，在红芯浏览器的安装包中有两个浏览器插件可以看到源代码。不少互联网工程师通过阅读代码发现，红芯的代码存在过度注释、代码冗余、语言陈旧等问题。甚至还有工程师测试后发现，它在插件的保密性上存在虚假宣传。一位从事数据相关业务的工程师表示，红芯浏览器插件的源代码中存在大量的注释，显得注释过度，产品上线后大量注释都没有处理，另外其插件代码中，大量使用常量字符串，这使得之后可能的重构变得非常困难，以及不利于国际化等进一步开发。除了代码的被指显得不够专业，更值得注意的是，红芯浏览器插件在数据安全方面也值得商榷。一位程序员试验发现，红芯的密码管家插件中所存储的密码仅存储于本地并且没有加密，即用户可知道使用同一台计算机的其他人的密码。

结果就道歉了:

![RC](https://npm.elemecdn.com/chenyfan-oss@1.0.0/pic/RC/SORRY.jpg "红芯：好吧好吧，我承认了！！")


## 十一、明日边缘
看到这里，大家会明白一个道理：如果未来不出现一款霸主级别的浏览器（或内核），UserAgent应该不会有大变化了。

不过，这道理并不全对。别忘了，移动侧也是有浏览器的。

在早期能上网的手机里，内置了各手机厂商自研的浏览器。这些浏览器并不需要像PC一样的复杂设计，可以访问wap网页就足够了。因而它们的UserAgent命名，怎么简单怎么来，就直接叫诺基亚 `3100 Nokia3100/06.01 (UCWEB 3.3B)，PHILIPS755 ObigoInternetBrowser/2.0` 这样，有甚者连浏览器叫什么都不带 TCL-3199，三星 E618 SEC-SGHE618。

这样任由发展下去，一种要历史重演，往日重现的即视感压迫而来。

web世界的联合国——W3C组织，站在明日边缘，面对着历史和未来，终于发话，它制定UserAgent标准，以后都得按这规范去起名字。详细请阅User Agent Accessibility Guidelines。至此，命运坎坷的UserAgent终于逐步走向规范。W3C大法好，有人说你怎么不早点来拯救世界呀！其实W3C一直在努力，但规范的制定，到推广至大家认可并执行，是一条漫长的道路，需要时间，也需要实践。

W3C组织，在制定web标准这件工作之外，再我看来，还有两个身份：1、和事佬；2、背黑锅。和事不成，就得背黑锅。是的就是这样。

### 彩蛋
那么，我们的故事接近尾声。还有一些有趣的小彩蛋。

1. Chome 28开始，与苹果正式分道扬镳，采用Blink内核，但它的UserAgent并不改变。
2. 淘宝封杀微信打开淘宝页面，靠的就是微信内置浏览器UserAgent里的MicroMessenger字样。其实微信也可以像当初360一样把UserAgent去掉，但微信并不这样做。
3. 360出招之时留有后招。也许，它一开始就想到了腾讯会告他们对于UserAgent的欺瞒，因而它其实提供了设置项。默认设置是“保持跟IE一样的UserAgent”，但用户也可以不勾选。只是这选项比较隐蔽，而且你重启浏览器后…又会变回默认设置。如果没有这个小小的设置，结果大家可以自行想象。
4. 微软又玩新花样了，在泄露版IE 11中，去掉了以往的MSIE字样。初步猜测此举是为了使现有的 CSS hack 失效，避免过去网页设计师对IE差别对待的情况再度发生。但又会引发其他问题啊亲。
5. 在红芯浏览器被打脸前,红芯联合创始人高婧对外宣传时毕业于，美国哈佛大学&香港科技大学。而红芯浏览器打脸后之后，高婧的介绍改为了毕业于香港科技大学，而哈佛大学则被移至介绍的下方小字中，并标注为（交流学生）。至于红芯CEO陈本峰早年间，在媒体采访中自称自己是科大讯飞的创世团队成员，也遭到了科大讯飞董事长刘庆峰的当场打脸：“与事实不符，就是在科大讯飞实验室的一个实习学生”。

- - -

