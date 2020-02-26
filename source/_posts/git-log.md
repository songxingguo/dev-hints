title: git log
categories:
 - Git
author: 宋玉
date: 2020-02-26 01:09:50
---
[原文地址](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)

<a name="6NVIP"></a>
## 基本语法

<a name="vVOsX"></a>
### 常用选项

![image.png](https://cdn.nlark.com/yuque/0/2019/png/394169/1570602858876-5a880212-daf3-491c-8a44-83cb794b2f50.png#align=left&display=inline&height=489&name=image.png&originHeight=489&originWidth=681&size=74271&status=done&style=none&width=681)

<a name="1bfOH"></a>
###  输出限制

![image.png](https://cdn.nlark.com/yuque/0/2019/png/394169/1570602960576-3612038a-c846-4805-9918-3c93ba23882d.png#align=left&display=inline&height=388&name=image.png&originHeight=388&originWidth=430&size=43749&status=done&style=none&width=430)

<a name="RR1MX"></a>
### 输出格式化

![image.png](https://cdn.nlark.com/yuque/0/2019/png/394169/1570602736343-450b2672-7710-4478-b6f5-4354df613f93.png#align=left&display=inline&height=731&name=image.png&originHeight=731&originWidth=377&size=72953&status=done&style=none&width=377)


<a name="pdYcc"></a>
##  常见使用

<a name="sG92w"></a>
### 一行显示提交信息

```git
git log --pretty=oneline
```

![image.png](https://cdn.nlark.com/yuque/0/2019/png/394169/1570602482886-1b170f54-906f-4255-827c-de12dca8af56.png#align=left&display=inline&height=529&name=image.png&originHeight=529&originWidth=844&size=194335&status=done&style=none&width=844)

<a name="qWagJ"></a>
### 自定义输出格式

```git
git log --pretty=format:"%h %s" --graph
```

![image.png](https://cdn.nlark.com/yuque/0/2019/png/394169/1570602765590-5125af8a-45aa-461d-9abc-caeb8d0d216e.png#align=left&display=inline&height=529&name=image.png&originHeight=529&originWidth=511&size=96279&status=done&style=none&width=511)

<a name="YCitT"></a>
### 查询指定时间区间的提交

```git
git log --pretty=format:"%s" --since="2019-07-17 07:36pm" --until="2019-07-29 08:28pm"
```

<a name="90hBb"></a>
### 查询包含指定字段的提交

```git
git log --pretty=format:"%s" --since="2019-07-17 07:36pm" --until="2019-07-29 08:28pm" --grep="feat"
```

<a name="wqCB5"></a>
### 匹配指定关键词提交

```git
git log --pretty=format:"%s" --graph --since="2019-10-14 02 18 pm" --grep="feat"
```

<a name="xGOFR"></a>
### 退出 log

英文状态下按Q

<a name="ZIs3p"></a>
### 导出 Git log 日志

```git
git log > log.txt
```

```git
git log --pretty=format:"%s" --graph --since="2019-10-14 02 18 pm" --grep="feat" > log.txt
```

