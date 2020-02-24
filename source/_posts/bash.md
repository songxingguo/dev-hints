title: Bash
categories:
 - CLI
author: 宋玉
date: 2020-02-24 09:56:54
---
<a name="20731fe2"></a>
### 目录操作

查看目录中的文件

```bash
ls -l
```

> **-a, –all 列出目录下的所有文件，包括以 . 开头的隐含文件**


> -a 横向展示


```bash
ls -a
```

> -all 竖向展示


```bash
ls -all
```

查看目录文件

```bash
ll
```

相对路径

```bash
root/data
```

绝对路径(最前面多一个斜杠）

```bash
/root/data
```

回到根目录

```bash
../..
```

~代表你的/home/用户名目录

> 假设你的用户名是x，那么~/就是/home/x/


**.** 是代表此目录本身，但是一般可以不写

> 所以cd ~/. 和cd ~ 和cd ~/效果是一样的

<a name="52cefcb2"></a>
### 文件操作

创建文件

```bash
touch example.js
```

编辑文件

```bash
vim example.js
```

> 输入 i，进入编辑模式。<br />
输入为v进入视图模式，可进行多行选择。<br />
使用Esc按钮，退出编辑模式，输入:wq，回车，保存文件内容并退出。


> 退出编辑<br />
`shift zz`


查看文件

```bash
cat /var/log/mysqld.log
```

删除文件

```bash
rm example.js
```

拷贝文件

```bash
cat test.json|pbcopy
```

<a name="230c0e28"></a>
### 文件夹操作

新建文件夹

```bash
mkdir test
```

强制并递归删除目录（删除有内容的文件夹）

```bash
rm -rf /root/node-v6.9.5-linux-x64.tar.xz
```

拷贝文件夹

> 如将/test1目录下的file1复制到/test3目录，并将文件名改为file2,可输入以下命令：


```bash
cp /test1/file1 /test3/file2
```

移动文件夹

> 如将/test1目录下的file1**复制到/test3** 目录，并将**文件名改为file2**,可输入以下命令：


```bash
mv /test1/file1 /test3/file2
```

如果是移动文件夹下的所有文件的话就可以文件夹后面跟上 /*

```bash
mv /data/new/* /data/old/
```

<a name="f88522cf"></a>
### 进程

查看端口号

```bash
netstat -apn|grep 80
```

查看进程

```bash
ps -ef|grep mysqld
```

```bash
ps aux|grep mysql
```

杀死进程(上边的进程号)

```bash
kill -9 112704
```

杀死所有输出的进程

```
ps aux|grep mysql|awk '{print $2}'|xargs kill -9
```

CentOS重启ssh服务命令

```bash
service sshd restart
```

<a name="0285d6e4"></a>
### 链接操作

添加链接

```bash
ln -s /usr/jboss4.0.5.GA/jboss
```

删除链接

```bash
rm /usr/jboss4.0.5.GA/jboss
```

<a name="581acc26"></a>
### 文件下载目录

- wget等命令行工具：默认下载到运行该程序的当前目录
- 浏览器：默认的下载目录一般在桌面，具体情况可以查看设置
- 其他下载工具：一般都会在/home/用户名/里面的该工具的隐藏目录下或是新建的download目录下，具体情况请查看配置文件

<a name="973f70e4"></a>
### 综合应用

将文件移动位置并改变链接

```bash
  mkdir -p /opt/node/
  mv /root/node-v6.9.5-linux-x64/* /opt/node/
  rm -f /usr/local/bin/node
  rm -f /usr/local/bin/npm
  ln -s /opt/node/bin/node /usr/local/bin/node
  ln -s /opt/node/bin/npm /usr/local/bin/npm
```

<a name="98a315c0"></a>
### 授权

修改权限

```bash
chmod +x hexo-generate.sh
```
