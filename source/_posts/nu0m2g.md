title: 交互
categories:
 - Books
author: 宋玉
date: 2020-10-31 11:03:23
---

### 优雅地增加点击区域大小
```css
.icon-clear {
   width：16px;
   height：16px;
   border：11px solid transparent;
   ……
}
```

### 如何添加border 对原有布局不影响
1、利用设置属性box-sizing设置容器为怪异模式
```css
box-sizing:border-box;
border: 2px solid yellow;
```
2、利用h5的新属性box-shadow为元素添加实体的阴影作为边框
```css
// good
box-shadow: inset 2px 2px 0 0 yellow,inset -2px -2px 0 0 yellow;
```

### 图片加载失败后CSS样式处理最佳实践


> `onerror`事件


#### `onerror`事件
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1604113250882-6d2c385c-32d6-429b-9dd3-8064a7a065ca.png#align=left&display=inline&height=97&margin=%5Bobject%20Object%5D&name=image.png&originHeight=193&originWidth=470&size=39426&status=done&style=none&width=235)
```html
<img src="xxx.png" alt="鑫空间鑫生活" onerror="this.src='break.svg';">
```
```css
img[src$="break.svg"] {
    object-fit: contain;
}
```

#### 同时显示 alt 信息
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1604113232090-26f5e4a2-e014-4320-b7ba-3d640724df4f.png#align=left&display=inline&height=116&margin=%5Bobject%20Object%5D&name=image.png&originHeight=231&originWidth=476&size=39137&status=done&style=none&width=238)
```html
<img src="zxx.png" alt="CSS新世界封面" onerror="this.classList.add('error');">
```
```css
img.error {
  display: inline-block;
  transform: scale(1);
  content: '';
  color: transparent;
}
img.error::before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: #f5f5f5 url(break.svg) no-repeat center / 50% 50%;
}
img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0; bottom: 0;
  width: 100%;
  line-height: 2;
  background-color: rgba(0,0,0,.5);
  color: white;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

#### CSS代码中的兜底图像均使用的外链地址
```css
img.error::before {
  background: #f5f5f5 url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M304.128 456.192c48.64 0 88.064-39.424 88.064-88.064s-39.424-88.064-88.064-88.064-88.064 39.424-88.064 88.064 39.424 88.064 88.064 88.064zm0-116.224c15.36 0 28.16 12.288 28.16 28.16s-12.288 28.16-28.16 28.16-28.16-12.288-28.16-28.16 12.288-28.16 28.16-28.16z' fill='%23e6e6e6'/%3E%3Cpath d='M887.296 159.744H136.704C96.768 159.744 64 192 64 232.448v559.104c0 39.936 32.256 72.704 72.704 72.704h198.144L500.224 688.64l-36.352-222.72 162.304-130.56-61.44 143.872 92.672 214.016-105.472 171.008h335.36C927.232 864.256 960 832 960 791.552V232.448c0-39.936-32.256-72.704-72.704-72.704zm-138.752 71.68v.512H857.6c16.384 0 30.208 13.312 30.208 30.208v399.872L673.28 408.064l75.264-176.64zM304.64 792.064H165.888c-16.384 0-30.208-13.312-30.208-30.208v-9.728l138.752-164.352 104.96 124.416-74.752 79.872zm81.92-355.84l37.376 228.864-.512.512-142.848-169.984c-3.072-3.584-9.216-3.584-12.288 0L135.68 652.8V262.144c0-16.384 13.312-30.208 30.208-30.208h474.624L386.56 436.224zm501.248 325.632c0 16.896-13.312 30.208-29.696 30.208H680.96l57.344-93.184-87.552-202.24 7.168-7.68 229.888 272.896z' fill='%23e6e6e6'/%3E%3C/svg%3E") no-repeat center / 50% 50%;
}
```
[图片加载失败后CSS样式处理最佳实践](https://www.zhangxinxu.com/wordpress/2020/10/css-style-image-load-fail/)<br />

