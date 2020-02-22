title: grid.css
categories:
 - CSS
author: 宋玉
date: 2020-02-22 13:21:41
---
- [CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
- [写给自己看的display: grid布局教程](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/)

生成代码：

```javascript
function generator (name, attr) {
  for (let i = 24; i >= 1; i--) {
    console.log(`.col-${name ? `${name}-` : ''}${i} {
        ${attr}: ${parseFloat(((100 / 24) * i).toFixed(4))}%;
    }`)
  }
}
generator("pull", "right")
```

```css
.grid-container {
  min-width: 100vw;
  .row:before,
  .row:after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    visibility: hidden;
    clear: both;
  }
  [class*='col-'] {
    position: relative;
    float: left;
    min-height: 1px;
    box-sizing: border-box;
  }
  .col-24 {
    width: 100%;
  }
  .col-23 {
    width: 95.8333%;
  }
  .col-22 {
    width: 91.6667%;
  }
  .col-21 {
    width: 87.5%;
  }
  .col-20 {
    width: 83.3333%;
  }
  .col-19 {
    width: 79.1667%;
  }
  .col-18 {
    width: 75%;
  }
  .col-17 {
    width: 70.8333%;
  }
  .col-16 {
    width: 66.6667%;
  }
  .col-15 {
    width: 62.5%;
  }
  .col-14 {
    width: 58.3333%;
  }
  .col-13 {
    width: 54.1667%;
  }
  .col-12 {
    width: 50%;
  }
  .col-11 {
    width: 45.8333%;
  }
  .col-10 {
    width: 41.6667%;
  }
  .col-9 {
    width: 37.5%;
  }
  .col-8 {
    width: 33.3333%;
  }
  .col-7 {
    width: 29.1667%;
  }
  .col-6 {
    width: 25%;
  }
  .col-5 {
    width: 20.8333%;
  }
  .col-4 {
    width: 16.6667%;
  }
  .col-3 {
    width: 12.5%;
  }
  .col-2 {
    width: 8.3333%;
  }
  .col-1 {
    width: 4.1667%;
  }
  // 列偏移
  .col-offset-24 {
    margin-left: 100%;
  }
  .col-offset-23 {
    margin-left: 95.8333%;
  }
  .col-offset-22 {
    margin-left: 91.6667%;
  }
  .col-offset-21 {
    margin-left: 87.5%;
  }
  .col-offset-20 {
    margin-left: 83.3333%;
  }
  .col-offset-19 {
    margin-left: 79.1667%;
  }
  .col-offset-18 {
    margin-left: 75%;
  }
  .col-offset-17 {
    margin-left: 70.8333%;
  }
  .col-offset-16 {
    margin-left: 66.6667%;
  }
  .col-offset-15 {
    margin-left: 62.5%;
  }
  .col-offset-14 {
    margin-left: 58.3333%;
  }
  .col-offset-13 {
    margin-left: 54.1667%;
  }
  .col-offset-12 {
    margin-left: 50%;
  }
  .col-offset-11 {
    margin-left: 45.8333%;
  }
  .col-offset-10 {
    margin-left: 41.6667%;
  }
  .col-offset-9 {
    margin-left: 37.5%;
  }
  .col-offset-8 {
    margin-left: 33.3333%;
  }
  .col-offset-7 {
    margin-left: 29.1667%;
  }
  .col-offset-6 {
    margin-left: 25%;
  }
  .col-offset-5 {
    margin-left: 20.8333%;
  }
  .col-offset-4 {
    margin-left: 16.6667%;
  }
  .col-offset-3 {
    margin-left: 12.5%;
  }
  .col-offset-2 {
    margin-left: 8.3333%;
  }
  .col-offset-1 {
    margin-left: 4.1667%;
  }
  .col-offset-0 {
    margin-left: 0;
  }
  //列排序
  .col-pull-24 {
    right: 100%;
  }
  .col-pull-23 {
    right: 95.8333%;
  }
  .col-pull-22 {
    right: 91.6667%;
  }
  .col-pull-21 {
    right: 87.5%;
  }
  .col-pull-20 {
    right: 83.3333%;
  }
  .col-pull-19 {
    right: 79.1667%;
  }
  .col-pull-18 {
    right: 75%;
  }
  .col-pull-17 {
    right: 70.8333%;
  }
  .col-pull-16 {
    right: 66.6667%;
  }
  .col-pull-15 {
    right: 62.5%;
  }
  .col-pull-14 {
    right: 58.3333%;
  }
  .col-pull-13 {
    right: 54.1667%;
  }
  .col-pull-12 {
    right: 50%;
  }
  .col-pull-11 {
    right: 45.8333%;
  }
  .col-pull-10 {
    right: 41.6667%;
  }
  .col-pull-9 {
    right: 37.5%;
  }
  .col-pull-8 {
    right: 33.3333%;
  }
  .col-pull-7 {
    right: 29.1667%;
  }
  .col-pull-6 {
    right: 25%;
  }
  .col-pull-5 {
    right: 20.8333%;
  }
  .col-pull-4 {
    right: 16.6667%;
  }
  .col-pull-3 {
    right: 12.5%;
  }
  .col-pull-2 {
    right: 8.3333%;
  }
  .col-pull-1 {
    right: 4.1667%;
  }
  .col-pull-0 {
    right: auto;
  }
  .col-push-24 {
    left: 100%;
  }
  .col-push-23 {
    left: 95.8333%;
  }
  .col-push-22 {
    left: 91.6667%;
  }
  .col-push-21 {
    left: 87.5%;
  }
  .col-push-20 {
    left: 83.3333%;
  }
  .col-push-19 {
    left: 79.1667%;
  }
  .col-push-18 {
    left: 75%;
  }
  .col-push-17 {
    left: 70.8333%;
  }
  .col-push-16 {
    left: 66.6667%;
  }
  .col-push-15 {
    left: 62.5%;
  }
  .col-push-14 {
    left: 58.3333%;
  }
  .col-push-13 {
    left: 54.1667%;
  }
  .col-push-12 {
    left: 50%;
  }
  .col-push-11 {
    left: 45.8333%;
  }
  .col-push-10 {
    left: 41.6667%;
  }
  .col-push-9 {
    left: 37.5%;
  }
  .col-push-8 {
    left: 33.3333%;
  }
  .col-push-7 {
    left: 29.1667%;
  }
  .col-push-6 {
    left: 25%;
  }
  .col-push-5 {
    left: 20.8333%;
  }
  .col-push-4 {
    left: 16.6667%;
  }
  .col-push-3 {
    left: 12.5%;
  }
  .col-push-2 {
    left: 8.3333%;
  }
  .col-push-1 {
    left: 4.1667%;
  }
  .col-push-0 {
    left: auto;
  }
}
```

```css
// 自定义行两端的间隔
@mixin make-row($gutter) {
  .row {
    margin-left: ($gutter / -2);
    margin-right: ($gutter / -2);
  }
}
// 自定义列之间有间隔
@mixin make-md-column($gutter) {
  padding-left: ($gutter / 2);
  padding-right: ($gutter / 2);
}
```

