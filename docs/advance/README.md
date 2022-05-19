# 进阶用法

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot is-new-ads-code="yes" class="side-ads"></Adsense>

## Hexo 注入代码

[Hexo 注入器](https://hexo.io/zh-cn/api/injector.html)是 Hexo 5 版本自身加入的一项新功能，所以在所有 Hexo 主题都是支持这个功能的。

注入器可以将 HTML 片段注入生成页面的 `<head>` 和 `<body>` 节点中。

编写注入代码，需要在博客的根目录下创建 `scripts` 文件夹，然后在里面任意命名创建一个 js 文件即可。

例如创建一个 `/blog/scripts/example.js`，内容为：

```javascript
hexo.extend.injector.register('body_end', '<script src="/jquery.js"></script>', 'default');
```

上述代码会在生成的页面 `</body>` 注入加载 `jquery.js` 的代码。

`register` 函数可接受三个参数，第一个参数是代码片段注入的位置，接受以下值：  
- `head_begin`: 注入在 `<head>` 之后（默认）  
- `head_end`: 注入在 `</head>` 之前  
- `body_begin`: 注入在 `<body>` 之后  
- `body_end`: 注入在 `</body>` 之前  

第二个参数是注入的片段，可以是字符串，也可以是一个返回值为字符串的函数。

第三个参数是注入的页面类型，接受以下值：
- `default`: 注入到每个页面（默认值）  
- `home`: 只注入到主页（`is_home()` 为 `true` 的页面）  
- `post`: 只注入到文章页面（`is_post()` 为 `true` 的页面）  
- `page`: 只注入到独立页面（`is_page()` 为 `true` 的页面）  
- `archive`: 只注入到归档页面（`is_archive()` 为 `true` 的页面）  
- `category`: 只注入到分类页面（`is_category()` 为 `true` 的页面）  
- `tag`: 只注入到标签页面（`is_tag()` 为 `true` 的页面）  
- 或是其他自定义 layout 名称，例如在Fluid 主题中 `about` 对应关于页、`links` 对应友联页  

## Fluid 注入代码

Fluid 主题也提供了一套注入代码功能，相较于 Hexo 注入功能更细致更丰富，并且支持注入 `ejs` 代码。

如果你想充分修改主题，又不想直接修改源码影响日后更新，本主题提供了代码注入功能，可以将代码无侵入式加入到主题里。

你可以直接注入 HTML 片段，不过建议你了解一下 [EJS 模板引擎](https://ejs.bootcss.com/)，这样你就可以像主题里的 `ejs` 文件一样编写自己的组件再注入进去。

进入博客目录下 `scripts` 文件夹（如不存在则创建），在里面创建任意名称的 js 文件，在文件中写入如下内容：

```javascript
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

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot is-new-ads-code="yes"></InArticleAdsense>

## 加快网页加载

- 如果你的域名已备案，可以使用[七牛云](https://s.qiniu.com/N7beiu)、阿里云、腾讯云等大厂的 OSS 服务并绑定域名，将生成后的 public 目录下全部上传到 OSS，然后你不仅可以无服务器部署博客，加载速度也将无可比拟；

- 没有备案，也可以通过香港及海外地区的云，或者私有 CDN 等方式进行加速，推荐一份 [CDN 使用指南](https://www.julydate.com/post/60859300)。

- 如果图片是存在 source 目录中，建议搭配 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) 插件，可自动对图片进行压缩；

- 如果是存放在外部的图片，建议先使用 [tinypng](https://tinypng.com) 进行压缩。
