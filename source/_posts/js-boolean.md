title: Boolean
categories:
 - JavaScript
author: 宋玉
date: 2020-02-22 12:23:37
---
**false: ** `0`、`-0`、[`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)、`false`、[`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)、[`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)、或者空字符串（`""`）、[`document.all`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/all)

```javascript
var x = Boolean(expression);     // 推荐
var x = !!(expression);          // 推荐
var x = new Boolean(expression); // 不太好
```
<a name="Creating_Boolean_objects_with_an_initial_value_of_false"></a>
### 创建值为 `false` 的 `Boolean` 对象
```javascript
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);
```
<a name="AQ7nh"></a>
### 创建值为 `true` 的  `Boolean` 对象
```javascript
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```
![](https://cdn.nlark.com/yuque/0/2019/png/394169/1566101300444-2ac1cdd0-29a7-480e-8005-600d5d384208.png)
