title: Standard
categories:
 - Git
author: 宋玉
date: 2020-02-22 13:16:35
---
![](https://img.shields.io/badge/VERSION-1.0.0-brightgreen.svg#align=left&display=inline&height=20&originHeight=20&originWidth=100&status=done&style=none&width=100)

<a name="acd92c5f"></a>
# Git 使用规范

保证团队使用统一的规范来协作。

<a name="40605509"></a>
## Git 分支命名规范

功能分支

> feature-xxx-zzz 主功能分支
> feature-xxx-yyy-zzz 子功能分支
> xxx代表主功能名称（驼峰命名），yyy代表主功能下的子功能（驼峰命名）。
> zzz代表分支版本号。
> 例如：feature-Account-Auth-1.0.0（用户-授权-1.0.0）
> 主功能分支用来开发某一个大的功能，那么在开发中，一个大功能可被拆分为多个子功能。
> 这样拆分的好处是，此时如果某一个独立的子功能不能发布那么可以取消掉子功能的合并。


修复分支

> hotfix-xxx-yyy
> xxx是修复功能名称。
> 【选填】yyy是bug编号，例如 hotfix-somebug-#1233（修复-闪退-#1233）。


发布分支

> release-xxx-yyy
> xxx代表主功能名称，yyy代表版本号，例如：release-sale-1.0.0。
> 每个release控制一次发布，master将会只接受来自release的上线请求。
> 此分支负责功能上的合并与版本管理，develop与master应该只是接受release的合并请求。
> 【备注】小项目可接受来自feature分支的请求。


测试分支

> develop
> 此分支与测试环境关联，如果push则测试环境自动构建。


预发分支

> staging
> 此分支用来上线前进行镜像测试。


生产分支

> master
> 此分支为保护分支。


<a name="e2c48666"></a>
## Git 分支创建规范

- feature分支

> 一次迭代后，在合并节点开新分支。
> 例如：feature-salePay-mulPay-1.0.0开发完成，需要继续开发下个版本，那么此时在feature-salePay-mulPay-1.0.0基础上创建feature-salePay-mulPay-1.0.1分支。
> 当功能不需要继续迭代时，在master节点处新建新功能分支。


- hotfix分支

> 修复线上问题时，hotfix分支每次需要从master节点处新建，确保只是修复线上问题。


- release分支

> 当功能开发完毕，需要发布（测试）并且此时没有此功能的release分支时，请在master处创建一个新的release分支，并将功能分支合并至当前release分支。


- develop、development、master

> 系统维护。


<a name="323894cc"></a>
## Git 分支整理

开发人员需要在正式提交合并请求前rebase一下自己的功能分支，仅保留符合逻辑的阶段提交。
