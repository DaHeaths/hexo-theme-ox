title: 图片加载和优化那些事！(前方多图，慎入)
subtitle: "在日常开发中，图片的使用比较频繁，有什么方法可以优化图片和使网页加载图片更快！"
data: 2017.10.15 0:24:35
cover: /images/post/img/lewis-ngugi-186309.jpg
categories: Vue
tags: Picture
author:
    nick: Daheaths
    github_name: Daheaths
---

## 前言
> 世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。 —— 斯里兰卡

**愤怒的牛仔**

### 常见加载方式
* 图片懒加载
* 预加载


### 图片优化
* CSS Sprite (雪碧图，适合将各种小图标合并)
* Base64编码代替图片
* 根据不同的需求，加载不同尺寸的图片
* Svg图标
* Canvas(画布)
* iconfont(字体图标)
* css 来简单替代图片(例如阴影)
* Webp,
* Gzip压缩
****

### 网络加载优化
* CDN

#### CSS Sprite (雪碧图)
**CSS Sprites**其实就是把网页中一些图标整合到一张图片文件中，整合好的图片也称为：“雪碧图”。

再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。
<br>
合并好的雪碧图
![images](/img/post/img/20171015125926.png)

CSS：
```CSS
.pic-first{    
    width: 59px;
    height: 63px;
    display: block;
    background: url(20171015125926.png);
    background-position: -205px -63px;
    background-repeat: no-repeat;
    border: 1px solid red;
}
  .pic-second{
    width: 59px;
    height: 63px;
    display: block;
    background: url(20171015125926.png);
    background-position: -205px -63px;
    background-repeat: no-repeat;
    border: 1px solid red;
}
```
HTML：
```HTML
<body>
  <span class="pic-first"></span>
  <span class="pic-second"></span>
</body>
```

![css sprite效果图](/img/post/img/20171015135445.png)

**优点:**
减少了HTTP请求，雪碧图减少了图片所占用的字节(几张图片合成一张雪碧图)

**缺点:**
维护困难，一旦雪碧图发生位置改动，则需要修改css。

#### Base64编码代替图片
引用一张淘宝的图片
![样例图](/img/post/img/clipboardn.png)

使用 Encode Data URL By PuterJam 将图片转为 Base64
http://www.pjhome.net/web/html5/encodeDataUrl.htm
使用 dataurlmaker 将图片转为 Base64
http://dataurl.net/#dataurlmaker
<br>
**优点：**
① 减少HTTP请求，适合小尺寸图片
② 适合一旦上线，不用改动的图片
<br>
**缺点：**
① 图片实际尺寸过大，Base64 会比原图片占用空间还大
② 会带来开发效率上的问题

<br>
**Demo**
```HTML
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAACLlBMVEVMaXFBuINBuIM8enI/..." alt="what?" >
```

持续更新...
