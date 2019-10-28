# 使用指南

## 主题简介

Fluid 是基于 Hexo 的一款 Material Design 风格的主题，由 [Fluid-dev](https://github.com/fluid-dev) 负责开发与维护。

主题 Github: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

该主题相较于其他主题的优势：
1. 设计遵循简洁至上，同时具有轻快的体验，和优雅的颜值；
2. 提供大量定制化配置项，使每个用户使用该主题都能具有独特的样式；
3. 适配手机、平板等浏览设备，包括极端的分辨率都能轻松应对；
4. 积极地更新与处理反馈，我们近期已经更新了 30 项新功能及若干优化；
5. 为数不多支持 KaTeX 语法公式的主题。

示例网站：

[Rook1e's blog](https://0x2e.github.io)

[zkqiang's blog](http://zkqiang.cn)

## 关于指南

本指南仅为部分配置说明，**并不包括所有配置项**，具体配置要求请参照主题配置文件中的注释，若存在更多疑问请在 [issues](https://github.com/fluid-dev/hexo-theme-fluid/issues/new) 留言。

:::tip
本指南中提到的：
- "Hexo 配置" 指的是 Hexo 博客根目录下的 `_config.yml`
- "主题配置" 指的是 `theme/fluid/_config.yml`
:::

## 快速开始

### 获取最新版本

请优先下载 [最新 release 版本](https://github.com/fluid-dev/hexo-theme-fluid/releases)，master 分支无法保证稳定。

下载后解压到 themes 目录下并重命名为 `fluid`。

### 必要的配置

按如下内容修改 Hexo 根目录中的 `_config.yml`

```yaml
# 设置语言，需要对应下面目录内的文件名，可以自定义文件内容
# https://github.com/fluid-dev/hexo-theme-fluid/tree/master/languages
language: zh-CN

# 关闭默认的代码高亮
highlight:
  enable: false
```

### 启用主题

依然是根目录中的 `_config.yml`，如下修改：
```yaml
# Extensions
theme: fluid
```

## 全局

### 覆盖配置

覆盖配置可以使 Fluid 主题配置在 fluid
目录之外，避免在更新主题时丢失自定义的配置。

使用该功能必须保证 Hexo 版本不低于 3.0，因为该功能利用了 Hexo
[数据文件](https://hexo.io/zh-cn/docs/data-files.html) 功能

使用方式：

1. 进入 Hexo 博客根目录的 source 目录下（不是主题的 source 目录），创建
   `_data` 目录（和 `_post` 目录同级）；
2. 在 `_data` 目录下创建 `fluid_config.yml` 文件，将
   `/theme/fluid/_config.yml` 中被修改的配置或者全部配置，复制到
   `fluid_config.yml` 中；
3. 以后配置都在 `fluid_config.yml` 中修改，配置会在 `hexo g` 时自动覆盖。

所有资源静态文件的 Url 可以通过 `_static_prefix`
自定义配置，同样也支持覆盖配置，写入 `_data/fluid_static_prefix.yml` 即可。

其他情况，建议更新前备份 `/theme/fluid/_config.yml`，以免覆盖自定义的配置项。

### 静态文件

所有资源静态文件的 Url 可以通过 `_static_prefix`
自定义配置，同样也支持覆盖配置，写入 `_data/fluid_static_prefix.yml` 即可。

比如需要指定公共 CDN 的 JQuery 库，只需将原配置改为：

```yaml
jquery: https://cdn.staticfile.org/jquery/3.4.1/
```

### 本地搜索

- 已集成 hexo-generator-search 插件，若已安装其他搜索插件请关闭，以避免生成多余的索引文件。

- 默认在根目录生成并使用 `local-search.xml`。

### 顶部 Banner

- 图片来源

主题配置文件中，每个页面都有名为 `banner_img`
的属性，可以为外链的绝对链接，也可以使用相对链接。

若使用相对链接，建议将图片放置在 `fluid/source/img/`
目录下，对应填写的图片地址为 `/img/your_img_name`。

- 高度

鉴于每个人的喜好不同，开放对页面 `banner_img` 高度的控制。

主题配置文件中，每个页面对应的 `banner_img_height` 属性，有效值为 0 - 100。100 即为全屏，个人建议 70 以上。

- 固定 Banner

```yaml
banner_scroll: false
```

默认为 false，Banner 将不会跟随页面进行滚动，但在部分环境下因兼容问题会失效。

::: tip
每篇文章可单独设置 Banner，具体见文章页设置
:::

### 博客标题

页面左上角的博客标题，默认使用 Hexo 根目录配置中的
`title`，这个配置同时控制着网页在浏览器标签中的标题。

如需单独区别设置，可在主题配置中设置：

```yaml
navbar:
  blog_title: 博客标题
```

### 顶部菜单

```yaml
navbar:
  menu:
    Home: /
    Archives: /archives/
    Categories: /categories/
    Tags: /tags/
    About: /about/
```
可随意配置键值对，比如通过修改键名将显示名称改为中文，或者修改值的 Url
来跳转外链，也可以增加键值对增加一个入口。

::: tip
当使用覆盖配置时，修改原有键名会无法生效，可以将值留空，在下方新增键值对。
:::

### 图片懒加载

```yaml
lazyload:
  enable: true
  onlypost: false
```

开启后，当图片滚动到可见范围内才会加载，可以大幅提高网页整体加载速度

`onlypost` 为 true 时，仅在文章页才使用懒加载。

### 网页统计

目前支持百度和谷歌统计，只需填入标识即可。

```yaml
baidu_analytics: Key
google_analytics: UA-XXXXX-Y
```

如不想开启则留空。

## 首页

### Slogan

可在主题配置文件中设定是否开启：

```yaml
index:
  slogan:
    enable: true
    text: 这是一条 Slogan
```

如果 `text` 为空则按 Hexo 配置的 `subtitle` 显示

### 自动摘要

:::tip
优先级: 手动摘要 > 自动摘要

如果关闭自动摘要，并且没有设置手动摘要，摘要区域空白
:::

开关自动摘要：

```yaml
index:
  auto_excerpt:
    enable: true
```

### 文章跳转方式

```yaml
index:
  post_url_target: _self
```

可选值：

1. _blank：新标签页打开
2. _self：当前标签页打开

### 文章信息

可配置隐藏包括发布时间、分类、标签。

经过测试，如果首页的文章列表中没有略缩图和摘要，标题+文章信息的显示方式会使页面过于拥挤，所以给出此项配置供喜欢首页只显示文章标题的同学使用。

```yaml
index:
  post_meta:
    date: true
    category: true
    tag: true
```

## 文章页

### 文章首页略缩图

文章开头 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 中配置
index_img 属性。

```
---
title: 文章标题
tags: [Hexo, Fluid]
index_img: /img/example.jpg
date: 2019-10-10 10:00:00
---
以下是文章内容
```

和 Banner 配置相同，`/img/example.jpg` 对应的是存放在 `fluid/source/img/`
目录下的图片，注意必须以 `/` 开头。

也可以使用外链 Url 的绝对路径。

### 文章页顶部 Banner

默认显示主题 config 中的 `post.banner_img`，如需要设置单个文章的 Banner，在
[Front-matter](https://hexo.io/zh-cn/docs/front-matter)
中指定 banner_img 属性。

```
---
title: 文章标题
tags: [Hexo, Fluid]
index_img: /img/example.jpg
banner_img: /img/post_banner.jpg
date: 2019-10-10 10:00:00
---
以下是文章内容
```

### 手动摘要

:::tip
优先级: 手动摘要 > 自动摘要

显示字数固定 4 行，因此当屏幕宽度不足时会隐藏部分摘要。
:::

手动指定摘要，使用 `<!-- more -->` 划分文章,例：

```
这里是摘要
<!-- more -->
这里是正文
```

### 代码高亮样式

:::warning
请确保已关闭 Hexo 默认代码高亮，否则会出现异常样式
:::

关闭默认代码高亮的方式，修改 Hexo 根目录中的 `_config.yml`：

```yaml
highlight:
  enable: false
```

可以修改样式的主题，在主题配置中指定：

```yaml
highlight:
  theme: tomorrow-night-eighties
```

主题自带了 4 种配置样式：

- github-v2
- tomorrow
- tomorrow-night
- tomorrow-night-eighties

使用更多主题的方式：

1. 进入
   [该链接](https://jmblog.github.io/color-themes-for-google-code-prettify/)
   下载 `min.css` 文件，并保存为 `文件名.min.css` 到
   `fluid/source/lib/prettify/`
2. 找到文件中的 `.prettyprint{ background: ***; ...}`，在 *** 后面加上
   `!important` ，例如：`.prettyprint{background:#fafbfc!important; ...}`
3. 最后主题配置中设置 `theme: 文件名`（不含后缀）

### 代码行号

可以在 Hexo 根目录配置中开关：

```yaml
highlight:
  line_number: true
```

### 评论

当前支持 Valine、Disqus、Gitalk、Utterances。参数设置请参考主题配置文件。

若需要添加其他评论系统，请自行创建 fluid/layout/_partial/comments/your_comment_file.ejs，填入评论系统服务商提供的代码，在主题配置文件中修改 comments.type 为刚刚创建的文件名（不带 .ejs）

### 文章样式

文章样式使用的是 github-markdown，暂时不支持配置，细节调整可自行修改
`fluid/source/lib/github-markdown/github-markdown.min.css`

### KaTeX 数学公式

当需要使用 [KaTeX](https://katex.org/)
语法的数学公式时，可手动开启本功能，需要完成两步操作：

1. 设置主题配置

```yaml
post:
  math:
    enable: true
    specific: false
    engine: mathjax
```

`specific`: 当为 true 时，只有在文章
[Front-matter](https://hexo.io/zh-cn/docs/front-matter) 里指定 `math:
true` 才会在文章页启动公式转换，以便在页面不包含公式时提高加载速度。

`engine`: 公式渲染引擎，目前支持 `mathjax` 或 `katex`。

2. 更换 Markdown 渲染器

由于 Hexo 默认的 Markdown 渲染器不支持复杂公式，所以必须更换渲染器。

先卸载原有渲染器：

`npm uninstall hexo-renderer-marked --save`

然后根据上方配置不同的 `engine`，推荐更换如下渲染器：

mathjax: `npm install hexo-renderer-kramed --save`

katex: `npm install @upupming/hexo-renderer-markdown-it-plus --save`

注意：渲染器只能保留一种，如果更换公式引擎，对应渲染器也要一并更换。

:::tip

不同的公式引擎有不同的优缺点。

**MathJax**

优点
- 对 LaTeX 语法支持全面
- 右键点击公式有扩展功能

缺点
- 需要加载 JS，页面加载会比较慢，并且有渲染变化
- kramed 渲染器对内联公式的转义字符 `\` 支持不足

**Katex**

优点
- 没有 JS 不会影响页面加载
- 渲染器效果好 (相对 kramed 对 MathJax 的内联公式)

缺点
- 小部分 LaTeX 不支持

:::

## Archives 归档页

除 Banner 配置外，暂无其他配置项。

## Categories 分类页

除 Banner 配置外，暂无其他配置项。

## Tags 标签页

可以设置词云的一些样式：

```yaml
tag:
  tagcloud:
    min_font: 15
    max_font: 30
    unit: px  # 字号单位
    start_color: "#BBBBEE"
    end_color: "#337ab7"
```

## About 关于页

### 自定义内容

页面中社交图标下方的空白区域支持自定义内容。只需编辑 fluid/pages/about.md，再次 `hexo g` 时会自动渲染。

### icons

导航栏与关于页的社交网络图标，均引用自 [fontawesome](https://fontawesome.com/icons)。只需要将属性名替换为图标名称，属性值替换为 url 即可。

## 404 页

404 页是在访问不存在的博客链接时，出现的错误提示页面。

开启此页面需要在博客的部署环境上配置：

- 如果博客部署在云服务器，需要 Nginx 配置文件设置 `error_page 404 =
  /404.html`；
- 如果部署在 Github Pages 上，不需要额外配置，但必须绑定顶级域名才生效；
- 其他 OSS 等平台，请参考各平台关于 404 页的配置文档，但并不是所有平台都支持跳转
  Html。

## 常见问题

#### 代码高亮样式异常

- 请确认已完成上述『[关闭默认的代码高亮](/guide/#必要的配置)』步骤
- 尝试清除命令 `hexo clean && hexo g`

#### 配置无效

- 请检查配置文件是否符合 yml 语法，如冒号后需要有空格，缩进需要 2 个空格等

## 关于 Hexo 的配置

[Hexo _config.yml 配置](https://hexo.io/zh-cn/docs/configuration)

[文章 Front-matter 配置](https://hexo.io/zh-cn/docs/front-matter)

## 微信交流群

[查看微信群二维码](https://github.com/fluid-dev/hexo-theme-fluid/issues/96)

## 开源协议

[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)

## 其他

[更新日志](/changelog/)

[贡献开发](/contribute/)
