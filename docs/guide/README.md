# 使用指南

## 主题简介

Fluid 是基于 Hexo 的一款 Material Design 风格的主题，由 [Fluid-dev](https://github.com/fluid-dev) 负责开发与维护。

该主题相较于其他主题的优势：
1. 设计遵循简洁至上，同时具有轻快的体验，和优雅的颜值；
2. 提供大量定制化配置项，使每个用户使用该主题都能具有独特的样式；
3. 支持多端适配，包括极端的分辨率都能轻松应对；
4. 积极地更新与处理反馈，我们近期已经更新了 20 项新功能及若干优化。

## 关于指南

本指南仅为部分配置说明，**并不包括所有配置项**，具体配置要求请参照主题配置文件中的注释，若存在更多疑问请在 [issues](https://github.com/fluid-dev/hexo-theme-fluid/issues/new) 留言。

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

v1.4.0 版本开始，可以进入博客根目录的 source 目录下（不是主题的 source 目录），创建 `_data` 目录，在里面创建 `fluid_config.yml` 文件，将 `/theme/fluid/_config.yml` 中被修改的配置或者全部配置，复制到 `fluid_config.yml` 中。这样 `fluid_config.yml` 中配置项会在 `hexo g` 时自动覆盖，并且更新主题后不会丢失。

v1.5.0 版本开始，所有资源 Url 也可以通过 `_static_prefix` 自定义配置，同样也支持覆盖配置，写入 `_data/fluid_static_prefix.yml` 即可。

其他情况，建议更新前备份 `/theme/fluid/_config.yml`，以免覆盖自定义的配置项。

### 本地搜索

- 已集成 hexo-generator-search 插件，若已安装其他搜索插件请关闭，以避免生成多余的索引文件。

- 默认在根目录生成并使用 local-search.xml。

### 代码高亮

:::warning
请确保已关闭 Hexo 默认代码高亮
:::

选择高亮主题： 修改主题配置文件：

```yml
highlight:
  enable: true
  theme: tomorrow-night-eighties
```

### 顶部图像

::: tip
每篇文章的 banner_img 可用 Front Matter 中的 `banner_img` 属性单独指定。
:::

- 图片来源

主题配置文件中，每个页面都有名为 `banner_img` 的属性，可以为外链，也可以使用相对链接。

若使用相对链接，建议将图片放置在 `fluid/source/img/` 目录下，对应填写的图片地址为 `/img/your_img_name`

- 高度

鉴于每个人的喜好不同，开放对页面 `banner_img` 高度的控制。

主题配置文件中，每个页面对应的 `banner_img_height` 属性，有效值为 0 - 100。100 即为全屏，个人建议 70 以上。


## 首页

### slogan

可在主题配置文件中设定是否开启。内容在站点配置文件中设置。
```yml
index:
  slogan:
    enable: true
```

### 自动摘要

::: warning
优先级: 手动摘要 > 自动摘要
:::

```yml
index:
  auto_excerpt:
    enable: true
```

### 文章跳转方式

1. _blank：新标签页打开
2. _self：当前标签页打开

```yml
index:
  post_url_target: _self
```

### 文章信息

包括发布时间、分类、标签。

经过测试，如果首页的文章列表中没有略缩图和摘要，标题+文章信息的显示方式会使页面过于拥挤，所以给出此项配置供喜欢首页只显示文章标题的同学使用。

```yml
index:
  post_meta:
    date: true
    category: true
    tag: true
```

## 文章页

### 首页略缩图

文章 `Front Matter` 中配置 index_img 属性。

### 文章页顶部图像

:::tip
优先级： Front Matter > post.banner_img
:::

在 Front Matter 中指定 banner_img 属性。

### 手动摘要

:::tip
优先级: 手动摘要 > 自动摘要
:::

使用 `<!-- more -->` 手动划分摘要,例：

```
这里是摘要
<!-- more -->
这里是正文
babalabala
```

### 评论

当前支持 Valine、Disqus、Gitalk、Utterances。参数设置请参考主题配置文件。

若需要添加其他评论系统，请自行创建 fluid/layout/_partial/comments/your_comment_file.ejs，填入评论系统服务商提供的代码，在主题配置文件中修改 comments.type 为刚刚创建的文件名（不带 .ejs）


## 归档页

自动创建。


## 标签归档页

自动创建。


## 分类归档页

自动创建。

## 关于页

### 初始化

~~`hexo new page about` 然后编辑 `source/about/index.md`， 添加 Front Matter 属性 type: "about" （必需）。title 可自行修改。~~

新版本已实现关于页自动创建。

### icons

导航栏与关于页的社交网络图标，均引用自 [fontawesome](https://fontawesome.com/icons)。只需要将属性名替换为图标名称，属性值替换为 url 即可。

### 自定义内容

页面中社交图标下方的空白区域支持自定义内容。只需编辑 fluid/pages/about.md，再次 `hexo g` 时会自动渲染。

## 404 页

默认自动创建，可手动关闭。

## 常见问题

#### 代码高亮效果异常

- 请确认已完成上述『关闭默认的代码高亮』步骤
- 尝试清除命令 `hexo clean && hexo g`

#### 配置无效

- 请检查配置文件是否符合 yml 语法，如冒号后需要有空格，缩进需要 2 个空格等

## 关于 Hexo 的配置

[_config.yml 配置](https://hexo.io/zh-cn/docs/configuration)

[文章配置](https://hexo.io/zh-cn/docs/front-matter)

## 开源协议

[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
