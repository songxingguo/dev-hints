title: Countdown
categories:
 - JavaScript
author: 宋玉
date: 2020-08-17 16:33:17
---
```javascript
/**
 * 自动定时器，支持自定义步长，支持onFinish回调
 */
module.exports = class Countdown {
  constructor (step = 1000) {
    this.countdown = 0
    this.step = step
    this.timer = null
    this.frame = null
    this.fn = null
    this.onFinish = null
    this.preStartTime = null
  }

  /**
   * 是否在工作
   * @returns {Boolean}
   */
  isWorking () {
    return this.countdown !== 0
  }

  /**
   * 启动定时器
   * @param {Number} countdown millisecond
   * @param {Function} fn 每步回调
   */
  start (countdown, fn) {
    this.cancel()
    if (typeof countdown !== 'number' || countdown <= 0) return
    this.countdown = countdown
    this.fn = fn
    this._isTimeUp()
  }

  /**
   * 取消倒计时
   */
  cancel () {
    if (this.timer) clearTimeout(this.timer)
    if (this.frame) cancelAnimationFrame(this.frame)
    this.resetPreStartTime()
  }

  resetPreStartTime () {
    this.preStartTime = null
  }

  _isTimeUp () {
    // TODO 计时器使用Worker控制
    // 由于setTimeout的异步特点，此处给予时间补偿。正数说明滞后执行，负数说明提前执行，只有为0时说明刚好执行无需补偿，滞后需要减掉，提前需要加上，那么减负数就是加上。
    let realIntervalTime = this.preStartTime ? (new Date()).getTime() - this.preStartTime : 0
    let needSetCountDown = realIntervalTime - this.step
    if (this.countdown > this.step && realIntervalTime !== 0 && needSetCountDown !== 0) {
      this.countdown -= needSetCountDown
    }
    if (this.countdown <= 0) this.countdown = 0
    if (this.fn) this.fn(this.countdown)
    if (this.countdown === 0) {
      this.resetPreStartTime()
      if (this.onFinish && typeof this.onFinish === 'function') this.onFinish()
      return
    }
    let delay = this.countdown - this.step > 0 ? this.step : this.countdown
    this.countdown -= delay
    this.preStartTime = (new Date()).getTime()
    // this.frame = requestAnimationFrame(() => {
    //   this._isTimeUp()
    // })
    this.timer = setTimeout(() => {
      this._isTimeUp()
    }, delay)
  }
}
```
