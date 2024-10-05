---
title: hexo部署方法
date: 2024-10-05 08:57:25
id: 1728090252
tags:
  - 部署
categories:
  - 技术
keywords: 部署
description: hexo部署方法
---

## hexo 部署流程

1. 修改 `_config.yml` 文件中的 `deploy` 配置项
2. 使用 Git Bash 生成 SSH 公钥：

```yaml
deploy:
  type: rsync
  host: 47.113.177.174
  user: root
  root: /usr/share/nginx/html/apple9
  port: 22
  delete: true
  verbose: true
  ignore_errors: false
```

2. 生成 ssh key

```bash
ssh-keygen -t rsa
```

3. 将公钥添加到服务器

```bash
ssh-copy-id user@<你的服务器IP地址>
```

4. 部署 Hexo 网站,使用 `hexo d` 或 `hexo deploy` 命令部署 Hexo 网站

```bash
hexo clean && hexo generate && hexo deploy
```

5. ssh key 下载地址

   * [密钥.rar](/download/ssh_key.rar)

6. rsync for windows 下载地址
   * [libzstd-1.5.6-1-x86_64.pkg.tar.zst](https://www2.futureware.at/~nickoe/msys2-mirror/msys/x86_64/libzstd-1.5.6-1-x86_64.pkg.tar.zst)
   * [liblz4-1.9.4-1-x86_64.pkg.tar.zst](https://www2.futureware.at/~nickoe/msys2-mirror/msys/x86_64/liblz4-1.9.4-1-x86_64.pkg.tar.zst)
   * [rsync-3.2.3-1-x86_64.pkg.tar.zst](https://www2.futureware.at/~nickoe/msys2-mirror/msys/x86_64/rsync-3.2.3-1-x86_64.pkg.tar.zst)
   * [rsync-3.2.3-1-x86_64.pkg.tar.zst.sig](https://www2.futureware.at/~nickoe/msys2-mirror/msys/x86_64/rsync-3.2.3-1-x86_64.pkg.tar.zst.sig)
   
7. 下载后把文件放到 `C:\Program Files\Git\mingw64\bin` 目录下 或 `C:\Program Files\Git\bin` 目录下

