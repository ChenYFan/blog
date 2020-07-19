/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","9f41b05e4518cba39c86a5139baabb1f"],["/2019/07/17/巧妙去除百度首页广告/index.html","062faafede67bd8cacc496c5633a1c83"],["/2019/07/19/国内加快NPM下载速度/index.html","e1eb0c58f6ed0789e8425afd43190583"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","be6809e2244e2d68e074cc7a429d895b"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","8b7a1e498c93dc6f787dcb76acc2ad21"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","cae1eff13df4e6400df577a44eb5f8c7"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","e68f0e41ef9844280634bfe0e0d602f5"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","96a3d866fddb0f73bbe81125141dcffe"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","fae3e88b2c99662ea786af77f157a3da"],["/2019/07/28/【公告】关于宕机/index.html","ae0a1a87006720d66b807f4c4f84e558"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","62809a73156766fa176f2b3f0a6be8e1"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","c74b97e7a30e14c6c91b63bb30338e90"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","5d31f83e9f0531bcc87738bf7d2ecfbe"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","cde8fa96dd244f50047804b7abb50252"],["/2019/08/08/每日bing美图获取/index.html","b49d6d219581d794193a89961ec2cf81"],["/2019/08/13/User-Agent野史/index.html","a09b89c3baed6381af12a402eb42ef43"],["/2019/08/14/【公告】博客多域名/index.html","297951e95c2be04ce1508c0d5496b04d"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","e4f9aa028a79650c37a94e5a5cbdefa6"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","ff9ee91a3eb0324d583c47e5d71e5fc9"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","1c289d6692f70cfe331d7c6f65817de2"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","6d9830a7fc4ca8300cfa0a8155e83fdc"],["/2019/09/14/来，破解版的Google访问助手/index.html","3ef72892b5c892e2de8204b5431b0a64"],["/2020/01/20/回归啦！这是见面礼/index.html","e429128d07555fa8cdefba43cd6510de"],["/2020/01/24/我们一起解题目吧/index.html","86bfb3321f9fa587805cbcccbd8bb44c"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","eb71799dac42a5aae8012b42fa7d26dd"],["/2020/02/26/Gitalk详细踩坑记录/index.html","a6a944f32e8463b7812631e06d2e70d1"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","3bda9ad39d98baf55848f4f9aadde28c"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","71f606534b7bf09d091330d1bd8438ec"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","663b0ead9921a7677167bbb4fea1ae84"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","1979c359b2656a9c55f4f15c5ae592c4"],["/2020/03/12/白菜价域名的问题/index.html","1a7006fab1b44df9c4c608dccfe58135"],["/2020/03/13/工具箱和私有云恢复！/index.html","475ac196f2cc87109bcaa2459bfaefe9"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","d803843793a722b5e94d5a25ec881de8"],["/2020/03/16/浅谈什么是好软件（1）/index.html","d0f15347a25b1d9e364322b7472815b2"],["/2020/03/17/一次愉快的更换域名经历/index.html","15223b27125c9d28ba7db5cae9c94acd"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","c074f1be1e16f69e49fc5cc4a9b6cfc8"],["/2020/03/19/如何-CloudFlare-Warp/index.html","4104638943cb6769d11aa3d7330f49ac"],["/2020/03/20/一次糟糕的换主题过程/index.html","075874815d3d1bf2d5631a3d5ac9a795"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","945d2d812ad5056a665dc45f5240c2df"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","d080f2de2fa8928afb3e34656624bbaf"],["/2020/03/22/回形针-真的辱华了吗/index.html","7451d85f560dbca6a6cd6309d8f73ec4"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","b59b497c88349e90019a5f00c0537571"],["/2020/03/25/天体运动/index.html","0f207e7da12600bd467fc80c3de2f280"],["/2020/03/26/一次“修”冰箱的经历/index.html","d9ef78d978b951a2e883c8fa5d51ed1c"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","9b10ef83351e0793fe08f77ca00fdc91"],["/2020/03/29/PHPnow/index.html","5fc997b73e66dbaf7b0d01ac7692af4b"],["/2020/04/02/AVorBV/index.html","3bcb0980c1df7fc702db3c8bb184e9b0"],["/2020/04/04/2020QM/index.html","943c81591c4cdf828437b8b0770266ac"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","752450246d064ccc8d296522b1c071fc"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","30319902618e27bf4a6806a1f38679aa"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","3d6f41ca5274fe2059e12f1260467ea4"],["/2020/05/30/What-I-Do-2020-04-05/index.html","6a15311a051d872771a127a6df27ed11"],["/2020/06/07/Blog-sChanges/index.html","6b32eefcdb1bbc125c359c1f32c8c1cf"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","741df36820dd6fb82694bd10cefca600"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","9d474a581877bc9ba1fdb0bbac3e24a0"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","40facb655064f3c52ecc3e3a8a767ddf"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","3992f1d48aee9fdb00579372ee128469"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","569d7e1005ab204455345e3d3cfa6bfe"],["/9999/12/31/博客暂更预警/index.html","a6f1e542b693f98a6a38a72b09285737"],["/about/ads.html","74d192a401fa92f6cff79dfa2e725d0f"],["/about/index.html","8a2192d7fbee42a1936f24fe76731dd1"],["/archives/2019/07/index.html","3e8c2a1d9820526502190dab69eef57f"],["/archives/2019/08/index.html","e708cf4028f95f3ae4801ff69c659843"],["/archives/2019/09/index.html","6fc1ad1a7ac86f2d6e92037385eb97d9"],["/archives/2019/index.html","6df9bd5aef8ff128ae3ff49b682aac60"],["/archives/2019/page/2/index.html","c470969a39ca6543d729ecedee31f2f8"],["/archives/2019/page/3/index.html","d7753291ff06197e15f64013cfdea789"],["/archives/2020/01/index.html","138d123dbd3027c5e50317c7fad1a212"],["/archives/2020/02/index.html","7ec68696415db0b957b8cce7f09d0615"],["/archives/2020/03/index.html","f4377656dd64f59dba73a8b93a27965b"],["/archives/2020/03/page/2/index.html","1c64053e545ff00eaa611a9acbfc7595"],["/archives/2020/04/index.html","d0137422595c88c230baa694df2cdc19"],["/archives/2020/05/index.html","41356cdaa21bb6b30816fb4ffd048ea5"],["/archives/2020/06/index.html","06b0f258a35f12d35156a35c7bc52857"],["/archives/2020/07/index.html","cf17d779bd3dbcd528ca46136ba935eb"],["/archives/2020/index.html","bff05affaa2c68c9294e5fb6d9de5ebb"],["/archives/2020/page/2/index.html","79e027c15ee86160afddfaba01a7b51d"],["/archives/2020/page/3/index.html","609f75a43220e6ad98386462da158f46"],["/archives/2020/page/4/index.html","527f59eb53ec51ebe80976c33a1c3d4a"],["/archives/index.html","46a022c54126fba30216023379249560"],["/archives/page/2/index.html","87d6f6045f14c4d6093d90c5546ba4f4"],["/archives/page/3/index.html","62313c310cc04f25aef6c4e8d812e740"],["/archives/page/4/index.html","fe1f788a818c78450ef79f7c119867da"],["/archives/page/5/index.html","e6f5e6ff77c58c38f516f05c8ee7d509"],["/archives/page/6/index.html","8f761905736280fbf5d744c14ff640d9"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","c0d792f73191eb8bd72ae9963333449e"],["/categories/丆插件/index.html","af00198cfe41ea9dd53eac142b2b42a7"],["/categories/又双叒叕是水文/index.html","8617a5e5ca41e5cb29176059e1cc8590"],["/categories/好方法/index.html","6f0f780bed978c0398658b296918d842"],["/categories/好方法/page/2/index.html","074136eacbd490aca39f88e3d00826b5"],["/categories/屌代码/index.html","c2fb4ff4072da2637bd0b52c1b58a1b6"],["/categories/干问题/index.html","c1e4711a96e79b025827ab2754156929"],["/categories/撸羊毛/index.html","7a1fa637e1e5df2dd2dd41f339ec23ff"],["/categories/有故事/index.html","73caf53328d30c8193620879f6c09638"],["/categories/爱分享/index.html","3a4fa3f88bc6ba5d42f5763b4be6750a"],["/categories/爱学习/index.html","2bfe428b579d21ea6c366a861977987b"],["/categories/爱学习/物理/index.html","6647fcb89474e6b4dce37d75f8e00496"],["/categories/爱折腾/index.html","4fa74af9a03d1523825fecc2d4646674"],["/categories/瞎扯淡/index.html","d68c6eb0b32778f42517ac48832e7711"],["/categories/繡软件/index.html","91bd4399459880639b5e7b1094107302"],["/categories/要公告/index.html","98919a769c3ac92357f08f8b2d58e576"],["/categories/随心记/index.html","37357c254ebcdb0ae8da947604b5c92d"],["/css/gitalk.css","296ce81cc27754dadd8e35ede01878de"],["/css/main.css","f9587b84ad08311b2d2c411a7b8bae4c"],["/css/matery.css","f5f95ada83655f766902bef62e42d201"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","a95e9de4384ad8823a4e630f6958aaad"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","1b185b8b76e0cc0ad49f9c72a2d5166c"],["/lib/prettify/tomorrow-night-eighties.min.css","9e0b73d957b71bb4cc8f452c0703fa57"],["/lib/prettify/tomorrow-night.min.css","b2a1e4d6425a9e55fd1a4283e6525464"],["/lib/prettify/tomorrow.min.css","65740bbfd89aa5434942a16c690b9d43"],["/links/index.html","7c69007e16c9b7b4089eeebbbb086e88"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","343a3d6b434f665b62ef717cb9a1a067"],["/page/3/index.html","997bb6e87790b2713bafd28436114f63"],["/page/4/index.html","7c613bf31cf76ef7e09149ec20691c59"],["/page/5/index.html","05d1c9246399923297c6fbd80e17abab"],["/page/6/index.html","6e2a7dfa38bf52ae9fc9d4fe1009d668"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","f1b64a3e932b741304091e231df271a4"],["/tags/000webhost/index.html","77f1e12852028bb64fd367aa84653593"],["/tags/API/index.html","7d0547550588e14d5289149fc22deba3"],["/tags/AV/index.html","f31d5c3aeed676fd509465249e8630d1"],["/tags/Adobe/index.html","719731e3ea8e9d7aeb83c852ae28d2d3"],["/tags/Adsense/index.html","bb68c31f7bd124e7002e7d781c27c7c8"],["/tags/BV/index.html","b80114487391a62e872484a9d3c78273"],["/tags/Bilibili/index.html","8999dbed2f9006e8ad9a999a5670a6d1"],["/tags/Bing/index.html","742df761909e55de355927836e949179"],["/tags/C/index.html","a4276ff4308ef472cbab34bded2de70d"],["/tags/CDN/index.html","b9c1fa2d2524ee6400e6ddd1939dcb8c"],["/tags/COS/index.html","6190b8371bd78f1f5db31c34b1b5813f"],["/tags/Chrome/index.html","fa5d2a754098458cba70b427158d047f"],["/tags/CloudFlare/index.html","05850ec9c252b4d863a8d9f0cd8e535a"],["/tags/DNS/index.html","00ece87aada065a1ea7672d8028719e4"],["/tags/Diaspora/index.html","9348409e5d958af9c55198f927703a2a"],["/tags/Gitalk/index.html","678a6cd6014211cf2d67d3222d32775c"],["/tags/Github/index.html","3a37007b1ef3ac4bf9d86d999d029bab"],["/tags/Google/index.html","1261b3f1c61dbda883b386fdd6770850"],["/tags/GoogleDrive/index.html","cf9d46b71223ebfea77a9c9b5ba332fe"],["/tags/GooseDesktop/index.html","f07d179b182cdc43879bd7b237e23e75"],["/tags/Heroku/index.html","1050be951dd3e446d540015c36cd5849"],["/tags/Hexo/index.html","728f4b0288961aeabc8c1688344957ae"],["/tags/IP/index.html","a7715662f66a3426a61e117c09f4296d"],["/tags/IPFS/index.html","6f708de24b851e2c95c723b721ac066b"],["/tags/JavaScript/index.html","f9865df230f830210b28b843a45a4234"],["/tags/LazyLoad/index.html","9c07bcccf73f970ae57f7e7fb1a68737"],["/tags/Live2D/index.html","c106ce2a44f59fd6122d5f23be860356"],["/tags/MarkDown/index.html","2290eeae9d13334b6c24b17b022a4393"],["/tags/NPM/index.html","1b057567226939b6cd4533943fb1c221"],["/tags/NexT/index.html","7270db089d2ebaf9d8a751e0bed52d88"],["/tags/Node-js/index.html","eaaaaf2457cbbf7ab8857765aa179c9a"],["/tags/PHP/index.html","8b7d318b488f189d81733999afaa8407"],["/tags/PanDownload/index.html","1a40c1ef5fd1da6e9367351dc68c7c21"],["/tags/Repository/index.html","d1105a8e0ea89510c6a56dd792381434"],["/tags/SS/index.html","7a944bd411fcbda76425b78e58e4144e"],["/tags/SSL/index.html","359796ffd3f9bdf01f3c61bd3480dcc5"],["/tags/TLS/index.html","15e316a6866e26b2b4d2bfc78f927c3c"],["/tags/Tampermonkey/index.html","3fe8f6154f0e3cda485caacc160af3e9"],["/tags/Travis-CI/index.html","080e70e39db6368bd3076467a653a061"],["/tags/User-Agent/index.html","12609eeae180ba075853c2dc9545abf1"],["/tags/Valine/index.html","75a54da0bb92152541ec476e3f9639b1"],["/tags/Warp/index.html","2a2e79124cdf421b11ce20c301dc4f58"],["/tags/Windows/index.html","e5ca6d19776910ecc238bbd53f8e8b54"],["/tags/Workers/index.html","b1072aca347a601d059664b6acb75b14"],["/tags/css/index.html","66fbe95c2ed483b71605e590625b9280"],["/tags/index.html","e613c8cb2198e5775dd29e65c94229b3"],["/tags/ipv6/index.html","ec5b54e7b59100f50dd89624d178ef04"],["/tags/下载/index.html","47a6e5118ee4c73e6b2a98e643674be2"],["/tags/主题/index.html","cc153fc07de5739126f997ea076e1eed"],["/tags/京东/index.html","b8985454c911fbdbd78d718ec7279299"],["/tags/人机验证/index.html","947702f309919e8abb687e26c854cd39"],["/tags/代理/index.html","8f7bcd0ad93e2de2f65765bab6c4f3f6"],["/tags/优良/index.html","ae813f0fef087e6439c1bd05bf6e6d6b"],["/tags/便宜/index.html","1058a34cd64f782e3946a3d84a0367f9"],["/tags/修理/index.html","8a01007c9911d848f74088a71ef411ca"],["/tags/免流/index.html","feab6a7170504c506fc09fb561bb5421"],["/tags/免费/index.html","895f2f1e7ef8238ae477bee1e633061c"],["/tags/全家桶/index.html","65c75b44e0fb4b26f7245e26cc296f08"],["/tags/公告/index.html","b55616a51911a77da02c235d01239a4e"],["/tags/关键字/index.html","085b2a0689b6cb370523b9d901560db1"],["/tags/冰箱/index.html","bb984a133ae64e5dda38359f1b728cba"],["/tags/加载/index.html","51fcc6998c6a759b1cfc2b2b79aff326"],["/tags/动手实践/index.html","3c809dc43e1015c06acd3d327cf61921"],["/tags/劫持/index.html","021a0f8750ab19af59f28c2163da2b33"],["/tags/历史/index.html","5d369357be1b141c3642c9df0ea966a9"],["/tags/压缩软件/index.html","85d278d603d90dd6b70cba1525456f53"],["/tags/台湾/index.html","7beb2e30532f7d73fac9ab3ccd69b0d1"],["/tags/回形针/index.html","722a9b7e904df75a2bb9fc850afa17a5"],["/tags/国家/index.html","f59bcb45ce4b77f1b022c14e26f10de3"],["/tags/图床/index.html","f932679269ee95f35ab92496f9d6c293"],["/tags/图片/index.html","6863f4504d710a1eb0207ec4b0841d42"],["/tags/在线更新/index.html","4dd9f29aef34c93a51ec4abe47061d3f"],["/tags/域名/index.html","3194976c8579d5d8f4bd86903a82d885"],["/tags/填色/index.html","c6f3fc769974879d14e33c20e3c627b1"],["/tags/壁纸/index.html","d5b1ca5b3def460e8528a1bef630ee68"],["/tags/天体运动/index.html","d210062cfb11413ab9dc3ae0e676b460"],["/tags/头像/index.html","fccbcec29aba4cc6539be8bbf59cfcd4"],["/tags/奇淫巧技/index.html","f360da253ac44c5c0ff79060eac3adf1"],["/tags/奇淫巧计/index.html","0d77679d2e3ec45e12d6859c902e298b"],["/tags/字体/index.html","c6113a439b5a2ddf1d184c4d927d3dab"],["/tags/学习/index.html","45f81176901dd6a27b9098c6bda9c579"],["/tags/安全/index.html","b64ad25d09a3b4b0b6e7057109e296cd"],["/tags/宕机/index.html","2e8f32f96e7ca5044d6d6904aebc9688"],["/tags/实践/index.html","1c320a7748c0a30cf2f1eee74c49d529"],["/tags/宠物/index.html","4f302d329d927c2c8371dc8bb81c8e76"],["/tags/寒蝉/index.html","7e3dea844852d421ca3576dca0e2347d"],["/tags/对象存储/index.html","8379e55f4df63c793110a87554c1acd2"],["/tags/工具箱/index.html","d0210b429f113671016ded6147ec53ed"],["/tags/干货/index.html","89ea8460bc3e37deac771140935de3ec"],["/tags/年度/index.html","64fb760dd40227dea4830476696f0306"],["/tags/广告/index.html","fc1328aebd6d46ab885ea8c79aa1052a"],["/tags/总结/index.html","bc168d7f38beed786fb9884b601491f6"],["/tags/恢复/index.html","b18f365ff2ec5b2cbfbf35e33379d40b"],["/tags/悼念/index.html","79c7fb20e3225bf75cb7554318a62f1d"],["/tags/悼文/index.html","3438bac74776120983e553ed7159f735"],["/tags/手动填坑/index.html","27c543c0398e35021b1e4aee5248ad55"],["/tags/插件/index.html","94b60757ad205812705798517e67f0b2"],["/tags/撸羊毛/index.html","7ebe7974bf3ca2b6cdfff0adf227f25a"],["/tags/无限制/index.html","743aea640ac6be5dfac6cc52c31d7e9a"],["/tags/日常/index.html","75328aec3776f9b8e4341ff5be1be3f1"],["/tags/更换/index.html","5025555736bfc40647e1f4f8e240ed32"],["/tags/标签页/index.html","11933e502a0a4997548c6e82215ce6d2"],["/tags/桌面/index.html","6e08ed34ce768cb68363147f4c9d1e6a"],["/tags/流氓/index.html","38bab01ede67b32ee24fbc8af4dad5d6"],["/tags/浏览器/index.html","66cb0ebb81d0ad106e87c807b5bd775d"],["/tags/版权/index.html","d1da3a2aa01d41f42438dd2bc2d13018"],["/tags/物理/index.html","7a9fe800466e88b7a88e2bafad834caa"],["/tags/特效/index.html","d0551913ff78c041a1ebb2776c566b05"],["/tags/用户信息/index.html","46c78d2e8b3682fe79d42ce3a616fcec"],["/tags/电器/index.html","ce66ddf6ce6f3a1c892fe0a4a5385150"],["/tags/疫情/index.html","782191c6a118f65ce0d845b09c3c65f4"],["/tags/白嫖/index.html","2335da173a5cb15f2012213aac99d546"],["/tags/百度/index.html","5baf21f063a1c6a64a744cb67384e23d"],["/tags/看板娘/index.html","02f78a6a7299ca9960d08db6b10c1420"],["/tags/破解/index.html","e8d6e0c8681770c27453213ad007f740"],["/tags/神器/index.html","1b8994dd2c8986806c873acd84e3d0ee"],["/tags/私人/index.html","0803d97862435b7af106477246444435"],["/tags/私有云/index.html","bdf8a1a3198399c268588b12a8efaa77"],["/tags/科学上网/index.html","845334707e5b5712207e22a3b75098e8"],["/tags/站长必备/index.html","7c83ced36e9fe8e1cef9d370bfe325a9"],["/tags/等待/index.html","9d8f962245849b667e826cb1827b7d7b"],["/tags/精简/index.html","3954cc053563f2d370d316b1aca1ea4d"],["/tags/素描/index.html","b4299a0889a3c6cf2e149eb218a83258"],["/tags/编程/index.html","3a9d8fda7af4e20c8a6976a84e5dc688"],["/tags/编辑/index.html","7aef0c8ea933d1b1fe2061d9639f20e9"],["/tags/网盘/index.html","5584445c986252f4088971a46e0aa979"],["/tags/网站/index.html","9691e096feec5b385c43ce5d124ee49f"],["/tags/网络/index.html","ef5e2cbf05a6f27b572010ee4ddb8f35"],["/tags/美化/index.html","c8b302e5e69817338b28b7d4a5ea7d8a"],["/tags/美图/index.html","d14a9e30f138ddf2c8ec7dca725b9ea4"],["/tags/脚本/index.html","b943379bd797ebe0ad28146a9f51e864"],["/tags/致歉/index.html","7aa346d0ed327f4ec9b8f3998d0e1352"],["/tags/萌哒哒/index.html","8dfb4084ea555c99fd97d9da7b525406"],["/tags/萌娘百科/index.html","035114930aa08216e887314070f0abed"],["/tags/萌萌哒/index.html","d56a43691cbe585c017a112ae4deaf40"],["/tags/解析/index.html","f2b8d0f60a9d04d8a86eff337f62b0d6"],["/tags/评论/index.html","6f27955da60ac6974b4f6189d6b3638e"],["/tags/评论系统/index.html","c844f9712567ece4f4f73ce2d420a543"],["/tags/语法/index.html","7847f8f90041fb5654a7a3df567b6a3e"],["/tags/谷雨解字/index.html","f79c2a064b0eb847465359161008d01b"],["/tags/赚钱/index.html","e28b9c0d55e4558adc33327ee51f969f"],["/tags/踩坑/index.html","340aab076677a015f5ff8e99ced389fe"],["/tags/软件/index.html","931ac5f4455106d1d264d1ec89f3f471"],["/tags/辱华/index.html","9a1bca8abd96a9201059c6de8f418907"],["/tags/迁址/index.html","dc7e18071d2206f61595c63fdfc10d2f"],["/tags/速度/index.html","8ddc0531782ab5033fc2aae8b0dfdf70"],["/tags/错误/index.html","220439b1390223c5b7dd40c5bfdac6df"],["/tags/阉割/index.html","bae4560b60ddd4bd39d5e7b10b1889df"],["/tags/阴文/index.html","1a15ec752626e18e9d501796fd2be7cf"],["/tags/音乐/index.html","b0ecb6eccc561e6a3a26dad90615187a"],["/tags/题目/index.html","8ba04358567623e989ba8ffaecbe47bc"],["/tags/黑科技/index.html","0fb2abf14aaea0a78c8cf97fca4948aa"],["/捐款吧/index.html","fb31a3b5d8ebf2574e9f327dae6d610f"],["/随口胡说/index.html","9f558ffd31fb33c708d2a4338376dadc"]];
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
