title: 小技巧
categories:
 - 基础库
author: 宋玉
date: 2021-03-10 19:00:12
---

# [div的keydown事件无效的原因及解决方案、tabindex属性的作用](https://www.cnblogs.com/goloving/p/13220359.html)

#### 一、解决方案
　　如果需要在div上监听键盘事件怎么办呢？<br />　　其实也很简单，只需要在需要监听 keydown 事件的 div 的属性中加上 tabIndex=0 即可，即：
```javascript
<div tabindex="0" οnkeydοwn="alert('keydown');">...</div>
```

#### 二、tabindex属性的作用
　　当使用键盘时，tabindex是个关键因素，它用来定位html元素。<br />　　tabindex有三个值：0 ，-1， 以及X（X里32767是界点，稍后说明）<br />　　原本在Html中，只有链接a和表单元素可以被键盘访问（即使是a也必须加上href属性才可以)，但是aria允许tabindex指定给任何html元素。<br />　　当tabindex=0时，该元素可以用tab键获取焦点，且访问的顺序是按照元素在文档中的顺序来focus，即使采用了浮动改变了页面中显示的顺序，依然是按照html文档中的顺序来定位。<br />　　当tabindex=-1时，该元素用tab键获取不到焦点，但是可以通过js获取，这样就便于我们通过js设置上下左右键的响应事件来focus，在widget内部可以用到。<br />　　当tabindex>=1时，该元素可以用tab键获取焦点，而且优先级大于tabindex=0；不过在tabindex>=1时，数字越小，越先定位到。<br />　　在IE中，tabindex范围在1到32767之间（包括32767），在FF， Chrome无限制，不过一旦超出32768，顺序跟tabindex=0时一样。这个估计跟各个浏览器对int型的解析有关。

### 下载
```javascript
//下载
const download = (url)  => {
    const a = document.createElement('a')
    a.setAttribute('download', '')
    a.setAttribute('href', url)
    a.click()
    a.remove()
}
// 下载地址
function downLoad(content,fileName){
        var aEle = document.createElement("a");// 创建a标签
        // blob = new Blob([content]); 
        aEle.download = fileName;// 设置下载文件的文件名
        //aEle.href = URL.createObjectUrl(blob);
        aEle.href = content;// content为后台返回的下载地址
        aEle.click();// 设置点击事件
        aEle.remove()
}
let URL ='XXXX' //下载地址
downLoad(URL ,'test.xlxs')
// content 非下载地址
function downLoad(content,fileName){
        var aEle = document.createElement("a");// 创建a标签
        blob = new Blob([content]); 
        aEle.download = fileName;// 设置下载文件的文件名
        aEle.href = URL.createObjectUrl(blob);
        aEle.click();// 设置点击事件

}
downLoad('下载内容123123','test.txt')
```
[参考地址](https://www.cnblogs.com/phermis/p/11393144.html)

### 类型检测

### 空值保护
```javascript
(sorter.columns || {})._sortName
```

### 冻结对象
```javascript
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

### 取到顶层对象
```javascript
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);
// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
```

### 实现顶部/下部固定，中间滚动效果

### 空值保护
```javascript
this.helpList[this.currentTab] || [] // helpList 还没有返回时就设置为空数组
```

### max 和   min 的妙用
```javascript
    const index = this.keyList.findIndex(key => key === helpKey)
    this.currentTab = Math.max(index, FIRST_TAB) // 找到相应的key就设置下标，否则设置为第一项
```

### Object.assign 浅拷贝
```javascript
Object.assign({}, defaultPrivilege, customPrivilege) 
```

### text 支持换行与 view 的区别<br />

### !! 的妙用，代替 data  null 或 data  = ''

### 1px border iphone 无法显示问题
```css

border:1px solid red;
transform:scaleY(0.5);
```

### border-radius overflow:hidden 解决子元素超过父元素问题

### 放大效果调试法（【动画】增加时间，【样式】增加大小）

### 将 `time += Math.floor(Math.random() * 1000 + 500)`  服务器请求分配到一个范围
```javascript
  setAutoRefresh (time) {
    time += Math.floor(Math.random() * 1000 + 500)
    clearTimeout(this.autoRefreshTimeoutHandler)
    this.autoRefreshTimeoutHandler = setTimeout(() => {
      this.init()
    }, time)
  },
