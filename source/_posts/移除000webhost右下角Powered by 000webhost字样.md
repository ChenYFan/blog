---
title: 移除000webhost右下角Powered by 000webhost字样
date: 2019-08-04 15:27:07
tags:
- 奇淫巧技
- 000webhost
- 广告
categories: 好方法
copyright: true
---
# 前言：
这几天都忙着部署私有云和工具页，忘记更新了，今天发一片干货。
由于资金周转困难（没钱），个人的私有云和在线工具全部部署在000webhost上，因为这是一个少有的免费php可视化部署云。
而且最最最好的是可以用CNAME绑定自定义域名,(heroku要信用卡验证)
当然了,由于`不可抗因素`,全程`爬城`,
结果在部署的时候发生了一件令我恶心的事。

# 右下角广告：

![广告](https://img.cyfan.top/pic/000AD.jpg "↑这是什么??????")

哇,这么一大块东西看的我恶心.
打广告也不能打的那么显眼吧?\(\(\(φ\(◎ロ◎;\)φ\)\)\)
# 试图解决:

我登入三蛋空间后台,看看有没有可以去除广告选项:

![广告不可抗](https://img.cyfan.top/pic/000ADE.jpg "↑F**K,居然不给关")

可能大家不懂英语,google翻译一下:

![广告不可抗](https://img.cyfan.top/pic/000ADC.jpg "↑咳咳,怎么办?")

呵呵,居然威胁我升级高级版,我要是有钱还用得着说吗?

# 解决方案:
后来查看了一下源代码,在`</html>`前面狠狠的插上了这么一段代码:

```HTML
<div style="text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;"><a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&utm_campaign=000_logo&utm_medium=website&utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png" alt="www.000webhost.com"></a></div><script>function getCookie(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var i=n[o];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}getCookie("hostinger")&&(document.cookie="hostinger=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",location.reload());var notification=document.getElementsByClassName("notice notice-success is-dismissible"),hostingerLogo=document.getElementsByClassName("hlogo"),mainContent=document.getElementsByClassName("notice_content")[0],newList=["Powerful and Easy-To-Use Control Panel.","1-Click Auto Installer and 24/7 Live Support.","Free Domain, Email and SSL Bundle.","5x faster WordPress performance","Weekly Backups and Fast Response Time."];if(0<notification.length&&null!=mainContent){var googleFont=document.createElement("link");googleFontHref=document.createAttribute("href"),googleFontRel=document.createAttribute("rel"),googleFontHref.value="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600",googleFontRel.value="stylesheet",googleFont.setAttributeNode(googleFontHref),googleFont.setAttributeNode(googleFontRel);var css="@media only screen and (max-width: 768px) {.web-hosting-90-off-image-wrapper {position: absolute;} .notice_content {justify-content: center;} .web-hosting-90-off-image {opacity: 0.3;}} @media only screen and (min-width: 769px) {.notice_content {justify-content: space-between;} .web-hosting-90-off-image-wrapper {padding: 0 5%}} .content-wrapper {z-index: 5} .notice_content {display: flex; align-items: center;} * {-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;} .upgrade_button_red_sale{border: 0; border-radius: 3px; background-color: #ff123a !important; padding: 15px 55px !important; margin-left: 30px; font-family: 'Open Sans', sans-serif; font-size: 16px; font-weight: 600; color: #ffffff;} .upgrade_button_red_sale:hover{color: #ffffff !important; background: #d10303 !important;}",style=document.createElement("style"),sheet=window.document.styleSheets[0];style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css)),document.getElementsByTagName("head")[0].appendChild(style),document.getElementsByTagName("head")[0].appendChild(googleFont);var button=document.getElementsByClassName("upgrade_button_red")[0],link=button.parentElement;link.setAttribute("href","https://www.hostinger.com/special/000webhost?utm_source=000webhost&utm_medium=panel&utm_campaign=000-wp"),link.innerHTML='<button class="upgrade_button_red_sale">TRANSFER NOW</button>',(notification=notification[0]).setAttribute("style","padding-bottom: 10px; padding-top: 5px; background-image: url(https://cdn.000webhost.com/000webhost/promotions/springsale/mountains-neon-background.jpg); background-color: #000000; background-size: cover; background-repeat: no-repeat; color: #ffffff; border-color: #ff123a; border-width: 8px;"),notification.className="notice notice-error is-dismissible",(hostingerLogo=hostingerLogo[0]).setAttribute("src","https://cdn.000webhost.com/000webhost/promotions/springsale/logo-hostinger-white.svg"),hostingerLogo.setAttribute("style","float: none !important; height: auto; max-width: 100%; margin: 40px 20px 10px 30px;");var h1Tag=notification.getElementsByTagName("H1")[0];h1Tag.remove();var paragraph=notification.getElementsByTagName("p")[0];paragraph.innerHTML="Fast & Secure Web Hosting. <br>Limited time offer: get an SSL certificate for FREE",paragraph.setAttribute("style",'max-width: 600px; margin-left: 30px; font-family: "Open Sans", sans-serif; font-size: 22px; font-weight: 600;');var list=notification.getElementsByTagName("UL")[0];list.setAttribute("style","max-width: 675px;");for(var listElements=list.getElementsByTagName("LI"),i=0;i<newList.length;i++)listElements[i].setAttribute("style","color:#ffffff; list-style-type: disc; margin-left: 30px; font-family: 'Open Sans', sans-serif; font-size: 14px; font-weight: 300; line-height: 1.5;"),listElements[i].innerHTML=newList[i];listElements[listElements.length-1].remove();var org_html=mainContent.innerHTML,new_html='<div class="content-wrapper">'+mainContent.innerHTML+'</div><div class="web-hosting-90-off-image-wrapper"><img class="web-hosting-90-off-image" src="https://cdn.000webhost.com/000webhost/promotions/springsale/web-hosting-90-off.png"></div>';mainContent.innerHTML=new_html;var saleImage=mainContent.getElementsByClassName("web-hosting-90-off-image")[0];!function(){var t=document.querySelectorAll("body.wp-admin")[0];function e(){var e=document.createElement("iframe");e.id="hgr-promo-widget",e.setAttribute("src","https://www.hostinger.com/widgets/bottom-banner-sale/000_wp_admin"),e.setAttribute("allowfullscreen",!0),e.setAttribute("frameborder",0),e.style.cssText="z-index: 2147483000 !important;position: fixed !important;bottom: 0; width: 100%;!important; left: 0!important;",e.style.opacity=0,e.onload=function(){iFrameResize({},"#hgr-promo-widget"),e.style.opacity=1},t.insertAdjacentElement("afterend",e)}if(window.iFrameResize)e();else{var n=document.createElement("script");n.type="text/javascript",t.insertAdjacentElement("afterend",n),n.onload=e,n.src="https://unpkg.com/iframe-resizer@3.6.3/js/iframeResizer.min.js"}}()}
```

这个真的恨,硬生生插在`</html>`标签前.
注意一下,这说明广告代码被插了进去,而不是添加在后面.
后来细思熟虑了一下,干脆在不要最后的`</html>`了,直接把它们全部变成注释得了.
在`</html>`前直接填上`<!--`,把广告代码变成了注释.
(￢︿̫̿￢☆),干脆把你变成注释算了!
修复结果: <http://pan.cyfan.top>
搞定!
- - -
