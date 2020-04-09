---
metaTitle: 操作示例 | Hexo Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,hexo主题,fluid文档,用户文档,博客,文档
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

推荐使用[覆盖设置](/guide/#%E8%A6%86%E7%9B%96%E9%85%8D%E7%BD%AE)功能，可以在主题目录之外自定义 config，不用担心更新主题时丢失配置。

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

可以使用 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件对生成的文件和图片进行压缩，大致步骤：

先安装插件：

```bash
npm i hexo-all-minifier --save

# Mac 系统还需要额外安装
brew install libtool automake autoconf nasm
```

然后在博客配置中加入：

```yaml
all_minifier: true
```

这样即可快速使用。

具体的细节配置可参考[官方文档](https://github.com/chenzhutian/hexo-all-minifier)

## 使用 jsDelivr 服务（可选）

插入来自 Github 仓库的图片，由于网络情况可能会出现加载慢和无法加载的情况，我们可以使用 [jsDelivr](https://www.jsdelivr.com/) 来加速图片文件等媒体文件的加载。

通常情况下，可以新建一个仓库来存放这些文件，目前已知的有图片、视频和引用的相关文件可以使用，Github 仓库最大上传文件为 25M，请注意文件大小。

使用方法（文件的绝对地址）

```
https://cdn.jsdelivr.net/gh/user/repo@version/file
```

相关实例（博客仓库下 master 分支里 favicon 图片文件）

```
https://cdn.jsdelivr.net/gh/fluid-dev/hexo-theme-fluid@master/source/img/favicon.png
```

## 部署

这里演示如何部署到 GitHub Pages 中。

在博客配置中设置部署仓库，参考如下：

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

:::tip
适用于没有自行修改任何代码的情况（配置文件除外）
:::

1. 将自己的配置文件备份（如果完整使用[覆盖配置](/guide/#覆盖配置)功能可忽略此步骤）

2. 将 fluid 文件夹全部删除，重新下载 [release](https://github.com/fluid-dev/hexo-theme-fluid/releases) 并解压

3. 如果某些配置发生了变化（改名或弃用），release 的说明里会特别提示，同步修改原配置文件即可。 

### 方法二

:::tip
适用于自定义了一些代码，或想体验 master 分支的情况
:::

1. 确定自己的 fluid 目录已经开启 git，并且所有改动都已 commit

2. 把 fluid 仓库的 master 分支拉取到自己的分支上（可新建一个分支再拉取）

```bash
git pull https://github.com/fluid-dev/hexo-theme-fluid.git master
```

3. 解决代码冲突，保留自己修改的部分（如何解决冲突可自行搜索）

## 加快网页加载

- 对于所有用户，将各种第三方库配置公共 CDN 是最有效的方式，可以通过配置 `_static_prefix.yml` 来链接（默认已经使用 staticfile CDN，国内用户可不做改动）；

- 如果你的域名已备案，可以使用[七牛云](https://portal.qiniu.com/signup?code=1hlwhx3ztjz2q)、阿里云、腾讯云等大厂的 OSS 服务并绑定域名，将生成后的 public 目录下全部上传到 OSS，然后你不仅可以无服务器部署博客，加载速度也将无可比拟；

- 没有备案，也可以通过香港及海外地区的云，或者私有 CDN 等方式进行加速，推荐一份 [CDN 使用指南](https://www.julydate.com/post/60859300)。

- 如果图片是存在 source 目录中，建议搭配 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件，可自动对图片进行压缩；

- 如果是存放在外部的图片，建议先使用 [tinypng](https://tinypng.com) 进行压缩。