```

### 默认值覆盖，提前返回、逻辑上下文（逻辑分叉）、平行逻辑（if-else)、提前返回逻辑
```javascript
  _getJoinText () {
    if (this._isFinish()) return $t.isFinish
    if (this._isStartWithoutMe()) return $t.isStart
    if (this._hasJoin()) return this._isStart() ? $t.isStart : $t.willStart
    return $t.getNeededUserCount(this.neededUserCount)
  }
```

### 对象取值
```javascript
    this.title = {
      jl: '锦鲤',
      jlyqz: '锦鲤邀请者',
      xysz: '幸运数字',
      wcdk: '完成打卡',
      wcxrw: '完成小任务'
    }[index] || `打卡第${index}名`
```

### 使用 js 脚本以及列编辑处理文字格式化
```javascript
const text = `前端开发、移动开发、后端开发、硬件开发、运维/技术支持、测试、人工智能、通信
销售专员、销售经理、销售顾问、客户代表、渠道销售、网络营销、BD经理、销售主管、代理商销售
人力资源、财务、法务
总裁/总经理、事业部负责人、区域/分公司/代表处负责人、副总裁/副总经理、CEO/总裁/总经理/合伙人、创始人
运营、客服、编辑、高端运营职位、其他运营职位
投融资、互联网金融、税务审计、银行、风控、证券、保险、其他金融职位
视觉设计、非视觉设计、交互设计、用户研究、高端设计职位、其他设计职位
教师、教育行政、教练、招生、教育产品研发、职业培训、IT培训、其他教育培训
市场/营销、公关媒体、高端市场职位、会务会展、广告、其他市场职位
影视媒体、采编/写作/出版、公关媒体、广告、会务会展、其他传媒职位
产品经理、高端产品职位、其他产品职位
设计装修与市政建设、物业管理、房地产规划开发、房地产经纪、高端房地产职位、其他房地产职位
餐饮、零售、酒店、美容/健身、安保/家政、其他服务职位、婚礼/花艺
物流、运输、仓储、高端供应链职位、其他供应链职位
采购、进出口贸易、其他采购/贸易职位
护士/护理、医生/医技、市场营销/媒体、生物制药、健康整形、医疗器械、药店、其他医疗健康类职位
翻译、咨询/调研、律师、高端咨询类职位、其他咨询类职位
技工/普工、机械设计/制造、生产营运、化工、服装/纺织/皮革、其他生产制造职位
汽车销售与服务、汽车设计与研发、汽车生产与制造、其他汽车职位
旅游服务、旅游产品开发/策划、其他旅游职位`

