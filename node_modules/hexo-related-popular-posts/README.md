# hexo-related-popular-posts

[![Build Status](https://travis-ci.org/tea3/hexo-related-popular-posts.svg?branch=master)](https://travis-ci.org/tea3/hexo-related-popular-posts) [![Coverage Status](https://img.shields.io/coveralls/tea3/hexo-related-popular-posts.svg)](https://coveralls.io/r/tea3/hexo-related-popular-posts?branch=master) [![NPM version](https://badge.fury.io/js/hexo-related-popular-posts.svg)](http://badge.fury.io/js/hexo-related-popular-posts)

A hexo plugin that generates a list of links to related posts or popular posts.

[DEMO](https://photo-tea.com/p/tea-plantation-mtfuji/#relatedPosts) | [Wiki](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings) | [Documents](https://photo-tea.com/p/hexo-related-popular-posts/) | [Releases(Update)](https://github.com/tea3/hexo-related-popular-posts/releases)

![Screenshot](src/img/hexo-rpp.png)

### Requirements

This plugin supports Hexo v3.2 or later. If you want you install old version , please `npm install hexo-related-popular-posts@2.0.6`

## Overview

- Generate [related list of posts](#simply-usage).

    Sort and extracted by [relevance of tags](#simply-usage) and [word relevance of contents](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#advanced-related-posts-morphological-analysis).

- Generate [popular list of posts](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#popular-posts).

    Sort and extract in Google Analytics page view.

- Generate [Page Views information](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#visitor-counter) in posts.

    Gets and displays the Google Analytics page view.

- Flexible customizable [option](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#hepler) and [design](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#customize-html)
- [Improve production speed](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#cache)

---


## Installation

``` bash
$ npm install hexo-related-popular-posts --save
```

If you occur `ERROR Plugin load failed:` error or `DTraceProviderBindings.node` error , please see below.

- [ISSUE_TEMPLATE](https://github.com/tea3/hexo-related-popular-posts/blob/master/.github/ISSUE_TEMPLATE.md)
- [DTraceProviderBindings.node issue #1](https://github.com/tea3/hexo-related-popular-posts/issues/1)

---

## Simply Usage

### 1. Edit your theme

First, add the following `popular_posts( {} , post )` helper tag in template file for article. For example , if you use [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) , add a tag [here](https://github.com/hexojs/hexo-theme-landscape/blob/master/layout/_partial/article.ejs#L25).

``` ejs
  <%-
    popular_posts( {} , post )
  %>
```

Variable name `post` is different depending on theme. Helper tag can set [more option](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#hepler) and [customize the design](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#customize-html) . For detail , please see the wiki.

Also , if you occur `Cannot read property 'tags' of undefined` error , please refer to the follow as.

- [Swig (e.g. hexo-theme-next)](https://github.com/tea3/hexo-related-popular-posts/issues/4)
- [Ejs (e.g. hexo-theme-phantom)](https://github.com/tea3/hexo-related-popular-posts/issues/6)

### 2. Add tags in markdown

If tags are included in the article, related articles can be displayed as a list. For example, add a tag like the following markdown file.

```
---
title: Hello World
tags:
  - program
  - diary
  - web
---
Welcome to [Hexo](https://hexo.io/)! This is a sample article. Let's add some tags as above.
...
```

The larger the number of matching tags, the more relevant articles are displayed as candidates. Otherside , [advanced related posts](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#advanced-related-posts-morphological-analysis) and [popular posts](https://github.com/tea3/hexo-related-popular-posts/wiki/More-Settings#popular-posts) can be displayed. Please see the wiki .

### 3. Run server

Starts a local server. By default, this is at `http://localhost:4000/`.

``` bash
$ hexo clean
$ hexo server
```


---

## Thank you for introduction.

- [Plugins hexo-related-popular-posts 설정하기 - MSFL::모리스 소프트웨어 공작소, IT Blog](http://ccambo.gitlab.io/2017/04/19/Plugins-hexo-related-popular-posts-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0/)
- [サイトをカスタマイズしました : タグクラウドプラグイン & 関連記事表示プラグインの導入 & 一部シェアボタン追加 - YoshinoriN's Memento](https://yoshinorin.net/2016/11/03/hexo-blog-customize/)
- [HEXOをカスタマイズしました(関連記事プラグイン導入とか)">HEXOをカスタマイズしました(関連記事プラグイン導入とか) - 可愛いを叫ぶブログ](http://8hagi.sakura.ne.jp/sblog/2017/02/11/hexo-related-post/)
- [Hexo に 関連する記事のリストを追加する - Azriton's blog](https://azriton.github.io/2017/06/16/Hexo%E3%81%AB%E9%96%A2%E9%80%A3%E3%81%99%E3%82%8B%E8%A8%98%E4%BA%8B%E3%81%AE%E3%83%AA%E3%82%B9%E3%83%88%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B/)

## Thank you for a wonderful plugin.

- Hexo : [http://hexo.io/](http://hexo.io/)
- ga-analytics : [https://github.com/sfarthin/ga-analytics](https://github.com/sfarthin/ga-analytics)
- kuromoji.js : [https://github.com/takuyaa/kuromoji.js](https://github.com/takuyaa/kuromoji.js)

## License

MIT
