---
title: MarkDown语法详解（高级版）
tags:
  - MarkDown
  - 语法
categories: 爱学习
copyright: true
abbrlink: '6290e861'
date: 2019-07-24 12:46:32
---
# 前言: 
> **注意**
> 文章内所有名字纯属虚构,如有雷同,纯属巧合!

> 这是第三篇MarkDown语法详解（高级版），如果你想要学习第二篇，请前往[MarkDown语法详解（中级版）](/2019/07/22/MarkDown语法详解（中级版）)；如果你想要学习第一篇，请前往[MarkDown语法详解（初级版）](/2019/07/21/MarkDown语法详解（初级版）)
 
> **警告**
> 本次授课相对来说比较难,请做好心理准备!

## 列表：
### 正常方法:
Markdown 制作表格使用`|`来分隔不同的单元格，使用`-`来分隔表头和其他行。
语法格式如下：
```Markdown
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

当然你也可以在表格中使用特殊符号如:
```Markdown
|人物|技能一|技能二|技能三|大招|
|----|----|----|----|----|
|刘老师|讲一个段子|加一张试卷|/|考一场试|
|梁M法|抢体育课|<font color=yello>抢电脑课</font>|<font color=red>抢美术课</font>|<font color=green>连续考试</font>|
|刘老师老婆|[哭](https://baike.baidu.com/item/一哭二闹三上吊/838254)|[闹](https://baike.baidu.com/item/一哭二闹三上吊/838254)|[上吊](https://baike.baidu.com/item/一哭二闹三上吊/838254)|向刘老师发射一张离婚协议书.对其造成5000点物理伤害|
```
|人物|技能一|技能二|技能三|大招|
|----|----|----|----|----|
|刘老师|讲一个段子|加一张试卷|/|考一场试|
|梁M法|抢体育课|<font color=yello>抢电脑课</font>|<font color=red>抢美术课</font>|<font color=green>连续考试</font>|
|刘老师老婆|[哭](https://baike.baidu.com/item/一哭二闹三上吊/838254)|[闹](https://baike.baidu.com/item/一哭二闹三上吊/838254)|[上吊](https://baike.baidu.com/item/一哭二闹三上吊/838254)|向刘老师发射一张离婚协议书.对其造成5000点物理伤害|

### 对齐:
我们可以设置表格的对齐方式：

- -: 设置内容和标题栏居右对齐。
- :- 设置内容和标题栏居左对齐。
- :-: 设置内容和标题栏居中对齐。
实例如下：
```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

> **提示**:
> 表格打完要空一行啊!

## 流程图:
Hexo用户可能要额外安装插件: `npm install --save hexo-filter-flowchart`

st=>start: Start:>http://www.google.com[blank] e=>end:>http://www.google.com op1=>operation: My Operation sub1=>subroutine: My Subroutine cond=>condition: Yes or No?:>http://www.google.com io=>inputoutput: catch something... para=>parallel: parallel tasks st->op1->cond cond(yes)->io->e cond(no)->para para(path1, bottom)->sub1(right)->op1 para(path2, top)->op1
具体写法前往[官网](http://flowchart.js.org)了解更多.

## 打出正常符号来:
用`\`反斜杠来转义,转义表格如下:

| 你要打出的符号 | 你应该写出的符号 |
|----|----|
|`!`|`\!|
|\`|\\\`|
|`#`|`\#`|
|`-`|`\-`|
|`&`|`\&`|
|`*`|`\*`|
|`+`|`\+`|

等等等等只要以单个`\`放在需转义的单个字符前即可.

> **注意**
> 多字符转义需要一个一个添加`\`!
> 被\`和\`\`\`包裹起来的代码无需转义!

## 公式:
### 单行公式:
用一个`$`来包裹单行代码(Hexo不支持)
### 多行公式：
用两个`$`来包裹单行代码(Hexo不支持)

## Todo:
用`[ ]`代替未完成的事项:
- [ ] 语文作业
用`[x]`代替已完成的事项:
- [x] 科学作业

> **注意**
> 如果你显示不出来....
> 说明你踩坑里去了!
> 在每一个`[ ]`和`[x]`前要加上[无序列表的符号](/2019/07/22/MarkDown语法详解（中级版）/#无序排序)!!
> 反正我是踩坑里去了!


## HTML标签：
Markdown本身就能与html互相转换,比如:
```markdown
[baidu](https://baidu.com)
```
转换成html:
```html
<a href="https://baidu.com">baidu</a>
```
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
目前支持的 HTML 元素有：`&amp;lt;kbd&amp;gt; &amp;lt;b&amp;gt; &amp;lt;i&amp;gt; &amp;lt;em&amp;gt; &amp;lt;sup&amp;gt; &amp;lt;sub&amp;gt; &amp;lt;br&amp;gt;`等 ，如：
此处讲解几个不能被markdown使用的标签:
### 按键符号:
```
按&amp;lt;kbd&amp;gt; &amp;lt;b&amp;gt; &amp;lt;i&amp;gt; &amp;lt;em&amp;gt; &amp;lt;sup&amp;gt; &amp;lt;sub&amp;gt; &amp;lt;br&amp;gt;就可以调出任务管理器了！
```
按<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Esc</kbd>就可以调出任务管理器了！

### 上标
```html
我是正常的刘老师<sup>我是上标刘老师</sup>
```
我是正常的刘老师<sup>我是上标刘老师</sup>

### 下标:
```html
我是正常的刘老师<sub>我是下标刘老师</sub>
```
我是正常的刘老师<sub>我是下标刘老师</sub>

### 改字体颜色:
```html
<font color=#F7FE2E>刘:我的心和我一样颜色</font>
```
<font color=#F7FE2E>刘:我的心和我一样颜色</font>
### 改字体背景颜色:
```html
<p style="background:#F7FE2E">刘:我的心和背景一样颜色!</p>
```
<p style="background:#F7FE2E">刘:我的心和背景一样颜色!</p>

### 改字体大小:
```html
<font size=72>刘:我的\*和我一样大</font>
```

<font size=72>刘:我的\*和我一样大</font>

## js/css
与正常使用无差异

完
- - -






