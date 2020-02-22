title: gitignore
categories:
 - Git
author: 宋玉
date: 2020-02-22 13:15:22
---

vim ~/.gitconfig

```javascript
[user]
    name = ###
    email = ###
[push]
    default = matching
[core]
    excludesfile = ~/.gitignore_global
```

创建.gitignore_global

```yaml
 # .gitignore_global
 .DS_Store
 .DS_Store?
 *.swp
 ._*
 .Spotlight-V100
 .Trashes
 Icon?
 ehthumbs.db
 Thumbs.db
 *.7z
 *.dmg
 *.gz
 *.iso
 *.jar
 *.rar
 *.tar
 *.zip
 
# Environments
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```

[参考链接](https://www.cnblogs.com/zjuhjm/p/10581928.html)

配置语法：<br />以斜杠“/”开头表示目录；<br />以星号“*”通配多个字符；<br />以问号“?”通配单个字符<br />以方括号“[]”包含单个字符的匹配列表；<br />以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
