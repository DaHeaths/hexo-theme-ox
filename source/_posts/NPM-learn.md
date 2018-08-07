title: NPM 入门指南
subtitle: "npm使JavaScript开发人员可以轻松地共享和重用代码，并且可以轻松更新您共享的代码"
data: 2016.11.26 0:14:32
cover: /images/post/img/audioone.jpg
categories: npm,Node,JavaScript
tags: npm
author:
    nick: Daheaths
    github_name: Daheaths
---

## 前言
> 学习本无底，前进莫徬徨。

**愤怒的牛仔**

## npm 入门指南

*此例子在Linux演示*

安装Node.js 可以去官网直接下载对应的版本 [Node官网](https://nodejs.org/en/download/)，安装Node会一起安装 npm

检查Node的安装位置几版本， windows使用where，Linux和mac 使用which

```text

$ which node
/usr/local/bin/node

$ node --version
v6.11.3

```

检查npm的安装位置几版本， windows使用where，Linux和mac 使用which

```text

$ which npm
/usr/local/bin/npm

$ npm -v
3.10.10

```

### NPM包管理器

npm 可以在全局或者局部范围内安装相关的npm包，全局安装的目录在{prefix}/lib/node_modules下 *({prefix一般为/usr/或者/usr/local})*; 局部安装在当前node_modules文件夹下。

#### 更新npm包管理器
npm不同于Node,npm更新比较频繁,有时候会因为npm版本过低，而导致npm无法安装npm包，所以要确保npm为最新版本。

```text

$ npm install npm@latest -g

```

#### 本地安装npm包
```text

$ npm install <package_name>

```
如果当前根目录没有node_modules文件夹，就将创建node_modules文件夹，并将下载来的npm包放在node_modules

*注意：npm install 可以查看node_modules是否下载的npm包成功，在Unix内核的系统中查看 ls node_modules中查看npm包,（windows或者mac os同理）*

**另一种做法：安装一个名为lodash的软件，列出node_modules目录的内容**

```text

$ npm install lodash
ls node_modules

```

#### 使用package.json
管理本地安装的npm软件包最好的方法是创建一个 package.json 文件。

一个 package.json 文件提供：

&nbsp;&nbsp;&nbsp;①它作为项目所依赖的包文档

&nbsp;&nbsp;&nbsp;②它允许您使用<u>语义版本规则</u>指定项目可以使用的包版本

&nbsp;&nbsp;&nbsp;③它使你的构建可复用，利用在其他项目上。

**属性**

**"name"**
* 全部小写
* 不可出现空格
* 允许有破折号和下划线

**"version"**
*以 ... 的形式 x.x.x
* 遵循<u>semver规范</u>

```text

{
    "name": "my-awesome-package",
    "version": "1.1.0"
}

```

**创建一个package.json**

```text

$ npm init

```

可以通过 npm init 使用 --yes or -y 标志运行来获取默认值：

```text

$ npm init --yes


Wrote to /home/ag_dubs/my_package/package.json:

{
  "name": "my_package",
  "description": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ashleygwilliams/my_package.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ashleygwilliams/my_package/issues"
  },
  "homepage": "https://github.com/ashleygwilliams/my_package"

```

* name：当前目录名称
* version： 版本号1.0.0
* description：自述文件中的信息，否则为空字符串 ""
* main：index.js
* scripts：默认情况下创建一个空的test脚本
* keywords：关键值的描述
* author：作者名称
* license： 版权协议 MIT or ISC
* bugs：来自当前目录的信息（如果存在）
* homepage：来自当前目录的信息（如果存在）

**指定软件包**
要指定项目所依赖的软件包，需要列出要在 package.json 文件中使用的软件包

* "dependencies"：这些软件包是您的应用程序在产生中所需要的

* "devDependencies"：这些软件包仅用于开发和测试

**手动编辑package.json**

在package.json添加一个ESlint的npm包
```text
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
    "my_dep": "^1.0.0"
  },
  "devDependencies" : {
    "my_test_framework": "^3.1.0",
    "ESlint": "^1.1.0"
  }
}
```
然后安装package.json中npm包名和版本

```text

 $ npm install

```

**--save 和 --save-dev 安装标志**

添加一个条目到你的 package.json 的 dependencies(应用程序本身需要)
```text
npm install <package_name> --save
```
添加一个条目到你的 package.json 的 devDependencies(仅用开发和测试)
```text
npm install <package_name> --save-dev
```
#### 更新本地包
```text

$ npm update  

```

#### 卸载本地包
可以使用npm uninstall <package_name>  命令从node_modules删除软件
```text
$ npm uninstall lodash
```

要将其从依赖中移除package.json, 需要使用--save标志 <u>(dependencies: 应用程序所需要的npm包)</u>

```text
$ npm uninstall --save lodash
```

要将其从依赖中移除package.json, 需要使用--save标志 <u>(devDependency: 仅用于开发和测试时期的npm包)</u>

```text
$ npm uninstall --save lodash
```


*注意：如果你把软件安装包为 "devDependency"(--save-dev), 那么--save就不会将其中删除package.json, 必须使用--save-dev卸载它*

#### 全局安装npm包

如何你想使用ESlint等代码检验工具或者自动构建工具，就得使用全局安装

**npm install -g <package>**

例如：全局安装 ESlint
```
$ npm install -g ESlint
```

#### 更新全局包
要更新全局的npm包，可以使用npm update -g <package>

```
$ npm update -g jshint
```
按需找出需要更新的npm包

```
$ npm outdated -g --depth=0
```

更新所有全局的npm包

```
$ npm update -g
```
#### 卸载全局npm包

**npm uninstall -g <package>**

```
$ npm uninstall -g jshint
```

#### 创建Node.js模块

Node.js模块是一种可以发布到npm的包。

npm init 用来创建package.json, 它会提示你输入package.json字段的值。
