title: 初识JSON
subtitle: "了解JSON的用处，优点"
data: 2016.3.12 13:34:25
cover: /images/post/img/lewis-ngugi-186309.jpg
categories: JSON
tags: JSON
author:
    nick: Daheaths
    github_name: Daheaths
---

## 前言

> 爱生活、爱折腾！

**愤怒的牛仔**

## JSON

> JSON的全称是“JavaScript Object Notaion”, JSON 是一种语法用来序列化对象、数组、数值、字符串、布尔值和null,独立与语言之间的轻量级数据交换格式，类似XML,但比XML更小，更快，更易解析。

|JavaScript类型|JSON|
|----|-----|
|对象和数组|属性名称必须是双引号字符串，最后一个属性后不能有逗号|
|数值|前导零是禁止的（在JSON.stringify 零将被忽略，但在JSON.parse它将抛出SyntaxError）,小数点后至少有一位数字|
|字符串|let code = '"\u2028\u2029"'; <br> JSON.parse(code);  // 工作正常 <br> eval(code);  // 失败|
||只有有限的一些字符可能会被转义；禁止某些控制字符；Unicode 行分隔符 （U+2028）和段分隔符 （U+2029）被允许 ; 字符串必须是双引号。请参见以下示例，其中 JSON.parse() 能够正常解析，但把它当作JavaScript解析时会抛出 SyntaxError 错误：|

### 两种表示结构

* 对象是一个无序的“‘名称/值’对”集合。一个对象以{（左括号）开始，}（右括号）结束。每个“名称”后跟一个:（冒号）；“‘名称/值’ 对”之间使用,（逗号）分隔。

```Javascript
{
    "name": "Daheaths",
    "age": "21",
    "sex": "boy"
}

```

* 数组是值（value）的有序集合。一个数组以[（左中括号）开始，]（右中括号）结束。值之间使用,（逗号）分隔。

```Javascript
[
    {
        key1:value1,
        key2:value2
    },
    {
         key3:value3,
         key4:value4   
    }
]

```

**注意：** 无效的空格可能存在于JSONNumber（数字必须不包含空格）或JSONString（其中它被解释为字符串中的相应字符，否则将导致错误）之外的任何位置。制表符（U+0009），回车（U+000D），换行（U+0020）和空格（U+0020）字符是唯一有效的空格字符。

#### 方法
* JSON.parse(text[, reviver]) <br>
    &nbsp;&nbsp;&nbsp;  解析一个JSON 字符串，可选地转换生成的值及其属性，并返回值：JSON对象。

* JSON.stringify(value[, replacer [, space]]) <br>
    &nbsp;&nbsp;&nbsp;
    返回与指定值相对应的一个JSON字符串，可选择某些属性或者用户自定义的方式替换属性值。

* eval()方法 存在性能和安全问题不建议使用

> JSON对象不被旧版本浏览器支持。你可以把下面代码放到脚本的开始位置，这样就可以在那些没有原生支持 JSON 对象的浏览器（如IE6）中使用 JSON对象。

```Javascript

if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}

```

### 优点
* 占带宽小（格式是压缩的）
* 与XML相比，易于理解、快速解析
* 支持多种语言，比如Java、PHP、Golang、ruby、Python等语言结合使用，便于服务端的解析

### 兼容性

#### PC

| 浏览器 | Chrome | Edge | Firefox |	Internet Explorer |	Opera |	Safari |
| ---|---|----|---|----|----|---|
|Basic Support | (Yes) | (Yes) | 3.5 |	8 |	10.5 | 4 |
|parse|	(Yes)|	(Yes)	| 3.5 |	8 | 10.5 |	4 |
| stringify	 | (Yes) |	(Yes) |	3.5	| 8 |	10.5 |	4 |

#### Mobile

|Feature | Android |	Chrome for Android | Edge mobile	Firefox for Android | IE mobile	Opera | Android | iOS Safari|
|----|----|----|---|----|----|---|---|
Basic Support |	(Yes) |	(Yes) |	(Yes) |	4 |	(Yes) |	(Yes) |	(Yes) |
parse |	(Yes) |	(Yes) |	(Yes) |	4 |	(Yes) |	(Yes) |	(Yes) |
stringify | (Yes) |	(Yes) |	(Yes) |	4 |	(Yes) |	(Yes) |	(Yes) |

```Javascript
let Obj = {
	name: "Daheaths",
	age: "21",
	hobby: ["运动","生活","美食","旅游","摄影"],
	job: "Web 全栈开发",
	address: "GuangDong ShanTou"
}

let jsonStr = JSON.stringify(Obj) // 将JSON对象转换为JSON字符串
let jsonObj = JSON.parse(jsonStr) // 将JSON字符串转换为JSON对象

console.log(jsonStr) // => {"name":"Daheaths","age":"21","hobby":["运动","生活","美食","旅游","摄影"],"job":"Web 全栈开发","address":"GuangDong ShanTou"}
console.log("\n");

console.log(jsonObj) //{name: "Daheaths", age: "21", hobby: Array(5), job: "Web 全栈开发", address: "GuangDong ShanTou"}address: "GuangDong ShanTou"age: "21"hobby: Array(5)0: "运动"1: "生活"2: "美食"3: "旅游"4: "摄影"length: 5__proto__: Array(0)job: "Web 全栈开发"name: "Daheaths"__proto__: Object
console.log("\n");

for(let item in jsonObj){
	console.log( item + "：" + jsonObj[item] )
}
console.log("\n")

var Name = jsonObj.name
console.log(Name)
console.log("\n")

// 新增
jsonObj.blog = "http://daheaths.github.io"
console.log(jsonObj)
console.log("\n")

// 修改
jsonObj.blog = "http://www.vovteam.com"
console.log(jsonObj)
console.log("\n")

delete jsonObj.job
console.log(jsonObj)

```

#### 参考
* http://www.json.org/json-zh.html
* MDN
