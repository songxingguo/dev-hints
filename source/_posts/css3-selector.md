title: CSS3 选择器
categories:
 - CSS
author: 宋玉
date: 2020-02-29 16:52:57
---
<a name="cUaim"></a>
## CSS3 选择器分类

> 基本选择器、层次选择器、伪类选择器、伪元素和属性选择器。


![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335378-734a6a3f-89ce-4c10-a9a4-9a27987ed09b.png#align=left&display=inline&height=535&originHeight=535&originWidth=916&size=0&status=done&style=none&width=916)
<a name="3982058c"></a>
## 基本选择器

<a name="06906434"></a>
### 基本选择器语法

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335445-e8fd1c86-a1c3-40b6-a808-6487237a31f7.png#align=left&display=inline&height=343&originHeight=343&originWidth=1447&size=0&status=done&style=none&width=1447)

<a name="538d9ed5"></a>
### 通配符选择器

通配符选择器（*） 用来选择所有元素，也可以选择某个元素下的所有元素。

如：

```css
* {margin: 0; padding: 0;}
```

```css
.demo * {background: orange}
```

<a name="a88fe50b"></a>
### 元素选择器

元素选择器（E）是 CSS 选择器中最常见、最基本的选择器。文档元素包括 html、body、p、div 等。

如：

```css
ul {background:grey}
```

<a name="b6619065"></a>
### ID 选择器

ID 选择器（#id）具有唯一性，在一个页面中不会同时出现 id 相同的属性值。在使用 id 选择器时，需要在 id 属性值的前面加上 "#" 号。

如：

```css
first{background: lime; color: }
```

<a name="703d7a70"></a>
### 类选择器

类选择器（.class）是以独立于文档元素的方式来指定元素样式。"类选择器在一个页面中可以有多个相同的类名，而 ID 选择器其 ID 值在整个页面中是唯一的一个"

如：

```css
.item {background: green;color: #fff;font-weight: bold}
```

<a name="75505081"></a>
#### 多类选择器

通过多个类名进行匹配，其中任何一个类名不存在都无法匹配。

如：

```css
.item.important {background:red;}
```

<a name="a131d96f"></a>
#### 带标签的类名选择器

如：

```css
ul.block{background: #ccc}
```

<a name="c954a6db"></a>
### 群组选择器

群组选择器（selector1, selectoN）是将具有相同样式的元素分组在一起，每个选择器之间用逗号（,）隔开，例如“selector1,selector2, ...,selectorN”。

如：

```css
html,body {padding: 0}
```

<a name="da63e778"></a>
## 层次选择器

层次选择器通过 HTML 的 DOM 元素间的层次关系获取元素，其主要的层次关系包括后代、父子、相邻兄弟和通用兄弟几种关系。

<a name="c8c98d2a"></a>
### 层次选择器语法

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966338389-472e09e5-298d-4905-b94e-40a93d184499.png#align=left&display=inline&height=229&originHeight=229&originWidth=1091&size=0&status=done&style=none&width=1091)

<a name="8aafd265"></a>
### 后代选择器

后代选择器（E F）也称为包含选择器，作用就是可以选择某元素的后代元素。**这里的 F 元素不管是 E 元素的子元素、孙辈元素或者更深层次的关系，都将被选中。**

如：

```css
div div {background: orange}
```

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335098-49bba5bd-2fb8-46a3-b48b-2b210fa33dbb.png#align=left&display=inline&height=408&originHeight=408&originWidth=594&size=0&status=done&style=none&width=594)

<a name="330a59c4"></a>
### 子选择器

子选择器（E>F）只能选择某元素的子元素，其中 E 为父元素，而 F 为子元素，其中 E>F 表示选择了 E 元素下所有的子元素 F。

如：

```css
body > div {background: green}
```

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335700-180226bb-a74f-4210-a2db-68665e2d64ee.png#align=left&display=inline&height=430&originHeight=430&originWidth=719&size=0&status=done&style=none&width=719)

<a name="f84df958"></a>
### 相邻兄弟选择器

相邻兄弟选择器（E + F）可以选择紧接在另一个元素后的元素，它们具有相同的父元素。换句话说：E 和 F 是同辈元素， F 元素在 E 元素后面，并且相邻。

如：

```
.active + div {background: lime}
```

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335230-9a1d2256-fd0c-4fde-ad68-481e2317a9e9.png#align=left&display=inline&height=418&originHeight=418&originWidth=535&size=0&status=done&style=none&width=535)

<a name="ffae65cd"></a>
### 通用兄弟选择器

通用兄弟选择器（E ~ F）是 CSS3 新增加的，用于 **选择某元素后面的所有兄弟元素** ，它们和相邻兄弟选择器类似，需要在同一个父元素之中。

如：

```css
.active ~ div {background: red}
```

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335783-2f120363-5054-438e-b2ae-042cda97cfba.png#align=left&display=inline&height=423&originHeight=423&originWidth=389&size=0&status=done&style=none&width=389)

<a name="a64b4571"></a>
## 伪类选择器

<a name="f7527f1f"></a>
### 动态伪类选择器

<a name="e79c1931"></a>
#### 动态伪类选择器语法

动态伪类包含两种，第一种是在链接中常看到的锚点伪类，另一种为用户行为伪类。

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966338339-3ae4bcf0-9d89-4ffe-8b22-1db700cbf1b2.png#align=left&display=inline&height=353&originHeight=353&originWidth=1086&size=0&status=done&style=none&width=1086)

> 锚点伪类的设置必须遵循一个“爱恨原则”LoVe/HAte,也就是“link-visited-hover-active”。


<a name="095be4c5"></a>
### 目标伪类选择器

目标伪类选择器 “:target”用来匹配文档（页面）的 URI 中的目标元素。例如“#contact”“:target”就是用来匹配 ID 为 “contact” 的元素。

<a name="a0782c34"></a>
#### 目标伪类选择器语法

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335558-ba860448-88e6-45a1-a920-e1e565f2b366.png#align=left&display=inline&height=104&originHeight=104&originWidth=292&size=0&status=done&style=none&width=292)

如：

[菜鸟实例](http://www.runoob.com/try/try.php?filename=trycss3_target)

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335921-5702943b-d44a-4f75-aa5b-c46cd07b1203.png#align=left&display=inline&height=380&originHeight=380&originWidth=726&size=0&status=done&style=none&width=726)

<a name="76b05ebe"></a>
### 语言伪类选择器

语言伪类选择器是根据元素的语言编码匹配元素。E:lang(language) 表示选择匹配 E 的所有元素，且匹配元素指定了 lang 属性，而且其值为 language 。

如：

```css
p:lang(it)
{ 
  background:yellow;
}
```

```html
<p lang="it">Ciao bella!</p>
```

[菜鸟示例](http://www.runoob.com/try/try.php?filename=trycss_sel_lang)

<a name="5eabc828"></a>
### UI 元素状态伪类选择器

UI 元素状态伪类选择器主要用于 from 表单元素上，以提高网页的人机交互、操作逻辑以及页面的整体美观。

<a name="cbf860f3"></a>
#### UI 元素状态伪类选择器语法

UI 元素的状态包括：启用、禁用、选中、未选中、获得焦点、失去焦点、锁定和待机等。

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966336394-b1f3ecc6-4da5-4799-a3ad-85764ef29a72.png#align=left&display=inline&height=134&originHeight=134&originWidth=721&size=0&status=done&style=none&width=721)

如：

```html
<input type="text" value="Mouse" /><br>
<input type="text" disabled="disabled" value="Disneyland" />
```

```css
input[type="text"]:enabled
{
  background:#ffff00;
}
input[type="text"]:disabled
{
  background:#dddddd;
}
```

[菜鸟实例](http://www.runoob.com/try/try.php?filename=trycss3_enabled_disabled)

<a name="628b5c2c"></a>
### 结构伪类选择器

结构伪类选择器可以根据元素在文档树中的某些特性（如相对位置）定位到它们。

<a name="de5c4441"></a>
#### 结构伪类选择器语法

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966336410-f13f1bbf-c5af-4c0b-a2d3-70ac6236a38a.png#align=left&display=inline&height=194&originHeight=194&originWidth=726&size=0&status=done&style=none&width=726)

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335889-0013c103-2bfe-4851-8071-5993f3c26884.png#align=left&display=inline&height=291&originHeight=291&originWidth=724&size=0&status=done&style=none&width=724)

CSS3 结构伪类选择器

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966336458-29077665-07f3-4646-b72f-de3c6fe67ea7.png#align=left&display=inline&height=319&originHeight=319&originWidth=466&size=0&status=done&style=none&width=466)

<a name="c24e03e5"></a>
### 结构伪类选择器中的 n 是什么

4 个伪类选择器接受参数 n ：

- :nth-child(n)
- :nth-last-child(n)
- :nth-of-type(n)
- :nth-last-of-type(n)

参数按常用情况划分为 7 种情形：

1. **参数 n 为具体的数值**
<br />这个数值可以是任何大于 0 的正整数，例如 “:nth-child(3)”。
1. **参数 n 为表达式 “n_length”_
<br />选择 n 的倍数，其中 n 从 0 开始计算，而 length 为大于 0 的整数，例如 “:nth-child(2n)”。
1. **参数 n 为表达式 “n+length”**
<br />选择大于或等于 length 的元素，例如 “:nth-child(n+3)”。
1. **参数 n 为表达式 “-n+length”**
<br />选择小于或等于 length 的元素，例如 “:nth-child(-n+3)”。
1. **参数 n 为表达式 “n_length+b”_
<br />其中 b 是偏移值，其表示隔 length 个元素选中第 “n*length+b” 个元素，例如“:nth-child(2n+1)” 。
1. **参数 n 为关键词 “odd”**
<br />选择系类中的奇数（1、3、5、7）元素，其效果等同于 “:nth-child(2n+1)”。
1. **参数 n 为关键词 “even”**
<br />选择系类中的奇数（2、4、6、8）元素，其效果等同于 “:nth-child(2n)”。

结构伪类表达式的计算列表



> **:nth-child(n) 和 :nth-of-type(n) 的区别：**
> :nth-child 选择的是某父元素的子元素，这个子元素并没有指定确切的类型，而 :nth-of-type 选择的是某父元素的子元素，而且这个子元素是指定类型。


<a name="ab346b0a"></a>
### 否定伪类选择器

否定选择器 “:not()”主要用于定位不匹配该选择器的元素。

<a name="b797a17f"></a>
#### 否定伪类选择器语法

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966336819-df0ca815-eb93-4331-b8b2-ca7ec91823eb.png#align=left&display=inline&height=78&originHeight=78&originWidth=329&size=0&status=done&style=none&width=329)

如：

```css
:not(footer){}
```

<a name="8863f1d2"></a>
## 伪元素

伪元素可以用于定位文档中包含的文本，但无法在文档树中定位。

> CSS3 将伪元素调整为 双冒号。


<a name="5bef4fb3"></a>
### 伪元素 ::first-letter

“:first-letter” 用于选择文本块的第一个字母，除非在同一行中包含一些其他元素。<br />例如下沉字母或首字母。

<a name="1e2c0fa1"></a>
### 伪元素 ::first-line

“::first-line” 用来匹配元素的第一行文本，匹配 block、inline-block、tablee-caption、table-cell 等级别元素的第一行。

<a name="8833cfe1"></a>
### 伪元素 ::before 和 ::after

“::before” 和 “::after”不是指存在于标记中的内容，而是可以插入额外内容的位置。尽管生成的内容不会成为 DOM 的一部分，但它同样可以设置样式。

> 要为伪元素生成内容，还需要配合 content 属性。


如：

在页面上所有外部链接之后的括号中附加它们指向的 URL。

```css
a[herf^=http]::after {
  content:"("attr(herf)")"
}
```

<a name="003d9426"></a>
### 伪元素 ::selection

“::selection” 是用来匹配突出显示的文本。

[菜鸟案例](http://www.runoob.com/try/try.php?filename=trycss3_selection)

<a name="9acd09cf"></a>
## 属性选择器

属性选择器可以基于元素的属性来匹配元素，支持基于模式匹配来定位元素。

<a name="ff57ab6e"></a>
### 属性选择器语法

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966336493-96f6ebba-5f8c-4f47-9ebc-1d3489261a15.png#align=left&display=inline&height=103&originHeight=103&originWidth=720&size=0&status=done&style=none&width=720)

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966335663-8d9c5cc3-2cf0-4246-a385-5e0f50cdf215.png#align=left&display=inline&height=369&originHeight=369&originWidth=720&size=0&status=done&style=none&width=720)

CSS3 中常见的通配符

![](https://cdn.nlark.com/yuque/0/2020/png/394169/1582966338290-42433667-54f6-435e-83fd-7f25744bce92.png#align=left&display=inline&height=195&originHeight=195&originWidth=726&size=0&status=done&style=none&width=726)

如：

多属性选择元素

```css
a[id][title]{background-color: red;}
```

> E[attr=val] 选择器中，属性和属性值必须完全匹配。例如只有a[class="links item"]{...} 才能匹配。

