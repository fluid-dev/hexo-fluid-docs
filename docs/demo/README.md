---
metaTitle: 示例代码-fluid-fluid-demo-hexo主题-基于fluid开发的hexo主题-fluid中文-fluid文档-fluid中文文档
meta:
  - name: description
    content: Fluid是基于Hexo的一款 Material Design 风格的主题,fluid,fluid主题,fluid文档,hexo主题,hexo主题文档,fluid中文网,fluid中文文档,
  - name: keywords
    content: fulid,hexo主题,fluid文档,hexo主题文档,fluid中文网,fluid中文文档
---

# 示例代码

## 项目搭建
::: tip
本项目使用hexo搭建fluid主题
:::

1.搭建hexo,全局安装hexo
```node
npm install -g hexo
```
如果npm安装缓慢可以使用淘宝镜像加速
```node
npm config set registry https://registry.npm.taobao.org
```
安装以后命令行终端输入
```
hexo -v
```
如果显示结果，则说明安装成功
```
C:\pj\hexo-fluid-docs>hexo -v

hexo-cli: 3.1.0
os: Windows_NT 6.1.7601 win32 x64
node: 12.13.0
v8: 7.7.299.13-node.12
uv: 1.32.0
zlib: 1.2.11
brotli: 1.0.7
ares: 1.15.0
modules: 72
nghttp2: 1.39.2
napi: 5
llhttp: 1.1.4
http_parser: 2.8.0
openssl: 1.1.1d
cldr: 35.1
icu: 64.2
tz: 2019a
unicode: 12.1
```
接下来初始化hexo，在空文件夹（不能有任何文件）执行命令: 
```
hexo init
```
请注意这个地方有个坑：如果目录下面有隐藏文件也会提示错误.
所以window下可以设置里面显示隐藏文件，linux使用命令强制删除文件: rm -f /*(记得在终端看清所在目录位置，误删不要找我)
1. │  .gitignore
2. │  package.json
3. │  yarn.lock
4. │  _config.yml
5. ├─node_modules
6. ├─scaffolds
7. │      draft.md
8. │      page.md
9. │      post.md
10. ├─source
11. │  └─_posts
12. │          hello-world.md
13. └─themes

将fluid主题复制到themes下面，然后根目录下面的_config.yml设置如下：
```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: fluid  #注意必须和要themes下面的主题文件名字一致
```

## 配置设置（重点）
推荐使用[覆盖设置](https://fluid-dev.github.io/hexo-fluid-docs/guide/#%E8%A6%86%E7%9B%96%E9%85%8D%E7%BD%AE)，
好处是如果模板更新可以自动覆盖更新，不用担心文件丢失
以后只需要在此处增加或者删除配置即可
新建source/_data，增加两个配置文件：
```
fluid_config.yml    #主配置在这里改动
fluid_static_prefix.yml #静态资源设置在这里改动
```
## 本地调试
第一次运行应用先要安装依赖,推荐使用yarn
```yml
npm install
#两个选择一个就可以了
yarn install 
```
下同，演示将以yarn作为安装工具，可自行替换为npm
开启服务，用于调试
```yml
#以下命令行都可以
npm run server
yarn run server
hexo server
hexo s  (推荐使用，命令行较少)
```
## 生成
生成静态页面到public目录下面
终端命令行：
```yml
#二选一
hexo generate
hexo g 
```
## 压缩
采用gulp进行页面压缩,全局安装gulp
```node
yarn global add gulp
npm install -g gulp
```
安装依赖包:
```yml
npm install gulp --save
npm install gulp-htmlclean --save
npm install gulp-htmlmin --save
npm install gulp-minify-css --save
npm install gulp-uglify --save
#或者一条命令安装
npm install gulp gulp-htmlclean gulp-htmlmin gulp-minify-css gulp-uglify --save
```
```yml
yarn add gulp
yarn add gulp-htmlclean
yarn add gulp-htmlmin
yarn add gulp-minify-css
yarn add gulp-uglify
#或者一条命令安装
yarn add gulp gulp-htmlclean gulp-htmlmin gulp-minify-css gulp-uglify
```

然后新建一个gulpfile.js文件，里面存放gulp压缩设置
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
gulp.task('default', gulp.series('minify-html','minify-css','minify-js')
    );

```
以上只需要首次设置，以后就不需要设置，直接在终端命令行运行,就可以直接把public里面的文件自动压缩
```yml
gulp
```

## 部署
在根目录下面 _config.yml 设置，参考如下

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  - type: git
    repo: git@github.com:juukee/juukee.github.io.git
    branch: master
  - type: git
    repo: git@gitee.com:juukee/juukee.git
    branch: master
```
将你的ssh密钥上传到远程仓库，如果未设置则需要手工输入用户名和密码。然在
终端命令行：
```
hexo d 
```





