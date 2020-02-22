title: Markdown
categories:
 - Markup
author: 宋玉
date: 2020-02-22 14:42:44
---
title: Markdown常用命令<br />
author: songxingguo<br />
tags:

- 'Markdown '
- 常用命令<br />
categories:
- 开发者手册<br />
date: 2018-07-29 05:16:00

---

<a name="27ee55db"></a>
# Markdown常用命令

> 用于展示常用的Markdown命令，采用 **示例** 和 **代码** 的形式展示，部分语法会给出 **说明** 。

<a name="0d6149a5"></a>
## 介绍Markdown

<a name="32c65d8d"></a>
### 标题

- <a name="ef5bce11"></a>
#### Atx方式
<a name="ae271154"></a>
# 一级标题
<a name="de86106d"></a>
## 二级标题
<a name="27f2c5c6"></a>
### 三级标题
<a name="c9611747"></a>
#### 四级标题
<a name="a791de10"></a>
##### 五级标题
<a name="de2687f9"></a>
###### 六级标题
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

- <a name="e3e64b9f"></a>
#### Setext方式
<a name="c0c391e5"></a>
# 大标题
<a name="407b516c"></a>
## 小标题
```
大标题
===
小标题
---
```


<a name="3712972d"></a>
### 列表

> 符号之后的空格不能少，-+*效果一样，但不能混合使用，因混合是嵌套列表，内容可超长


- <a name="a9f2ad8a"></a>
#### 无序列表

  - 无序列表1
  - 无序列表2
  - 无序列表3
```
- 无序列表1
- 无序列表2
- 无序列表3
```

- <a name="f4c65092"></a>
#### 有序列表

  1. 有序列表1
  2. 有序列表2
  3. 有序列表3
```
1. 有序列表1
2. 有序列表2
3. 有序列表3
```

- <a name="d8a9f6d1"></a>
#### 嵌套列表

  - 嵌套列表1
    - 嵌套列表2
    - 嵌套列表3
  - 嵌套列表4
```
- 嵌套列表1
  + 嵌套列表2
  * 嵌套列表3
- 嵌套列表4
```

<a name="3b61c966"></a>
### 引用

> 这里是引用
> > 这里是引用中的引用



```
> 这里是引用
 >>这里是引用中的引用
```

<a name="bb2ed14c"></a>
### 图片与链接

- <a name="322186cc"></a>
#### 插入连接


[阿有的博客](https://www.songxingguo.com/)

```
[阿有的博客](https://www.songxingguo.com/)
```

<a name="48b19cb8"></a>
##### 自动连接

[1328989942@qq.com](mailto:1328989942@qq.com)

```
<1328989942@qq.com>
```

- <a name="4938f95b"></a>
#### 插入图片


![](http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg#alt=%E8%BF%99%E9%87%8C%E6%98%AF%E5%9B%BE%E7%89%87)

```
![这里是图片](http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg)
```

<a name="5fa4ab4d"></a>
##### 设置图片宽度和高度
![](http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg#alt=%E8%BF%99%E9%87%8C%E6%98%AF%E8%AE%BE%E7%BD%AE%E5%AE%BD%E5%BA%A6%E5%92%8C%E9%AB%98%E5%BA%A6%E7%9A%84%E5%9B%BE%E7%89%87&height&width=256)

```
<img src="http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg" width=256 height=auto alt="这里是设置宽度和高度的图片" />
```

<a name="e4bbbf72"></a>
### 粗体与斜体

- <a name="e803663c"></a>
#### 粗体


**这里是粗体**

```
**这里是粗体**
```

- <a name="81d6da77"></a>
#### 斜体


_这里是斜体_

```
*这里是斜体*
```

<a name="73266dec"></a>
### 代码框

```
<!DOCTYPE html>
<html>
 <head>
   <title>A Tiny HTML Document</title>
 </head>
 <body>
   <p>Let's rock the browser, HTML5 style.</p>
 </body>
</html>
```

<a name="8c47ecd4"></a>
### 分割线

---

```
***
```

<a name="ee656aa1"></a>
### 注释

```
<!-- 注释 -->
```

<a name="d482086f"></a>
### 段落

半方大的空白 或 看，飞碟<br />
全方大的空白 或 看，飞碟<br />
不断行的空白格 或 看，飞碟<br />
  段落从此开始。

```
半方大的空白&ensp;或&#8194;看，飞碟
全方大的空白&emsp;或&#8195;看，飞碟
不断行的空白格&nbsp;或&#160;看，飞碟
&emsp;&emsp;段落从此开始。
```

<a name="14d34236"></a>
### 标签

`HTML`、`CSS`、`JavaScript`

```
`HTML`、`CSS`、`JavaScript`
```

<a name="57777e89"></a>
### 字体、字号、颜色

我是黑体字<br />
我是微软雅黑<br />
我是华文彩云<br />
黑体<br />
null<br />
gray

```
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=#0099ff size=12 face="黑体">黑体</font>
<font color=#00ffff size=3>null</font>
<font color=gray size=5>gray</font>
```

<a name="b339aa87"></a>
### 表格
| 项目 | 价格 |
| --- | --- |
| Computer | $1600 |
| Phone | $12 |
| Pipe | $1 |


```
项目      | 价格
--------   | ---
Computer   | $1600
Phone     | $12
Pipe      | $1
```

<a name="84a8c866"></a>
### 生成目录

> 该命令在本文档中是不能正确显示的。


```
[TOC]
```

<a name="bf3eda0e"></a>
### 链接引用

> 可以用于将链接统一放在一起，方便管理。


[这里是链接](https://www.songxingguo.com/)

```
[这里是链接][link]

[link]: https://www.songxingguo.com/
```

- <a name="fb507f2c"></a>
#### 参考文献


> 该命令在本文档中是不能正确显示的。


```
参考文献[^demo]
[^demo]: http://marxi.co/client_en
```

<a name="84f1dff8"></a>
## 相关文章阅读

- [认识与入门 Markdown](https://sspai.com/post/25137)
- [Markdown 语法 示例 字体 字号 颜色](https://blog.csdn.net/u011419965/article/details/50536937)
- [Welcome to Marxico](http://marxi.co/#fn:demo)
- [MarkDown 图片大小问题](https://blog.csdn.net/yhl_leo/article/details/50099843)
- [Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/#list)
- [Markdown 语法说明 (英文版)](https://daringfireball.net/projects/markdown/syntax)
