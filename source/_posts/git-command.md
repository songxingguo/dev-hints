title: command
categories:
 - Git
author: 宋玉
date: 2020-02-25 08:12:54
---

<a name="hYd9B"></a>
### 查看状态

```git
$ git status
```

<a name="aFJBl"></a>
### 把项目添加到仓库

```git
$ git add 【-A】|【文件名称】|$ git add .
```

<a name="0Oemc"></a>
### 提交代码

```git
$ git commit -m "文件描述"
```

<a name="nRgkR"></a>
### 推送到远端

推送到默认分支

```git
$ git push
```

推送到远程分支

```git
$ git push origin master
```

将本地仓库和远程仓库进行关联

```git
$ git remote add origin https://github.com/guyibang/TEST2.git
```

把本地仓库的项目推送到远程仓库

```git
$ git push -u origin master
```

<a name="BEELi"></a>
### 移除远程仓库

```git
$ git remote rm origin
```


<a name="28Pyk"></a>
### 分支管理

查看远程分支

```git
$ git branch --remote
```

查看本地分支

```
$ git branch
```

查看所有远程分支

```
$ git branch -a
```

切换到 **source-code** 分支

```
git checkout source-code
```


<a name="RXafq"></a>
### 基础配置

配置用户名和邮箱

```
git config --global user.name "songxingguo"
git config --global user.email "1328989942@qqc.com"
```

设置原 npm 镜像

```
npm config set registry http://registry.npmjs.org
```

设置淘宝镜像

```
npm config set registry https://registry.npm.taobao.org
```

查看镜像

```
npm config get registry
```
