title: Markdown
categories:
 - Markup
author: 宋玉
date: 2020-02-25 21:18:45
---
用于展示常用的Markdown命令，采用 **示例** 和 **代码** 的形式展示，部分语法会给出 **说明** 。

---

<a name="916010e2"></a>
## Markdown 常用命令

<a name="32c65d8d"></a>
### 标题

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

```
大标题
===
小标题
---
```

<a name="3712972d"></a>
### 列表

**符号之后的空格不能少，-+_效果一样，但不能混合使用，因混合是嵌套列表，内容可超长_

- 无序列表
  - 无序列表1
  - 无序列表2
  - 无序列表3

```
- 无序列表1
- 无序列表2
- 无序列表3
```

- 有序列表
  1. 有序列表1
  2. 有序列表2
  3. 有序列表3

```
1. 有序列表1
2. 有序列表2
3. 有序列表3
```

- 嵌套列表
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

- 插入链接

- [阿有的博客](https://www.songxingguo.com/)

```
  [阿有的博客](https://www.songxingguo.com/)
```

- 自动链接

- [1328989942@qq.com](mailto:1328989942@qq.com)

```
<1328989942@qq.com>
```

- 插入图片
- ![](http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg#alt=%E8%BF%99%E9%87%8C%E6%98%AF%E5%9B%BE%E7%89%87)

```
![这里是图片](http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg)
```

- 设置图片宽度和高度
- ![](http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg#alt=%E8%BF%99%E9%87%8C%E6%98%AF%E8%AE%BE%E7%BD%AE%E5%AE%BD%E5%BA%A6%E5%92%8C%E9%AB%98%E5%BA%A6%E7%9A%84%E5%9B%BE%E7%89%87&height&width=256#alt=%E8%BF%99%E9%87%8C%E6%98%AF%E5%9B%BE%E7%89%87)

```
<img src="http://pajsphiyq.bkt.clouddn.com/images/mine/mine-bg.jpg" width=256 height=auto alt="这里是设置宽度和高度的图片" />
```

<a name="e4bbbf72"></a>
### 粗体与斜体

- 粗体
- **这里是粗体**

```
**这里是粗体**
```

- 斜体
- _这里是斜体_

```
*这里是斜体*
```

<a name="73266dec"></a>
### 代码框

```html
<!DOCTYPE html>
```

<a name="8c47ecd4"></a>
### 分割线

```
---
***
```

<a name="ee656aa1"></a>
### 注释

```
<!-- 注释 -->
```

<a name="d482086f"></a>
### 段落

半方大的空白 或 看，飞碟


全方大的空白 或 看，飞碟


不断行的空白格 或 看，飞碟


  段落从此开始。

```html
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

**该命令在本文档中是不能正确显示的。**

```
[TOC]
```

<a name="bf3eda0e"></a>
### 链接引用

**可以用于将链接统一放在一起，方便管理。**

- [这里是链接](https://www.songxingguo.com/)

```
[这里是链接][link]

[link]: https://www.songxingguo.com/
```

- 参考文献
- **该命令在本文档中是不能正确显示的。**

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
