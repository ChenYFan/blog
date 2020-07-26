/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","920838f8a71c9c6077a7b6b2ee01c9a0"],["/2019/07/17/巧妙去除百度首页广告/index.html","2be94382abad08ee5082a15cd1e497c4"],["/2019/07/19/国内加快NPM下载速度/index.html","f5a8ef96f6652e7c73012b9d77030304"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","35d482f5ba380cd8b0dcd1d01c180a2e"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","5e70edee624a43c68858a885f4558a8d"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","2dbc37f346c493dd0cf9df2b73c2ac9a"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","045a32730d832cfa48dd4e9268ebb047"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","4e41ecc95895d612b0e9c79ee5b2afb0"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","fbead9aecb25d53fed3cf4dee5dcd654"],["/2019/07/28/【公告】关于宕机/index.html","2e231b751a11152b82d913b4654ec880"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","4066f96387c141a19c96108e9ad820fc"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","beb8fbd481d180db29bd73c4ab1d40ea"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","61bb279ffa815c06555051d21e7698cb"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","0256ea1a345089d4016e6af885b819d4"],["/2019/08/08/每日bing美图获取/index.html","2b4f64955f12613e86240856a405f8cf"],["/2019/08/13/User-Agent野史/index.html","6e139024e602949d8d9849762c79266b"],["/2019/08/14/【公告】博客多域名/index.html","47affa7ef553ad760e55cb3f89ae861a"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","5abd153b8f8ade656ff97e2e30bb7a94"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","acaa09056ac9b0bde8bfeb211f2bfca1"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","e4ac1240ebdb750a7529500a2f83b0a7"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","b0a3f078a05a70f12bb010f713719062"],["/2019/09/14/来，破解版的Google访问助手/index.html","97dfbd4bb030173772a10e23db15fce1"],["/2020/01/20/回归啦！这是见面礼/index.html","8191b4dd6fdb7a9202fa2a08b5a23f87"],["/2020/01/24/我们一起解题目吧/index.html","2d44bf218910e1df991087683c68b498"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","2c83255a528bc3771b13b25e83f9c78c"],["/2020/02/26/Gitalk详细踩坑记录/index.html","f7e2e8404cc5462f4319a94806ffcc0d"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","87126513a640dd1611a6abf72fbee842"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","7bf780f4c8e97e9b93e0983e081af629"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","0e2aba6ac9010203dea6027206934062"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","5d342edcd0e0a5f203962f1cf9b3db65"],["/2020/03/12/白菜价域名的问题/index.html","b5640bc546b7a2341c6475152720ed8c"],["/2020/03/13/工具箱和私有云恢复！/index.html","522414303e22fa395d70ad4016e49423"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","e0acc738ab863491612d01c306458208"],["/2020/03/17/一次愉快的更换域名经历/index.html","5cafdeca5e832286b33eee3d90d183d9"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","a850e44ea78d07ee7af8e051cb97f2d4"],["/2020/03/19/如何-CloudFlare-Warp/index.html","7bcbc0c04d34f13d92e40459b43ea4d6"],["/2020/03/20/一次糟糕的换主题过程/index.html","264bc357f48be1593bf634ce7e0206cc"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","0b224b68f59f9893d6a4a446790fd0e0"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","4e70212b44bd730d5c0da629f12030b3"],["/2020/03/22/回形针-真的辱华了吗/index.html","c6c6e9919f90fa65f3e2bf36e88ec79d"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","e74dcbae1f54be563d850e9b0a8570ff"],["/2020/03/25/天体运动/index.html","816eb46e66f61ebd24bc32424b3a3c71"],["/2020/03/26/一次“修”冰箱的经历/index.html","f95962da6eec04f97978ba13d1834728"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","3c798b1e2a34f9a6dfe4dca8f78d394a"],["/2020/03/29/PHPnow/index.html","3ea67d577611ef87c131cc35a77d8d04"],["/2020/04/02/AVorBV/index.html","063712949c3273cda832d4213394ad4a"],["/2020/04/04/2020QM/index.html","80fc494c94f2df33f5a74148a9fb708d"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","1a9d92449567f386bd37a1e2a88299bf"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","01c00418fe18e62a48f3495816f8fe93"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","d4a8ed4efe2e4cdf3526e8d88f4f4db8"],["/2020/05/30/What-I-Do-2020-04-05/index.html","e258cb3ffb4f6923794188ad8e46fe97"],["/2020/06/07/Blog-sChanges/index.html","3802ce505324bd3eece4ea0e63b55cde"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","9d349131667d7767ae153138f88f903d"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","f6d45e751419333b0b5f0872c195dbcf"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","9e3db14f4d9d3294201f35473d69bd4e"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","89a17822bcb2f24f98c2f79b5c755730"],["/2020/07/26/浅谈什么是好软件（1）/index.html","1db1c3302a121daca520dc60cc530d21"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","41296486cd2111c7ed5e39a518d3ef75"],["/9999/12/31/博客暂更预警/index.html","c5c10c5b0f76b50743dc73f98b19f974"],["/about/ads.html","4004089a74876b44dda251b29bce8c04"],["/about/index.html","74b54e42adc5c39440ec3e3af457db06"],["/archives/2019/07/index.html","9c2e92fad5d749d2f5ec6a54e48eb919"],["/archives/2019/08/index.html","5496bfb62e6f3747314d59f0f9daf826"],["/archives/2019/09/index.html","1922d7ad27c08ae7646311677b04308f"],["/archives/2019/index.html","30afec6d91ff86f83fd6891f4fef80b2"],["/archives/2019/page/2/index.html","42bb06b0428c98db210b1193fdec5f95"],["/archives/2019/page/3/index.html","aaa4a2feb98e5c02eff92e77c2dca697"],["/archives/2020/01/index.html","275dacf5b2d2fad83b4fe6a73808c7f6"],["/archives/2020/02/index.html","a625a57917db6401d1f7289437259c68"],["/archives/2020/03/index.html","fd5d21c0e958777e2dd77dfd4586a7d4"],["/archives/2020/03/page/2/index.html","574948b8c83af65d5b2573af344678a1"],["/archives/2020/04/index.html","41dda679957d01212b982c1820b427fa"],["/archives/2020/05/index.html","4d561e2e90adeb86a53e870387cde97e"],["/archives/2020/06/index.html","abf3210f971a0c3efbbff889eec0d878"],["/archives/2020/07/index.html","143253c9c0511ffe03761bf3336330f2"],["/archives/2020/index.html","878b06fe20ef18d3a474f75c7d358800"],["/archives/2020/page/2/index.html","ee452ffadb02f5c28e81dce598ebede4"],["/archives/2020/page/3/index.html","ee45c681a261bebf390ab721fb6b4af6"],["/archives/2020/page/4/index.html","b188def838bca42292736fc5cd6b6b98"],["/archives/index.html","7e62a888ef586b8ca41dd3fe1f229f51"],["/archives/page/2/index.html","531c145cc8e7d2dd248c02334d3c559f"],["/archives/page/3/index.html","56c323e343f235f7061f43ac13277146"],["/archives/page/4/index.html","d2f42b92762e25ee123c27aa34183d77"],["/archives/page/5/index.html","7ba6fdcd09aea26bf2a0be9a1041c147"],["/archives/page/6/index.html","e984b9d8fbb55dea2219b46e94aee410"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","f523e6dddcb1aacc6949bc255e511548"],["/categories/丆插件/index.html","d19d1390f441d16184f94b03676cec79"],["/categories/又双叒叕是水文/index.html","98fa49703a1756f0821eec49e73b26c5"],["/categories/好方法/index.html","2cfeeaa0a45a5d465ff1e42aa7358647"],["/categories/好方法/page/2/index.html","c0b6b17bf737134d03a82f7a9ba5bf50"],["/categories/屌代码/index.html","365b18dd793559c638deae05a40e6825"],["/categories/干问题/index.html","5de1698fce9fb04c84dc87e24764f078"],["/categories/撸羊毛/index.html","39f426d100f5b67656cf388ded555c54"],["/categories/有故事/index.html","258cbe2f98ec1dd5973cfea3a883200f"],["/categories/爱分享/index.html","2a77d68a6409866f9806c01c2a4b0ea7"],["/categories/爱学习/index.html","9729ad43d3ba3ed339221c558b9f8405"],["/categories/爱学习/物理/index.html","8e565b3c8c645ed5d3af23e946929f9a"],["/categories/爱折腾/index.html","bf0deb0c4495178018d21e3e74be83e5"],["/categories/瞎扯淡/index.html","a06607b8d227e777ca883fd11e3a4713"],["/categories/繡软件/index.html","370e57c470c8d2120b89c15f39f1fd43"],["/categories/要公告/index.html","3969fc626b276f67118c544089cca7bd"],["/categories/随心记/index.html","cb71ed89f64e51c2085c3016ede02cdb"],["/css/main.css","fe5908b803b94350b4abecdadf0b076a"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","2a848cf042f6d4f713a519f1d67feff5"],["/js/clipboard-use.js","f8982b9e48c880368c3cd559f058f9b9"],["/js/color-schema.js","b91dc34c62e9bf53f17a1c4430d3dbfd"],["/js/debouncer.js","b191fcef450414f12dd272f9a75b4576"],["/js/lazyload.js","1526525e9fcf5d992a7c884deeec7224"],["/js/local-search.js","53461574609e41159a714670d9b66c0b"],["/js/main.js","e58bfe07cc0fa76da851c07d037972a3"],["/js/utils.js","edf4e1b7dbed6c7aef486133f319b75d"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","6a2248896bb1718bfe75cb29afe90551"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8fb4ed63c59a999640f650bdf25f8c89"],["/page/3/index.html","0bf18daa6416d1bdc744b8b9968d1266"],["/page/4/index.html","d40b4f54708cb97546100dec9c4134f1"],["/page/5/index.html","34b9a5d6e4cca3a2a758e0d221a0ac64"],["/page/6/index.html","d01a801dbe48b204bf9a938b0a23bfa4"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","f81812d374d65c0d898757aaad64555a"],["/tags/000webhost/index.html","4d3e9e3fd483849c733ee7878f3e71aa"],["/tags/API/index.html","1e07fb7b2018ff1212f1b8eddf9cee69"],["/tags/AV/index.html","4c08c847e1bddbd870dd532a9de45774"],["/tags/Adobe/index.html","996f04dfb7b918062bd4d8c1dce3cf7f"],["/tags/Adsense/index.html","32c443df8376cf0a3f815055bd0f230c"],["/tags/BV/index.html","8f8a8d2d6e24603166fad87d96446615"],["/tags/Bilibili/index.html","f2faed02cbbe2b10113214a213e13ade"],["/tags/Bing/index.html","7d7497816474928fa3a79a6041b78f15"],["/tags/C/index.html","2f96cb1e2b8acf003a30476560f4cd4f"],["/tags/CDN/index.html","2f0bf6b02bc01c1e36fbc8752e6d2a2d"],["/tags/COS/index.html","f4090c8ef0f993dff20a65eca5283e81"],["/tags/Chrome/index.html","794caa80d74ddae8aaac38d201ff6fee"],["/tags/CloudFlare/index.html","92ed1267ffc6d8dab27ce720c0a26220"],["/tags/DNS/index.html","52192ff02ed84890e22e70bf3738f75d"],["/tags/Diaspora/index.html","9d30275606dbf52ea3f0bed9a395c59c"],["/tags/Gitalk/index.html","bab720feec6eeef09584703f07bc30c0"],["/tags/Github/index.html","a6e2f99ec3f5eb5cc8ff98b657f88674"],["/tags/Google/index.html","619f904816c630ec6927125705242675"],["/tags/GoogleDrive/index.html","6e58ca7661fbb292a8d095b72c72f358"],["/tags/GooseDesktop/index.html","3cf01cc54f0a93243ea6a9fc11719a72"],["/tags/Heroku/index.html","ae88872c57463fa6f0cb6472f68d3335"],["/tags/Hexo/index.html","c64417a3e8167a62249b7cd88bb0b328"],["/tags/IP/index.html","783f1aa72d6cc9276635980e475caee8"],["/tags/IPFS/index.html","867a81a057df6a6f51710aea0a1c16af"],["/tags/JavaScript/index.html","3215878f70713b05ebcb2472a6f1d0a6"],["/tags/LazyLoad/index.html","176ab794a35743d3c33a55554a9845f1"],["/tags/Live2D/index.html","3771bb844e4098d5d2fa767843efefd6"],["/tags/MarkDown/index.html","3bf68c536b264abf76ca882b9b9dc14f"],["/tags/NPM/index.html","ef654f18660f93860677a6b585ee7f2b"],["/tags/NexT/index.html","2df4c14644f17688197fbb4285b18a49"],["/tags/Node-js/index.html","c4d8c62eab2b57fb603cc78db172ccf3"],["/tags/PHP/index.html","bda9a8d165e73c0dd8adfa382aced099"],["/tags/PanDownload/index.html","dad3e1a82e15ef9fd34acd0fcc28dbc2"],["/tags/Repository/index.html","0351ee9bbcfb80d6f5e9c1938bc6404e"],["/tags/SS/index.html","5410d534c8494c6a5c24718d947635a8"],["/tags/SSL/index.html","c80bcb0244277a9b555c514a210cce6e"],["/tags/TLS/index.html","b543074cad2f0dbf01298395459651b6"],["/tags/Tampermonkey/index.html","e3fd9b17131951bb6ffb5053f7c4b033"],["/tags/Travis-CI/index.html","6295d0d84eed9ff5d0516b08cd8e3429"],["/tags/User-Agent/index.html","a12401cbbfd8f5d82618e2064e30835e"],["/tags/Valine/index.html","97f5c23707d93a408bdaf824b68237be"],["/tags/Warp/index.html","6ae3b45fb950281a485861e120389a57"],["/tags/Windows/index.html","5bda399b6b0242c3cba7475b38c95aec"],["/tags/Workers/index.html","14e141fea5e8561c1e706c4ac5c61b83"],["/tags/css/index.html","e3a85939a8d71837d837768f5b8017d1"],["/tags/index.html","0924edc82f1ddcd051b4781e3d048a78"],["/tags/ipv6/index.html","63a7049e1970b83f927cd07b1fd82551"],["/tags/下载/index.html","fc58c23752841405d2390b0e5c63483d"],["/tags/主题/index.html","11bab263827d35c038b36a002cf1cd68"],["/tags/京东/index.html","58f5f9b533cc4c9be1da58b81efe81c2"],["/tags/人机验证/index.html","ae6b57d2bb36d4286503ef5cbf25ca8c"],["/tags/代理/index.html","11315fa878f842b4717c260cbdd384c7"],["/tags/优良/index.html","b3efd7039a7116deaf7875a35c384f57"],["/tags/便宜/index.html","da56e935b83574db92f977d5ba78d755"],["/tags/修理/index.html","b4be96fa762cb7a13472d0cc900fec07"],["/tags/免流/index.html","7df3972d52e2efd1b9e72631e756cac0"],["/tags/免费/index.html","05444bf0aa3306d4e39aacfcdf2fe439"],["/tags/全家桶/index.html","3f5432d7cce19f3387cb3cbdafbd77c9"],["/tags/公告/index.html","2a9dd50989fa007479b0a5cc7cf887b6"],["/tags/关键字/index.html","9e2ceb81d6710948cbad3a34674ef370"],["/tags/冰箱/index.html","23205dc780c15b2c8a2ad85a63b91818"],["/tags/加载/index.html","69a5ae2d988e87d2bd503c0ac4664e14"],["/tags/动手实践/index.html","0390ce8355bbe1c9138b41a89a43268c"],["/tags/劫持/index.html","ef110de8fad76ea507c250fa7363777b"],["/tags/历史/index.html","cadd5f34b8fb33263df255e1b991577f"],["/tags/压缩软件/index.html","d7490e6ab2f4825ad4e314364e4405b1"],["/tags/台湾/index.html","05cda8ad135e0fff2f8e007aa8fe8f4e"],["/tags/回形针/index.html","d5c3b7de2553e9003fc3ec1cf446d880"],["/tags/国家/index.html","f353362640dcab2ee80247cda68802a3"],["/tags/图床/index.html","2d00bb1fac86035d06e8d11c9906ec8b"],["/tags/图片/index.html","2241a44016ebd01eeb7a53bd00b42f24"],["/tags/在线更新/index.html","731c75aa869bd034b432aebfe825cc35"],["/tags/域名/index.html","a98c039eb08ca89eebe1e203903d8061"],["/tags/填色/index.html","2202bcc0d479f5ad1a47f4c682501bbc"],["/tags/壁纸/index.html","a9f6fe9d9bdaa77de62b1e4309d39ae3"],["/tags/天体运动/index.html","29e63a1f6e74644d5ae795a65c339873"],["/tags/头像/index.html","dcc54c9f6af8a16a2269b221c2a572fa"],["/tags/奇淫巧技/index.html","89fa8095bb2d6cad75aedc1d729c98a0"],["/tags/奇淫巧计/index.html","2db1483916323d46f45bf1a8d0be74d1"],["/tags/字体/index.html","b8b96d7de2d766d36ef5b7315ca34d4a"],["/tags/学习/index.html","39a5e40851e498eecd0a6be6d2307dd0"],["/tags/安全/index.html","28cb4c230d5b54db31d8bf1fd41ec350"],["/tags/宕机/index.html","9aa8af73eb03e8f73cf15d0402c64bdb"],["/tags/实践/index.html","8916bb55f9a1dac11249d2f116abcf79"],["/tags/宠物/index.html","0005a52acf0c10882939b057778376cb"],["/tags/寒蝉/index.html","196ac1d42250a50330c3e0fd4ecf29a2"],["/tags/对象存储/index.html","352867d2ff4eb1b91c652ad1596dd483"],["/tags/工具箱/index.html","3abe971c18acce84cd99d09c01fbc1f9"],["/tags/干货/index.html","c2d0e9d0713e53f3535040db79516f85"],["/tags/年度/index.html","67fac1a9cc902220cffaa98dc6bf07f2"],["/tags/广告/index.html","952f31dc4949ff7a8558cf34e308d5f5"],["/tags/总结/index.html","891217d538aa5a10a0e096298523f09d"],["/tags/恢复/index.html","a7d0eabd502b63231fb556bce1bcb64b"],["/tags/悼念/index.html","9c54ee10a68c2c3166228372e91604d2"],["/tags/悼文/index.html","6fcb7defdfcd13729de21352a1c9a13d"],["/tags/手动填坑/index.html","3dea8b94e8005726c030e268082178cf"],["/tags/插件/index.html","924cef709556304062e256cd558b1e3b"],["/tags/撸羊毛/index.html","e4e6ea8d58d1b4c3b027ac13a0db9747"],["/tags/无限制/index.html","a194a10b49229c1fcffdc1c241291fc4"],["/tags/日常/index.html","e2a8fc35c319f1c9e012db9a59cb089d"],["/tags/更换/index.html","757ab5de529e547bcd84f39b6def338b"],["/tags/标签页/index.html","e67369a3012ce10d9a3edc27b2a5ee3f"],["/tags/桌面/index.html","45e43192f6532b1460b5e5739c3cc850"],["/tags/流氓/index.html","032680242f8f2756c0314f0138f9da46"],["/tags/浏览器/index.html","9efca0d3efddec3ba25637444d7ceef3"],["/tags/版权/index.html","4c1375a8f8ebfd85ee97bd1eab82f0ab"],["/tags/物理/index.html","0f3352843d68076519a22d2ea2921672"],["/tags/特效/index.html","3dc6a58ab30e9b626357da23486b72c9"],["/tags/用户信息/index.html","9724c370e8569511edf25841a0e24d05"],["/tags/电器/index.html","a66188ff26f972df90d6f2c1dab51950"],["/tags/疫情/index.html","81e26ce62cc76ff5d0cce9e224d8bb12"],["/tags/白嫖/index.html","5895f11c6cb1480993de084a1f5df88f"],["/tags/百度/index.html","2b8f662bc6709a1272e3532728aae1d2"],["/tags/看板娘/index.html","81d5044ab7047bc9bf43c42865fe5e24"],["/tags/破解/index.html","e2fb465e136549914c2ed6fae3af6ba6"],["/tags/神器/index.html","1e3ffca9f48f967dc320c8f720362a05"],["/tags/私人/index.html","028bd748d45d82055323983db994c074"],["/tags/私有云/index.html","551969b9c4ff1f0d63b3c667a3de36d1"],["/tags/科学上网/index.html","904d9119b9ed94a303e46e4ebbda598b"],["/tags/站长必备/index.html","27a2001ddfd312e7b3f6bca31c3fd9ce"],["/tags/等待/index.html","7a26a808e7b3b5c6280b261918eb8b55"],["/tags/精简/index.html","0befc4b50bfd5c858b179831e9935323"],["/tags/素描/index.html","fc56cb49b709a0db4ec12f819fb947fa"],["/tags/编程/index.html","d0bea7bd3a4ce884492d71f41f0960c2"],["/tags/编辑/index.html","987a7798c85f0534693c41e183e14bd4"],["/tags/网盘/index.html","31fa56626cdf8057f207810da55acb2a"],["/tags/网站/index.html","ff35ce64613f3a9ec68c0b205b03f948"],["/tags/网络/index.html","a28968273116fc41b621fd9e0923859a"],["/tags/美化/index.html","fa68a99f891d6bbc177156c146145220"],["/tags/美图/index.html","dde5e53dd1ed70b81b70ed6e2f73c1d5"],["/tags/脚本/index.html","01a20fa6965384a32bf027c0ae6db147"],["/tags/致歉/index.html","ab2ab054fbbf8b94e471426f18d12fc7"],["/tags/萌哒哒/index.html","848fa3dac221eca7c9cee649ac5c311c"],["/tags/萌娘百科/index.html","e7e6254a5e4c2dadc983fdbb5dfa39de"],["/tags/萌萌哒/index.html","7dd1b5b614d2b89793c0807bb03766df"],["/tags/解析/index.html","cd22e4cae8d1f11f18ef0e3c631146dc"],["/tags/评论/index.html","dc63c049c510e9073918dd41f083bb1d"],["/tags/评论系统/index.html","9ba9c7e797a14bcb74f7862504f65453"],["/tags/语法/index.html","539e50ea0dc8b02736fbfd17305135ad"],["/tags/谷雨解字/index.html","aac42929f9c16abfca8bddc726ba52a2"],["/tags/赚钱/index.html","49250cce66f706b3d4a6a761580eb258"],["/tags/踩坑/index.html","9b10691708ebc480adb4ede9e6b65f5b"],["/tags/软件/index.html","e89a2eaebd304905b3bdddaa18176ed1"],["/tags/辱华/index.html","0b9641d16f129f1d1f49c313c18ac0c3"],["/tags/迁址/index.html","048e055d10d5d74912ae9bc0cc7a6ca5"],["/tags/速度/index.html","83e37e23173a9e283b57fc1fbf1f6800"],["/tags/错误/index.html","dba85981cb18ca0a7bff67484c0dce69"],["/tags/阉割/index.html","5f998c09dddd31ab59220c2723e5e6c4"],["/tags/阴文/index.html","d912dfa023c5e9ee1d7d985b62260b73"],["/tags/音乐/index.html","a13cce14112cfd4d77c1c2d706e1cc94"],["/tags/题目/index.html","98d7fb4a1ffaa0928609273b105a3b8b"],["/tags/黑科技/index.html","be34eb1c3a88bcd8cbcc748011a34247"],["/捐款吧/index.html","9bd9639a0897f350d58ee13f47201db4"],["/随口胡说/index.html","6b8ae79ad5d6d5f9e6d964bb835d3aac"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.staticfile.org"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"assets.cyfan.top"});





/* eslint-enable */
