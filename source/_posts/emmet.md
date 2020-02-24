title: Emmet
categories:
 - Markup
author: 宋玉
date: 2020-02-24 23:46:20
---
<a name="AwGKa"></a>
### 示例

div#box>p.title+ul.list>li.child![](https://g.yuque.com/gr/latex?%7B%E6%88%91%E6%98%AF%E7%AC%AC#card=math&code=%7B%E6%88%91%E6%98%AF%E7%AC%AC)个}*3^div#box2

div#box>p.title+ul(.list>child![](https://g.yuque.com/gr/latex?%7B%E6%88%91%E6%98%AF%E7%AC%AC#card=math&code=%7B%E6%88%91%E6%98%AF%E7%AC%AC)个}*3)+div#box2

```html
<div id="box">
  <p class="title"></p>
  <ul class="list">
    <li class="child1">我是第1个</li>
    <li class="child2">我是第2个</li>
    <li class="child3">我是第3个</li>
  </ul>
  <div id="box2"></div>
</div>
```


<a name="3c84894c"></a>
### html初始结构

**!**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```


<a name="99f1a308"></a>
### id（#）,class（.）

**div#test**

```html
<div id="test"></div>
```


<a name="7603a8d2"></a>
### 子节点（>），兄弟节点（+），上级节点（^）

**div>ul>li^div**

```html
<div>
  <ul>
    <li></li>
  </ul>
  <div></div>
</div>
```


<a name="eac24a20"></a>
### 重复（*）

div*5

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```


<a name="73f81cf3"></a>
### 分组（()）

div>(ul>li>a)+div>p

**括号里面的内容为一个代码块，表示与括号内部嵌套和外面的的层级无关**

```html
<div>
  <ul>
    <li><a href=""></a></li>
  </ul>
  <div>
    <p></p>
  </div>
</div>
```


<a name="a123693a"></a>
### 属性（[attr]）

a[href='www.baidu.com’ name=‘名字’]

```html
<a href="www.baidu.com" name="名字"></a>
```


<a name="0d87056f"></a>
### 编号（$）

ul>li.test$*3

```html
<ul>
  <li class="test1"></li>
  <li class="test2"></li>
  <li class="test3"></li>
</ul>
```

一个$ 代表一位数。

如果想自定义从几开始递增的话就利用：![](https://g.yuque.com/gr/latex?%40%2B%E6%95%B0%E5%AD%97_%E6%95%B0%E5%AD%97%3Cbr%20%2F%3E%E4%BE%8B%E5%A6%82%EF%BC%9Aul%3Eli.test#card=math&code=%40%2B%E6%95%B0%E5%AD%97_%E6%95%B0%E5%AD%97%3Cbr%20%2F%3E%E4%BE%8B%E5%A6%82%EF%BC%9Aul%3Eli.test&height=30&width=292)[@3_3 ]()

```html
<ul>
  <li class="test33"></li>
  <li class="test34"></li>
  <li class="test35"></li>
</ul>
```


<a name="e12d7f43"></a>
### 文本（{}）

ul>li.test![](https://g.yuque.com/gr/latex?%7B%E6%B5%8B%E8%AF%95#card=math&code=%7B%E6%B5%8B%E8%AF%95)}*3

```html
<ul>
  <li class="test1">测试1</li>
  <li class="test2">测试2</li>
  <li class="test3">测试3</li>
</ul>
```

div{你好}

```html
<div>你好</div>
```


<a name="a523fe8c"></a>
### 隐式标签

.test

部分标签可以不使用输入标签，直接输入指令，即可识别父类标签。

```html
<div class="test"></div>
```


ul>.test$*3

```html
<ul>
  <li class="test1"></li>
  <li class="test2"></li>
  <li class="test3"></li>
</ul>
```


select>.test$*5

```html
<select name="" id="">
  <option value="" class="test1"></option>
  <option value="" class="test2"></option>
  <option value="" class="test3"></option>
  <option value="" class="test4"></option>
  <option value="" class="test5"></option>
</select>
```

隐私标签有如下几个：<br />
li：用于 ul 和 ol 中<br />
tr：用于 table、tbody、thead 和 tfoot 中<br />
td：用于 tr 中<br />
option：用于 select 和 optgroup 中
