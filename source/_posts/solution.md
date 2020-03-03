title: 小技巧
categories:
 - JavaScript
author: 宋玉
date: 2020-03-03 21:19:39
---
<a name="GA2Iz"></a>
### 类型检测
<a name="GR4Sf"></a>
### 空值保护
```javascript
(sorter.columns || {})._sortName
```
<a name="y34Mu"></a>
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
<a name="aURBR"></a>
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
<a name="FxOy4"></a>
### 实现顶部/下部固定，中间滚动效果
<a name="r6LvF"></a>
### 空值保护
```javascript
this.helpList[this.currentTab] || [] // helpList 还没有返回时就设置为空数组
```
<a name="fuohO"></a>
### max 和   min 的妙用
```javascript
    const index = this.keyList.findIndex(key => key === helpKey)
    this.currentTab = Math.max(index, FIRST_TAB) // 找到相应的key就设置下标，否则设置为第一项
```
<a name="STcNc"></a>
### Object.assign 浅拷贝
```javascript
Object.assign({}, defaultPrivilege, customPrivilege) 
```
<a name="LBLKD"></a>
### text 支持换行与 view 的区别<br />
<a name="1im6H"></a>
### !! 的妙用，代替 data  ''
<a name="nTrvL"></a>
### 1px border iphone 无法显示问题
```css

border:1px solid red;
transform:scaleY(0.5);
```
<a name="FVqAj"></a>
### border-radius overflow:hidden 解决子元素超过父元素问题
<a name="F7bTb"></a>
### 放大效果调试法（【动画】增加时间，【样式】增加大小）
<a name="4dSWn"></a>
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
<a name="tyLiT"></a>
### 默认值覆盖，提前返回、逻辑上下文（逻辑分叉）、平行逻辑（if-else)、提前返回逻辑
```javascript
  _getJoinText () {
    if (this._isFinish()) return $t.isFinish
    if (this._isStartWithoutMe()) return $t.isStart
    if (this._hasJoin()) return this._isStart() ? $t.isStart : $t.willStart
    return $t.getNeededUserCount(this.neededUserCount)
  }
```
<a name="ZfY4S"></a>
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
<a name="MKPqe"></a>
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
<a name="AVE1Q"></a>
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
<a name="sREhk"></a>
### 订阅模式（我是谁）VS 控制方式
```javascript
  openMyDDB () {
    mApi.navigateTo({
      url: `../my-DDB/index?from='gift'`
    })
  }
```
<a name="LwezN"></a>
# [js去除字符串空格(空白符)](https://www.cnblogs.com/a-cat/p/8872498.html)

1. **replace正则匹配方法**
- 去除字符串内所有的空格：str = str.replace(/\s*/g,"");
- 去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g,"");
- 去除字符串内左侧的空格：str = str.replace(/^\s*/,"");
- 去除字符串内右侧的空格：str = str.replace(/(\s*$)/g,"");
2. **str.trim()方法**
2. **$.trim(str)方法**
