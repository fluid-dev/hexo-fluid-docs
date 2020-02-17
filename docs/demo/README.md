---
metaTitle: 操作示例 | Hexo Theme Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fulid,hexo主题,fluid文档,用户文档,博客,文档
---

# 操作示例

## 搭建

1. 全局安装 hexo

```bash
# 如果 npm 安装缓慢可以使用淘宝镜像加速：npm config set registry https://registry.npm.taobao.org
npm install -g hexo
```

安装以后命令行终端输入 `hexo -v`，如果显示 hexo 信息，则安装成功。

接下来初始化 hexo，在空文件夹（不能有任何文件，包括隐藏文件）执行命令 `hexo init`。成功后的目录结构：

```text
│  .gitignore
│  package.json
│  yarn.lock
│  _config.yml
├─node_modules
├─scaffolds
│     draft.md
│     page.md
│     post.md
├─source
│  └─_posts
│       hello-world.md
└─themes
```

2. 安装 fluid 主题

下载[最新版](https://github.com/fluid-dev/hexo-theme-fluid/releases)并解压到 themes 目录下，重命名为 fluid，然后在博客 _config.yml 设置如下：

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: fluid
```

## 配置（重点）

推荐使用[覆盖设置](https://fluid-dev.github.io/hexo-fluid-docs/guide/#%E8%A6%86%E7%9B%96%E9%85%8D%E7%BD%AE)功能，可以在主题目录之外自定义 config，不用担心更新主题时丢失配置。

在博客 source 目录中新建 `_data` 目录（不是主题的 source），再新建两个配置文件：

```
fluid_config.yml    # 主题配置在这里修改
fluid_static_prefix.yml # 静态资源配置在这里修改
```

这样主题就会有两个配置文件：

1. /source/_data/fluid_config.yml
2. /themes/fluid/_config.yml

1 的优先级高于 2，即 1 中的配置会覆盖掉 2 中同名配置项。

## 本地调试

第一次运行应用先要安装依赖

```yml
# 下面二选一
npm install

yarn install
```

（演示将以 yarn 作为安装工具，可自行替换为 npm）启动服务，用于调试

```bash
# 三选一
npm run server
yarn run server
hexo s # hexo server 的简写
```

## 生成

```bash
hexo clean && hexo g
```

## 压缩（可选）

采用 gulp 进行页面压缩，全局安装 gulp

```bash
yarn global add gulp
npm install -g gulp
```

安装依赖包:

```bash
npm install gulp gulp-htmlclean gulp-htmlmin gulp-minify-css gulp-uglify --save

# 或使用 yarn
yarn add gulp gulp-htmlclean gulp-htmlmin gulp-minify-css gulp-uglify
```

然后在博客目录新建 `gulpfile.js` 文件，用于存放 gulp 压缩配置

```js
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({collaspseWhiteSpace:true}))
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 执行 gulp 命令时执行的任务
gulp.task('default', gulp.series('minify-html','minify-css','minify-js'));
```

以上只需要一次设置，以后就不需要设置，直接在终端运行，就可以直接把 public 里面的文件自动压缩

```bash
gulp
```

## 部署

这里演示如何部署到 GitHub Pages 中。

在博客目录 `_config.yml` 中配置，参考如下：

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  - type: git
    repo: git@github.com:username/username.github.io.git
    branch: master
```

将你的 ssh 密钥上传到远程仓库，如果未设置则需要手工输入用户名和密码。然在终端命令行：

```bash
hexo d
```

## 更新主题

### 方法一

直接在 github 下载最新的 release，然后替换掉 themes 下的主题文件，故推荐将配置全部写在 source/_data/fuid_config.yml

### 方法二

用一个子仓库作为链接，用 git 更新

步骤：

2.1 先 fork 主题 [Fluid](https://github.com/fluid-dev/hexo-theme-fluid) 到你的 github 账户

2.2 在项目主目录增加远程仓库链接

```bash
git remote add fluid https://github.com/juukee/hexo-theme-fluid # 请改成自己实际的仓库地址
```

2.3 将主题项目仓库作为一个子仓库

```bash
# --prefix=themes/fluid 主题目录所在位置
# fluid 这个是上面一步定义的远程仓库地址
# master 远程仓库的master分支
git subtree add --prefix=themes/fluid fluid master
```

更新主题：以后更新主题一条命令搞定

```bash
git subtree pull --prefix=themes/fluid fluid master
```

推送主题：如果你想开发主题，在主题文件里面修改代码，推送到自己仓库，然后 PR 到作者的主仓库，由作者审核并合并代码

```bash
git subtree push --prefix=themes/fluid fluid master
```
