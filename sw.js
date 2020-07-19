/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/1949/10/01/留言板/index.html","2eb6416bc692c3c03379c0faa02644d2"],["/2019/07/17/巧妙去除百度首页广告/index.html","d606e503d29303f2244c0b47771d1c62"],["/2019/07/19/国内加快NPM下载速度/index.html","244a729e5d4b9dacd2b8b3d280c03a4d"],["/2019/07/21/MarkDown语法详解（初级版）/index.html","06c33b211294ea9d641b9a3f6fc14e5d"],["/2019/07/22/MarkDown语法详解（中级版）/index.html","c16e82f399c8899079d9f900c730ae77"],["/2019/07/23/JS特效：鼠标单击出现爱心/index.html","b1d6bb2d68f846973ad7e8b3bc5a3af4"],["/2019/07/24/MarkDown语法详解（高级版）/index.html","dcfca38c3cef7ae9b1b7facf4c2a320d"],["/2019/07/25/JS特效：一个打字绚烂烟花的特效/index.html","13e7a5dd0d4320329708d7c279cfccbf"],["/2019/07/27/Github无法注册：Unable-to-verify-your-captcha-response/index.html","3fdbebf92870c8b67b6870b5baf8c611"],["/2019/07/28/【公告】关于宕机/index.html","9e61a56b53d8222514b927944d8725df"],["/2019/07/29/如何在中国以免【爬城】的体位下使用Google的reCAPTCHA/index.html","e8f4fb020b0f94c4b2e1bb2eb0425c18"],["/2019/08/01/Adobe2019年Windows全家桶/index.html","c92947034aa84968b274d83ffebf776d"],["/2019/08/04/移除000webhost右下角Powered by 000webhost字样/index.html","b11037d519bc705c9046b514b706d1d8"],["/2019/08/05/Momentum：一款美化你Chrome新标签页的插件/index.html","1452306111ae43914005e7e1137c82f8"],["/2019/08/08/每日bing美图获取/index.html","4f812558c2ca9e9494a6754403b271a6"],["/2019/08/13/User-Agent野史/index.html","d4339d68ab33482cf7dc80cfba1ca790"],["/2019/08/14/【公告】博客多域名/index.html","a34899e5ae45c7e9b5a29477d80e5134"],["/2019/08/15/Live2D：为你的hexo博客添加萌萌哒看板娘/index.html","f7351eeb3b7e5155785dc07a7de18fee"],["/2019/08/15/【致歉】全能音乐搜索Bug修复/index.html","ec9522d45399258e514db77abe90fd1c"],["/2019/08/17/Valine：一款极简评论系统的安装到升级/index.html","308eddb8de630fe0ec041edf27a2d827"],["/2019/09/01/CloudFlare：叮咚！您的15年免费泛域名SSL证书到了！/index.html","b0817cecc3cf52cbfca055ef0e5bfd3d"],["/2019/09/14/来，破解版的Google访问助手/index.html","1a2e9f4699a5d899ee6b92eaced086ef"],["/2020/01/20/回归啦！这是见面礼/index.html","8570761e728abdb9c2f4c67ac6e6f21f"],["/2020/01/24/我们一起解题目吧/index.html","197f394d9577e138407f7c802459f427"],["/2020/02/25/一次成功的白嫖经历-萌娘百科/index.html","340ac0551197079b94eba107a36ae0a2"],["/2020/02/26/Gitalk详细踩坑记录/index.html","61d46a718fe8da51a58ac4ec74f213e2"],["/2020/03/05/听说你喜欢盗头像_私人独一无二彩色头像养成详解/index.html","b361586ef7b4192c68c76528ab020e65"],["/2020/03/08/LazyLoad_懒加载,将无形等待时间化为有形/index.html","c1e7eba4ce8f51ee53fef7469b64fca4"],["/2020/03/11/Hexo-Admin-体验如Wordpress般GUI编辑/index.html","67bb5c157b35ab95274de1bdaf0a2dd4"],["/2020/03/11/如何不出CloudFlare随便搞一搞将托管在其上的网站速度提升20倍/index.html","4916e141ff695d7b0a08aee03a10d62c"],["/2020/03/12/白菜价域名的问题/index.html","cad91ed993da665b7abad55d0a8a8ab0"],["/2020/03/13/工具箱和私有云恢复！/index.html","9716ebefc847b545238d22325c6d8ec9"],["/2020/03/16/Bing美图故事PHP正式上线/index.html","8d33ae7c6f254120d51adfcabd2b1213"],["/2020/03/16/浅谈什么是好软件（1）/index.html","3c8c3bdc2553d8ea201b2b9014cbb94f"],["/2020/03/17/一次愉快的更换域名经历/index.html","5f7d5c96d678d5bef058f5b2158f4265"],["/2020/03/18/免·爬·城·国内管理分享GoogleDrive/index.html","baa4e9aab5a532e964fa5e57a17b5290"],["/2020/03/19/如何-CloudFlare-Warp/index.html","0d628de3616424e45990e646e70309e0"],["/2020/03/20/一次糟糕的换主题过程/index.html","7546dd4ea4d5ff8d8e3699e2443d7973"],["/2020/03/21/Heroku~Websocket~Workers浅谈/index.html","05e272fa56dce99f3b07391e16257198"],["/2020/03/22/GithubのUnlimited-Private-Repo有感/index.html","f464b9b1df1b6a10fbff2b8f5aa4f3c7"],["/2020/03/22/回形针-真的辱华了吗/index.html","8e2275876d2a17cfa8eee82003b842d9"],["/2020/03/24/GooseDesktop桌面鸭-网课好宠物/index.html","f62b5491bce54c8d3bf58a1a4ac2dfbc"],["/2020/03/25/天体运动/index.html","d472d34e0d73c7e9f160d3cc1308ec9d"],["/2020/03/26/一次“修”冰箱的经历/index.html","e273b11e0b70b43d0c43077d654da32d"],["/2020/03/28/讲讲2020-3-26Github遭劫持事件/index.html","4dd56584ad8f17ef5c2983f0746e2c3c"],["/2020/03/29/PHPnow/index.html","861ae8fd46b168386610793be8c2ba72"],["/2020/04/02/AVorBV/index.html","1539a5634dff9fb2433316e2ac323f68"],["/2020/04/04/2020QM/index.html","5bddbff381278b06a308f92cf3106cb4"],["/2020/04/05/use-ipv6-in-unsv6-en/index.html","b8868481cdc11a40bb47714f62b2aa5c"],["/2020/04/07/IPFS-CloudFlare-ServerLessWebPage/index.html","b89aa815c02e3b5d19ae6b26f8ebc3b4"],["/2020/04/17/Pandownload-愿你归来仍是英雄/index.html","c5943ee67096cb4436e518242d83469d"],["/2020/05/30/What-I-Do-2020-04-05/index.html","97b3b77b4ca76820615b3d4a9d8428ca"],["/2020/06/07/Blog-sChanges/index.html","3559a91cf42e8247e57e8c16b8b85c66"],["/2020/06/28/GetUserInfo-ByCFAPI/index.html","307506ca7da9d5b46263ee8a17e73cb0"],["/2020/06/29/Up-Blog-By-Travis-ci/index.html","06f82d8413e713528145d208b8bf32b7"],["/2020/07/06/LazyLoad-GoogleAdsense/index.html","754b8dd87128a271dbaf71f29edd18a8"],["/2020/07/09/free-10GB-oss-poweredby-backblaze/index.html","22771949fc4ac5201db493e53f15e21c"],["/404.gif","39fad3cf3ef0eddca65b46c55c3d5c18"],["/404.html","8bb0aea88b0013ff792e52fda8a6f1c2"],["/9999/12/31/博客暂更预警/index.html","66a52c54de33b3b149da7f88f860c13e"],["/about/ads.html","ae5c4072bf07f499b3bac0ccc1d24504"],["/about/index.html","353eb98c178110a1a81b4fed9f988abf"],["/archives/2019/07/index.html","71331bd1d718956b8070de3d9be7fdf2"],["/archives/2019/08/index.html","443714663b792279c5a3213ff3fd0bce"],["/archives/2019/09/index.html","a246edb51693c68096071eedb66fa1a6"],["/archives/2019/index.html","af5b9e8df28853e94008173720b7277a"],["/archives/2019/page/2/index.html","99d683a19dc00ca4bbad9b9fb9575eaf"],["/archives/2019/page/3/index.html","33c439c8be7986d5992c78474677dcd1"],["/archives/2020/01/index.html","a6103a0ac7e635c92d19f50403aa3a8b"],["/archives/2020/02/index.html","3c75a19379b280251d0e062f3bbd29c1"],["/archives/2020/03/index.html","4c40e21d520cbe3d4bb4dfcd0c023708"],["/archives/2020/03/page/2/index.html","ef56310be0777643fc95187bb2a0245b"],["/archives/2020/04/index.html","b05820b819a26834919eb5f9193cdfa1"],["/archives/2020/05/index.html","49bcda7a083041027bb45f0c91c1eb37"],["/archives/2020/06/index.html","0e9d949670c6f02115d805b7bb97f162"],["/archives/2020/07/index.html","6dfc49d916c45ef92ef4bceae448658d"],["/archives/2020/index.html","ae8a3a5d2a89b981d550250f5be5c2dc"],["/archives/2020/page/2/index.html","178196544d29e8949a4dbba8558a2de1"],["/archives/2020/page/3/index.html","4d9174241616923f47794eddae887e73"],["/archives/2020/page/4/index.html","c9226d8390a76027114330c9ea6fed38"],["/archives/index.html","8f128c8bbfc7f02d6dca77f9f38a76e8"],["/archives/page/2/index.html","c0a8e5f04161864823cdbc83c45868bc"],["/archives/page/3/index.html","3855d8c2d63e08f213bcd87febb35838"],["/archives/page/4/index.html","2161cc0d3300087564a5e1e21069ddbe"],["/archives/page/5/index.html","3a1b5c30216a79d9b0f48203ec837b61"],["/archives/page/6/index.html","580df81274576ee4d1d06e4efd84b217"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/index.html","717282d8ce0788160d8ca714c0420f72"],["/categories/丆插件/index.html","aac040fb9c04dacadbfc6163d81c84cc"],["/categories/又双叒叕是水文/index.html","c7880c4da45e0e35aee51db4c2111dd7"],["/categories/好方法/index.html","0757d4bf94aab93d325b19e29cf1772a"],["/categories/好方法/page/2/index.html","32610751b3337edc36713dee4a035998"],["/categories/屌代码/index.html","cac3bb5222764be86938411b86902624"],["/categories/干问题/index.html","1b6fa82e557da87872e96b82cbc91afe"],["/categories/撸羊毛/index.html","11e23469b9130796e321f0b4c09ef5a1"],["/categories/有故事/index.html","1237c92875d6dcfe32ff5f3f0d47fed0"],["/categories/爱分享/index.html","21da35a574b17fee32b798c5c6d1c07f"],["/categories/爱学习/index.html","54165fb1d20dd090918f46fdd573beef"],["/categories/爱学习/物理/index.html","da0cd51735b47621b8f0957571f0831c"],["/categories/爱折腾/index.html","de75ef0fea219b8c4f87fdf79862e14d"],["/categories/瞎扯淡/index.html","c7b72a3b4ee5e2f6fd35de4656a14b6d"],["/categories/繡软件/index.html","88857236cb25e857c2b0ca1095ffb7c6"],["/categories/要公告/index.html","e622e80fa46468d4198e1e55e318460a"],["/categories/随心记/index.html","66adb9f33da737fce6ddf117fe6ef6d6"],["/css/gitalk.css","4a1d0acedf4a998b8611f07af80dd0b6"],["/css/main.css","bc4623f731d4bb375d162f008798fe52"],["/css/matery.css","9ddef9d4cea22692fedc6cc9a456a819"],["/img/apple-touch-icon.png","d495e13eaf516101257afca1e3876b74"],["/img/avatar.png","4319b202a49c7056aae32193fb4aa8f3"],["/img/favicon.png","9c9f8d5d14ba7e45bd2d42a62b77df9d"],["/img/loading.gif","2079c25481d062cc0b002d53c6f7197f"],["/index.html","c1d99878d3f21fb391bb68ea7a031543"],["/js/copyright.js","2f44332d3199de8d97ece4ef4e5df32c"],["/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["/js/fire.js","53daa1039bfdfec4415ce83ca9e7e31b"],["/js/gitalk.min.js","251a1f977bb7733e584390a01ceceb97"],["/js/index.js","140e3f6be2a04ac4ba558a6c65636f4a"],["/js/lazyload.js","1fa470189608a5e4110e56169cecb0d0"],["/js/local-search.js","e9093657a10085d74435b313a4b8c557"],["/js/main.js","fc0c3bcbdfa6c63971922742a575c803"],["/js/md5.min.js","91d98ebf28303805138cc0e2566037b3"],["/lib/prettify/github-v2.min.css","e0cedc9ba2676994af3b7fb79899b7db"],["/lib/prettify/tomorrow-night-eighties.min.css","0468adeca6ae04936c746dfeb2f39936"],["/lib/prettify/tomorrow-night.min.css","9675a1d3373b8a7c25d3f5ae04ac5165"],["/lib/prettify/tomorrow.min.css","f8eb61184083528caa809ae4a0d6bbd4"],["/links/index.html","b7fc3c356ce7a5af619298423f9e5e08"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ac5b6bcc4ea299b79caf89824ad97b24"],["/page/3/index.html","e5e751c15417ac8c0a45f401add50006"],["/page/4/index.html","3f652089b30278f83eb736c7d119dff4"],["/page/5/index.html","ef3921e9a9ae18c5353dc1cf42123785"],["/page/6/index.html","8bbc073277af22d6f9e845f66c9e54c7"],["/pic/BLOGER.jpg","aaf477acef83839bae8e037a43b70181"],["/pic/c.jpg","04cac35dd97c6201b11c389787f319a5"],["/pic/posted/pasted-0.png","695e14b93a4409923ee5d97c097b9227"],["/search/index.html","a68b6f74c93bb8281197080e38161291"],["/tags/000webhost/index.html","d628731a7a857362fbde68cc45a1448f"],["/tags/API/index.html","092937aac03113a08b44349292ea22ef"],["/tags/AV/index.html","cf215d933729c7e53c10372404a6955c"],["/tags/Adobe/index.html","9225558222d941a0f727907b1d61dd9b"],["/tags/Adsense/index.html","d069fd9f94a7fe25f9492189e1544158"],["/tags/BV/index.html","f38f07b58bc630184d2e6e5e6e95ee3d"],["/tags/Bilibili/index.html","abd05da7e1a3b21dcbd9ac29167dff47"],["/tags/Bing/index.html","971d8599a5d7b73950cb4efcb41df0a6"],["/tags/C/index.html","62f9a82b96d8173637190cdf9bee2004"],["/tags/CDN/index.html","ca8fe48358792fb834c80018922a3dc1"],["/tags/COS/index.html","630e2dd253f9908d9e470d94834b134f"],["/tags/Chrome/index.html","832a0f89bafcd47a9eb2536a532405b4"],["/tags/CloudFlare/index.html","44a24c3d80d71f2f964f6f973d70e3d3"],["/tags/DNS/index.html","8a39649a46a9763b1e73f7437ed59a86"],["/tags/Diaspora/index.html","00ab54da6cdb9c1ca18ce8a2a316e3f9"],["/tags/Gitalk/index.html","609d198379891fa9cda17d807485f883"],["/tags/Github/index.html","0f16939fa3b772bade07bb2ed385518e"],["/tags/Google/index.html","a3198a51b1de58ff726c6df07b9ce961"],["/tags/GoogleDrive/index.html","68b8b91ddc8bdf7083556828865b329d"],["/tags/GooseDesktop/index.html","8810f09b9419875e50693d0e6c266624"],["/tags/Heroku/index.html","776dd5dd557acdfde4a1f2eeb35cc469"],["/tags/Hexo/index.html","71d70281c5c7cea8b3191a2074df7150"],["/tags/IP/index.html","3fc6bf3e7ae282b1920ae5865ed51ece"],["/tags/IPFS/index.html","2171dd5fde30695ac80808510d308f01"],["/tags/JavaScript/index.html","f928e085ddc973cbea2dcdcbb5a31ea8"],["/tags/LazyLoad/index.html","70158bfcbe06cb4fb036969e613d79fc"],["/tags/Live2D/index.html","978b457334171a1e020d5c73adfb851c"],["/tags/MarkDown/index.html","f3aa08cfe7d7925a873bd36636bca64c"],["/tags/NPM/index.html","c683bb67e8ad05cff96bb7b4a306696c"],["/tags/NexT/index.html","be7bf63835ff0229a6124bd18c8279bd"],["/tags/Node-js/index.html","e19cda4118a093e9c019c7c8d03ee4b9"],["/tags/PHP/index.html","5b314430724654c92a6b684643323239"],["/tags/PanDownload/index.html","98410b7cd84823133068cf0df902875d"],["/tags/Repository/index.html","49783ef25a312a359af615d79c014035"],["/tags/SS/index.html","d99c3ae535bb41e62e7eb3e91a7f8c49"],["/tags/SSL/index.html","e4c87943a15a22a59a5b9e2cb16a4c93"],["/tags/TLS/index.html","06df1fd3744799db468386a56146badf"],["/tags/Tampermonkey/index.html","74a4970b8042e4e339c4bd4d5989a576"],["/tags/Travis-CI/index.html","842853c2a5fc7b720b99e3e70a192207"],["/tags/User-Agent/index.html","9872e778dc71b264926b96019b8fec37"],["/tags/Valine/index.html","5e07cff369e493bbfc156ad89b8288bd"],["/tags/Warp/index.html","cd0881795fa0bdbf3300113afd3c22b3"],["/tags/Windows/index.html","7cbe23eb6c5843e5fe4cd4b38ef0d5c4"],["/tags/Workers/index.html","4999bd394d9b3c480f980b30d851f35f"],["/tags/css/index.html","00c6580e5e9da5dad10c8132e5030c82"],["/tags/index.html","ca4a996fd4e402979dded8b9178fcb7c"],["/tags/ipv6/index.html","39a77f07c0b574f36aeb355ea3dc664a"],["/tags/下载/index.html","08f60201d43bc7932035b3e882c32dd8"],["/tags/主题/index.html","0a13187807c2a9c3b253d5aded22d68c"],["/tags/京东/index.html","3e03fd3c017ebe0dc4ae6e7a9d0f8794"],["/tags/人机验证/index.html","1bc39b5e698102294f42029d9ff3a877"],["/tags/代理/index.html","5f3c01941fca104cdaf9361da7ae19f3"],["/tags/优良/index.html","925b8913ff848c72c8950027cf6392e0"],["/tags/便宜/index.html","1aed32d297bfbf9413518a06da7cba94"],["/tags/修理/index.html","1d0eb60f856951fe581a2b6917ea6ebb"],["/tags/免流/index.html","9225d097f67abd08178ec4d3ec44a4ba"],["/tags/免费/index.html","d7bf679d61907d7e55d0fb8e8106523a"],["/tags/全家桶/index.html","bb5532a3e89b6c5f73dc56d7e614385b"],["/tags/公告/index.html","2d397ec6c51b8abb5a5af2bae6256f2a"],["/tags/关键字/index.html","caa8d4bd9689649a909355865defcbc7"],["/tags/冰箱/index.html","6f221419932fd10f056a15d22c0f2e0e"],["/tags/加载/index.html","03222d12cec9a189949944de5e5d975f"],["/tags/动手实践/index.html","fd6fb288cb58200911bb13d9e2a576a3"],["/tags/劫持/index.html","811b98d4b76b407fa44df4cc097738f2"],["/tags/历史/index.html","0f650afaefcf8087a69c45550e464e96"],["/tags/压缩软件/index.html","eeb74d1dd9ae5544a1adcf382a3e36c7"],["/tags/台湾/index.html","78ad4814fbd00e5f22cf770c7c2ee270"],["/tags/回形针/index.html","5da90e8bee735436a83a4d48c740a852"],["/tags/国家/index.html","e54036b6628a27c495f74c59166d32bb"],["/tags/图床/index.html","554c9711279ced119eaedea8adca1381"],["/tags/图片/index.html","d54482afad7bd509b69e9b590c0608d4"],["/tags/在线更新/index.html","d2e060d70e771385bc5fff1cd79e25d7"],["/tags/域名/index.html","d9792028262f4e8ffebbe8131a068a4e"],["/tags/填色/index.html","82245645575ba139ac3143a3d289488b"],["/tags/壁纸/index.html","51276836b1d63a25ddf993b8040e799e"],["/tags/天体运动/index.html","f3a6bc51bfc029a834d07b6e278232a5"],["/tags/头像/index.html","a947b19202edc71ba9ee824380448128"],["/tags/奇淫巧技/index.html","2868eaa1c6face4eeabe4ea9f9560790"],["/tags/奇淫巧计/index.html","cb21962624dbd401e366a31fe497280d"],["/tags/字体/index.html","abc7de6b37fcfc9534378653ef7fb2ee"],["/tags/学习/index.html","25db57df2ef21c60be4f32739f5b39fc"],["/tags/安全/index.html","ddbfe4ad972f615608d0c83428bc3e06"],["/tags/宕机/index.html","d32a88a81021d0deb4dfc81c57a5e84d"],["/tags/实践/index.html","678caeca761efcb9eb9d2c267d515fc6"],["/tags/宠物/index.html","4c632a2a2d52cad529d173686f011f25"],["/tags/寒蝉/index.html","e7d689dece017d11166d90e849a7acd1"],["/tags/对象存储/index.html","1cd214bd31f8ce916c56fef8ff0779d9"],["/tags/工具箱/index.html","cb7258e81f6517d94aec06d3c5733461"],["/tags/干货/index.html","bc16ecb69ab21dc1c6e32c472bcdfb4f"],["/tags/年度/index.html","99580d5d76707a57847cde897b2b86ee"],["/tags/广告/index.html","02b181e4c39e251d3a479d7086185a8f"],["/tags/总结/index.html","a298785dc17124d769bbd009c7933211"],["/tags/恢复/index.html","eaf4d5c3ec6eed9744fd6c0874c75620"],["/tags/悼念/index.html","41a9c2d4f4ebd9bc6a59567b40c8211a"],["/tags/悼文/index.html","8e9ea12e02dc8dde0cf38425f40370a4"],["/tags/手动填坑/index.html","5d29e15cbe7f2ecf67fa98a46b2aba5b"],["/tags/插件/index.html","a1f6a35297fdb1aecc395a8a93ef2be6"],["/tags/撸羊毛/index.html","2c9f8f3579713294502a84d1d262cb73"],["/tags/无限制/index.html","4982a71b34931b11ccbd523397bceac3"],["/tags/日常/index.html","ee84561661fdbfa16682c68f48355b86"],["/tags/更换/index.html","e661d5f25277fdf48016a587085eefae"],["/tags/标签页/index.html","3b3e4db358937c57a7150536b7bea591"],["/tags/桌面/index.html","43a89165fd779d009d612e0cffcd482a"],["/tags/流氓/index.html","b4570cb4b7b8d783babb4121f1f632c0"],["/tags/浏览器/index.html","d4872315958db45ec1077cb1b360a4a6"],["/tags/版权/index.html","a54ae6995e5b6b6c4887c05e1ef96ba1"],["/tags/物理/index.html","570f78a893bd406ce7fbe779748e2b4e"],["/tags/特效/index.html","bf180287b56382a0cbaac876c9965c5c"],["/tags/用户信息/index.html","fa7676c0b24c27b1b825700952433910"],["/tags/电器/index.html","1d49be873852c29b49260fe95d6059b2"],["/tags/疫情/index.html","9372ccc35f45afa3a7c4c264c56d026e"],["/tags/白嫖/index.html","b021b0adbcd4564e2916a6e16692b5dd"],["/tags/百度/index.html","31b8623aa8169e080d2607b35e6bcd91"],["/tags/看板娘/index.html","815b926f18c548ab3c288fd7365de0fb"],["/tags/破解/index.html","804be4b9c54215fa7cc8b137170ab3e3"],["/tags/神器/index.html","c5769f895b1910928b1a406d85844961"],["/tags/私人/index.html","b6e90a71b1dbc66f73637705e066bc02"],["/tags/私有云/index.html","a8d3b51b22315f9502c9a3f24c52fb30"],["/tags/科学上网/index.html","669bd52781eb7eb24cdf85e5d5b08c5f"],["/tags/站长必备/index.html","5cf89711442b1052693fc8832927e5fa"],["/tags/等待/index.html","dfda0e4a144ed7e2976ec28f24b9c3b1"],["/tags/精简/index.html","bc3aadbbc24e46961a13e692fa46af72"],["/tags/素描/index.html","4363f3e28eb47b620a47ecabd8421fa8"],["/tags/编程/index.html","6e3c0f026bb75bccbe3e1a3f2a9109f2"],["/tags/编辑/index.html","8fc3239a96b42acdf7c0d801aae0c233"],["/tags/网盘/index.html","39d67123c4c39a5c5ffc352dcd271a8f"],["/tags/网站/index.html","20272cdd952914551b6917bf8f4f36fe"],["/tags/网络/index.html","2236d5c003ef4a1f09bdbe91dc238986"],["/tags/美化/index.html","ad142bc081ee2bbf9e2fdd0248428d6c"],["/tags/美图/index.html","e96d2390f9f34b224b2f7a7ee0cc4d49"],["/tags/脚本/index.html","d609ec7dcc076e58253cf300c8728097"],["/tags/致歉/index.html","390a9e52754d351b11207e8ab1109593"],["/tags/萌哒哒/index.html","ae1df039618cb824c212153e6d92af81"],["/tags/萌娘百科/index.html","a064c69865c83fff66047b0fcaf97ea0"],["/tags/萌萌哒/index.html","61904b0ea2bb68650f09f4a60e2862ed"],["/tags/解析/index.html","02ccccd79e7612e83b17e751f2a06d3d"],["/tags/评论/index.html","a69b90e173bf399bd2b96d2c016df39d"],["/tags/评论系统/index.html","4401425180692a98a58f3f03ec25055c"],["/tags/语法/index.html","33f14ee6e312925b3094a6fb7a2d5fa9"],["/tags/谷雨解字/index.html","1da4b4fab1332f57b4743dd2d0cca670"],["/tags/赚钱/index.html","3b4063e0a84a9d6a26752d6eb0e1d769"],["/tags/踩坑/index.html","0fbfc5cf301cf4f4ceae82ae4879b9fa"],["/tags/软件/index.html","b25ba64272d22bb8908fb7cfe0c319a2"],["/tags/辱华/index.html","d43758d87e5192a5b161de9ff54a378e"],["/tags/迁址/index.html","01b9984f9a7db102c64ea8e6ba395198"],["/tags/速度/index.html","8dc7b2f199c3fcb1c59b37c31be1b761"],["/tags/错误/index.html","9e2915269d9c5e0997c8abde6c5a906d"],["/tags/阉割/index.html","d81fc9fd25a23ec208e760317df9fa08"],["/tags/阴文/index.html","c964574fd6d83759f50df695cd69d668"],["/tags/音乐/index.html","7b16d7b08a0de5633d6c971a0d2ce173"],["/tags/题目/index.html","eb5ad9ac6fc862e8072448f624d9a7dd"],["/tags/黑科技/index.html","4f2c9f1f93e10ddfaa66a3f9e25fcf6b"],["/捐款吧/index.html","b1e591a39b8b56fb04ea35f478a29a97"],["/随口胡说/index.html","ed4f0101c22ad24c9c39fd8678edb2c4"]];
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