const textArr = text.split('\n')
console.log(textArr)
const newTextArr = textArr.map(item => {
  return item.split('、')
})
console.log(newTextArr)
```

### 文本格式化
```javascript
const list = [{
  name: '技术',
  children: ['前端开发', '移动开发', '后端开发', '硬件开发', '运维/技术支持', '测试', '人工智能', '通信']
},
  {
    name: '销售',
    children: ['销售专员', '销售经理', '销售顾问', '客户代表', '渠道销售', '网络营销', 'BD经理', '销售主管', '代理商销售']
  },
  {name: '人事/财务/行政', children: ['人力资源', '财务', '法务']},
  {
    name: '高级管理',
    children: ['总裁/总经理', '事业部负责人', '区域/分公司/代表处负责人', '副总裁/副总经理', 'CEO/总裁/总经理/合伙人', '创始人']
  },
  {name: '运营', children: ['运营', '客服', '编辑', '高端运营职位', '其他运营职位']},
  {name: '金融', children: ['投融资', '互联网金融', '税务审计', '银行', '风控', '证券', '保险', '其他金融职位']},
  {name: '设计', children: ['视觉设计', '非视觉设计', '交互设计', '用户研究', '高端设计职位', '其他设计职位']},
  {name: '教育培训', children: ['教师', '教育行政', '教练', '招生', '教育产品研发', '职业培训', 'IT培训', '其他教育培训']},
  {name: '市场', children: ['市场/营销', '公关媒体', '高端市场职位', '会务会展', '广告', '其他市场职位']},
  {name: '传媒', children: ['影视媒体', '采编/写作/出版', '公关媒体', '广告', '会务会展', '其他传媒职位']},
  {name: '产品', children: ['产品经理', '高端产品职位', '其他产品职位']},
  {name: '房地产/建筑', children: ['设计装修与市政建设', '物业管理', '房地产规划开发', '房地产经纪', '高端房地产职位', '其他房地产职位']},
  {name: '服务业', children: ['餐饮', '零售', '酒店', '美容/健身', '安保/家政', '其他服务职位', '婚礼/花艺']},
  {name: '供应链/物流', children: ['物流', '运输', '仓储', '高端供应链职位', '其他供应链职位']},
  {name: '采购/贸易', children: ['采购', '进出口贸易', '其他采购/贸易职位']},
  {
    name: '医疗健康',
    children: ['护士/护理', '医生/医技', '市场营销/媒体', '生物制药', '健康整形', '医疗器械', '药店', '其他医疗健康类职位']
  },
  {name: '咨询/翻译/法律', children: ['翻译', '咨询/调研', '律师', '高端咨询类职位', '其他咨询类职位']},
  {name: '生产制造', children: ['技工/普工', '机械设计/制造', '生产营运', '化工', '服装/纺织/皮革', '其他生产制造职位']},
  {name: '汽车', children: ['汽车销售与服务', '汽车设计与研发', '汽车生产与制造', '其他汽车职位']},
  {name: '旅游', children: ['旅游服务', '旅游产品开发/策划', '其他旅游职位']},
  {name: '公务员', children: ['公务员']},
  {name: '其他', children: ['其他']}]

const data = list.map(item => {
  const children = item.children.map(item => {
    return {
      name: item
    }
  })
  return {
    name: item.name,
    children
  }
})
let dataStr = ['[']
data.forEach(item => {
  dataStr.push(JSON.stringify(item))
})
dataStr.push(']')

const fs = require('fs')
fs.writeFileSync('./test.json', dataStr.join(',\n'))
```

### 订阅模式（我是谁）VS 控制方式
```javascript
  openMyDDB () {
    mApi.navigateTo({
      url: `../my-DDB/index?from='gift'`
    })
  }
```

### [js去除字符串空格(空白符)](https://www.cnblogs.com/a-cat/p/8872498.html)

1. **replace正则匹配方法**
- 去除字符串内所有的空格：str = str.replace(/\s*/g,"");
- 去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g,"");
- 去除字符串内左侧的空格：str = str.replace(/^\s*/,"");
- 去除字符串内右侧的空格：str = str.replace(/(\s*$)/g,"");
2. **str.trim()方法**
2. **$.trim(str)方法**

**

### 注解检查参数
```javascript
  /**
   * 启动定时器
   * @param countdown millisecond
   * @param fn 每步回调
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
```

### HOC 实现权限验证
```javascript
/**
* 用户权限检查
* @param authSetting
*/
authCheck(afterCheck, modifiers) {
  const _that = this
  return function () {
    if (!_that.has(modifiers)) {
      return uni.showToast({ title: "您无权进行此操作", icon: "none" });
    }
    if (afterCheck) afterCheck()
  }
},
  // 权限检查方法
  has(modifiers) {
    let isExist = false;
    let { data: buttonperms } = JSON.parse(localStorage.getItem('permission'));
    if (buttonperms == undefined || buttonperms == null || JSON.stringify(modifiers) === '{}') {
      return false;
    }
    for (let modifier of modifiers) {
      if (buttonperms[modifier]) {
        isExist = true;
        break;
      }
    }
    return isExist;
  }
```
[参考链接](https://mp.weixin.qq.com/s/a3-dPLprmYlkUsvUPLlGoQ)
