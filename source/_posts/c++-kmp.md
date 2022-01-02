---
title: 看毛片(KMP)算法小记
author: ChenYFan
tags:
  - 算法
  - C++
categories:
  - 摸鱼小记
des: KMP算法小记
index_img: 'https://unpkg.zhimg.com/chenyfan-cdn@2.0.0-img/hpp_upload/1617794851000.jpg'
banner_img: 'https://unpkg.zhimg.com/chenyfan-cdn@2.0.0-img/hpp_upload/1617794851000.jpg'
lushkey: how-to-use-euserv.md
abbrlink: cef76c6c
date: 2021-04-07 19:22:12
---

一直摸鱼的CYF突然安静了下来,因为他想学学一个别人都会的算法。
<!--more-->

~~我菜就是菜，只能学别人早就会的算法了~~

先贴维基链接【讲的比CSDN清楚，自己访问】

<https://zh.wikipedia.org/wiki/KMP%E7%AE%97%E6%B3%95>

长串匹配短串，基本上DP打一遍就冲了。

DP本质简单的很：

```
匹配串：
ABCDPOPABQO
待匹配串：
ABQ
```

开始匹配

```
ABCDPOPABQO
↑
ABQ
↑

ABCDPOPABQO
 ↑
ABQ
 ↑
 
ABCDPOPABQO
  ↑
ABQ
  ↑
  
ABCDPOPABQO
 ↑
 ABQ
 ↑
...

```

显而易见，这种复杂度极高【O(m\*n)】，当然，冲个入门级别的绝对没问题

然而类似基因匹配这种数量级恶心心的东西，DP绝对是不够的。

或者说一个恶心的数据

```
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB
AAB
```

这样如果直接硬DP，那绝对TLE。

于是，我们选择一个简单的算法，<span class="heimu">看毛片</span> KMP算法，他可以很好的提升我们匹配的效率

# KMP

首先名字很有意思，之所以叫做KMP，是因为这个算法是由Knuth、Morris、Pratt三个提出来的，取了这三个人的名字的头一个字母。


## 跳过已匹配字符

扯远了，将匹配方式简单讲一下


```
ABCDPOPABQO
↑
ABQ
↑

匹配，指针右移【以下未特殊表明均指针】

ABCDPOPABQO
 ↑
ABQ
 ↑
 
匹配，右移

ABCDPOPABQO
  ↑
ABQ
  ↑
```

这时候我们撞上了不匹配的情景，怎么办？右移一位？

不，我们发现原串里面的`C`在待匹配串里面根本没出现，并且原串[0]\~[2]均不匹配，所以我们选择把匹配串整个向右移动三位

```
ABCDPOPABQO
   ↑
   ABQ
   ↑
   
不匹配，字符串右移一位


ABCDPOPABQO
	↑
    ABQ
    ↑
   
省略数步

ABCDPOPABQO
       ↑
       ABQ
       ↑
	   
匹配，右移

ABCDPOPABQO
        ↑
       ABQ
        ↑
		
匹配，右移

ABCDPOPABQO
         ↑
       ABQ
         ↑
		
匹配，右移

这时候待匹配串已匹配完毕，记录并将整个串移动到末尾

ABCDPOPABQO
          ↑
          ABQ
          ↑
		  
待匹配串已超过原串长度，结束
```

## 部分匹配

上面的例子可能没有讲到重点，接下来换个例子，部分匹配才是KMP的核心

```
ABCEABCABCDABD
ABCDABD
```

OK我们开始匹配

```
ABCDABCDABDABCDABD
↑
ABCDABD
↑

ABCDABCDABDABCDABD
 ↑
ABCDABD
 ↑
 
ABCDABCDABDABCDABD
  ↑
ABCDABD
  ↑

ABCDABCDABDABCDABD
   ↑
ABCDABD
   ↑
   
ABCDABCDABDABCDABD
    ↑
ABCDABD
    ↑
	
ABCDABCDABDABCDABD
     ↑
ABCDABD
     ↑

ABCDABCDABDABCDABD
      ↑
ABCDABD
      ↑
```

这个时候我们发现了原串[6]与比较串不符合,这时候怎么办?直接跳到后面去?

```
ABCDABCDABDABCDABD
       ↑
       ABCDABD
       ↑
```

好家伙,你会直接丢掉[4]\~[10],而这正是我们要匹配的

所以我们定个小规矩:

> 移动位数 = 已匹配的字符数 - 对应的部分匹配值

> 换句话说,就是移动到下一个重复片段的地方

所以这个时候我们应该移动**4位**而不是**6位**

```
ABCDABCDABDABCDABD
      ↑
    ABCDABD
      ↑
	  
...

ABCDABCDABDABCDABD
          ↑
    ABCDABD
          ↑
```

这个时候我们已经匹配到了一串,那么接下来怎么移?还是直接移动6位?

不,我们还是要用自己定下的规矩,移动**4位**

```
ABCDABCDABDABCDABD
          ↑
        ABCDABD
          ↑
```

此时,我们才能将其整个向右移动**2位**

```
ABCDABCDABDABCDABD
           ↑
           ABCDABD
           ↑
		   
...

ABCDABCDABDABCDABD
                 ↑
           ABCDABD
                 ↑
```

OK我们将其匹配完毕,整个`ABCDABCDABDABCDABD`包含两处`ABCDABD`

## 部分匹配表

这是一张神奇的表格

首先我们搞清楚前缀和后缀是什么

`SHITERS`

```
- 前缀Q['S','SH','SHI','SHIT','SHITE','SHITER']
- 后缀H['HITERS','ITERS','TERS','ERS','RS','S']
```

"部分匹配值"就是"前缀"和"后缀"的最长的共有元素的长度

那么`SHITERS`的部分匹配值是多少呢?相当于Q和H里面有几个元素是共存的?

答,一个

所以,其`S`部分匹配值是1，而其他均为0

所以这张表有什么用?和部分匹配表有什么关系?

回到之前的,我们会发现有些时候往后匹配时有时候后缀和前缀会相同,那么匹配值向右移动就是其部分匹配值。

# 尝试上手

## 板子题[P3375](https://www.luogu.com.cn/problem/P3375)

匹配这样子就是有手就行，而所谓的`border`其实就是部分匹配值~~比较扯淡的是第一次看的时候就是没搞懂border~~


扯皮点，直接搞getfail

```C++
void getfail(int plen){
    border[0]=0; 
    for(int i=1;i<plen;i++){
        int j=border[i];
        while(j&&p[i]!=p[j]) j=border[j];
		if(p[i]==p[j])border[i+1]=j+1;
    }
}
```

然后夹带上主代码直接冲了

```C++
#include<bits/stdc++.h>
#define M 1000000
using namespace std;
//脚手架
char c[M],p[M];
int border[M];
//...getfail丢着
int main(){
    scanf("%s",c);
	scanf("%s",p);
    int clen=strlen(c);
	int plen=strlen(p);
    getfail(plen);
    int j=0;
    for(int i=0;i<clen;i++){
        while(j&&p[j]!=c[i]) j=border[j];
        if(p[j]==c[i]) j++;
        if(j==plen) printf("%d\n",i-plen+2);
    }
    for(int i=1;i<=plen;i++) printf("%d ",border[i]);
    return 0;
}
```