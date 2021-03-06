title: wxApi.js
categories:
 - JavaScript
author: 宋玉
date: 2020-08-17 16:36:21
---
```javascript
import {PAY_CODE} from '../enum/code'

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param url String 需要跳转的 tabBar 页面的路径
 */
function switchTab ({url}) {
  wx.switchTab({
    url
  })
}

/**
 * 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
 * @param url String 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数
 * @param fail Function 接口调用失败的回调函数
 */
function navigateTo ({url, fail}) {
  wx.navigateTo({
    url,
    fail
  })
}

/**
 * 关闭当前页面，返回上一页面或多级页面
 * @param delta Number 返回的页面数，如果 delta 大于现有页面数，则返回到首页
 */
function navigateBack ({delta}) {
  wx.navigateBack({
    delta
  })
}

/**
 * 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
 * @param url String 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数
 */
function redirectTo ({url}) {
  wx.redirectTo({
    url
  })
}

/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param url String 需要跳转的应用内页面路径，路径后可以带参数
 * 清空堆栈
 */
function reLaunch ({url}) {
  wx.reLaunch({
    url
  })
}

/**
 * 开启loading状态
 * @param title String 状态说明文字
 * @param mask Boolean 是否显示遮罩
 */
function showLoading ({title, mask}) {
  wx.showLoading({
    title,
    mask
  })
}

/**
 * 关闭loading状态
 */
function hideLoading () {
  wx.hideLoading()
}

/**
 * 创建 canvas 的绘图上下文 CanvasContext 对象
 * @param canvasId 要获取上下文的 canvas 组件 canvas-id 属性
 * @param _this 在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 canvas ，如果省略则不在任何自定义组件内查找
 */
function createCanvasContext (canvasId, _this) {
  return wx.createCanvasContext(canvasId, _this)
}

/**
 * 停止下拉刷新
 * @param object对象，包含success，fail，complete回调函数
 */
function stopPullDownRefresh (object) {
  wx.stopPullDownRefresh(object)
}

/**
 * 设置粘贴板
 * @param data String 设置粘贴板内容
 */
function setClipboardData ({data}) {
  wx.setClipboardData({data})
}

/**
 * 同步获取系统信息
 */
function getSystemInfoSync () {
  return wx.getSystemInfoSync()
}

/**
 * 判断小程序的API，回调，参数，组件等是否在当前版本可用
 * @param schema String 如'console.log'
 */
function canIUse (schema) {
  return wx.canIUse(schema)
}

/**
 * 显示Tab
 * @param animation Boolean 是否开启动画
 */
function showTabBar ({animation = false} = {}) {
  wx.showTabBar({animation})
}

/**
 * 隐藏Tab
 * @param animation Boolean 是否开启动画
 */
function hideTabBar ({animation = false} = {}) {
  wx.hideTabBar({animation})
}

/**
 * 动态设置当前页面的标题
 * @param title String 标题，最长长度为13位
 */
function setNavigationBarTitlePretty (title) {
  wx.setNavigationBarTitle({title: title.substr(0, 13)})
}

/**
 * 滚动页面
 * @param scrollTop Number 滚动到页面的目标位置，单位 px
 * @param duration Number 滚动动画的时长，单位 ms
 */
function pageScrollTo ({scrollTop = 0, duration = 0} = {}) {
  wx.pageScrollTo({
    scrollTop,
    duration
  });
}

/**
 * 显示模态框
 * @param title String 提示的标题
 * @param content String 提示的内容
 * @param cancelText String 取消按钮的文字，最多 4 个字符
 * @param confirmText String 确认按钮的文字，最多 4 个字符
 * @param showCancel Boolean 是否显示取消按钮
 * @param success Function 接口调用成功的回调函数
 * @param complete Function 接口调用结束的回调函数
 */
function showModal ({title, content, cancelText = '取消', cancelColor = '', confirmText = '确定', confirmColor = '', showCancel = true, success, complete} = {}) {
  wx.showModal({
    title,
    content,
    cancelText,
    confirmText,
    cancelColor,
    confirmColor,
    showCancel,
    success,
    complete
  })
}

/**
 * 显示操作菜单
 * @param itemList Array 按钮的文字数组，数组长度最大为 6
 * @param success Function 接口调用成功的回调函数
 * @param fail Function 接口调用失败的回调函数
 * @param complete Function 接口调用结束的回调函数（调用成功、失败都会执行）
 */
function showActionSheet ({itemList, success, fail, complete}) {
  wx.showActionSheet({
    itemList,
    success,
    fail,
    complete
  })
}

/**
 * 微信支付
 * @param data Object 至少包括timeStamp，nonceStr，package，paySign字段
 */
function wechatJsPay (data) {
  return new Promise((resolve, reject) => {
    wx.requestPayment({
      ...data,
      'success': function (res) {
        resolve()
      },
      'fail': function (res) {
        reject(new Error(PAY_CODE.FAIL))
      }
    })
  })
}

/**
 * 显示消息提示框
 * @param title String 提示的内容
 * @param title String 图标
 * @param title String 提示的延迟时间
 */
function _showToast ({title = '', icon = 'none', duration = 1350} = {}) {
  if (!title) return
  wx.showToast({
    title,
    icon,
    duration
  })
}

/**
 * 显示消息提示框，不显示图标
 * @param msg String 提示的内容
 */
function normalToast (title) {
  _showToast({title})
}

/**
 * 长时间（2.5秒）显示消息提示框，不显示图标
 * @param msg String 提示的内容
 */
function normalToastLong (title) {
  _showToast({title, duration: 2500})
}

/**
 * 显示消息提示框，显示成功图标
 * @param msg String 提示的内容
 */
function successToast (title) {
  _showToast({title, icon: 'success'})
}

/**
 * 调用接口获取登录凭证
 * @param success Function 接口调用成功的回调函数
 */
function login ({success}) {
  wx.login({
    success
  })
}

/**
 * 同步从本地缓存中异步获取指定 key 的内容
 * @param key String 本地缓存中指定的 key
 */
function getStorageSync (key) {
  return wx.getStorageSync(key)
}

/**
 * 同步将数据存储在本地缓存中指定的 key 中
 * @param key String 本地缓存中指定的 key
 */
function setStorageSync (key, value) {
  wx.setStorageSync(key, value)
}

/**
 * 获取全局唯一的版本更新管理器，用于管理小程序更新
 */
function getUpdateManager () {
  return wx.getUpdateManager()
}

/**
 * 返回一个 SelectorQuery 对象实例
 */
function createSelectorQuery () {
  return wx.createSelectorQuery()
}

/**
 * 获取用户信息
 * @param success Function 接口调用成功的回调函数
 */
function getUserInfo ({success}) {
  wx.getUserInfo({
    success
  })
}

/**
 * 使手机发生较短时间的振动（15 ms）
 * @param null
 */
function vibrateShort () {
  wx.vibrateShort()
}

/**
 * 在新页面中全屏预览图片
 * @param urls Array 需要预览的图片链接列表。2.2.3 起支持云文件ID
 * @param current String 需当前显示图片的链接
 */
function previewImage ({urls, current}) {
  wx.previewImage({urls, current})
}

/**
 * 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
 * @param callback Function 回调函数
 */
function nextTick (callback) {
  wx.nextTick(callback)
}

/**
 * 设置是否保持常亮状态
 * @param keepScreenOn Boolean 是否保持屏幕常亮
 */
function setKeepScreenOn (keepScreenOn = true) {
  wx.setKeepScreenOn({
    keepScreenOn
  })
}

/**
 * 下载文件资源到本地
 * @param url String 下载资源的 url
 * @param success Function 接口调用成功的回调函数
 * @param fail Function 接口调用失败的回调函数
 */
function downloadFile ({url, success, fail}) {
  wx.downloadFile({
    url,
    success,
    fail
  })
}

/**
 * 保存图片到系统相册
 * @param filePath String 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径
 * @param success Function 接口调用成功的回调函数
 */
function saveImageToPhotosAlbum ({filePath, success}) {
  wx.saveImageToPhotosAlbum({
    filePath,
    success
  })
}

/**
 *  获取用户收货地址
 * @param success
 * @param fail
 * @param complete
 */
function chooseAddress ({success, fail, complete}) {
  wx.chooseAddress({
    success,
    fail,
    complete
  })
}

/**
 * 打开另一个小程序
 * @param appId
 * @param path
 * @param extraData
 * @param envVersion
 * @param success
 * @param fail
 * @param complete
 */
function navigateToMiniProgram ({appId, path, extraData, envVersion, success, fail, complete}) {
  wx.navigateToMiniProgram({
    appId,
    path,
    extraData,
    envVersion,
    success,
    fail,
    complete
  })
}

/**
 * 获取位置信息
 * @param type
 * @param success
 */
function getLocation ({type, success}) {
  wx.getLocation({
    type,
    success
  })
}

/**
 * 选择图片
 * @param count
 * @param sizeType
 * @param sourceType
 * @param success
 * @param fail
 * @param complete
 */
function chooseImage ({count, sizeType, sourceType, success, fail, complete}) {
  wx.chooseImage({
    count,
    sizeType,
    sourceType,
    success,
    fail,
    complete
  })
}

/**
 * 将本地资源上传到服务器
 * @param url
 * @param filePath
 * @param name
 * @param header
 * @param formData
 * @param timeout
 * @param success
 * @param fail
 * @param complete
 */
function uploadFile ({url, filePath, name, header, formData, timeout, success, fail, complete}) {
  wx.uploadFile({
    url,
    filePath,
    name,
    header,
    formData,
    timeout,
    success,
    fail,
    complete
  })
}

/**
 *  拨打电话
 * @param phoneNumber
 * @param success
 * @param fail
 * @param complete
 */
function makePhoneCall ({phoneNumber, success, fail, complete}) {
  wx.makePhoneCall({
    phoneNumber,
    success,
    fail,
    complete
  })
}

/**
 *  拨打电话
 * @param openLocation
 * @param name
 * @param address
 * @param latitude
 * @param longitude
 */
function openLocation ({name, address, latitude, longitude}) {
  wx.openLocation({
    name,
    address,
    latitude,
    longitude
  })
}

/**
 * 获取用户的当前设置
 * @param withSubscriptions
 * @param success
 * @param fail
 * @param complete
 */
function getSetting ({withSubscriptions, success, fail, complete}) {
  wx.getSetting({
    withSubscriptions,
    success,
    fail,
    complete
  })
}

/**
 * 在用户授权之后执行操作
 * @param withSubscriptions
 * @param success
 * @param fail
 * @param complete
 * @param scope
 */
function afterSetting ({withSubscriptions, success, fail, complete, scope}) {
  getSetting({
    withSubscriptions,
    fail,
    complete,
    success: (res) => {
      const {authSetting} = res
      if (authSetting[scope]) {
        if (success) success(res)
      } else {
        if (fail) fail()
      }
    }
  })
}

module.exports = {
  switchTab,
  navigateTo,
  redirectTo,
  navigateBack,
  reLaunch,
  showLoading,
  hideLoading,
  createCanvasContext,
  stopPullDownRefresh,
  setClipboardData,
  getSystemInfoSync,
  canIUse,
  showTabBar,
  hideTabBar,
  setNavigationBarTitlePretty,
  pageScrollTo,
  showModal,
  showActionSheet,
  wechatJsPay,
  normalToast,
  normalToastLong,
  successToast,
  login,
  getStorageSync,
  setStorageSync,
  getUpdateManager,
  createSelectorQuery,
  getUserInfo,
  vibrateShort,
  previewImage,
  nextTick,
  setKeepScreenOn,
  downloadFile,
  saveImageToPhotosAlbum,
  chooseAddress,
  navigateToMiniProgram,
  getLocation,
  chooseImage,
  uploadFile,
  makePhoneCall,
  openLocation,
  getSetting,
  afterSetting
}
```
