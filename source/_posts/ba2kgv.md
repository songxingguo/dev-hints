title: 文字排版
categories:
 - Books
author: 宋玉
date: 2020-10-05 17:00:25
---

### 字母x与CSS中的x-height 
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1601884705951-314b33c9-f68b-4420-8742-d211bfbc3b40.png#align=left&display=inline&height=110&margin=%5Bobject%20Object%5D&name=image.png&originHeight=110&originWidth=410&size=28560&status=done&style=none&width=410)

- baseline 基线
- ascender height：上下线高度。
- cap height：大写字母高度。
- median：中线。
- descender height：下行线高度。




### 图标和文字中间位置对齐
> ex CSS中的一个相对单位，指的是小写字母x的高度。

```css
.icon-arrow {
   display：inline-block;
   width：20px;
   height：1ex;
   background：url（arrow.png） no-repeat center;
}
```

### line-height
> 内联元素的高度之本，改变“行距。


<br />行距”分散在当前文字的上方和下方，也就是即使是第一行文字，其上方也是有“行距”的，只不过这个“行距”的高度仅仅是完整“行距”高度的一半。<br />
<br />行距 = 行高− em-box<br />
<br />行距 = line-height - font-size<br />
<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1601885856870-486ddbae-71b2-4e53-bb64-174a5ee12145.png#align=left&display=inline&height=205&margin=%5Bobject%20Object%5D&name=image.png&originHeight=205&originWidth=438&size=31518&status=done&style=none&width=438)

### 多行文本或者替换元素的垂直居中
```html
<div class="box">
   <div class="content">基于行高实现的……</div>
</div>
```
```css
.box {
   line-height：120px;
   background-color：#f0f3f9;
}
.content {
   display：inline-block;
   line-height：20px;
   margin：0 20px;
   vertical-align：middle;
}
```

### 创建 "幽灵空白节" 
> display：inline-block，创建一个独立的“行框盒子”。


### vertical-align 
> vertical-align属性只能作用在display计算值为inline、inline- block，inline-table或table-cell的元素上。


### 图片垂直居中
> 让幽灵节点有高度，设置 line-height

```html
<div class="box">
   <img src="1.jpg">
</div>
```
```css
.box {
   height：128px;
   line-height：128px;   /* 关键CSS属性 */
}
.box > img {
   height：96px;
   vertical-align：middle;
}
```

### 常见的图片底部留间隙
> “幽灵空白节点”、line-height和vertical-align属性共同作用的结果

