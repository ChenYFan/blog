title: links
date: 2020-03-19 16:30:14
---
<style>
    *{
        padding: 0;margin: 0;
        font-family: Microsoft Yahei, "微软雅黑", "Helvetica Neue", Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
    }
    .container{
        max-width: 1100px;
        margin: 0 auto;
    }
    .more-title{
        text-align: center;
        font-weight: normal;
        font-size: 25px;
        margin: 20px 0 0 0;
    }
    /*放置链接框的区域*/
    .link-box-area{
        padding-top: 25px;
        overflow: hidden;
        zoom: 1;
    }
    /*链接框*/
    .link-box{
        width: 30%;
        display: inline-block;
        background: #EEE;
        height: 150px;
        margin-left: 2.5%;
        margin-bottom: 25px;
        float: left;
        text-decoration: none!important;    /*这里这么处理是因为受下面的display: -webkit-box;影响，下划线又会回来*/
        overflow: hidden;
        -webkit-transition: all .2s linear; /*渐变效果*/
            transition: all .2s linear;
    }
    /*链接区域鼠标滑动浮起效果*/
    .link-box:hover{
        z-index: 2; /*设置在顶层显示*/
        -webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);    /*添加阴影*/
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        -webkit-transform: translate3d(0, -2px, 0);     /*向上浮动*/
        transform: translate3d(0, -2px, 0);
    }
    /*链接名字*/
    .link-box .link-name{
        font-size: 20px;
        color: #15AAEA;
        width: 100%;
        display: inline-block;
        text-align: center;
        margin: 18px 0;
        /*超过一行的内容被自动截断并加上省略号*/
        text-overflow: -o-ellipsis-lastline;    /*最后一行加省略号*/
        overflow: hidden;
        text-overflow: ellipsis;    /*无法容纳的被加上省略号*/
        display: -webkit-box;
        -webkit-line-clamp: 1;  /*超出三行截断*/
        -webkit-box-orient: vertical;
    }
    /*链接小图标*/
    .link-box .link-name .link-favicon{
        display: inline-block;
        max-width: 30px;
        height: 30px;
        margin: -3px 2px 0 2px;
        vertical-align: middle;
        border: none;
    }
    /*链接描述*/
    .link-box .link-direction{
        display: inline-block;
        padding: 0 14px;
        font-size: 15px;
        line-height: 25px;
        color: #555;
        /*超过三行的内容被自动截断并加上省略号*/
        text-overflow: -o-ellipsis-lastline;    /*最后一行加省略号*/
        overflow: hidden;
        text-overflow: ellipsis;    /*无法容纳的被加上省略号*/
        display: -webkit-box;
        -webkit-line-clamp: 3;  /*超出三行截断*/
        -webkit-box-orient: vertical;
    }
    /*网页宽度大于900px,每列显示3个*/
    @media screen and (min-width:900px){
        .link-box[data-role=.link-box-area]:nth-child(3n)
        {
            clear:both;
        }
    }
    /*网页宽度在900px到600px之间,每列显示2个*/
    @media screen and (max-width:900px) and (min-width:600px){
        .link-box[data-role=.link-box-area]:nth-child(2n)
        {
            clear:both;
        }
        .link-box{
            width: 40%;
            height: 150px;
            margin-left: 6.5%;
        }
    }
    /*网页宽度小于600px,每列显示1个*/
    @media screen and (max-width:600px){
        .link-box{
            width: 90%;
            height: 150px;
            margin-left: 5%;
            clear:both;
        }
    }
    </style>
<div class="container">
<h3 class="more-title">朋友们</h3>
<div class="link-box-area">
<a class="link-box" href="https://blog.pangao.vip" target="_blank">
    <span class="link-name">
        <img class="link-favicon" src="https://blog.pangao.vip/images/avatar.jpg" height=16 weight=16/>
        潘高博客
    </span>
    <span class="link-direction">
      Just do it !
(翻译：我只是个搞 IT的！哭笑脸)
    </span>
</a>
<a class="link-box" href="http://pengzhihui.xyz" target="_blank">
    <span class="link-name">
        <img class="link-favicon" src="http://pengzhihui.xyz/logo.jpg" />
       稚晖的个人站
    </span>
    <span class="link-direction">
       “十年饮冰，难凉热血”
    </span>
</a>
<a class="link-box" href="https://blog.cworld.top/" target="_blank">
    <span class="link-name">
        <img class="link-favicon" src="https://www.gravatar.com/avatar/85b870f6b1a177981d3e9566e3ad7264?s=160"/>
        CWorld‘s Blog
    </span>
    <span class="link-direction">
  Stay hungry, Stay foolish. 求知若愚，虚怀若谷。
    </span>
</a>






<a class="link-box" href="/留言板/" target="_blank">
    <span class="link-name">
        <img class="link-favicon" src="https://img.cyfan.top/pic/？.jpg"/>
       友链还有空位
    </span>
    <span class="link-direction">
        点我去留言！
    </span>
</a>


</div>  <!--class="link-box-area"-->
</div>  <!--class="container"-->
</body>