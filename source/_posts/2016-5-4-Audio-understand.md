title: Audio 之深入理解(上)
subtitle: "HTML5 的新属性，Audio 是用来播放音频文件，也可以与弹幕、游戏配合，开发出好玩的音乐站"
data: 2016.12.26 0:24:35
cover: /images/post/img/audioone.jpg
categories: HTMLCSS
tags: HTML
author:
    nick: Daheaths
    github_name: Daheaths
---

## 前言
> 选择你所喜欢的，爱你所选择的--列夫·托尔斯泰

**愤怒的牛仔**

#### Audio
* 一个音乐有关的神秘人，今天让我们深入了解它。

> < audio src="MusicFile/斑马，斑马-宋东野.mp3" controls="controls" > < /audio >

#### Audio 支持浏览器
| 浏览器 | MP3 | Wav | Ogg |
|--------|-----|-----|-----|
| Internet Explorer 9+ | 支持 | 不支持 | 不支持 |
| Chrome 6+ (谷歌) | 支持 | 支持 | 支持 |
| Firefox 3.6+ (火狐) | 支持 | 支持 | 支持 |
| Safari 5+ (苹果) | 支持 | 支持 | 不支持 |
| OPera 10+ (欧朋) | 支持 | 支持 | 支持 |
| edge | | | | |

* 在浏览器不支持某种音频格式的情况下，可以使用 < source > 标签来选择一个音频格式和提示不支持<audio>

> < audio controls >
  < source src="斑马,斑马.ogg" type="audio/ogg" >
  < source src="斑马,斑马.mp3" type="audio/mpeg" >
  您的浏览器不支持 audio 元素。
  < /audio >

 1.假如音频格式全不支持，则提示：您的浏览器不支持 audio 元素。  
 2.假如支持其中一种音频格式，则播放支持的音频格式  
 3.假如支持全部音频格式，则随机播放一种音频格式

###### 注意：< source >标签支持的浏览器跟< audio >标签所支持的浏览器一样！
