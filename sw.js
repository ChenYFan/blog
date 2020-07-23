/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","6a6bd4098c3bb6784b3bde6bf4606e0c"],["/2019/07/17/巧妙去除百度首页广告/index.html","f7325e03ee72b8526ec7463e3b0230fd"],["/2019/07/19/国内加快NPM下载速度/index.html","f33ca8801d498317979f81d50d23ba49"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","084e61dba7b1eeb8287ffc3815ae11b7"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","1e4343fcfb7b94017d25d0a3729f32e7"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","026bf1f2edcbc7ba9b961648baa81554"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","e8c6eb18873cd45cd42422ed51296786"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","f65bda91fe73c5cc6bb04c22ba6c2adc"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","8f15030cfa4e893c50531b330a59b5ce"],["/2019/07/28/【公告】关于宕机/index.html","e3b14bc79319ca42da1e7b53019c1896"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","967398041a1b91ba181a233a28eb804a"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","a1273d5f0160f6bba59765a0027bc95c"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","0d49308959d61a33e2068e61789b1a67"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","7d889902c4f1a787246b6128ac3686d5"],["/2019/08/08/每日bing美图获取/index.html","1b5c3f4199e850912ad29f6c39376b5d"],["/2019/08/13/User-Agent野史/index.html","105fbed30f30d91bf84487e686805011"],["/2019/08/14/【公告】博客多域名/index.html","c2867b7581eee9cbb5e0eb6c4628f7ed"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","09fd48e3807353965902c5e7fe447f2d"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","d45bf29386701fee6adb5455071e820d"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","fc93cd1ff00b532b814e5425ac2bf3e3"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","61d80390caef60e1118b223b798caf2b"],["/2019/09/14/来，破解版的Google访问助手/index.html","2dd9eb6a9c3506ef94b927af103305e4"],["/2020/01/20/回归啦！这是见面礼/index.html","ab2ac08fac4aad39ccef186d2d2f6a8e"],["/2020/01/24/我们一起解题目吧/index.html","e4c89fc6152d31e4385100467f0cfb19"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","0c1289951ac2339ac0bb93f8fbf14d44"],["/2020/02/26/Gitalk详细踩坑记录/index.html","50876ee91fa7307ea6fea78b7e70b4d9"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","340bac19d608a15463f9ce9b38edc702"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","8f3b0d36cfca3d412900f56e58f95b93"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","ccf77010d69077f1096c7c76984e1981"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","d590cf479a8a9dd9b882036f8a58abfc"],["/2020/03/12/白菜价域名的问题/index.html","e8baf5f2b1a8c63ae73ee8e3f1c95d9a"],["/2020/03/13/工具箱和私有云恢复！/index.html","25a9aae6269b7e1b2e4890e60d9613e4"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","cf07b89db1137cc788a662b3a6896c2f"],["/2020/03/16/浅谈什么是好软件（1）/index.html","d38b6fa27cd75af5bc03ad028801bebe"],["/2020/03/17/一次愉快的更换域名经历/index.html","17fd4fcac43b9e654daf02d94cea4f88"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","d1e1cadae188f83e4a3e4ee1961fb897"],["/2020/03/19/如何-CloudFlare-Warp/index.html","232205708e4d2cd19cfb15b61f319c4f"],["/2020/03/20/一次糟糕的换主题过程/index.html","31fe334af6245a2ca2b7024d83e237cf"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","5ee8780641db689e83a5d775bdeabfaa"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","7baa6327b73b9f8b0729164291eae4ca"],["/2020/03/22/回形针-真的辱华了吗/index.html","0b5ce6c92ad7bc65ccee7967d6d72f6e"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","178631848aeca107ba1e4b879e07696f"],["/2020/03/25/天体运动/index.html","e5e9fb2206afe0696fd8e0f8aa9d939d"],["/2020/03/26/一次“修”冰箱的经历/index.html","634e04d38f43e8c488e793a6b03d49e7"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","d6df30407b75afa446199297619f7c45"],["/2020/03/29/PHPnow/index.html","e66945918e6ebad33ffa613f9b6a3733"],["/2020/04/02/AVorBV/index.html","5730c0d4836ede9a0044f6a2b0b16aca"],["/2020/04/04/2020QM/index.html","af6a7f37806407de993f2cf715a50a24"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","8aa20197d95b95b98ddc0cd1a832582f"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","5c1f75f99b65aa850dc0f946e6daedf8"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","6eb59bfc93444cd8f7b6ba2d3e5d1161"],["/2020/05/30/What-I-Do-2020-04-05/index.html","eeee30bf8bce79f67f7984eb14d23ca6"],["/2020/06/07/Blog-sChanges/index.html","e5064735013cd7fa46ca463aae9816f3"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","b5a958d8f622c8262c6ee418b5e71248"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","84cf8e73ce252225a78febb11f9e1e40"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","e40d8d54df8c496ba2dbfdce27a5453e"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","6d054b5f955c98e85d89cae0fbaa2dd3"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","36cd2e65fe0aa4b8f53c37d0709d05d1"],["/9999/12/31/博客暂更预警/index.html","22d67228970a79e1ffeb68a9024937c5"],["/about/ads.html","8a7e540885d403a3984a3f812e2ee61f"],["/about/index.html","f46643ef15dbdc11cc1fae730c3b7d8c"],["/archives/2019/07/index.html","a3b2ed902d4282ecbbe39d08b9af0296"],["/archives/2019/08/index.html","8387e2d60a3bacbe22fc6388adc22f17"],["/archives/2019/09/index.html","99cc689afa4858234eda292d78264bb3"],["/archives/2019/index.html","b559b1310f72decd14cc18fd35966758"],["/archives/2019/page/2/index.html","622f0cb6ca715dda4ba1bf8cdfa04703"],["/archives/2019/page/3/index.html","47443340f6c4d6d2bbf4a47241cc70c3"],["/archives/2020/01/index.html","84ebdf1788d4321c6b5f3585ec76181c"],["/archives/2020/02/index.html","4c2c169d7fce1f3735f0b7e82d2843b5"],["/archives/2020/03/index.html","2d357beb15e229d57ccb6ebbf6cbc4b8"],["/archives/2020/03/page/2/index.html","b729fa23d929c8e42243d57b27b7a0e1"],["/archives/2020/04/index.html","a87a87e86536cf2ba5fdf53cb68ade48"],["/archives/2020/05/index.html","ef8e56a120147351d9e373759bc78819"],["/archives/2020/06/index.html","2655c2188f80707daab87d5807fd873d"],["/archives/2020/07/index.html","d97da8cb3f7952be48552295da517690"],["/archives/2020/index.html","6920c9644bdf48258777dd84d4417994"],["/archives/2020/page/2/index.html","3124a129814da5a35f0a5e53e25d6139"],["/archives/2020/page/3/index.html","fc7190a037fd119c8d595c1c0a298d49"],["/archives/2020/page/4/index.html","b0482b034b3b1ce9131e1928ad59b1c8"],["/archives/index.html","5c352e2bafcfea9353a126e298ca4c4b"],["/archives/page/2/index.html","af3e3f791563a5e4a84d7491e50550b4"],["/archives/page/3/index.html","f1d02627b4ade7bd796478ecbd649e5a"],["/archives/page/4/index.html","5f62556711b9173741401437e42cf756"],["/archives/page/5/index.html","e8c92c51ad797572d21ff9d50362c5d0"],["/archives/page/6/index.html","683d361ea0540b633f011cab01a0407e"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","0e00d58f478138985b0482d5cac5dbbb"],["/categories/丆插件/index.html","ad8d1136e7483910c496e509788eb15d"],["/categories/又双叒叕是水文/index.html","7be75726afc21139a9a2d0934f4f58e4"],["/categories/好方法/index.html","a7d556ada9d74cd8b3b12b2673ec2449"],["/categories/好方法/page/2/index.html","e4974eb7e727c82b1d5b5653b766c29f"],["/categories/屌代码/index.html","1c4b534e897a64ca61f7e2de2e62747a"],["/categories/干问题/index.html","bf7212429932cf4b1755911c6f3632e4"],["/categories/撸羊毛/index.html","5ab5cbe6cb03f78dabd552f4921bc0b0"],["/categories/有故事/index.html","4100ae4bc1911fe17757dedbc94dc833"],["/categories/爱分享/index.html","37ec41717b0ad9d40257ef2626de6963"],["/categories/爱学习/index.html","9b6e06b9201036e10f42a2c5b33ddd16"],["/categories/爱学习/物理/index.html","01bef268d8c2c97a86539f164cd66b4e"],["/categories/爱折腾/index.html","df4bd4914afacd4a8d4cd12e04ec9b13"],["/categories/瞎扯淡/index.html","6ae290ebcb63fe197a97bc6850647ba4"],["/categories/繡软件/index.html","a85ee1bbc650f62e5c281ce5c988af04"],["/categories/要公告/index.html","998012e34402a99d09a5996ef64c8ea2"],["/categories/随心记/index.html","9cdc412556d2124c486f6de2219c3377"],["/css/gitalk.css","efb001b79458c15f8d32f048cad3b7d8"],["/css/main.css","5834b543169235adc3dfc811d1ec60b9"],["/css/matery.css","96e54b75a258868bae0540caaf6fd142"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","d6724e235ca36a46efdb5fd677ae97b2"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","12819c009dbea3111da66c681f4a0c92"],["/lib/prettify/tomorrow-night-eighties.min.css","f75aabc565724003e065c849921197da"],["/lib/prettify/tomorrow-night.min.css","d04c2b2f654c8818d38677ae34304c6c"],["/lib/prettify/tomorrow.min.css","477272ef09ab10b767b5258fb40628ae"],["/links/index.html","897142192a6455f2a44d0d9e2d8a7bae"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","21ca340655c43cb2fb0ffc1c5070b03d"],["/page/3/index.html","a554b5c2b7aa7508ae49bf78c79aae96"],["/page/4/index.html","843789b22c979373c850796e08fed8ad"],["/page/5/index.html","9322eacadcdceb55a71f9931fb946917"],["/page/6/index.html","a0e8cd7a5d4a322ea62c50cc106a6c90"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","aaf2f82275b76463e5fdc5708c87b42c"],["/tags/000webhost/index.html","7413360af1a068b1d1419b377d11dd2d"],["/tags/API/index.html","cbb879af765838786024da8486c792aa"],["/tags/AV/index.html","a5f16f0eef69676ca85dedef86ca582f"],["/tags/Adobe/index.html","cc41a92d5c35b2dfb647dd945cb507ee"],["/tags/Adsense/index.html","9e69c259556a5e31392a78f9dde3815e"],["/tags/BV/index.html","5d451edccfc7751d61f1c20d5115926e"],["/tags/Bilibili/index.html","52e807e141d48354f0eb9234b1c87a58"],["/tags/Bing/index.html","66d377b73ac2226a8913cb29cc26705b"],["/tags/C/index.html","8e07282531f7df59fbdff2bb05233ddc"],["/tags/CDN/index.html","1889ae51f7eda3429810150144c49eb2"],["/tags/COS/index.html","9254ae2ed3fe0049241e964858d41925"],["/tags/Chrome/index.html","37d84730b896a3189dfb5ca135b90c44"],["/tags/CloudFlare/index.html","a926da7aad25c3c3df8b9cc2a9fe31bf"],["/tags/DNS/index.html","a512d79725c6222a5e1b054ea5184b58"],["/tags/Diaspora/index.html","c07d1a23637f1af8782bce7b9faa96ea"],["/tags/Gitalk/index.html","7c5bec8f07a259811a7c0dac508ee74d"],["/tags/Github/index.html","a7d27e4cf00abc7457f8bea7816de243"],["/tags/Google/index.html","04bb908bec1682434b28a0bd15f0b798"],["/tags/GoogleDrive/index.html","b4b787a63a2c358ecc117b174081efe3"],["/tags/GooseDesktop/index.html","7350d7ad91757ca054e94d2daaf9c647"],["/tags/Heroku/index.html","30d4b514aed46052afd1ee70550ec8e2"],["/tags/Hexo/index.html","75d6cb160de85bbeb8dbef64e424600b"],["/tags/IP/index.html","7de1d23d479dcc86575fb2fb70725c53"],["/tags/IPFS/index.html","79bd3bba64a9886fae07fad616222367"],["/tags/JavaScript/index.html","c3fd6cec58331a37f2184c835e2ca777"],["/tags/LazyLoad/index.html","a7842383d31aa6496cdd2d44fc09a66b"],["/tags/Live2D/index.html","f57e659debfde9f48db6643e8d050d1e"],["/tags/MarkDown/index.html","617dd88ad8157bc38e0e46b6f27cfc38"],["/tags/NPM/index.html","69ca2b3bd42a3f8cf7519ecb408ef499"],["/tags/NexT/index.html","71f54784c9958414f0b20a7129bb2913"],["/tags/Node-js/index.html","394bfa923ff6703945ca1a360003974c"],["/tags/PHP/index.html","4baee92162a1d3892e21843577f3b297"],["/tags/PanDownload/index.html","3947104b95da9920eeb43c67b4ba2f31"],["/tags/Repository/index.html","4e2ff90d51415ec65b0e68e851e2e581"],["/tags/SS/index.html","e0f761dc1f8be3c45323f5aa27bc55d5"],["/tags/SSL/index.html","666d37088daff0cb9b3307500052b114"],["/tags/TLS/index.html","5618b998a79fa3c4647ae928c73b0479"],["/tags/Tampermonkey/index.html","84aeed9a14fc6780bb43debdeed7e485"],["/tags/Travis-CI/index.html","41571b06f9af3679898309e46dee24e8"],["/tags/User-Agent/index.html","9fdb0890528f29302053b68a9966ea0a"],["/tags/Valine/index.html","4e75ddbd002ce1a7913a33202c12b10b"],["/tags/Warp/index.html","0b74748a7b57860fbc1d1d95e1e444a5"],["/tags/Windows/index.html","88b9be2cd638552ef706e11555ce1911"],["/tags/Workers/index.html","1ef48e042c5c3b8059836417069fa95c"],["/tags/css/index.html","2fa9ff7bf744cab53df7f593f728d1c1"],["/tags/index.html","d0d420d220eb528b0f68c9432917174d"],["/tags/ipv6/index.html","d11f836fa5e410dd4cce9634c7617ae8"],["/tags/下载/index.html","21ddf23e2afcee26ad420322ab3577e6"],["/tags/主题/index.html","d75f2834ae2d4b5bfee8c23fa767109e"],["/tags/京东/index.html","a4949f02d211773b4cd14f96a7f1fc69"],["/tags/人机验证/index.html","36a3ecada72e11bfc7aa373c815b4005"],["/tags/代理/index.html","3fc176cf36b01af3bd1ede3b9591ff0a"],["/tags/优良/index.html","f47f6081ea2f16bcabee98eb1b432f99"],["/tags/便宜/index.html","50aa76aad6e583bef4e33166f4523fd8"],["/tags/修理/index.html","c0ad3163668136419dcbb50edef968ec"],["/tags/免流/index.html","e2fdaf7dc182a58703cb9b6d79b004c9"],["/tags/免费/index.html","73e2608dfb9e193542916239175c8781"],["/tags/全家桶/index.html","2a3f5ca52646f0ee46a1ecf64658eb58"],["/tags/公告/index.html","2b6f440c202efeaa8a23633927b4ab50"],["/tags/关键字/index.html","49c4dce0bd19469ed6e868ffdd15d289"],["/tags/冰箱/index.html","96af779089d797855256a4e826d048bf"],["/tags/加载/index.html","3f2a15bec404694aa8f0ce41c137b4e0"],["/tags/动手实践/index.html","420bea13c0adcc955e315168813bd3d9"],["/tags/劫持/index.html","c00b0e0f09bd3f9e2863e1eca50ceeab"],["/tags/历史/index.html","e7c680cdba1d6ed806ddd7d452d24ee8"],["/tags/压缩软件/index.html","74fab2edaabe22325510d47bda13b834"],["/tags/台湾/index.html","2517847f77a831e3e7b10a72e369fcf2"],["/tags/回形针/index.html","28b81f947afe6ff2eb475a1106d695f3"],["/tags/国家/index.html","00dfb9154a6e452f3bcdbe3c5b6bb222"],["/tags/图床/index.html","8c3d5197030c5a44f5f9f6e7db0f6e25"],["/tags/图片/index.html","6fa2c06df7d68860c1fa695639ce1b9b"],["/tags/在线更新/index.html","e8af2782881e85caf54057b356e19aec"],["/tags/域名/index.html","1b5444d0b7ade579a36dfbed019ceed1"],["/tags/填色/index.html","3bf32bf37f1273b36eae7b8735ee9c4c"],["/tags/壁纸/index.html","74a30c8edab3e55ed9f205616ef692d9"],["/tags/天体运动/index.html","7640ec01151f2c9579077bda99c46834"],["/tags/头像/index.html","5dece8c76001cf57eddba503fb09e379"],["/tags/奇淫巧技/index.html","34eb1f734bfdcd161be813c1e8cef96e"],["/tags/奇淫巧计/index.html","d274433d037a82e9d3c44b4a94d68120"],["/tags/字体/index.html","e660f35e54228995afd397803df95bf3"],["/tags/学习/index.html","885d349547a3005c1b471b054a0c8a64"],["/tags/安全/index.html","faf5744baef7c272bb2d2b10b020dfa1"],["/tags/宕机/index.html","006dace9cb8c6e9ea3ad6041f01c26c9"],["/tags/实践/index.html","8e55ace81b2eb16cf7902a8e02763660"],["/tags/宠物/index.html","bc416450c61b1ab5f2e2328e9896d61d"],["/tags/寒蝉/index.html","62569800f1f9b79c1522a4fc3c9bc95e"],["/tags/对象存储/index.html","144e4c8f646258b74b0388a401c39219"],["/tags/工具箱/index.html","f7c9fd8347207d426866467dec41a14e"],["/tags/干货/index.html","220a74c1573d52305295f9f8fc35cb95"],["/tags/年度/index.html","3a794222d2743543c22dd87fa7412c61"],["/tags/广告/index.html","c4e1d7ba39f099b59f263d7f85e82452"],["/tags/总结/index.html","b2902b312073041a62addc70210644b3"],["/tags/恢复/index.html","60a490743eb6ffaff2f4fe626e70d3d9"],["/tags/悼念/index.html","e572412e015b94e24665387348ed3df6"],["/tags/悼文/index.html","ea3b894bf14b743d06749c58d195fb4b"],["/tags/手动填坑/index.html","d6a1512ea717cb50dec43c648504845f"],["/tags/插件/index.html","6913d37de13d16792482a116f2c6b662"],["/tags/撸羊毛/index.html","66242ad70704df3857c70c4b6ede7ad3"],["/tags/无限制/index.html","cb1a910a89010b86cae39171c0e93db2"],["/tags/日常/index.html","bed9ce83bfbce2b982e1884ae639e414"],["/tags/更换/index.html","5daf8d5a07ed5fcc5c9191ef35d7095d"],["/tags/标签页/index.html","b086e173d753055d2a0ab4656dc17f09"],["/tags/桌面/index.html","70b2ad6d9151bdbe60e615cec25eaf68"],["/tags/流氓/index.html","5a7c6648f6545e34ea5baa5ac63ae07f"],["/tags/浏览器/index.html","5d4397bd5ab74dc1f47ac63d7e32fdbf"],["/tags/版权/index.html","7b7865b3b79fe26b85f641d2eae9cc7e"],["/tags/物理/index.html","8ba86d4161fc735859bef0cf8e6e1226"],["/tags/特效/index.html","3453e3b8c4c9a58e91cd742272b6714f"],["/tags/用户信息/index.html","7b83b4a61313bd4cf0caa2c68b0a50a3"],["/tags/电器/index.html","f0a2ad0823e044088bb88d63c8a90978"],["/tags/疫情/index.html","de7febe5c9f183f8957ad05901436389"],["/tags/白嫖/index.html","08c20a4623633c89bc5d2b8917287cd7"],["/tags/百度/index.html","60042b862d9c5dcae2c23770ae623145"],["/tags/看板娘/index.html","a70f33393258946b7c991483abdabf98"],["/tags/破解/index.html","be79bea7adaa33aa4abf068695b7220b"],["/tags/神器/index.html","09083e5985acc58c117df6a07d456c7b"],["/tags/私人/index.html","8f4eba80e152df4b436d6923167ae828"],["/tags/私有云/index.html","51f07cf77aa6e982d2ee9ba85edf9ddf"],["/tags/科学上网/index.html","e6df531340e18ac3da0fc9f2f9cdb98f"],["/tags/站长必备/index.html","113338d39cd1fb5b72add137e73d6c91"],["/tags/等待/index.html","fd00ed515b481e0e2b2ca79981f57f2d"],["/tags/精简/index.html","018f01cfe355c53d4bcfc331302d5b39"],["/tags/素描/index.html","b12ac214c499f154bb12ad7b6a2f853f"],["/tags/编程/index.html","a645deb5a1fd2791d5392a9d2f5279a2"],["/tags/编辑/index.html","749bdbcbfc319ea888eae2c56e593884"],["/tags/网盘/index.html","e37d5bb1fb0af080a00a615b5d24faf3"],["/tags/网站/index.html","59e336ac95b2ae4927d9de2286c726e7"],["/tags/网络/index.html","0ff1a6cfd88802d0e4c93dbd670f2c86"],["/tags/美化/index.html","a78adc24574efa4e80afc061fe99b790"],["/tags/美图/index.html","cee30245db7f567f96ac566b2634cad3"],["/tags/脚本/index.html","9b3c76c5a46239ec53464595f790fe71"],["/tags/致歉/index.html","a3a2871f5687627303239670eec27b25"],["/tags/萌哒哒/index.html","1ca479f406a23cf35ad11d34de4cc974"],["/tags/萌娘百科/index.html","3ce3c2c7da078bc949a09f3ca49a4095"],["/tags/萌萌哒/index.html","e7573387f35865d98cdb69afed22701b"],["/tags/解析/index.html","f51c0842fd94535918fc2c6ec4c49528"],["/tags/评论/index.html","f1e62d6a7a72ae8cd5dc02cd576a7496"],["/tags/评论系统/index.html","013346235682bde17871b52d3c2b8c1d"],["/tags/语法/index.html","8e67eea1594a83b2bf31e7b74ad85bb7"],["/tags/谷雨解字/index.html","5c8911b138f02d99052e9d798648373a"],["/tags/赚钱/index.html","60235e697396b484c12816e6338f40ad"],["/tags/踩坑/index.html","7e21fb0c9b2e5d3a18ab299def403927"],["/tags/软件/index.html","9cdcb0d6ec029c123d78704c9356c1e6"],["/tags/辱华/index.html","8f62c04ae65b8fed0f992a2edbf3c5a3"],["/tags/迁址/index.html","ae23abee267b4780327a44aa082be642"],["/tags/速度/index.html","520f86f7e625489bbc42216bc450f586"],["/tags/错误/index.html","ac742898b7e43fd9890f76409e7a39c4"],["/tags/阉割/index.html","7ca462fd00e97cd9a4f2303bb316bd68"],["/tags/阴文/index.html","94367de775c1f71bfb0514065823a210"],["/tags/音乐/index.html","1f51e72b124a97d8388b34cc0a287a87"],["/tags/题目/index.html","a58b8152c01a4ef29db7a0a7be45ce36"],["/tags/黑科技/index.html","851f404fdf8d963c999cbf1a5326b675"],["/捐款吧/index.html","cf95b404554d9413e5899bd78622849e"],["/随口胡说/index.html","5421c4b60e4df47eb925cb3ede2498c7"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.staticfile.org"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"assets.cyfan.top"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"img.cyfan.top"});





/* eslint-enable */
