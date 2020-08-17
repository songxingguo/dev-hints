title: Util
categories:
 - JavaScript
author: 宋玉
date: 2020-08-17 16:34:37
---
```javascript
const {safeSubstr} = require('./tools')
const DateBox = require('./date-box')

const dateObj = date => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    week: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

const formatTime = date => {
  const {year, month, day, hour, minute} = dateObj(date)
  return [formatNumber(year), '年', formatNumber(month), '月', formatNumber(day), '日'].join('') + ' ' + [hour, minute].map(formatNumber).join(':')
}

const formatDate = date => {
  return formatTime(date).slice(0, 11)
}

const dateFormat = date => {
  const {year, month, day} = dateObj(date)
  return [year, month, day].map(item => formatNumber(item)).join('-')
}

const formatWeek = date => {
  const {month, day, week} = dateObj(date)
  const weekText = [
    '周日',
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六'
  ][week]
  return `${[month, day].join('/')} ${weekText}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const parseCountdown = countdownMS => {
  countdownMS = Number(countdownMS)
  if (Number.isNaN(countdownMS)) throw new Error('countdownMS is NaN')
  let seconds = countdownMS / 1000
  let ms = Math.floor(countdownMS % 1000 / 100)
  let second = Math.floor(seconds % 60)
  let minute = Math.floor(seconds % 3600 / 60)
  let hour = Math.floor(seconds / 3600)
  return {
    hour: formatNumber(hour),
    minute: formatNumber(minute),
    second: formatNumber(second),
    ms: ms
  }
}
const secretName = (name = '') => {
  const length = Array.from(name).length
  if (length < 2) return `${safeSubstr(name, 0, 1) || ''}`
  else if (length < 3) return `${safeSubstr(name, 0, 1)}${safeSubstr(name, 1, 1)}`
  else return `${safeSubstr(name, 0, 1)}*${safeSubstr(name, length - 1, 1)}`
}
// 分页状态管理器
const pagination = ({currentPage = 1, pageSize = 20} = {}) => {
  const _pagination = {
    currentPage,
    pageSize
  }
  let _hasNext = true

  /**
   * 根据返回数据设置是否还有更多数据，分页只能处理数组。
   * @param data
   */
  function setNext (data) {
    if (!Array.isArray(data)) throw new Error('data type must be array')
    _hasNext = data.length >= _pagination.pageSize
  }

  /**
   * 检查是否还有下一页，如果有则返回true，并自动增加currentPage。
   * @returns {boolean}
   */
  function next () {
    if (!_hasNext) return false
    _pagination.currentPage++
    return true
  }

  return {
    pagination: _pagination,
    setNext,
    next
  }
}
// 数字、金额格式化无符号
const _numFormatWithoutSym = function (value, {decimalSize = 2, decimalSym = '.', intSepSize = 3, intSep = ','} = {}) {
  const numVal = Number(value)
  if (Number.isNaN(numVal)) throw new Error('value is NaN')
  const [intPart, decimalPart] = Number(value).toFixed(decimalSize).split('.')
  const decimalParts = decimalSize === 0 ? '' : `${decimalSym}${decimalPart}`
  const intPartLen = intPart.length
  const sepTimes = Math.ceil(intPartLen / intSepSize)
  const intParts = new Array(sepTimes)
  for (let i = 1; i <= sepTimes; i++) {
    intParts[sepTimes - i] = intPart.slice(-i * intSepSize, intPartLen - (i - 1) * intSepSize)
  }
  return `${intParts.join(intSep)}${decimalParts}`
}
// 整数格式化
const numberFormat = (value) => {
  try {
    return _numFormatWithoutSym(value, {decimalSize: 0})
  } catch (err) {
    return value
  }
}
// 金额格式化无符号
const currencyFormatWithoutSym = (value) => {
  try {
    return _numFormatWithoutSym(value)
  } catch (err) {
    return value
  }
}
// 有小数保留，没有就没有
const currencyFormat = (value) => {
  try {
    let decimalSize = 2
    if (Number(_numFormatWithoutSym(value, {decimalSize: 0})) === Number(value)) decimalSize = 0
    return `¥${_numFormatWithoutSym(value, {decimalSize})}`
  } catch (err) {
    return value
  }
}
// 格式化日期
const format = (date, pattern) => {
  const dateBox = new DateBox(date)
  return dateBox.format(pattern)
}

// 计算两个日期之间相差时间
const duration = (ms, pattern) => {
  return DateBox.duration(ms, pattern)
}

// 计算两个日期之间相差
const diff = (sDate, eDate) => {
  const dateBox = new DateBox(sDate)
  return dateBox.diff(eDate)
}

/**
 * 标准金额转换，系统在金额方面不支持小数，仅支持以分为基础单位的金额格式。
 * 参考 IEEE 754 标准
 * @param currency
 * @param floatBase
 * @returns {number}
 */
function _currencyConvert (currency, floatBase = true) {
  return floatBase ? currency * 100 : currency / 100
}

/**
 * 金额服务端转本地
 * @param currency
 * @returns {number}
 */
function currencyToLocal (currency) {
  return _currencyConvert(currency, false)
}

/**
 * 金额本地转服务端
 * @param currency
 * @returns {number}
 */
function currencyToServer (currency) {
  return _currencyConvert(currency)
}

module.exports = {
  formatDate,
  formatTime,
  formatWeek,
  parseCountdown,
  secretName,
  pagination,
  numberFormat,
  currencyFormatWithoutSym,
  dateFormat,
  format,
  diff,
  duration,
  currencyToLocal,
  currencyToServer,
  currencyFormat,
  formatNumber
}
```
