title: 科学上网
categories:
 - Tools
author: 宋玉
date: 2020-03-24 09:58:53
---

## VPN 代理

### [Shadowsocks](https://github.com/shadowsocks)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1582606753454-a712673f-4328-4d21-a1ac-cf3fe89b0403.png#align=left&display=inline&height=763&name=image.png&originHeight=1526&originWidth=2874&size=296751&status=done&style=none&width=1437)


#### 教程
[自建梯子教程-翻墙-科学上网-google](https://github.com/dudefu/btgfw)<br />[自己搭建翻墙服务器](https://jiyiren.github.io/2016/10/06/fanqiang/)<br />[使用shadowsocks科学上网](https://www.textarea.com/ExpectoPatronum/shiyong-shadowsocks-kexue-shangwang-265/)

#### 安装
系统<br />Debian 7 x64<br />安装 wget
```bash
apt-get install wget 或 yum -y install wget
```
下载 SSR
```bash
wget -N --no-check-certificate https://softs.fun/Bash/ssr.sh && chmod +x ssr.sh && bash ssr.sh
```
或
```bash
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssr.sh && chmod +x ssr.sh && bash ssr.sh
```
管理脚本：
```bash
bash ssr.sh
```
安装并配置SSR:
> 端口：333
> 加密：chacha20
> 协议：auth_sha1_v4
> 混淆：plain

chacha20 需要提前安装。<br />![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1585014164075-4dbe8d39-83e7-4bdc-876c-894e4d5a0f70.png#align=left&display=inline&height=722&name=image.png&originHeight=1444&originWidth=1916&size=356381&status=done&style=none&width=958)安装 BBR 加速<br />`bash ssr.sh`  执行后选择 14, 不安装内核

#### 下载地址
[Mac](https://github.com/shadowsocks/ShadowsocksX-NG)<br />[客户端](https://shadowsocks.org/en/download/clients.html)

#### SwitchyOmega 插件安装
> SSR改为手动代理


#### 加速
逐行执行下面命令安装 BBR。
```javascript
wget — no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
chmod +x bbr.sh
./bbr.sh
```

[参考地址](https://medium.com/@jackme256/vultr%E6%90%AD%E5%BB%BAss%E5%8F%8A%E9%94%90%E9%80%9F%E4%BC%98%E5%8C%96%E5%8A%A0%E9%80%9F%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B-69763d7e2cdc)

## VPN 服务器

### [搬瓦工](https://bwh88.net/)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1582606995538-33fbc0bd-e51f-40ba-809c-6e212d86a966.png#align=left&display=inline&height=763&name=image.png&originHeight=1526&originWidth=2880&size=1837449&status=done&style=none&width=1440)

**VPN 服务器提供商（按月收费）**

### [Vultr](https://www.vultr.com/?ref=8478504-6G)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1582607151208-a60bf1f9-33d3-4624-9e7e-c371f0920466.png#align=left&display=inline&height=761&name=image.png&originHeight=1522&originWidth=2874&size=1273879&status=done&style=none&width=1437)

**VPN 服务器提供商（按量收费，最大 $5，支持支付宝）**<br />[Vultr利用快照Snapshots备份和迁移数据](http://www.idcspy.com/vultr-snapshots-backup.html)<br />[官网修改密码](https://www.vultr.com/docs/boot-into-single-user-mode-reset-root-password)<br />[修改密码]()

## 远程服务器管理

### FinalShell
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1583381678360-4efdf799-9812-4811-b481-d81f7bb392ec.png#align=left&display=inline&height=877&name=image.png&originHeight=1754&originWidth=2880&size=198537&status=done&style=none&width=1440)

[安装](http://www.hostbuf.com/t/1059.html)

### [WinSCP::WinSCP](https://winscp.net/eng/docs/lang:chs)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1583071544483-da41fb3f-de75-4562-b6e8-ad0ce419ac30.png#align=left&display=inline&height=764&name=image.png&originHeight=1528&originWidth=2878&size=269513&status=done&style=none&width=1439)

## 其他

### [敏感词防和谐工具](https://we.laogongshuo.com/)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/394169/1582638072895-0f3a852b-5360-4e2f-aeda-2fa9228df95f.png#align=left&display=inline&height=762&name=image.png&originHeight=1524&originWidth=2872&size=145734&status=done&style=none&width=1436)

**输入框里面的加密结果就自动用一些不可见的空格隔开了，不会被系统敏感词拦截。**
