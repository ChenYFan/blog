---
title: JSDelivr倒下后，何物可救静态资源？
author: ChenYFan
tags:
  - JSdelivr
  - 滥用
  - ServiceWorker
  - 黑科技
categories:
  - 随心扯
des: 唯一一个拥有国内节点能够加速海外资源的静态文件分发站JSDelivr因为各种滥用和敏感被封杀，此文将介绍如何巧用ServiceWorker黑科技前端智能分流CDN和绕备
key: 'serviceworker,cdn,jsdelivr'
index_img: 'https://npm.elemecdn.com/chenyfan-oss@2.0.4'
banner_img: 'https://npm.elemecdn.com/chenyfan-oss@2.0.4'
date: 2021-07-28 13:24:15
---

因为你是公益的、免费的分发站，所以各位就要做好被薅爆以至于倒台的结果？天下之大无奇不有。

<!--more-->

# 巨厦坍塌

2021/12/20日，赶在旧年的末尾