title: Modal
categories:
 - JavaScript
author: 宋玉
date: 2020-04-14 14:23:34
---
```javascript
const ABORT = 'abort'

class Modal {
  /**
   * @param onClose {Function}
   * @param onShow {Function}
   */
  constructor ({onClose, onShow} = {}) {
    this._hasShow = false
    this._onShow = onShow
    this._onClose = onClose
    this.pending = null
  }

  /**
   * 自动warp一个promise，弹窗一定是串行的不可能是并行的。
   * @returns {Promise<unknown>}
   */
  show () {
    this._hasShow = true
    return new Promise((resolve, reject) => {
      this.pending = {resolve, reject}
      if (this._onShow) this._onShow(this)
    })
  }

  /**
   * 关闭当前弹窗
   */
  close () {
    this._hasShow = false
    this.pending.resolve()
    if (this._onClose) this._onClose()
  }

  /**
   * 中断后续播放
   */
  abort () {
    this._hasShow = false
    this.pending.reject(new Error(ABORT))
  }
}

class ModalManager {
  /**
   *
   * @param modalArr {[Modal]}
   */
  constructor (modalArr = []) {
    this._stack = modalArr
  }

  /**
   * @param modalIns {Modal}
   */
  push (modalIns) {
    this._stack.push(modalIns)
  }

  /**
   * @returns {Modal}
   */
  pop () {
    return this._stack.pop()
  }

  /**
   * 按照编排顺序自动播放弹窗
   * @returns {Promise<void>}
   */
  async play () {
    let modalIns = this.pop()
    while (modalIns) {
      try {
        await modalIns.show()
        modalIns = this.pop()
      } catch (e) {
        if (e.message === ABORT) {
          modalIns = null
        } else {
          throw e
        }
      }
    }
  }
}

function sleep (time) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}

async function boot () {
  const firstModal = new Modal({
    onShow: async (modalHandler) => {
      console.log('firstModal onShow')
      await sleep(2000)
      console.log('sleep 2 second')
      modalHandler.close()
    },
    onClose: () => {
      console.log('firstModal close')
    }
  })
  const secondModal = new Modal({
    onShow: (modalHandler) => {
      console.log('secondModal onShow')
      modalHandler.abort()
      console.log('secondModal abort')
    }
  })
  const thirdModal = new Modal({
    onShow: (modalHandler) => {
      console.log('thirdModal onShow')
      modalHandler.close()
    }
  })
  // 定义播放顺序，栈就是播放顺序，调整栈的顺序就是调整弹窗优先级，这样可以直观的看出优先级。
  // 如果使用参数管理优先级，那么和CSS的z-index设置会遇到相同的问题，插入一个中间的优先级需要修改后续的全部z-index值。
  const mM = new ModalManager([thirdModal, secondModal, firstModal])
  // 数据准备好启动播放(阻塞式)。
  await mM.play()
  // 数据准备好启动播放(非阻塞式)。
  // mM.play()
  console.log('play finish')
  // 独立使用，不用管理器
  await thirdModal.show()
}

boot()
```
