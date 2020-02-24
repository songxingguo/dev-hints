title: git bisect
categories:
 - Git
author: 宋玉
date: 2020-02-22 12:02:34
---
执行一个二分搜索，找到引入错误的commit。

[http://www.ruanyifeng.com/blog/2018/12/git-bisect.html](http://www.ruanyifeng.com/blog/2018/12/git-bisect.html)

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
