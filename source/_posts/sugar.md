title: 语法糖🍬
categories:
 - JavaScript
author: 宋玉
date: 2020-03-03 21:23:22
---
<a name="CAKpe"></a>
## 函数绑定
<a name="q5HUD"></a>
## Promise
> 实现异步操作的链式调用，解决回调地狱

<a name="LUqpX"></a>
### 回调地狱 （老酒）
```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

<a name="ryHEa"></a>
### Promise 链 （新壶）
```javascript
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

![](https://cdn.nlark.com/yuque/0/2019/png/394169/1566980356127-62c32e09-8967-4e9e-be81-ae8feffa5f3a.png)
<a name="h3MDs"></a>
## `[async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)` 

> 让代码同步执行


[`AsyncFunction`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

> 异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 返回其结果。


<a name="W1KCK"></a>
## Decorator
> Object.defineProperty(target,name,descriptor)


<a name="k1e2D"></a>
## [**展开语法（...）**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<a name="8fg4Z"></a>
### `[Function.prototype.apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)` （老酒）

```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```

<a name="c5Sn7"></a>
### ... （新壶）
```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

<a name="9jH5k"></a>
## 结构赋值
······
