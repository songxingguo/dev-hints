title: decorator
categories:
 - JavaScript
author: 宋玉
date: 2020-07-28 12:38:02
---
```javascript
const _debounce = require('../lib/lodash-debounce')
const _throttle = require('../lib/lodash-throttle')
const mApi = require('../api/wxApi')
const DEFAULT_DELAY = 350

/**
 * 防抖动
 * @param delay
 */
exports.debounce = function (delay = DEFAULT_DELAY) {
  return function (target, name, descriptor) {
    descriptor.value = _debounce(descriptor.value, delay)
    return descriptor
  }
}
/**
 * 节流阀
 * @param delay
 */
exports.throttle = function (delay = DEFAULT_DELAY) {
  return function (target, name, descriptor) {
    descriptor.value = _throttle(descriptor.value, delay)
    return descriptor
  }
}
/**
 * 串行，支持loading
 * @param loadingText
 */
exports.series = function (loadingText) {
  return function (target, name, descriptor) {
    const oriFun = descriptor.value
    let isPending = false
    const loading = _debounce(function () {
      if (!(loadingText && isPending)) return
      mApi.showLoading({title: loadingText, mask: true})
    }, DEFAULT_DELAY)
    const hideLoading = _debounce(function () {
      mApi.hideLoading()
    }, DEFAULT_DELAY)
    const finish = function () {
      isPending = false
      hideLoading()
    }
    descriptor.value = async function (...args) {
      try {
        if (isPending) return
        isPending = true
        loading()
        await oriFun.apply(this, args)
        finish()
      } catch (err) {
        finish()
        throw err
      }
    }
    return descriptor
  }
}
/**
 * 微信小程序权限检查
 * @param authSetting
 */
exports.authSettingCheck = function (authSetting) {
  const modalContent = {
    'scope.address': {
      title: '收货地址获取受阻',
      content: '点击确定去打开"通讯地址"'
    },
    'scope.writePhotosAlbum': {
      title: '相册访问受阻',
      content: '点击确定去打开"保存到相册"'
    },
    'scope.userLocation': {
      title: '获取地址受阻',
      content: '点击确定去打开"获取地址"'
    }
  }[authSetting]
  if (!modalContent) throw new Error(`authSettingCheck not found ${authSetting}`)
  return function (target, name, descriptor) {
    const oriFun = descriptor.value
    descriptor.value = function (...args) {
      // TODO 优化为mApi
      const _this = this
      const showModal = () => {
        wx.showModal({
          ...modalContent,
          success (res) {
            if (res.confirm) {
              openSetting()
            }
          }
        })
      }
      const openSetting = () => {
        wx.openSetting({
          success (setting) {
            if (!setting.authSetting[authSetting]) return
            oriFun.apply(_this, args)
          }
        })
      }
      wx.getSetting({
        success (res) {
          if (!res.authSetting[authSetting]) {
            wx.authorize({
              scope: authSetting,
              success () {
                oriFun.apply(_this, args)
              },
              fail () {
                showModal()
              }
            })
          } else {
            oriFun.apply(_this, args)
          }
        }
      })
    }
    return descriptor
  }
}
```
