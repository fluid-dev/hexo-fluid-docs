# 配置

## banner_img

::: tip
文章的 banner_img 可在 Front Matter 中的 `banner_img` 属性指定。
:::

### 图片

主题配置文件中，每个页面都有名为 `banner_img` 的属性，可以为外链，也可以使用相对链接。

若使用相对链接，建议将图片放置在 `Material-T/source/img/` 目录下，对应填写的图片地址为 `/img/your_img_name`

### 高度

鉴于每个人的喜好不同，开放对页面 `banner_img` 高度的控制。

主题配置文件中，每个页面对应的 `banner_img_height` 属性，有效值为 0 - 100。100 即为全屏，个人建议 70 以上.


## 首页

#### 副标题

可在主题配置文件中设定是否开启。内容在站点配置文件中设置。
```yml
index:
  subtitle:
    enable: true
```

### 文章自动摘要

::: warning
优先级: 手动摘要 > 自动摘要
:::

若无特殊要求，可配置自动摘要，选取每篇文章中前 n 个字符。由于文章卡片左侧可能有略缩图（固定高度），所以建议175字符左右。

```yml
index:
  auto_excerpt:
    enable: true
    length: 175
```

### 跳转方式

可选: _blank(新标签页打开) or _self(当前标签页打开)

```yml
index:
  post_url_target: _self
```

### 文章信息

包括发布时间、标签。

（经过测试，如果首页的文章列表中没有略缩图和摘要，那么标题+文章信息的展示方式会显得图标密度太大，所以给出此项配置供喜欢首页单列文章标题的同学使用）

```yml
index:
  post_info:
    enable: true
```

## 文章页

### 首页略缩图

文章 `Front Matter` 中配置 index_img 属性。

### banner_img

:::tip
优先级： 单独指定 > post.banner_img
:::

在 Front Matter 中指定 banner_img 属性。

# 手动摘要

:::tip
优先级: 手动摘要 > 自动摘要
:::

使用 <!-- more --> 手动划分摘要,例：

```bash
这里是摘要
<!-- more -->
这里是正文
babalabala
```

### 代码高亮

:::warning
请确保已关闭 Hexo 默认代码高亮
:::

选择高亮主题： 修改主题配置文件：

```yml
# Code Highlight
# Theme available: github | tomorrow | tomorrow-night | tomorrow-night-eighties
post:
  highlight:
    enable: true
    theme: tomorrow-night-eighties
```

### 评论

当前支持 Valine、Disqus

## 归档页

:::tip
用 tag 对文章进行分类。
:::

## 关于页

### 初始化

```bash
hexo new page about
```

然后编辑 `source/about/index.md`， 添加 Front Matter 属性 type: "about" （必需）。title 可自行修改。

### icons

导航栏与关于页的社交网络图标，均引用自 [fontawesome](https://fontawesome.com/icons)。只需要将属性名替换为图标名称，属性值替换为 url 即可。
