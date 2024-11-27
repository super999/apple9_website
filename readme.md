# Apple9 项目文档


## 1. hexo 启动命令

调试运行
```bash
hexo server
```

打包
```bash
hexo generate
```

打包且发布
```bash
hexo generate --deploy
```
## 2. hexo 编写文章

新建文章
```bash
hexo new "文章标题"
```

## 3. cnpm 安装命令， 项目初始化


```bash
#安装 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
```

```bash
# 设置 npm 镜像
xiawe@xiawen-pc-3060 MINGW64 /c/website_dev/apple9_website/apblog (master)
$ npm config set registry https://registry.npmmirror.com
```

```bash
# 安装项目依赖
xiawe@xiawen-pc-3060 MINGW64 /c/website_dev/apple9_website/apblog (master)
$ npm install
```
