title: JS 撸个复制网页内容，剪贴板里自动加上版权的小功能
subtitle: "现在版权意识提高，复制网站内容到剪贴板会自动加上版权信息，例如本站等网站"
data: 2018.1.17 0:01:32
cover: /images/post/img/audioone.jpg
categories: JavaScript,HTML,CSS
tags: JavaScript，HTML
author:
    nick: Daheaths
    github_name: Daheaths
---

## 前言
> 剽悍的人生不需要解释。

**愤怒的牛仔**

### 简单的实现细节
* 当鼠标or键盘(Ctrl + C) 复制网页的DOM元素(网页内容) 触发事件
* 执行相关的事件(函数), 并在剪贴板中加入版权信息

使用 [Clipboard API events —— copy](https://developer.mozilla.org/en-US/docs/Web/Events/copy) 来实现这个小功能

### DOM Code
```HTML
<div id="answer">If you constantly regret things you did or didn't do in the past, then you won't be able to move forward. Don't live in the past. Live in the present…and the future! (要是总为过去的事后悔，那你会很难继续前行。不要沉溺于往事。活在当下，看向未来！)<b>author: </b><a href="http://blog.vovteam.com">Daheaths</a></div>
```
### 相关的执行函数(JavaScript)
```JavaScript
document.addEventListener('copy', function(e){
// 简单获取DOM元素的内容
  const text = window.getSelection().getRangeAt(0).cloneContents()

  let htmlData = '<div>'
       + text.indexHTML + ' <br>'
       + '<span>作者：' + '愤怒的牛仔' + '</span> <br>'
       + '<span>来源：愤怒的牛仔博客 <br>'
       + '链接：' + 'http://blog.vovteam.com <br>'
       + '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 <span></div>'

  let textData =  window.getSelection().getRangeAt(0) + '\n'
       + '作者：愤怒的牛仔 \n'
       + '来源：愤怒的牛仔博客 \n'
       + '链接：' + `http://blog.vovteam.com \n`
       + '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 \n'

// 将复制的内容加上版权信息并黏贴另一个文本域
  e.clipboardData.setData('text/plain', textData);

// 加入排版好的版权信息到剪贴板
  e.clipboardData.setData('text/html', htmlData);
  // 阻止默认行为
  e.preventDefault();

});

/*
* 差：复制的内容长度判断，再执行相关的函数
*/
```

#### 参考
* https://developer.mozilla.org/en-US/docs/Web/Events/copy
