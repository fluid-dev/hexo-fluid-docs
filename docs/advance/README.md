---
metaTitle: 进阶用法 | Hexo Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,hexo主题,fluid文档,用户文档,博客,文档
---

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot class="side-ads"></Adsense>

# 进阶用法

## 注入代码

:::warning

该功能需要 Fluid 1.9.0-beta 版本

:::

如果你想充分修改主题，又不想直接修改源码影响日后更新，本主题提供了代码注入功能，可以将代码无侵入式加入到主题里。

你可以直接注入 HTML 片段，不过建议你了解一下 [EJS 模板引擎](https://ejs.bootcss.com/)，这样你就可以像主题里的 `ejs` 文件一样编写自己的组件再注入进去。

进入博客目录下 `scripts` 文件夹（如不存在则创建），在里面创建任意名称的 js 文件，在文件中写入如下内容：

```js
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('default', 'source/_inject/test1.ejs', { key: 'value' }, -1);
  injects.footer.raw('default', '<script async src="https://xxxxxx" crossorigin="anonymous"></script>');
});
```

- `header` 和 `footer` 是注入点的名称，表示代码注入到页面的什么位置；
- `file` 方法表示注入的是文件，第一个参数下面介绍，第二个参数则是文件的路径，第三个参数是传入文件的参数（可省略），第四个参数是顺序（可省略）；
- `raw` 方法表示注入的是原生代码，第一个参数下面介绍，第二个参数则是一句原生的 HTML 语句；
- `default` 表示注入的键名，可以使用任意键名，同一个注入点下的相同键名会使注入的内容覆盖，而不同键名则会让内容依次排列（默认按执行先后顺序，可通过 `file` 第四个参数指定），这里 default 为主题默认键名，通常会替换掉主题默认的组件；

主题目前提供的注入点如下：

| 注入点名称 | 注入范围 | 存在 `default` 键 |
| --- | --- | --- |
| head | `<head>` 标签中的结尾 | 无 |
| header | `<header>` 标签中所有内容 | 有 |
| bodyBegin | `<body>` 标签中的开始 | 无 |
| bodyEnd | `<body>` 标签中的结尾 | 无 |
| footer | `<footer>` 标签中所有内容 | 有 |
| postMetaTop | 文章页 `<header>` 标签中 meta 部分内容 | 有 |
| postMetaBottom | 文章页底部 meta 部分内容 | 有 |
| postMarkdownBegin | `<div class="markdown-body">` 标签中的开始 | 无 |
| postMarkdownEnd | `<div class="markdown-body">` 标签中的结尾 | 无 |
| postLeft | 文章页左侧边栏 | 有 |
| postRight | 文章页右侧边栏 | 有 |
| postCopyright | 文章页版权信息 | 有 |
| postRight | 文章页右侧边栏 | 无 |
| postComments | 文章页评论 | 有 |
| pageComments | 自定义页评论 | 有 |
| linksComments | 友链页评论 | 有 |

## Hexo 插件

:::warning
所有插件仅作为推荐，并且不能保证完全与 Fluid 兼容使用（Fluid 开发组会尽力适配，但实际上大部分不兼容是我们无法单方面解决的），请仔细阅读它们的文档，以免造成不良后果。
:::

[hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) : 压缩 Hexo 生成的文件

[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) : 通过 Hex 算法生成永久的文章链接

[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) : 可以在文章中插入视频 Tag

[live2d-widget](https://github.com/stevenjoezhang/live2d-widget) : 在网页上加入 Live2D 看板娘

[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) : 生成 Atom 1.0 or RSS 2.0 feed

[hexo-admin](https://github.com/jaredly/hexo-admin) : 为 Hexo 搭建可视化管理页面

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot></InArticleAdsense>

## 使用 jsDelivr 服务

插入来自 GitHub 仓库的图片，由于网络情况可能会出现加载慢和无法加载的情况，我们可以使用 [jsDelivr](https://www.jsdelivr.com/) 来加速图片文件等媒体文件的加载。

通常情况下，可以新建一个仓库来存放这些文件，目前已知的有图片、视频和引用的相关文件可以使用，GitHub 仓库最大上传文件为 25M，请注意文件大小。

使用方法（文件的绝对地址）

```
https://cdn.jsdelivr.net/gh/user/repo@version/file
```

相关实例（博客仓库下 master 分支里 favicon 图片文件）

```
https://cdn.jsdelivr.net/gh/fluid-dev/hexo-theme-fluid@master/source/img/favicon.png
```

## 加快网页加载

- 对于所有用户，将各种第三方库配置公共 CDN 是最有效的方式，可以通过**主题配置**中的 `static_prefix` 配置来链接（默认使用 jsDelivr CDN）；

- 如果你的域名已备案，可以使用[七牛云](https://s.qiniu.com/N7beiu)、阿里云、腾讯云等大厂的 OSS 服务并绑定域名，将生成后的 public 目录下全部上传到 OSS，然后你不仅可以无服务器部署博客，加载速度也将无可比拟；

- 没有备案，也可以通过香港及海外地区的云，或者私有 CDN 等方式进行加速，推荐一份 [CDN 使用指南](https://www.julydate.com/post/60859300)。

- 如果图片是存在 source 目录中，建议搭配 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件，可自动对图片进行压缩；

- 如果是存放在外部的图片，建议先使用 [tinypng](https://tinypng.com) 进行压缩。

## StaticFile CDN

目前**主题配置**中默认的 CDN 已经替换为 jsDelivr，如果仍想使用 staticfile，可以按照下方修改配置：

```yaml
static_prefix:
  # 内部静态
  # Internal static
  internal_js: /js
  internal_css: /css
  internal_img: /img

  anchor: https://cdn.staticfile.org/anchor-js/4.3.1/

  github_markdown: https://cdn.staticfile.org/github-markdown-css/4.0.0/

  jquery: https://cdn.staticfile.org/jquery/3.6.0/

  bootstrap: https://cdn.staticfile.org/twitter-bootstrap/4.6.1/

  highlightjs: https://cdn.staticfile.org/highlight.js/11.4.0/

  prismjs: https://cdn.staticfile.org/prism/1.26.0/

  tocbot: https://cdn.staticfile.org/tocbot/4.18.0/

  typed: https://cdn.staticfile.org/typed.js/2.0.12/

  fancybox: https://cdn.staticfile.org/fancybox/3.5.7/

  nprogress: https://cdn.staticfile.org/nprogress/0.2.0/

  mathjax: https://cdn.staticfile.org/mathjax/3.2.0/es5/

  katex: https://cdn.staticfile.org/KaTeX/0.15.2/

  busuanzi: https://busuanzi.ibruce.info/busuanzi/2.3/

  clipboard: https://cdn.staticfile.org/clipboard.js/2.0.10/

  mermaid: https://cdn.staticfile.org/mermaid/8.13.10/

  valine: https://cdn.staticfile.org/valine/1.4.16/

  waline: https://cdn.staticfile.org/waline/1.5.2/

  gitalk: https://cdn.staticfile.org/gitalk/1.7.2/

  disqusjs: https://cdn.staticfile.org/disqusjs/1.3.0/

  twikoo: https://cdn.staticfile.org/twikoo/1.4.17/

  hint: https://cdn.staticfile.org/hint.css/2.7.0/
```
