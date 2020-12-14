---
metaTitle: 进阶玩法 | Hexo Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,hexo主题,fluid文档,用户文档,博客,文档
---

# 进阶玩法

## 压缩生成文件

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

## 使用 jsDelivr 服务

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

```yaml
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

## 加快网页加载

- 对于所有用户，将各种第三方库配置公共 CDN 是最有效的方式，可以通过**主题配置**中的 `static_prefix` 配置来链接（默认使用 jsDelivr CDN）；

- 如果你的域名已备案，可以使用[七牛云](https://portal.qiniu.com/signup?code=1hlwhx3ztjz2q)、阿里云、腾讯云等大厂的 OSS 服务并绑定域名，将生成后的 public 目录下全部上传到 OSS，然后你不仅可以无服务器部署博客，加载速度也将无可比拟；

- 没有备案，也可以通过香港及海外地区的云，或者私有 CDN 等方式进行加速，推荐一份 [CDN 使用指南](https://www.julydate.com/post/60859300)。

- 如果图片是存在 source 目录中，建议搭配 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件，可自动对图片进行压缩；

- 如果是存放在外部的图片，建议先使用 [tinypng](https://tinypng.com) 进行压缩。

## StaticFile CDN

目前**主题配置**中默认的 CDN 已经替换为 jsDelivr，如果仍想使用 staticfile，可以按照下方修改配置（注意有个别在 staticfile 是没有的，可以自行替换为 cdnjs 或者 bootcdn ）：

```yaml
  anchor: https://cdn.staticfile.org/anchor-js/4.3.0/

  github_markdown: https://cdn.staticfile.org/github-markdown-css/4.0.0/

  jquery: https://cdn.staticfile.org/jquery/3.5.1/

  bootstrap: https://cdn.staticfile.org/twitter-bootstrap/4.5.3/

  highlightjs: https://cdn.staticfile.org/highlight.js/10.4.0/

  prismjs: https://cdn.staticfile.org/prism/1.22.0/

  tocbot: https://cdn.staticfile.org/tocbot/4.12.0/

  typed: https://cdn.staticfile.org/typed.js/2.0.11/

  fancybox: https://cdn.staticfile.org/fancybox/3.5.7/

  nprogress: https://cdn.staticfile.org/nprogress/0.2.0/

  mathjax: https://cdn.staticfile.org/mathjax/3.1.2/es5/

  katex: https://cdn.staticfile.org/KaTeX/0.12.0/

  busuanzi: https://busuanzi.ibruce.info/busuanzi/2.3/

  clipboard: https://cdn.staticfile.org/clipboard.js/2.0.6/

  mermaid: https://cdn.staticfile.org/mermaid/8.8.3/

  valine: https://cdn.staticfile.org/valine/1.4.14/

  waline: https://cdn.jsdelivr.net/npm/@waline/client@0.4.2/dist/

  gitalk: https://cdn.staticfile.org/gitalk/1.7.0/

  disqusjs: https://cdn.jsdelivr.net/npm/disqusjs@1.0/dist/

  twikoo: https://cdn.jsdelivr.net/npm/twikoo@0.1.15/dist/
```
