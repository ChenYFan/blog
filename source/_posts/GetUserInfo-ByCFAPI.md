---
title: 通过CloudFlareAPI获取用户侧信息
author: CYF
tags:
  - CloudFlare
  - API
  - IP
  - 用户信息
categories:
  - 屌代码
index_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200920193058.png?q=45'
banner_img: 'https://rmt.dogedoge.com/fetch/hi-c-oss/storage/20200920193058.png?q=45'
lushkey: GetUserInfo-ByCFAPI.md
abbrlink: a7d0d7f8
date: 2020-06-28 08:30:00
---
噫，中考结束了，心中一块大石头总算碎了。虽然说考上提前批中考考不考无所谓，但是回去一次模拟考直接把我考傻了，太烂了![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E8%82%BF%E5%8C%85.png),以前初一不学习的时候都没有这么烂。啊么学习两星期，中考一考，今年理科超级简单，欸，这样理科分数拉不开了，啧啧啧，理科生的末日。

因为人大多数时间在学校，不太方便用自带hexopush到Github，一是博客文件同步不方便，二是如果有个小错误就很抓狂，所以呢，以前的打算是部署到vps，通过hexo+nginx实现访问，不过可能是人比较傻，一直没搞好，而且这种免费小鸡说炸就炸，不保险，还是跟着[hexo官方文档](https://hexo.io/zh-cn/docs/github-pages) 用Travis-ci+Github实现在线自动部署,以后更新也方便点![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/%E5%9D%90%E7%AD%89.png)

好了好了，不说了，今天简单讲一下如何用CloudFlare自带的API获取用户信息。

# /cdn-cgi/trace

刚开始建立博客的时候，也是想过显示用户ip地址的，但网上的教程大多都是用搜狐新浪的js，而且很早就过期了。所以也就搁着迟迟没有解决。

后来偶然间知道CloudFlare有个比较神奇的技术，在部署在CloudFlare上的网站，域名后面加上`/cdn-cgi/trace`就可以获得用户侧信息，例如`https://blog.cyfan.top/cdn-cgi/trace`：

```
fl=23f2**
h=blog.cyfan.top
ip=39.182.***.***
ts=15933078**.***
visit_scheme=https
uag=Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36
colo=HKG
http=http/2
loc=CN
tls=TLSv1.3
sni=plaintext
warp=off
```

[对于部分隐私替换掉，请见谅]

差不多都全了，`ip`、`uag`、`colo`、`loc`、`tls`这些数据都是我们所需要的，那么，怎么把这些数据迁移到网页上呢？

# 答案是：JavaScript

首先要引入Jquery，如果你的网页上已经有Jquery，那么就不必再次引入：

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
```

接着加入JS[需在Jquery以下,否则会报错]:

```js
<script>
	getCDNinfo = function() {
	$.ajax({
		url: "https://cdn.cyfan.top/cdn-cgi/trace",
		success: function(data, status) {
			let areas = "Antananarivo, Madagascar - (TNR);Cape Town, South Africa - (CPT);Casablanca, Morocco - (CMN);Dar Es Salaam, Tanzania - (DAR);Djibouti City, Djibouti - (JIB);Durban, South Africa - (DUR);Johannesburg, South Africa - (JNB);Kigali, Rwanda - (KGL);Lagos, Nigeria - (LOS);Luanda, Angola - (LAD);Maputo, MZ - (MPM);Mombasa, Kenya - (MBA);Port Louis, Mauritius - (MRU);Réunion, France - (RUN);Bangalore, India - (BLR);Bangkok, Thailand - (BKK);Bandar Seri Begawan, Brunei - (BWN);Cebu, Philippines - (CEB);Chengdu, China - (CTU);Chennai, India - (MAA);Chittagong, Bangladesh - (CGP);Chongqing, China - (CKG);Colombo, Sri Lanka - (CMB);Dhaka, Bangladesh - (DAC);Dongguan, China - (SZX);Foshan, China - (FUO);Fuzhou, China - (FOC);Guangzhou, China - (CAN);Hangzhou, China - (HGH);Hanoi, Vietnam - (HAN);Hengyang, China - (HNY);Ho Chi Minh City, Vietnam - (SGN);Hong Kong - (HKG);Hyderabad, India - (HYD);Islamabad, Pakistan - (ISB);Jakarta, Indonesia - (CGK);Jinan, China - (TNA);Karachi, Pakistan - (KHI);Kathmandu, Nepal - (KTM);Kolkata, India - (CCU);Kuala Lumpur, Malaysia - (KUL);Lahore, Pakistan - (LHE);Langfang, China - (NAY);Luoyang, China - (LYA);Macau - (MFM);Malé, Maldives - (MLE);Manila, Philippines - (MNL);Mumbai, India - (BOM);Nagpur, India - (NAG);Nanning, China - (NNG);New Delhi, India - (DEL);Osaka, Japan - (KIX);Phnom Penh, Cambodia - (PNH);Qingdao, China - (TAO);Seoul, South Korea - (ICN);Shanghai, China - (SHA);Shenyang, China - (SHE);Shijiazhuang, China - (SJW);Singapore, Singapore - (SIN);Suzhou, China - (SZV);Taipei - (TPE);Thimphu, Bhutan - (PBH);Tianjin, China - (TSN);Tokyo, Japan - (NRT);Ulaanbaatar, Mongolia - (ULN);Vientiane, Laos - (VTE);Wuhan, China - (WUH);Wuxi, China - (WUX);Xi'an, China - (XIY);Yerevan, Armenia - (EVN);Zhengzhou, China - (CGO);Zuzhou, China - (CSX);Amsterdam, Netherlands - (AMS);Athens, Greece - (ATH);Barcelona, Spain - (BCN);Belgrade, Serbia - (BEG);Berlin, Germany - (TXL);Brussels, Belgium - (BRU);Bucharest, Romania - (OTP);Budapest, Hungary - (BUD);Chișinău, Moldova - (KIV);Copenhagen, Denmark - (CPH);Cork, Ireland -  (ORK);Dublin, Ireland - (DUB);Düsseldorf, Germany - (DUS);Edinburgh, United Kingdom - (EDI);Frankfurt, Germany - (FRA);Geneva, Switzerland - (GVA);Gothenburg, Sweden - (GOT);Hamburg, Germany - (HAM);Helsinki, Finland - (HEL);Istanbul, Turkey - (IST);Kyiv, Ukraine - (KBP);Lisbon, Portugal - (LIS);London, United Kingdom - (LHR);Luxembourg City, Luxembourg - (LUX);Madrid, Spain - (MAD);Manchester, United Kingdom - (MAN);Marseille, France - (MRS);Milan, Italy - (MXP);Moscow, Russia - (DME);Munich, Germany - (MUC);Nicosia, Cyprus - (LCA);Oslo, Norway - (OSL);Paris, France - (CDG);Prague, Czech Republic - (PRG);Reykjavík, Iceland - (KEF);Riga, Latvia - (RIX);Rome, Italy - (FCO);Saint Petersburg, Russia - (LED);Sofia, Bulgaria - (SOF);Stockholm, Sweden - (ARN);Tallinn, Estonia - (TLL);Thessaloniki, Greece - (SKG);Vienna, Austria - (VIE);Vilnius, Lithuania - (VNO);Warsaw, Poland - (WAW);Zagreb, Croatia - (ZAG);Zürich, Switzerland - (ZRH);Arica, Chile - (ARI);Asunción, Paraguay - (ASU);Bogotá, Colombia - (BOG);Buenos Aires, Argentina - (EZE);Curitiba, Brazil - (CWB);Fortaleza, Brazil - (FOR);Guatemala City, Guatemala - (GUA);Lima, Peru - (LIM);Medellín, Colombia - (MDE);Panama City, Panama - (PTY);Porto Alegre, Brazil - (POA);Quito, Ecuador - (UIO);Rio de Janeiro, Brazil - (GIG);São Paulo, Brazil - (GRU);Santiago, Chile - (SCL);Willemstad, Curaçao - (CUR);St. George's, Grenada - (GND);Amman, Jordan - (AMM);Baghdad, Iraq - (BGW);Baku, Azerbaijan - (GYD);Beirut, Lebanon - (BEY);Doha, Qatar - (DOH);Dubai, United Arab Emirates - (DXB);Kuwait City, Kuwait - (KWI);Manama, Bahrain - (BAH);Muscat, Oman - (MCT);Ramallah - (ZDM);Riyadh, Saudi Arabia - (RUH);Tel Aviv, Israel - (TLV);Ashburn, VA, United States - (IAD);Atlanta, GA, United States - (ATL);Boston, MA, United States - (BOS);Buffalo, NY, United States - (BUF);Calgary, AB, Canada - (YYC);Charlotte, NC, United States - (CLT);Chicago, IL, United States - (ORD);Columbus, OH, United States - (CMH);Dallas, TX, United States - (DFW);Denver, CO, United States - (DEN);Detroit, MI, United States - (DTW);Honolulu, HI, United States - (HNL);Houston, TX, United States - (IAH);Indianapolis, IN, United States - (IND);Jacksonville, FL, United States - (JAX);Kansas City, MO, United States - (MCI);Las Vegas, NV, United States - (LAS);Los Angeles, CA, United States - (LAX);McAllen, TX, United States - (MFE);Memphis, TN, United States - (MEM);Mexico City, Mexico - (MEX);Miami, FL, United States - (MIA);Minneapolis, MN, United States - (MSP);Montgomery, AL, United States - (MGM);Montréal, QC, Canada - (YUL);Nashville, TN, United States - (BNA);Newark, NJ, United States - (EWR);Norfolk, VA, United States - (ORF);Omaha, NE, United States - (OMA);Philadelphia, United States - (PHL);Phoenix, AZ, United States - (PHX);Pittsburgh, PA, United States - (PIT);Port-Au-Prince, Haiti - (PAP);Portland, OR, United States - (PDX);Queretaro, MX, Mexico - (QRO);Richmond, Virginia - (RIC);Sacramento, CA, United States - (SMF);Salt Lake City, UT, United States - (SLC);San Diego, CA, United States - (SAN);San Jose, CA, United States - (SJC);Saskatoon, SK, Canada - (YXE);Seattle, WA, United States - (SEA);St. Louis, MO, United States - (STL);Tampa, FL, United States - (TPA);Toronto, ON, Canada - (YYZ);Vancouver, BC, Canada - (YVR);Tallahassee, FL, United States - (TLH);Winnipeg, MB, Canada - (YWG);Adelaide, SA, Australia - (ADL);Auckland, New Zealand - (AKL);Brisbane, QLD, Australia - (BNE);Melbourne, VIC, Australia - (MEL);Noumea, New caledonia - (NOU);Perth, WA, Australia - (PER);Sydney, NSW, Australia - (SYD)".split(";");
			let area = data.split("colo=")[1].split("\n")[0];
			for (var i = 0; i < areas.length; i++) {
				if (areas[i].indexOf(area) != -1) {
					document.getElementById("cdn").innerHTML = areas[i];
					document.getElementById("ip").innerHTML = data.split("ip=")[1].split("\n")[0];
					document.getElementById("httpos").innerHTML = data.split("visit_scheme=")[1].split("\n")[0];
					document.getElementById("uag").innerHTML = data.split("uag=")[1].split("\n")[0];
					document.getElementById("http").innerHTML = data.split("http=")[1].split("\n")[0];
					document.getElementById("loc").innerHTML = data.split("loc=")[1].split("\n")[0];
					document.getElementById("tls").innerHTML = data.split("tls=")[1].split("\n")[0];
					document.getElementById("warp").innerHTML = data.split("warp=")[1].split("\n")[0];
					break;
				}
			}
		}
	})
}
$(document).ready(function() {
	getCDNinfo();
    //页面加载完毕就获取CDN信息
});
</script>
```

这个脚本会获取大部分用户信息并解析所链接节点位置,默认链接到`cdn.cyfan.top`，已通过`CORS`,接着在网页需要添加的地方增加html代码:

```html
<p>
当前CDN节点: <span id="cdn">【未知】</span></br>
你的ip: <span id="ip">【未知】</span></br>
你当前以: <span id="httpos">【未知】</span>形式访问我们的网站</br>
你的User-Agent: <span id="uag">【未知】</span></br>
你以: <span id="http">【未知】</span>形式访问本网站</br>
你的所在国家/地区: <span id="loc">【未知】</span></br>
你以: <span id="tls">【未知】</span></br>
你是否以Warp访问我们: <span id="warp">【未知】</span></p>
```

[可以根据需要增减]，一般情况下简单获取写成这样：

```
<p>
当前CDN节点: <span id="cdn">【未知】</span> |
你的ip: <span id="ip">【未知】</span> |
你的所在国家/地区: <span id="loc">【未知】 </span></p>
```

结果应该类似这样:

![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/postpic/20200628094419.png)

划到页底即可看到。

# End

OHHH，又水了一篇，下次讲讲如何部署博客到Travis-ci上。溜了溜了 ![](https://unpkg.zhimg.com/chenyfan-oss@1.0.0/pic/moji/yhuaji.png)。


