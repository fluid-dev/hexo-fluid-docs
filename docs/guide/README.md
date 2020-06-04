---
metaTitle: 配置指南 | Hexo Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,hexo主题,fluid文档,用户文档,博客,文档,博客,文章
---

# 配置指南

:::tip
致主题的新用户：

- 本指南经过数个版本打磨，绝大部分功能都有详细说明，请仔细阅读；

- 本指南中提到的："**博客配置**" 指的 Hexo 博客目录下的 `_config.yml`，"**主题配置**" 指的是 `theme/fluid/_config.yml`，两者文件名相同，注意区分；

- 博客与主题的 source 目录最终会合并，因此存放的文件优先选择博客的 source；

- 页面个人化定制可以通过[自定义功能](/guide/#自定义-js-css-html)实现；

- 每次无论 `hexo g` 或 `hexo s`，都最好先使用 `hexo clean`；

- 页面结果以本地 `hexo s` 为准，部署后的异常大部分是缓存原因；

- 没有经验的用户可以参考 [操作示例](/example/) 进行操作。
:::

## 主题简介

Fluid 是基于 Hexo 的一款 Material Design 风格的主题，由 [Fluid-dev](https://github.com/fluid-dev) 负责开发与维护。

主题 GitHub: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

预览网站：

[Demo](https://hexo.fluid-dev.com/)

[zkqiang's blog](https://zkqiang.cn)

[Rook1e's blog](https://rook1e.com)

[吃白饭的休伯利安号（有代码修改）](https://eatrice.top)

## 关于指南

本指南仅为部分配置说明，**并不包括所有配置项**，具体配置要求请参照**主题配置**中的注释，若存在更多疑问请在 [issues](https://github.com/fluid-dev/hexo-theme-fluid/issues/new) 留言。

本指南网页是使用 [VuePress](https://vuepress.vuejs.org/) 生成。

## 快速开始

### 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

### 获取最新版本

请优先下载 [最新 release 版本](https://github.com/fluid-dev/hexo-theme-fluid/releases)，master 分支无法保证稳定。

下载后解压到 themes 目录下并重命名为 `fluid`。

### 必要的配置

必须如下修改博客目录下的 `_config.yml`：

```yaml
theme: fluid  # 指定主题

language: zh-CN  # 指定语言，可不改
```

### 创建「关于页」

首次使用主题的「关于页」需要手动创建：

```bash
$ hexo new page about
```

创建成功后修改 `/source/about/index.md`，添加 `layout` 属性。

修改后的文件示例如下：

```yaml
---
title: about
date: 2020-02-23 19:20:33
layout: about
---

# 这里可以写正文
支持 Markdown, HTML
```

## 全局

### 覆盖配置

**该功能可实现平滑升级主题，推荐所有人学习使用**。

覆盖配置可以使**主题配置**放置在 fluid 目录之外，避免在更新主题时丢失自定义的配置。

使用该功能必须保证 Hexo 版本不低于 3.0，因为该功能利用了 [Hexo 数据文件](https://hexo.io/zh-cn/docs/data-files.html) 功能。

使用方式：

1. 进入博客目录的 source 目录下（不是主题目录的 source），创建 `_data` 目录（和 `_post` 目录同级）；
2. 在 `_data` 目录下创建 `fluid_config.yml` 文件，将 `/theme/fluid/_config.yml` 中全部配置（或部分配置）复制到 `fluid_config.yml` 中；
3. 以后配置都在 `fluid_config.yml` 中修改，配置会在 `hexo g` 时自动覆盖。

:::tip
- 也可以只覆盖部分配置，但注意只要存在于 `fluid_config.yml` 的配置都是高优先级，修改原 `_config.yml` 是无效的。
- 每次更新主题可能存在配置变更，请注意更新说明，可能需要手动对 `fluid_config.yml` 同步修改。
- 想查看覆盖配置有没有生效，可以通过 `hexo g --debug` 查看命令行输出。
:::

如果想将某些配置覆盖为空，注意不要把主键删掉，不然是无法覆盖的，比如：

```yaml
about:
  icons:  # 不要把 icon 注释掉，否则无法覆盖配置
    # - { class: 'iconfont icon-github-fill', link: 'https://github.com' }
    # - { class: 'iconfont icon-wechat-fill', qrcode: '/img/favicon.png' }
```

### 静态资源

所有静态资源文件的 Url 可以通过 `fluid/_static_prefix.yml` 自定义配置，同样也支持覆盖配置，写入 `/source/_data/fluid_static_prefix.yml` 即可。

比如需要指定公共 CDN 的 JQuery 库，只需将原配置改为：

```yaml
jquery: https://cdn.staticfile.org/jquery/3.4.1/
```

### 本地搜索

- 已集成 hexo-generator-search 插件，若已安装其他搜索插件请关闭，以避免生成多余的索引文件。

- 默认在根目录生成并使用 `local-search.xml`。

### 页面顶部大图

- 图片来源

主题配置中，每个页面都有名为 `banner_img` 的属性，可以使用本地图片的相对路径，也可以为外站链接，比如：

指向本地图片：

```yaml
banner_img: /img/bg/example.jpg   # 对应存放在 /source/img/bg/example.jpg
```

指向外站链接：

```yaml
banner_img: https://static.zkqiang.cn/example.jpg
```

:::tip
如果是本地图片，目录文件夹可自定义，但必须在 source 目录下，博客与主题的 source 目录最终会合并，因此优先选择博客的 source。

图片大小建议压缩到 1MB 以内，否则会严重拖慢页面加载。
:::

- 高度

鉴于每个人的喜好不同，开放对页面 `banner_img` 高度的控制。

**主题配置**中，每个页面对应的 `banner_img_height` 属性，有效值为 0 - 100。100 即为全屏，个人建议 70 以上。

- 蒙版透明度

**主题配置**中，每个页面对应的 `banner_mask_alpha` 属性，有效值为 0 - 1.0， 0 是完全透明（无蒙版），1 是完全不透明

::: tip
每篇文章可单独设置 Banner，具体见文章页设置

本主题不支持固定背景（fixed），原因：
1. 与目前代码结构有较大冲突，需要大量修改
2. `fixed` 在移动端兼容性很差
:::

### 博客标题

页面左上角的博客标题，默认使用**博客配置**中的 `title`，这个配置同时控制着网页在浏览器标签中的标题。

如需单独区别设置，可在**主题配置**中设置：

```yaml
navbar:
  blog_title: 博客标题
```

### 导航菜单

```yaml
navbar:
  menu:
    - { key: 'home', link: '/', icon: 'iconfont icon-home-fill' }
    - { key: 'tag', link: '/tags/', icon: 'iconfont icon-tags-fill' }
    - { key: 'about', link: '/about/', icon: 'iconfont icon-user-fill', name: '联系我' }
```

- `key`: 用于关联有[多语言](/guide/#多语言)，如不存在关联则显示 key 本身的值
- `link`: 跳转链接
- `icon`: 图标的 css class，可以省略（即没有图标），主题内置图标详见[这里](/icon/)
- `name`: 强制使用此名称显示（不再按多语言显示），可省略

另外支持二级菜单（下拉菜单），配置写法如下：

```yaml
menu:
  - {
      key: '文档',
      icon: 'iconfont icon-books',
      submenu: [
        { key: '配置指南', link: 'https://hexo.fluid-dev.com/docs/guide/' },
        { key: '操作示例', link: 'https://hexo.fluid-dev.com/docs/example/' },
        { key: '图标用法', link: 'https://hexo.fluid-dev.com/docs/icon/' }
      ]
  }
```

### 图片懒加载

```yaml
lazyload:
  enable: true
  onlypost: false
```

开启后，当图片滚动到可见范围内才会加载，可以大幅提高网页整体加载速度。

`onlypost` 为 true 时，仅在文章页才使用懒加载。自定义页面在 Front-matter 中指定 `lazyload: true` 可单独开启（仅对 md 文档部分有效）。

### 全局字体

所有页面统一字体的字号和字族可以通过**主题配置**中的下列配置项设置：

```yaml
font:  # 主题字体配置
  font_size: 16px        # 全局字号
  font_family:           # 全局字体族
  code_font_size: 85%    # 代码的字号
```

关于字体族（`font-family`）如果不了解可以看[这篇文章](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)先了解一下。

需要注意：
- 最好使用系统自带的字体，否则需要通过[自定义功能](/guide/#自定义-js-css-html)额外引入 `@font-face`，字体一般较大，不建议引入；
- 应当至少添加一个通用的字体族名（如 serif，具体见上方链接文章）。

如果想设置单独的页面，可以直接在 markdown 里通过 style 标签实现：

```html
---
title: example
---

<style>
  /* 设置整个页面的字体 */
  html, body, .markdown-body {
    font-family: KaiTi,"Microsoft YaHei",Georgia, sans, serif;
    font-size: 15px;
  }

  /* 只设置 markdown 字体 */
  .markdown-body {
    font-family: KaiTi,"Microsoft YaHei",Georgia, sans, serif;
    font-size: 15px;
  }
</style>
```

### 网页统计

目前支持多种统计网站，开启后按需填入 Key 或 ID 即可。

```yaml
web_analytics:  # 网页访问统计
  enable: false # 默认为false，启用网页统计改为true即可
  baidu:  # 百度统计的Key，参见 https://tongji.baidu.com/sc-web/10000033910/home/site/getjs?siteId=13751376 代码获取中 hm.js? 后边的字符串
  google:  # Google统计的Tracking ID，参见 https://analytics.google.com/analytics/web/
  tencent:  # 腾讯统计的H5 App id，参见 https://mta.qq.com/h5/manage/ctr_app_manage (开启高级功能才有cid)
    sid:
    cid:
  tajs:   # 腾讯统计早期版站点统计sID，参见 https://ta.qq.com/#/site/list
  woyaola:  # 51.la站点统计ID，参见 https://www.51.la/user/site/index
  cnzz:  # 友盟/cnzz站点统计web_id，参见 https://web.umeng.com/main.php?c=site&a=show
  leancloud:  # LeanCloud 计数统计，可用于 PV UV 展示，如果 web_analytics.enable 没有开启，PV UV 展示只会查询，不会增加
    app_id:
    app_key:
    server_url:  # REST API 服务器地址，国际版不填
```

### 展示 PV 与 UV 统计

页脚可以展示 PV 与 UV 统计数据，目前支持两种数据来源：[LeanCloud](https://www.leancloud.cn/) 与 [不蒜子](http://busuanzi.ibruce.info/)。

相关**主题配置**如下：

```yaml
footer:
  statistics:
    enable: false
    source: "leancloud"  # 可选 leancloud | busuanzi
    pv_format: "总访问量 {} 次"  # 显示的文本，{}是数字的占位符（必须包含)，下同
    uv_format: "总访客数 {} 人"
```

:::tip
不蒜子不需要申请账号，直接开启即可，但有时候会响应缓慢拖慢整个页面加载。

不蒜子在 localhost 域名下显示的不是真正的数据，因此无需在意。

LeanCloud 使用前需要申请账号（国内需要身份认证），然后在 `web_analytics` 配置项中将 `leancloud` API 相关参数填上才能生效。

LeanCloud 在 localhost 域名下不会增加数据。
:::

### 多语言

不同语言会影响一些主题自带的文字。

设置语言是在**博客配置**中，需要对应 `fluid/languages/` 目录内的配置文件名:

```yaml
language: zh-CN
```

默认提供英文(en)、简体中文(zh-CN)、日文(ja)。

如果想自定义，建议单独复制一份新文件进行修改，然后指定该文件名。

### 强制全局 HTTPS

当你的域名升级到 HTTPS 后，可能之前存在部分图片等资源使用的是 HTTP，这时混用出现网页报错，造成图片无法显示。

控制台里也会出现报错：`Mixed Content: The page at 'https://xxx' was loaded over HTTPS`。

这种情况可以在**主题配置**中开启此配置：

```yaml
force_https: true
```

即可将所有请求强制升级为 HTTPS（如是外部资源，需要本身支持 HTTPS）。

### 二级站点路径

如果你的博客部署在二级路径（如: xxx.com/blog/），需要修改**博客配置**中：

```yaml
url: http://xxx.com/blog
root: /blog/
```

### 自定义页面

如果想单独生成一个页面，步骤和创建「关于页」类似。

1. 首先用命令行创建页面：

```sh
$ hexo new page example
```

2. 创建成功后编辑博客目录下 `/source/example/index.md`：

```yaml
---
title: example
subtitle: 若不填默认是 title
---

这里写正文，支持 Markdown, HTML
```

正文默认没有 Markdown 样式，如果希望和文章相同的样式，可以加上：

```html
<div class="markdown-body">
正文
</div>
```

3. 页面的属性配置可以在**主题配置**中统一设置：

```yaml
page:
  banner_img: /img/default.png
  banner_img_height: 70
  banner_mask_alpha: 0.3
```

也可以直接在 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 里单独设置：

```yaml
---
title: example
banner_img: /img/default.png
banner_img_height: 60
banner_mask_alpha: 0.5
---

# 这里可以写正文
```

### 自定义 JS / CSS / HTML

如果你想引入外部的 JS、CSS（比如 IconFont）或 HTML，可以通过以下**主题配置**，具体见注释：

```yaml
# 指定自定义 js 文件路径，路径是相对 source 目录
custom_js: /js/custom.js

# 指定自定义 css 文件路径，路径是相对 source 目录
custom_css: /css/custom.css

# 自定义底部 HTML 内容（位于 footer 上方），也可用于外部引入 js css 这些操作，注意不要和 post.custom 配置冲突
custom_html: '<link rel="stylesheet" href="//at.alicdn.com/t/font_1067060_qzomjdt8bmp.css">'
```

另外 `custom_js` 和 `custom_css` 都可以指定多个路径：

```yaml
custom_css:
  - /css/custom.css
  - //at.alicdn.com/t/font_1736178_ijqayz9ro8k.css
```

## 首页

### Slogan(打字机)

首页大图中的打字机文字，可在**主题配置**中设定是否开启：

```yaml
index:
  slogan:
    enable: true
    text: 这是一条 Slogan
```

如果 `text` 为空则按**博客配置**的 `subtitle` 显示。

相关的打字机动效设置在：

```yaml
fun_features:
  typing: # 为 subtitle 添加打字机效果
    enable: true
    typeSpeed: 70 # 打印速度
    cursorChar: "_" # 游标字符
    loop: false # 是否循环播放效果
```

### 文章摘要

开关自动摘要（默认开启）：

```yaml
index:
  auto_excerpt:
    enable: true
```

若要手动指定摘要，使用 `<!-- more -->` MD文档里划分，例：

```
这里是摘要
<!-- more -->
这里是正文
```

或者在 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 里设置 `excerpt: 这里是摘要` 字段

优先级: 手动摘要 > 自动摘要

如果关闭自动摘要，并且没有设置手动摘要，摘要区域空白

无论哪种摘要都最多显示 3 行，当屏幕宽度不足时会隐藏部分摘要。

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

### 隐藏文章

如果想把某些文章隐藏起来，不在首页和其他分类里展示，可以在文章开头 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 中配置 `hide: true` 属性。

```yaml
---
title: 文章标题
index_img: /img/example.jpg
date: 2019-10-10 10:00:00
hide: true
---
以下是文章内容
```

:::tip
隐藏会使文章在分类和标签类里都不显示

隐藏后依然可以通过文章链接访问
:::

### 在线聊天（daovoice）

默认未开启此功能，需要在 https://dashboard.daovoice.io 注册并查看，然后将应用 ID 填入配置：

```yaml
daovoice:
  enable: true
  appid: ''
```

## 文章页

### 文章在首页的略缩图

在文章开头 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 中配置 `index_img` 属性。

```yaml
---
title: 文章标题
tags: [Hexo, Fluid]
index_img: /img/example.jpg
date: 2019-10-10 10:00:00
---
以下是文章内容
```

和 Banner 配置相同，`/img/example.jpg` 对应的是存放在 `/source/img/example.jpg` 目录下的图片（目录也可自定义，但必须在 source 目录下）。

也可以使用外链 Url 的绝对路径。

### 文章页顶部大图

默认显示**主题配置**中的 `post.banner_img`，如需要设置单个文章的 Banner，在 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 中指定 banner_img 属性。

本地图片存放位置同上。

```yaml
---
title: 文章标题
tags: [Hexo, Fluid]
index_img: /img/example.jpg
banner_img: /img/post_banner.jpg
date: 2019-10-10 10:00:00
---
以下是文章内容
```

### 文章内容图片

本地图片存放位置同上。

```markdown
![](/img/example.jpg)
```

### 日期/字数/阅读时长/阅读数

显示在文章页大标题下的文章信息，除了阅读次数，其他功能都是默认开启的。

```yaml
post:
  meta:
    date:  # 日期
      enable: true
      format: "dddd, MMMM Do YYYY, h:mm a"  # 格式参照 ISO-8601 日期格式化
    wordcount:  # 字数统计
      enable: true
      format: "{} 字"  # 显示的文本，{}是数字的占位符（必须包含)，下同
    min2read:  # 阅读时间
      enable: true
      format: "{} 分钟"
    views:  # 阅读次数
      enable: false
      source: "leancloud"  # 统计数据来源，可选：leancloud | busuanzi   注意不蒜子会间歇抽风
      format: "{} 次"
```

:::tip
日期格式必须遵循 ISO-8601 规范，否则无法正常显示；

其他格式必须包括 `{}` 符号代替数字，文字可自由设置。
:::

### 代码高亮样式

高亮样式从这里挑选：<https://highlightjs.org/static/demo/>

然后将 style 的名称填入**主题配置**：

```yaml
highlight:
  enable: true
  style: 'Github Gist'
  bg_color: false
  copy_btn: true
```

`bg_color`: 是否根据 style 改变代码背景色，如果 style 是白色背景最好关闭此项

`copy_btn`: 是否开启复制代码的按钮

高亮暂不支持行号。

### 评论

开启评论需要在**主题配置**中开启并指定评论模块：

```yaml
post:
  comments:
    enable: true
    type: disqus
```

然后在下方还要设置对应评论模块的参数，比如 disqus 对应设置：

```yaml
disqus:
  shortname: fluid
```

当前支持 Valine、Disqus、Gitalk、Utterances、畅言、来必力(livere)，使用和参数设置需要自行查询各自的文档（文档地址在配置注释里）。

若需要自定义添加其他评论系统，请自行在 `fluid/layout/_partial/comments/` 目录内创建 ejs 文件，参照自带的 ejs 填入评论服务商提供的代码，再修改 `post.comments.type` 为对应文件名。

:::warning
disqus 仅为演示，实际上 disqus 已经被墙，国内用户请不要使用，推荐使用 Utterances（[经验贴](https://litstronger.github.io/2020/04/03/hexo-fluid%E6%B7%BB%E5%8A%A0utterances%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD/)）

如果设置后评论模块没有显示，说明配置没有完成，或者配置有误出现报错（请在浏览器控制台查看具体报错）
:::

### 脚注

主题内置了脚注语法支持，可以在文章末尾自动生成带有锚点的脚注，该功能在**主题配置**中默认开启：

```yaml
post:
  footnote:
    enable: true
    header: ''
```

脚注语法如下：

```markdown
这是一句话[^1]
[^1]: 这是对应的脚注
```

更优雅的使用方式，是将脚注写在文末，比如：

```markdown
正文

## 参考
[^1]: 参考资料1
[^2]: 参考资料2
```

当然你也可以通过修改上方配置项 `header` 来自动加入节标题，如下所示：

```yaml
post:
  footnote:
    enable: true
    header: '<h2>参考</h2>'  # 等同于手动写 `## 参考`
```

### Tag 插件

:::warning
所有 Tag 仍在测试中，后续版本可能会修改
:::

#### 便签

在 markdown 中加入如下的代码来使用便签：

```markdown
{% note success %}
文字 或者 `markdown` 均可
{% endnote %}
```

或者使用 HTML 形式：

```html
<p class="note note-primary">标签</p>
```

可选便签：

<p class="note note-primary">primary</p>
<p class="note note-secondary">secondary</p>
<p class="note note-success">success</p>
<p class="note note-danger">danger</p>
<p class="note note-warning">warning</p>
<p class="note note-info">info</p>
<p class="note note-light">light</p>

:::warning
使用时 `{% note primary %}` 和 `{% endnote %}` 需单独一行，否则会出现问题
:::

#### 行内标签

在 markdown 中加入如下的代码来使用 Label：

```markdown
{% label primary @text %}
```

或者使用 HTML 形式：

```html
<span class="label label-primary">Label</span>
```

可选 Label：

<span class="label label-primary">primary</span>
<span class="label label-default">default</span>
<span class="label label-info">info</span>
<span class="label label-success">success</span>
<span class="label label-warning">warning</span>
<span class="label label-danger">danger</span>

:::warning
若使用 `{% label primary @text %}`，text 不能以 @ 开头
:::

#### 勾选框

在 markdown 中加入如下的代码来使用 Checkbox：

```markdown
{% cb text, checked?, incline? %}
```

text：显示的文字  
checked：默认是否已勾选，默认 false  
incline: 是否内联（可以理解为后面的文字是否换行），默认 false

示例：
<div>
  <input type="checkbox" checked>{% cb 普通示例 %}
</div>
<div>
  <input type="checkbox" checked>{% cb 默认选中, true %}
</div>
<input type="checkbox">{% cb 内联示例, false, true %} 后面文字不换行
<div>
  <input type="checkbox">{% cb false %} 也可以只传入一个参数，文字写在后边（这样不支持外联）
</div>

#### 按钮

你可以在 markdown 中加入如下的代码来使用 Button：

```markdown
{% btn url, text, title %}
```

或者使用 HTML 形式：

```html
<a class="btn" href="url" title="title">text</a>
```

url：跳转链接  
text：显示的文字  
title：鼠标悬停时显示的文字（可选）

<a class="btn" href="javascript:;" title="title">text</a>

#### 组图

如果想把多张图片按一定布局组合显示，你可以在 markdown 中按如下格式：

```markdown
{% gi total n1-n2-... %}
  ![](url)
  ![](url)
  ![](url)
  ![](url)
  ![](url)
{% endgi %}
```

total：图片总数量，对应中间包含的图片 url 数量  
n1-n2-...：每行的图片数量，可以省略，默认单行最多 3 张图，求和必须相等于 total，否则按默认样式

如下图为 `{% gi 5 3-2 %}` 示例，代表共 5 张图，第一行 3 张图，第二行 2 张图。

![Group Images](../.vuepress/public/group_image.png)

### LaTeX 数学公式

当需要使用 [LaTeX](https://www.latex-project.org/help/documentation/) 语法的数学公式时，可手动开启本功能，需要完成三步操作：

**1. 设置主题配置**

```yaml
post:
  math:
    enable: true
    specific: false
    engine: mathjax
```

`specific`: 建议开启。当为 true 时，只有在文章 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 里指定 `math: true` 才会在文章页启动公式转换，以便在页面不包含公式时提高加载速度。

`engine`: 公式渲染引擎，目前支持 `mathjax` 或 `katex`。

**2. 更换 Markdown 渲染器**

由于 Hexo 默认的 Markdown 渲染器不支持复杂公式，所以必须更换渲染器。

先卸载原有渲染器：

`npm uninstall hexo-renderer-marked --save`

然后根据上方配置不同的 `engine`，推荐更换如下渲染器：

mathjax: `npm install hexo-renderer-kramed --save`

katex: `npm install @upupming/hexo-renderer-markdown-it-plus --save`

**3. 安装完成后执行 `hexo clean`**

:::warning

不可同时安装多个渲染器，如果更换公式引擎，对应渲染器也要一并更换。

如果公式没有被正确渲染，请仔细检查是否符合上面三步操作。

另外不同的渲染器，可能会导致一些 Markdown 语法不支持。

自定义页面默认不加载渲染，如需使用，需在 Front-matter 中指定 `math: true`

:::

:::tip

不同的公式引擎有不同的优缺点。

**MathJax**

优点
- 对 LaTeX 语法支持全面
- 右键点击公式有扩展功能

缺点
- 需要加载 JS，页面加载会比较慢，并且有渲染变化
- kramed 渲染器对内联公式的转义字符 `\` 支持不足

**KaTeX**

优点
- 没有 JS 不会影响页面加载
- 渲染器效果好 (相对 kramed 对 MathJax 的内联公式)

缺点
- 小部分 LaTeX 不支持

:::

### Mermaid 流程图

当需要使用 [Mermaid](http://mermaid-js.github.io/mermaid/#/) 渲染流程图时，可手动开启本功能：

```yaml
post:
  mermaid:
    enable: true
    specific: false
    options:
```

`specific`: 建议开启。当为 true 时，只有在文章 [Front-matter](https://hexo.io/zh-cn/docs/front-matter) 里指定 `mermaid: true` 才会在文章页启动流程图渲染，以便在页面不包含流程图时提高加载速度。

`options`: 官方 API 的配置项，具体可见 [mermaidAPI.js](http://mermaid-js.github.io/mermaid/#/mermaidAPI)

:::tip
自定义页面默认不加载，如需使用，需在 Front-matter 中指定 `mermaid: true`
:::

## 归档页

具体见配置文件注释

## 分类页

具体见配置文件注释

[添加分类的方法](https://hexo.io/zh-cn/docs/front-matter)

## 标签页

标签是以词云的形式展示，标签的大小和颜色会根据标签下的文章数量变化，相关配置如下：

```yaml
tag:
  tagcloud:
    min_font: 15
    max_font: 30
    unit: px  # 字号单位
    start_color: "#BBBBEE"
    end_color: "#337ab7"
```

其他配置具体见配置文件注释

[添加标签的方法](https://hexo.io/zh-cn/docs/front-matter)

## 关于页

### 创建关于页

首次使用主题的「关于页」需要手动创建：

```bash
$ hexo new page about
```

创建成功后修改 `/source/about/index.md`，添加 `layout` 属性。

修改后的文件示例如下：

```yaml
---
title: about
date: 2020-02-23 19:20:33
layout: about
---

# 这里可以写正文
支持 Markdown, HTML
```

### 社交页图标

在**主题配置**中设置：

```yaml
about:
  icons:
    - { class: 'iconfont icon-github-fill', link: 'https://github.com', tip: 'GitHub' }
    - { class: 'iconfont icon-douban-fill', link: 'https://github.com', tip: '豆瓣' }
    - { class: 'iconfont icon-wechat-fill', qrcode: '/img/favicon.png' }
```

- `class`: 图标的 css class，主题内置图标详见[这里](/icon/)
- `link`: 跳转链接
- `tip`: 鼠标悬浮在图标上显示的提示文字
- `qrcode`: 二维码图片，当使用此字段后，点击不再跳转，而是悬浮二维码

## 友情链接页

友情链接页用于展示好友的博客入口，默认关闭，开启需要先在 `navbar` 项中将 `links` 的注释(#号)删掉：

```yaml
navbar:
  menu:
    - { key: 'links', link: '/links/', icon: 'iconfont icon-link-fill' }
```

然后找到 `links` 的配置项，对页面内容进行配置：

```yaml
links:
  items:
    - {
      title: 'Fluid Docs',
      intro: '主题使用指南',
      link: 'https://hexo.fluid-dev.com/docs/',
      image: '/img/favicon.png'
    }
```

- `title`: 友链站的标题
- `intro`: 站点或博主的简介，可省略
- `link`: 跳转链接
- `image`: 头像图片，可省略

## 404 页

404 页是在访问不存在的博客链接时，出现的错误提示页面。

开启此页面需要在博客的部署环境上配置：

- 如果博客部署在云服务器，需要 Nginx 配置文件设置 `error_page 404 = /404.html`；
- 如果部署在 Github Pages 上，不需要额外配置，但必须绑定顶级域名才生效；
- 其他 OSS 等平台，请参考各平台关于 404 页的配置文档，但并不是所有平台都支持跳转 Html。

## 关于更多配置

[博客 _config.yml 配置](https://hexo.io/zh-cn/docs/configuration)

[文章 Front-matter 配置](https://hexo.io/zh-cn/docs/front-matter)

## 微信交流群

[查看微信群二维码](https://github.com/fluid-dev/hexo-theme-fluid/issues/96)

## 开源协议

[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
