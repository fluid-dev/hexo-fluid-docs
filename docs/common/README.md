# 配置

此页仅为部分配置指南，并不包括所有配置项，具体配置要求请参照主题配置文件中的注释，若存在更多疑问请在 [issues](https://github.com/0x2E/Material-T/issues/new) 留言。


## 功能

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

若使用相对链接，建议将图片放置在 `Material-T/source/img/` 目录下，对应填写的图片地址为 `/img/your_img_name`

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

包括发布时间、标签。

经过测试，如果首页的文章列表中没有略缩图和摘要，标题+文章信息的显示方式会使页面过于拥挤，所以给出此项配置供喜欢首页只显示文章标题的同学使用。

```yml
index:
  post_info:
    enable: true
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

```bash
这里是摘要
<!-- more -->
这里是正文
babalabala
```

### 评论

当前支持 Valine、Disqus、Gitalk、Utterances。参数设置请参考主题配置文件。

若需要添加其他评论系统，请自行创建 Material-T/layout/_partial/comments/your_comment_file.ejs，填入评论系统服务商提供的代码，在主题配置文件中修改 comments.type 为刚刚创建的文件名（不带 .ejs）


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

页面中社交图标下方的空白区域支持自定义内容。只需编辑 Material-T/pages/about.md，再次 `hexo g` 时会自动渲染。 


## 404 页

默认自动创建，可手动关闭。