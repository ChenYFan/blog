/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","11f43f649f29ce3a11bd6de6de484ddf"],["/2019/07/17/巧妙去除百度首页广告/index.html","cf2b670efe1207e22c8240bf71169ed5"],["/2019/07/19/国内加快NPM下载速度/index.html","4d3279f3789a1978e9b7d57a2267d973"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","f94ed4dd8b8ae294d8b1270c53afcc22"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","5838214541faba7b69985662157b62a7"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","bbda63ac2c8026f296a78ed2f0a1323a"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","93e0bd5ca0d4c565d1215f7feb3ba1bd"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","c38e7f2c3af9fd617a8066c20bc18e25"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","68fe3d9d16a2e765a9cd656fc512c6ee"],["/2019/07/28/【公告】关于宕机/index.html","6042798b353c3a9f9a5de65ec9adc5b9"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","4a5b4743fdcce61a8660b8c2c2ea68ef"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","3af31fc82b69b913ec6f99d27b5a8900"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","5a179b60f6b156662ff222bf3fc821b0"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","77e50aafb7b5c4ec8444bf6292994409"],["/2019/08/08/每日bing美图获取/index.html","3631b7421fb40b35418e5bfdf7563ccb"],["/2019/08/13/User-Agent野史/index.html","c97fe20ad86e5e8a56d9f0b4a2c079ed"],["/2019/08/14/【公告】博客多域名/index.html","4c710744505aedb76cfc0fd398dc7f2e"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","38d70a24251d78d6cbd7b808afbc1949"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","a170468757f4e1723a3f8882936d9d30"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","9807d1162b25eb12aefecf2d127e1520"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","e543a533acf594d377532a99495d952f"],["/2019/09/14/来，破解版的Google访问助手/index.html","b2074126a4074b450c61f45d80a57843"],["/2020/01/20/回归啦！这是见面礼/index.html","5371bb8b55cc2068602933b30c4ee1a4"],["/2020/01/24/我们一起解题目吧/index.html","86b070dd505f2b0293cc1dcf979edb95"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","efdffab0676e8f35b70382a1206f2a49"],["/2020/02/26/Gitalk详细踩坑记录/index.html","61e42c6120e62f4fa38896ee4e7d917c"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","30f9dc9ad8008c04935899f9997d2d69"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","3441f957189e8e308f9fdfc3f3897e05"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","e135bbe47097d73a663454170bcc2ac0"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","3ff0a02d27572a6385ba17e538f50489"],["/2020/03/12/白菜价域名的问题/index.html","8b92430787a870197524556d762a8e72"],["/2020/03/13/工具箱和私有云恢复！/index.html","a1a4f5a49d475b981161f51ed2fe215e"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","d45715353de1610595551e91fe7a4bf4"],["/2020/03/16/浅谈什么是好软件（1）/index.html","887a2a9d88669f4be6daf7b6b348fa8d"],["/2020/03/17/一次愉快的更换域名经历/index.html","5d91a0e31d7fcf9b09013a8898d77b20"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","6f6327a557984e1a209ccfa2680fada4"],["/2020/03/19/如何-CloudFlare-Warp/index.html","878a648175de68daee66be7dd8fe4465"],["/2020/03/20/一次糟糕的换主题过程/index.html","db2ece3125d6b6cc8d89544310128a3d"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","dfa59d55e40682180f97dc7308fe6840"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","7ddab864eb94bea0726cc89a04a0ccc8"],["/2020/03/22/回形针-真的辱华了吗/index.html","f655abf9c8c98a05c2f4cc609e5c6dba"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","fbfd08ad6021ad265dd61fa75833bfd3"],["/2020/03/25/天体运动/index.html","59f5125be8555725d8fd214ce21e9e90"],["/2020/03/26/一次“修”冰箱的经历/index.html","603048d4ab67b942197088c8015f16db"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","d2ffb71442ef1a7d5b000b04fa9dd7f8"],["/2020/03/29/PHPnow/index.html","e5a47facf3c0ed9217f2d1450f9fc717"],["/2020/04/02/AVorBV/index.html","1559df946f988728edc21be09523d364"],["/2020/04/04/2020QM/index.html","e223991123850a0423574f1dc5a45a0e"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","b4f61c53008575f0b6b2c653e9649a10"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","61f0a9c6ff28546e1330acf59962f0db"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","efa218f9dc9f602ef4cf4e6a26095c09"],["/2020/05/30/What-I-Do-2020-04-05/index.html","426f4b4f6dc676861738c93f6daf2706"],["/2020/06/07/Blog-sChanges/index.html","5c096204eee6e31230e11e3e3171c5fc"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","bc5d06a4cff8ed81af14767717cfc090"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","a1138ed1f5a5c94620ca3cad2a1505d7"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","68bff244d08853650c86b98e5577f421"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","1da23a0d946e6157606be4842bff9a97"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","d56405bfe5ed22e526ddffbfa89622ff"],["/9999/12/31/博客暂更预警/index.html","bac5d68d9edc3b5cd05c9ea9d55d8b19"],["/about/ads.html","4de27d4f9a8e85f0f0f1526246612700"],["/about/index.html","4e31eb180e6c4a5a10f700bb884add93"],["/archives/2019/07/index.html","48d810d30b91ea372a5181f51e9f9c96"],["/archives/2019/08/index.html","55dd48d0c5942938337cfcafa76c2254"],["/archives/2019/09/index.html","5ef85c8c1eac6036d639249bf8b97336"],["/archives/2019/index.html","1b68dd39a23154f9bc991271900eb518"],["/archives/2019/page/2/index.html","84694d76c8a33da2c3b52c764c3a6b82"],["/archives/2019/page/3/index.html","5e494531f7fccd3d6ba3883642fca6ad"],["/archives/2020/01/index.html","4cf7d45e3a2ded663f7244afb1f088ee"],["/archives/2020/02/index.html","0cb9c1bdf32537b240d00dc9ffb29385"],["/archives/2020/03/index.html","abc4f9219baada92b331414d2d897e41"],["/archives/2020/03/page/2/index.html","0a181eda9838e54477e9d8d31df4e0f8"],["/archives/2020/04/index.html","c141d857e043f40aee19a311e6cb6477"],["/archives/2020/05/index.html","9b503c3b85008ba4eabbf614b46c90d6"],["/archives/2020/06/index.html","1755adf57a8048a1cfe5fd1245d03996"],["/archives/2020/07/index.html","29f79ff963ca01b3ac7be19a06a35686"],["/archives/2020/index.html","9747b3c5c55711037f7194f4ecb46cf3"],["/archives/2020/page/2/index.html","34753ebb8ebada0031ebc2518956fde6"],["/archives/2020/page/3/index.html","86d56bed02bf7f0a312b4de21314c51d"],["/archives/2020/page/4/index.html","9f0329c97d303fda295ddc8cb931eba3"],["/archives/index.html","6a9def216f6e321da1f5e71d6ed44e5e"],["/archives/page/2/index.html","63ad7243c24b893bcd771a74cf7e9a9b"],["/archives/page/3/index.html","2dd28db72a8555de8c7e5fc6d003fec5"],["/archives/page/4/index.html","88de22ea7c27bd8849bb27d347546fda"],["/archives/page/5/index.html","7052d46f6b2fd132c4cb1164848f5fd6"],["/archives/page/6/index.html","cd24087d9f6df75555f4d79b0a142d6a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","7577b4be5fceeb9c83487d5aa9cc3298"],["/categories/丆插件/index.html","7083e399016a634e3a5712fdaf811d96"],["/categories/又双叒叕是水文/index.html","fe13ce485430a91d9b5e362e381a3710"],["/categories/好方法/index.html","27b00fa39b156b90a35e9bfaf87b4a9d"],["/categories/好方法/page/2/index.html","130efc686f01871569ff4ecd49bdab27"],["/categories/屌代码/index.html","6e12907e35bf4b2860a0aa9e9112a9ac"],["/categories/干问题/index.html","61a2256723a4074b8394ff2817ab7a95"],["/categories/撸羊毛/index.html","3a7a56cdcb2a71e9f768482553527748"],["/categories/有故事/index.html","a9882ab47e68e51a46141466652f8d15"],["/categories/爱分享/index.html","a10b4c55a3b83ad570574cfc9a0c4858"],["/categories/爱学习/index.html","2344ad9b9479579abba3ed12240baa7c"],["/categories/爱学习/物理/index.html","c73fc6a55ba293386de87beb421aea3e"],["/categories/爱折腾/index.html","83657eae7f845f5d7d025ac37abc414d"],["/categories/瞎扯淡/index.html","1c55af495f44e819c2d9d7fbfc9021d1"],["/categories/繡软件/index.html","6c5bbbcba29e7cc8cda4abeed0fbcd40"],["/categories/要公告/index.html","ed0f26b244151296fc045da642f9ecd6"],["/categories/随心记/index.html","e5377e4b0ecedaa5cc0b02fc58199da1"],["/css/gitalk.css","f8574b7ba7dcd4b347d719de92bfeef5"],["/css/main.css","939a0216ac8e539e6da02e176bee6f54"],["/css/matery.css","f72a62dbfbf59222ccedf2b131b5ec90"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","51ca8f6cf57068416a8f8cf5f81dcd9f"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","ec4bbb152e178e89272dfbc46118a70d"],["/lib/prettify/tomorrow-night-eighties.min.css","f540e35062777956ffb8214ebfbffd33"],["/lib/prettify/tomorrow-night.min.css","b713372ce71821a40b8f33f7819ba248"],["/lib/prettify/tomorrow.min.css","2ca29216f69c4ca7f36c7216f003156b"],["/links/index.html","a799744ae84f1696e8b41e2ad22b2815"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2f514ff99b009c2fb11961038cd4089e"],["/page/3/index.html","3adb7e261aee1e2488468c5d7f7a0a3d"],["/page/4/index.html","92165b8ab8b20d611d0f19b47ceac08d"],["/page/5/index.html","8dd94132cc23030ff47a33176f8fa563"],["/page/6/index.html","c34784687c90649dd4e8739bdb2f48b7"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","a2179d86e4bf8cc47a86c7e32288e226"],["/tags/000webhost/index.html","d3c13d49b1b715a875031c4414fecad1"],["/tags/API/index.html","9f85e0004f7a0c560f1e4d973b15ee95"],["/tags/AV/index.html","ee2ed9f0d164fbd9b3e3ea0129e72aa5"],["/tags/Adobe/index.html","199153bf80e6764b11819eb4621e380e"],["/tags/Adsense/index.html","521164965931d16dd14387e17ff41c9f"],["/tags/BV/index.html","b87efa7fba758d4dd0a4fa0e1c4bd090"],["/tags/Bilibili/index.html","b3a472ae45401e89778d4dd14a52a374"],["/tags/Bing/index.html","00e75b34bb79f8e87d3f7cf59d9a17f0"],["/tags/C/index.html","5aafa88052ad3ee768fb959696bf2b95"],["/tags/CDN/index.html","9c06841148cd1410640bd88d4ffb026a"],["/tags/COS/index.html","4a9eef78a81ef1cf0782223dfd59f344"],["/tags/Chrome/index.html","6713e71873ae37ae643db1afcce30302"],["/tags/CloudFlare/index.html","be35f91b4150b2028dcc73f0116ee9eb"],["/tags/DNS/index.html","7160c4c75b1093a8bf5739d57f54a738"],["/tags/Diaspora/index.html","fdbd2530222140184a946e82fe65eb4f"],["/tags/Gitalk/index.html","3dc0357aeb87d44e832eecd8af75abb5"],["/tags/Github/index.html","e2bf11dd7bffd63e25479e01dc4ba38b"],["/tags/Google/index.html","68c13bceb6304057b2736e0ab09528d2"],["/tags/GoogleDrive/index.html","d5710b1dbff70ae4297be91bdba85110"],["/tags/GooseDesktop/index.html","8f879cd154ffb799e91b2534ddd2089f"],["/tags/Heroku/index.html","ce347cb1b9d63bbbca2ce09bf97e463c"],["/tags/Hexo/index.html","c00045adaa0ce6dbdc76788cc2470a8d"],["/tags/IP/index.html","81806ec427feac02d2872e4830b78954"],["/tags/IPFS/index.html","2382999f773e5227bddd85a96c5adf72"],["/tags/JavaScript/index.html","e1e0b66b40acd0fa3d46c0df5d5db8a9"],["/tags/LazyLoad/index.html","ee95f62da18f71898a51b959984b19a6"],["/tags/Live2D/index.html","3d00835d005d9fa132fbabf5c7d13b61"],["/tags/MarkDown/index.html","5e9efdad9e71ff9301dc68a8378c5ab7"],["/tags/NPM/index.html","f10205fd6306b8663a1c6c4494a8d8e4"],["/tags/NexT/index.html","a3ef96bbd77c13d7f8e92ef09bb11b64"],["/tags/Node-js/index.html","cf2401e8f4da7837920c20c7d012270f"],["/tags/PHP/index.html","cbd40d8e94001b782f9b398e2caa4410"],["/tags/PanDownload/index.html","5c0f5dba821014a61566c9acafc8eec3"],["/tags/Repository/index.html","524ac19d3873c348452798270c1f98c5"],["/tags/SS/index.html","9fec357812f87f167ec3d7ff80734638"],["/tags/SSL/index.html","eaeee93cb2f48abe48d5b92b127f7786"],["/tags/TLS/index.html","5270cfd7e06a4905dd271871e9b534d9"],["/tags/Tampermonkey/index.html","ed24e4b978dfda09484c426d2d26a072"],["/tags/Travis-CI/index.html","6979c480c6ee901a659c0264a2731db9"],["/tags/User-Agent/index.html","eafe29decb42075d9c5cdbed25a1503e"],["/tags/Valine/index.html","c6c49429f486a7eee60db97e7c5f45ca"],["/tags/Warp/index.html","74239b9f106bf32a30233d37a7ee7eed"],["/tags/Windows/index.html","4c3df282637234ae3e4deab8ee6eeb69"],["/tags/Workers/index.html","463e85ccbbbb2a96ccd1c909ed587fc2"],["/tags/css/index.html","955d2d45e5a512909aa36db5669632aa"],["/tags/index.html","93d7fccd8ea94496fff703e95a26d1e5"],["/tags/ipv6/index.html","b2b69588cac795d3adf4ec5c25b7561b"],["/tags/下载/index.html","172f2bdd3fee113e7888491b8157f2b9"],["/tags/主题/index.html","5407ccb9f927c8a529f4dcf211d7933d"],["/tags/京东/index.html","46e2cb8ec48dc8df39b80c4592a0863e"],["/tags/人机验证/index.html","7a207e620133b1424ae2ea9a50712938"],["/tags/代理/index.html","656aa5abeb632395dc2fbf2e8199235a"],["/tags/优良/index.html","042c1e67d5c0a28b57a7d21937a82107"],["/tags/便宜/index.html","c3b2c5e96d4f215f692989ba17e3b145"],["/tags/修理/index.html","2d0dd92e91f9cfc31d0aae72669c7fe3"],["/tags/免流/index.html","8255fd2542950593f59dbc8aeca346f1"],["/tags/免费/index.html","f30e86eadd7a4b0041810415aaea932b"],["/tags/全家桶/index.html","61e8115f32fd87938b9c20cf43a9cc42"],["/tags/公告/index.html","6c1705c5963132404cfcac99af8fd787"],["/tags/关键字/index.html","2a833a2ae292d8114698f024209aa209"],["/tags/冰箱/index.html","d3114ddf69ad415ed719482fa3021512"],["/tags/加载/index.html","a5f66c972f6d3ead3fdfe5aeae95fe3d"],["/tags/动手实践/index.html","bf413b540377428f0fb991d921b52666"],["/tags/劫持/index.html","9ea92f3f723f9564c59a98c682fb837a"],["/tags/历史/index.html","04e3b8027e1d4d5d0a270444c36db728"],["/tags/压缩软件/index.html","5343df91fa88904ae016fd1301ac1e9f"],["/tags/台湾/index.html","62b4bb9715684f54dd40d12fee349a81"],["/tags/回形针/index.html","5951d584bc48e6e838b8005a0abd1125"],["/tags/国家/index.html","aa942548390fba046ccd58c06f96385b"],["/tags/图床/index.html","da6763b112dd81c4cc805bb246c54552"],["/tags/图片/index.html","0a9a3b9f9477200aba30cb4ee71b2358"],["/tags/在线更新/index.html","3fb43e6e53eef0c16f73e22d9388eda4"],["/tags/域名/index.html","580a3c5948ce71a8249689d5e2e3a490"],["/tags/填色/index.html","70c6c6b133d69857c50db425eb029532"],["/tags/壁纸/index.html","6635c411d2164b6de848ff2a8fc343e9"],["/tags/天体运动/index.html","2cf006748b74a3aaa2af36a50875c632"],["/tags/头像/index.html","38967f8529a7edcfd6d18a721167b836"],["/tags/奇淫巧技/index.html","2b5c116277b3130a627e34049d86bb62"],["/tags/奇淫巧计/index.html","b3f3dfaafaca97e6aa8108349cd2dc7c"],["/tags/字体/index.html","ef2ffde52a7a2e0835b5b91ea3877564"],["/tags/学习/index.html","4fbf60f512d5454e20e7ef74bbbeae2f"],["/tags/安全/index.html","fceba0a009e556c4b85d29f046e954b9"],["/tags/宕机/index.html","939d6631a7a8ff17cd8a09eb895acfba"],["/tags/实践/index.html","eec14d21746985d470a1331085f2cf15"],["/tags/宠物/index.html","586536ec6a26ec3e0aaf0bbf5d3d762c"],["/tags/寒蝉/index.html","6c283a72900f375cf105e236a849a766"],["/tags/对象存储/index.html","784ca1f731642dfff3f014137045c3fe"],["/tags/工具箱/index.html","da22c6295a0aead894e22752dd59f4bc"],["/tags/干货/index.html","fe078e4c190d6c2940cdff9e387249ae"],["/tags/年度/index.html","55416b33ef54647bae996bd35a21ae99"],["/tags/广告/index.html","74b41d931cfdf633e6279ba562fd6f80"],["/tags/总结/index.html","e374dd11f84014802e8c36278bd704df"],["/tags/恢复/index.html","6ade5b72e34e0832f4b7cb0c3040b33d"],["/tags/悼念/index.html","e617927d5e62c8581a49f131e9051196"],["/tags/悼文/index.html","832314f5c0704f95bd650e4115089fdc"],["/tags/手动填坑/index.html","8e89e0d3bf4d86c8dd8e9559285baee1"],["/tags/插件/index.html","6b455027f6fd33587ddb03146d505741"],["/tags/撸羊毛/index.html","ce887367ce6591d0d9e730ed89532043"],["/tags/无限制/index.html","484e1eb2be17a730b1cf68b962881625"],["/tags/日常/index.html","54b50fcd81501d650535756cd55a52a1"],["/tags/更换/index.html","12ccf4a2404e6002d8c90663a41e66ee"],["/tags/标签页/index.html","27182011787c6b20ba7857cb75697d4d"],["/tags/桌面/index.html","fc3e457a480a32a60db7b452f7605128"],["/tags/流氓/index.html","d20615de4264add441f67dc2292fee21"],["/tags/浏览器/index.html","dfb198db9f74876c93d61baeb52eb422"],["/tags/版权/index.html","054a0f2b2cc52f7e028364a68bf160ed"],["/tags/物理/index.html","ac0c9b92075f13e0ad309c2802e35e37"],["/tags/特效/index.html","65f309afc385507a42614b65ee0de823"],["/tags/用户信息/index.html","67ee00250c850645a93491c6babcb1e3"],["/tags/电器/index.html","689f381ed51cc5f92fa2dec86a5d5926"],["/tags/疫情/index.html","38bf2a7da20e1dd6070ae6b2983f0e73"],["/tags/白嫖/index.html","580e077aee2b777a4a1cd466902fdc4c"],["/tags/百度/index.html","ba5aa0c257dd3b619c64b7dee2cb7504"],["/tags/看板娘/index.html","792bea77ec48426fb548920075426d0d"],["/tags/破解/index.html","ab72faa13c1438e235ce887b78d01dc9"],["/tags/神器/index.html","b2b21a2c11f09d85f37ae00b03caced8"],["/tags/私人/index.html","47fda494cefbad82cd2912976eaedede"],["/tags/私有云/index.html","2a87bb2022361d0f5e62cf3abe068c64"],["/tags/科学上网/index.html","61fe03c5522b46f7897865614b298418"],["/tags/站长必备/index.html","7d964fdf64d1d80fd375deabc9f48af1"],["/tags/等待/index.html","b53e32b0a9e0e8835256a5621bba74d9"],["/tags/精简/index.html","fd30fafc78ab4eeddf0f3815f60aa25d"],["/tags/素描/index.html","1873ca7d143039123093b850e51e1f6c"],["/tags/编程/index.html","6058032bdeae829fcb7cdd20eb865d92"],["/tags/编辑/index.html","ff97e430ae0eecce0030987d600fb100"],["/tags/网盘/index.html","59fe46bc7668bfa2484a6139a34e235b"],["/tags/网站/index.html","4bd74aaa23cdda4fb516e8bf8719f0a1"],["/tags/网络/index.html","871a3d1a9c6e98aba4e9091c1d391ec6"],["/tags/美化/index.html","42952ba66638c5a260589ecbae42d116"],["/tags/美图/index.html","aacbbcc816bbe0685009b3d637ca5c42"],["/tags/脚本/index.html","ce99d634bacf3b540fe1cecdaebd4fd3"],["/tags/致歉/index.html","324a2be81eca7622c0a212a4ec18e388"],["/tags/萌哒哒/index.html","cec8942659cfd176cec9286c2e3691e8"],["/tags/萌娘百科/index.html","fcecb59089049d33dec51f62897d8b17"],["/tags/萌萌哒/index.html","ab2e2ddab6cd92c2d8bbfa7171b27f3a"],["/tags/解析/index.html","a29af4d4bf7fa62ab35d1b2c25e0f08c"],["/tags/评论/index.html","36ee49aa27461c75586bce979521b921"],["/tags/评论系统/index.html","7d1fa7e26c8d81060b22c9dbd6f95ae4"],["/tags/语法/index.html","a01780742f17a7603c2e3a35dadeb24a"],["/tags/谷雨解字/index.html","a840620f56dcb2d8c48fb5c2a207bf3b"],["/tags/赚钱/index.html","f024aa305494e8eb1726e91aa601d93c"],["/tags/踩坑/index.html","54c67c2502e06fa3abb2c4202f60bd52"],["/tags/软件/index.html","82d235a1c366a9d2489cf5a79648960c"],["/tags/辱华/index.html","05d3744dde5f23877332067900673edd"],["/tags/迁址/index.html","b8bf530cd87f9c379f3677413b4f9c66"],["/tags/速度/index.html","373cc2c29a355d242d10fbeb39aa219b"],["/tags/错误/index.html","0a739b234da5cc909b39fe123f6e1f13"],["/tags/阉割/index.html","6ce58e9db61efabd35c4c55a38c1bf33"],["/tags/阴文/index.html","1e7a0913f2b19dc2c1fc0d7d244cf971"],["/tags/音乐/index.html","3a7a164cc74b6b7bace3b54a69da0544"],["/tags/题目/index.html","a82075b122fbeb392e11c86b713eab59"],["/tags/黑科技/index.html","ccf3874aa4fb4b5f39e923be8ae58643"],["/捐款吧/index.html","e7c582f13e6d2845115e9c2971e84757"],["/随口胡说/index.html","de5b87782debf74608d52c67a1795c24"]];
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
