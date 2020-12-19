title: 微信小程序文档
categories:
 - 微信小程序
author: 宋玉
date: 2020-12-19 18:15:56
---


### 小程序的运行环境
网页开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ浏览器等，在移动端需要面对Safari、Chrome以及 iOS、Android 系统中的各式 WebView 。而小程序开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具，小程序中三大运行环境也是有所区别的，如表1-1所示。

| **运行环境** | **逻辑层** | **渲染层** |
| :--- | :--- | :--- |
| iOS | JavaScriptCore | WKWebView |
| 安卓 | V8 | chromium定制内核 |
| 小程序开发者工具 | NWJS | Chrome WebView |


<br />MVVM 的开发模式（例如 React, Vue），提倡把渲染和逻辑分离。简单来说就是不要再让 `JS` 直接操控 `DOM`，`JS` 只需要管理状态即可，然后再通过一种模板语法来描述状态和界面结构的关系即可。


### 渲染层和逻辑层
首先，我们来简单了解下小程序的运行环境。小程序的运行环境分成渲染层和逻辑层，其中 WXML 模板和 WXSS 样式工作在渲染层，JS 脚本工作在逻辑层。<br />小程序的渲染层和逻辑层分别由2个线程管理：渲染层的界面使用了WebView 进行渲染；逻辑层采用JsCore线程运行JS脚本。一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端（下文中也会采用Native来代指微信客户端）做中转，逻辑层发送网络请求也经由Native转发，小程序的通信模型下图所示。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1608369101869-23c83af8-04aa-4551-969c-b2b855e0e4aa.png#align=left&display=inline&height=873&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1746&originWidth=2356&size=245216&status=done&style=none&width=1178)

### 协作开发
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1608369392243-4a71107c-256b-4ace-a209-854c5f402fe3.png#align=left&display=inline&height=295&margin=%5Bobject%20Object%5D&name=image.png&originHeight=590&originWidth=1178&size=26014&status=done&style=none&width=589)<br />项目管理成员负责统筹整个项目的进展和风险、把控小程序对外发布的节奏，产品组提出需求，设计组与产品讨论并对需求进行抽象，设计出可视化流程与图形，输出设计方案。开发组依据设计方案，进行程序代码的编写，代码编写完成后，产品组与设计组体验小程序的整体流程，测试组编写测试用例并对小程序进行各种边界测试。项目一般的成员构成与工作流程如图5-2所示。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1608369401897-f4a34f59-7319-4485-968c-1c2690d5f93a.png#align=left&display=inline&height=216&margin=%5Bobject%20Object%5D&name=image.png&originHeight=432&originWidth=1458&size=34148&status=done&style=none&width=729)<br />一般的软件开发流程，开发者编写代码自测开发版程序，直到程序达到一个稳定可体验的状态时，开发者会把这个体验版本给到产品经理和测试人员进行体验测试，最后修复完程序的Bug后发布供外部用户正式使用。小程序的版本根据这个流程设计了小程序版本的概念，如表5-3所示。

因为处于开发中的版本是不稳定的，开发者随时会修改代码覆盖开发版，为了让测试和产品经理有一个完整稳定的版本可以体验测试，小程序平台允许把其中一个开发版本设置成体验版，因此建议在项目开发阶段特殊分配一个开发角色，用于上传稳定可供体验测试的代码，并把他上传的开发版本设置成体验版。<br />


### 小程序框架


```javascript
// xxx.js
const appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```



#### 页面生命周期
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1608370623598-88f0e485-047c-4b7b-9a83-05a7a158e19d.png#align=left&display=inline&height=1014&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1014&originWidth=662&size=59224&status=done&style=none&width=662)<br />


#### 异步 API 返回 Promise


1. 当没有回调参数时，异步接口返回 promise。此时若函数调用失败进入 fail 逻辑， 会报错提示 `Uncaught (in promise)`，开发者可通过 catch 来进行捕获。
1. [wx.onUnhandledRejection](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html) 可以监听未处理的 Promise 拒绝事件。

#### 尺寸单位

- rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
| 设备 | rpx换算px (屏幕宽度/750) | px换算rpx (750/屏幕宽度) |
| :--- | :--- | :--- |
| iPhone5 | 1rpx = 0.42px | 1px = 2.34rpx |
| iPhone6 | 1rpx = 0.5px | 1px = 2rpx |
| iPhone6 Plus | 1rpx = 0.552px | 1px = 1.81rpx |

**建议：** 开发微信小程序时设计师可以用 iPhone6 作为视觉稿的标准。<br />**注意：** 在较小的屏幕上不可避免的会有一些毛刺，请在开发时尽量避免这种情况。

#### 事件分类
事件分为冒泡事件和非冒泡事件：

1. 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
1. 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

### 
WXML的冒泡事件列表：

| 类型 | 触发条件 | 最低版本 |
| :--- | :--- | :--- |
| touchstart | 手指触摸动作开始 |  |
| touchmove | 手指触摸后移动 |  |
| touchcancel | 手指触摸动作被打断，如来电提醒，弹窗 |  |
| touchend | 手指触摸动作结束 |  |
| tap | 手指触摸后马上离开 |  |
| longpress | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 | [1.5.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| longtap | 手指触摸后，超过350ms再离开（推荐使用longpress事件代替） |  |
| transitionend | 会在 WXSS transition 或 wx.createAnimation 动画结束后触发 |  |
| animationstart | 会在一个 WXSS animation 动画开始时触发 |  |
| animationiteration | 会在一个 WXSS animation 一次迭代结束时触发 |  |
| animationend | 会在一个 WXSS animation 动画完成时触发 |  |
| touchforcechange | 在支持 3D Touch 的 iPhone 设备，重按时会触发 | [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |





#### 事件的捕获阶段
自基础库版本 [1.5.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 起，触摸类事件支持捕获阶段。捕获阶段位于冒泡阶段之前，且在捕获阶段中，事件到达节点的顺序与冒泡阶段恰好相反。需要在捕获阶段监听事件时，可以采用`capture-bind`、`capture-catch`关键字，后者将中断捕获阶段和取消冒泡阶段。<br />
<br />
<br />

