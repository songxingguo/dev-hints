title: git bisect
categories:
 - Git
author: 宋玉
date: 2020-02-26 01:09:21
---
<a name="HBnpk"></a>
## 常用命令


执行一个二分搜索，找到引入错误的commit。

```
$ git bisect start [终点] [起点]
```

```
$ git bisect start HEAD 4d83cf
```

```
$ git bisect good
```

```
$ git bisect bad
```

```
$ git bisect reset
```

<a name="1Rk8s"></a>
## 参考链接

- [git bisect 命令教程](http://www.ruanyifeng.com/blog/2018/12/git-bisect.html)
