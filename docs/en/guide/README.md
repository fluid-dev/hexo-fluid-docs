---
metaTitle: Guide | Hexo Fluid
meta:
  - name: description
    content: Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,docs,doc,documentation,document,guide,blog,post,article
---

# Guide

## Theme Introduction

Fluid is an elegant Material-Design theme for Hexo, developed by [Fluid-dev](https://github.com/fluid-dev)

GitHub Repository: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

Demo blog:

[Rook1e's blog](https://rook1e.com)

[zkqiang's blog](https://zkqiang.cn)

[吃白饭的休伯利安号](https://eatrice.top)

[上屋顶看北斗七星](https://ruru.eatrice.top)

## About this Guide

This guide is only for partial configuration instructions, **Not for the all configs**, For specific configuration requirements, please refer to the comments in the file `_config.yml` at the path of the theme. For more help, Please write your questions at [issues](https://github.com/fluid-dev/hexo-theme-fluid/issues/new).

This page of the guide created by [VuePress](https://vuepress.vuejs.org/).

:::tip

About the config file:
- : "**blog config**" refer to the `_config.yml` in the blog root directory.
- : "**theme config**" refer to the path `theme/fluid/_config.yml`

The source directory of blog and fluid will be merged eventually, so the source of blog is preferred for the stored files

:::

## Quick Start

### Install Hexo

If you don't have a hexo blog, please follow [Hexo Docs](https://hexo.io/docs/) to install and initialize your blog。

### Download Theme

Please download [the latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases), or the master branch may not guarantee stability.

After download, extract it to the themes directory and rename it to `fluid`.

### Necessary Configuration

Modify `_config.yml` in the blog root directory as follows。

```yaml
theme: fluid  # set theme
```

### Create About Page

Since v1.7.0, the about page needs to be created manually:

```bash
$ hexo new page about
```

After successful creation, modify `/source/about/index.md` and add `layout` attribute.

The modified file example is as follows:

```yaml
---
title: about
date: 2020-02-23 19:20:33
layout: about
---

# You can write the content here
Support Markdown, HTML
```

## Global

### Override Configuration

:::warning

If you don't understand the feature, don't use it

:::

Override configuration can make the **theme config** out of the theme dictionary, and avoid losing custom config after theme upgraded.

You should make sure that your version of *Hexo* is not lower than *3.0*, because of the function about [data-files](https://hexo.io/docs/data-files.html)

Usage:

1. cd into the folder '*source*' in your *blog root dictionary*, `mkdir _data` (beside to the folder '_post');
2. Create a file `fluid_config.yml` in the folder `_date` , copy the configurations from **theme config** to `fluid_config.yml`;
3. You can set any config with the file `fluid_config.yml`, it can be used when you start `hexo g`.

### Static Resource

The Url of all resource static files can be customized through `fluid/_static_prefix.yml`, it also can be override with `_data/fluid_static_prefix.yml`.

If we should get the JQuery CDN library, we can add a line at the end of the file `/source/_data/fluid_static_prefix.yml`:

``` yaml
jquery: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/
```

### Local Search

- The hexo-generator-search plug-in has been integrated, please close if you have installed other search plug-ins to avoid generating redundant index files.

- By default, `local-search.xml` is generated and used in the root directory.

### Banner Image

- img src

there is `banner_img` item for every pages in the **theme config**, you can use absolute or relative path.

If you use relative path, you can save you img at `/source/img/`, so that you can use `/img/{your_img_name}` to get your img.

For example, the path `/img/example.jpg`, is in`/source/img/example.jpg`.

::: tip
You can define the ain path yourself, but it should be in the folder `source`

The source directory of blog and fluid will be merged eventually, so the source of blog is preferred.
:::

- height

For different people's thoughts, you can control the height of the `banner_img` on the page.

You can set a value to the attribute `banner_img_height` for every pages by modifying the file **theme config**, 0 - 100 is valiable, We think it is better to choose a number bigger than 70.

::: tip
Each post page can define its banner independently, you can read the config about the posts for more details.
:::

### Title of Blog

The title is on the left of the banner, Its value can set by the attribute `title` in file **blog config**, which is alse the title of the browser's tab.

If you want to set varies titles for different pages, you can change the **theme config** as follow:

``` yaml
navbar:
  blog_title: your title
```

### Navbar

``` yaml
navbar:
  menu:
    Home: /
    Archives: /archives/
    Categories: /categories/
    Tags: /tags/
    About: /about/
```
The name of menu is on the left, and the right is path for them.

The defaulted name of menu is linked to [multi-languages](/en/guide/#multi-languages), if you want to change, you can change the multi-languages config.

If you want to add a new option to the menu, you can add it to the file directly.

If you want to delete a option, you can use `#` to comment it.

### Lazyload Image

``` yaml
lazyload:
  enable: true
  onlypost: false
```

When enabled, the image will only be loaded when scrolling to the visible range, which can greatly improve the overall loading speed of the web page.

if `onlypost` is true, the `lazyload` will be enabled only on the post pages.

### Web Analytics

Varies analytics servers have been supported, you can fill the 'Key' and 'ID' to enable it.

```yaml
web_analytics:
  enable: true
  baidu:  # Baidu analysis's Key，refer to https://tongji.baidu.com/sc-web/10000033910/home/site/getjs?siteId=13751376 after the code 'hm.js?'
  google:  # Google analysis's Tracking ID，refer to https://analytics.google.com/analytics/web/
  tencent:  # Tencent analysis's H5 App id，refer to https://mta.qq.com/h5/manage/ctr_app_manage
  woyaola:  # 51.la analysis's ID，refer to https://www.51.la/user/site/index
  cnzz:  # cnzz analysis's web_id，refer https://web.umeng.com/main.php?c=site&a=show
```

### Multi Languages

Some languages may change the font of some theme.

You can set up you language in the **blog config**, and you should define the language file name.

``` yaml
language: zh-CN  # default is en
```

*en* *zh-CN* and *ja* is supported currently.

If you want to add more language, you'd better copy a new file to edit, and define the language file name.

### Faster Loading

1. For all the users, it is the effective way to use public CDN for the 'third-party lib', you can add it into the file `_static_prefix.yml`；

2. You can use OSS and bind your domain, then upload the files in the folder `public` to your OSS.

3. For your custom images, especially the big banner picture, you can use [tinypng](https://tinypng.com) to compress them, and upload them to your private CDN.

### Enforce Https

When your domain update to `https`, and some resources on your blog only support http protocol, the browser will not load this resources.

If it happens, you can change the **theme config** as follow:

```yaml
force_https: true
```

So that you can get *https* for all request(if your resources don't exist in your domain, they should support *https*).

### Custom Page

If you want to generate a custom page, same as create about page.

1. Create a page from the command:

```sh
$ hexo new page example
```

2. Edit `/source/example/index.md`：

```markdown
---
title: example
subtitle: Can be omitted, default is title
---

Content (Markdown or HTML)
```

The content has no markdown style by default. If you want to have the same style as post page, you can add:

```html
<div class="markdown-body">
Content
</div>
```

3. The properties of all custom pages can be set in **theme config**:

```yaml
page:
  banner_img: /img/default.png
  banner_img_height: 70
```

Also set it in [Front-matter](https://hexo.io/zh-cn/docs/front-matter):

```markdown
---
title: example
banner_img: /img/default.png
banner_img_height: 60
---

Markdown or HTML
```

### Custom JS / CSS / HTML

If you want to import external JS、CSS (such as iconfont) or HTML, you can set these in **theme config**:

```yaml
# Set the path of the custom JS file, relative to the source directory
custom_js: /js/custom.js

# Set the path of the custom CSS file, relative to the source directory
custom_css: /css/custom.css

# Customize the HTML content at the page bottom (above the footer), which can also be used to import JS or CSS externally. Be careful not to conflict with the post.custom configuration
custom_html: '<link rel="stylesheet" href="//at.alicdn.com/t/font_1067060_qzomjdt8bmp.css">'
```

## Home

### Slogan

The typewriter text in the large image of the home page can be set in the **theme config**uration file whether to turn on or not:

```yaml
index:
  slogan:
    enable: true
    text: This is a Slogan
```

If `text` is '', the `subtitle` in the 'blog config' will replace it.

Related dynamic effect settings:

```yaml
fun_features:
  typing: # 为 subtitle add Slogan effect
    enable: true
    typeSpeed: 70 # Slogan speed
    cursorChar: "_" # cursor style
    loop: false # repeat
```

### Auto Excerpt

:::tip
Priority: Manually > Automatically

If you don't set the Manual Excerpt and you close the auto abstract, the abstract of post will be blank.
:::

control the auto abstract：

```yaml
index:
  auto_excerpt:
    enable: true
```

### Post Url Target

```yaml
index:
  post_url_target: _self
```

options:

1. _blank: open post page in new tab
2. _self: open post page in current tab

### Post Meta

You can hide any post meta, include: time、categories、tags etc.

After testing, if there are no thumbnails and summaries in the list of posts on the home page, the display of title + post information will make the page too crowded, so this configuration is given for students who like to display only the title of the post on the home page.

``` yaml
index:
  post_meta:
    date: true
    category: true
    tag: true
```

### Hide Your Post

If you don't want some post displayed on the home page, you can use the third-party tool [hexo-generator-index2](https://github.com/Jamling/hexo-generator-index2/blob/master/README_zh.md).

:::warning

It is a Suggestion, Please read its document carefully, to avoid bad result.

:::

## Post Page

### Index Thumbnails

You can define it at the head of a post [Front-matter](https://hexo.io/docs/front-matter).

```
---
title: post title
tags: [Hexo, Fluid]
index_img: /img/example.jpg
date: 2019-10-10 10:00:00
---
This the body of the post
```

You can save your thumbnails in the `img` folder, or you can create a new folder in folder `source` to save them in folder `source`.

You also can using other pictures in other locations， but using the correct link.

### Post Banner Image

You can define it at the head of a post, or use the home Banner image by defaulted


```yml
---
title: your title
tags: [Hexo, Fluid]
index_img: your Thumbnails
banner_img:  your post banner
date: 2019-10-10 10:00:00
---
This the body of the post
```

### Image In Post

You can save your pictures locally，or other locations.

```markdown
![](/img/example.jpg)
```

### Date/Word Count/Reading Time/Reading count

These information display after your post title by defaultly.

```yaml
post:
  meta:
    date:  # 日期
      enable: true
      format: "dddd, MMMM Do YYYY, h:mm a"  # format ISO-8601
    wordcount:  # word count
      enable: true
      format: "{} words"  # placeholder
    min2read:  # 阅读时间
      enable: true
      format: "{} minute"
    views:  # Reading count
      enable: true
      format: "{} times"
```

:::tip

The format of date must observe ISO-8601；

`{}`can replace number, you can change other content.

:::

### Excerpt

:::tip
Priority: Manually > Automatically

There are 3 lines works will display, the rest will be hidden automatically
:::

You can use `<!-- more -->` to define abstract.

``` markdown
This is excerpt
<!-- more -->
This is body
```

Or you can set `excerpt: This is excerpt` in [Front-matter](https://hexo.io/docs/front-matter).

### Code HighLight

:::warning
Make sure that defaulted highlight is disable, or some style will display on incorrect way.
:::

You can disable Highlight by modifying `blog config`:

```yaml
highlight:
  enable: false
```

You can change the style of code, in **theme config**

```yaml
highlight:
  theme: tomorrow-night-eighties
```

Fuild has 4 styles of code.

- github-v2
- tomorrow
- tomorrow-night
- tomorrow-night-eighties

For more styles of code:

1. Click [Download](https://jmblog.github.io/color-themes-for-google-code-prettify/) to download 'min.css' file, and save it to `fluid/source/lib/prettify/`
2. Find `.prettyprint{ background: ***; ...}` in this file, and add `!important` after `***`
3. Set your style in **theme config**: `theme: your style`(Non extension name)

### Line_number of Code

You can enable it in `blog config`

```yaml
highlight:
  line_number: true
```

### Comments

You can enable it in **theme config**:

```yaml
post:
  comments:
    enable: true
    type: disqus
```

And then fill the arguments for corresponding module, Such as:

```yaml
disqus:
  shortname: fluid
```

Valine、Disqus、Gitalk、Utterances、Changyan、livere can be supported currently.

For more comment systems, you can add corresponding ejs file into `fluid/layout/_partial/comments/`, according to your system document, and then modify `post.comments.type` link to your system.

:::tip
If you comment board don't display, after you finished below steps, there may be something wrong with you code,You can find it on the console of you browser
:::

<!-- ### daovoice -->

<!-- It is disenable defaulted, you should registration it at https://dashboard.daovoice.io , and fill your ID. -->

<!-- ```yaml -->
<!-- daovoice: -->
<!--   enable: true -->
<!--   appid: '' -->
<!-- ``` -->

### Style of Post

The style of post is powered by github-markdown, Configuration is not supported for the time being, you can modify some details by `fluid/source/lib/github-markdown/github-markdown.min.css`

### LaTeX

Before you use [LaTeX](https://www.latex-project.org/help/documentation/) math typesetting, you should finish follow steps:

**1. **theme config****

```yaml
post:
  math:
    enable: true
    specific: false
    engine: mathjax
```

if `specific`: true，you should add `math: true` into [Front-matter](https://hexo.io/docs/front-matter) , and then the typesetting will be display on post page, and it can improve the speed of page load.

`engine`: engine for typesetting, `mathjax` or `katex` is supported.

**2. Change Markdown engine**

Because the default engine of hexo doesn't support math typesetting, it should be changed by other better engine.

Uninstall the former engine:

`npm uninstall hexo-renderer-marked --save`

Then change your engine, such as:

mathjax: `npm install hexo-renderer-kramed --save`

katex: `npm install @upupming/hexo-renderer-markdown-it-plus --save`

**3. After installing, run `hexo clean`**

:::warning

You can't install more than one engines

If your typesetting can't display correctly, you can check the below steps.

:::


:::tip

Different formula engines have different advantages and disadvantages.

**MathJax**

Advantages：

- full support for LaTeX syntax.
- right-click formula has extended function.

Shortcomings:

- need to load JS, pages will be slow to load, and there will be rendering changes.
- the kramed renderer does not support the escape character `\` of inline formulas.

**Katex**

Advantages:

- No JS will not affect page loading.
- the renderer works well (relative to kramed's inline formula for MathJax).
Shortcomings.
- A small part of LaTeX do not support it.

:::

## Archives Page

There is no attribute, but Banner.

## Categories Page

There is no attribute, but Banner.

[About adding categories](https://hexo.io/docs/front-matter)

## Tags Page

You can changes some style of tags:

``` yaml
tag:
  tagcloud:
    min_font: 15
    max_font: 30
    unit: px  # font-size
    start_color: "#BBBBEE"
    end_color: "#337ab7"
```

[About adding tags](https://hexo.io/docs/front-matter)

## About Page

### Custom Content

You can edit `fluid/pages/about.md` to define your area under your social networking icons.

You can modify the `about.md` location in the **theme config**. It is recommended to modify it outside the fluid directory to avoid losing md content when upgrading fluid. For example:

```yaml
about:
  md_path: ../../source/_data/fluid_about.md  # location: blog/source/_data/fluid_about.md
```

### Icons

The navigation bar and the social networking icon about the page are both quoted from [fontawesome] (https://fontawesome.com/v4.7.0/icons/). You just need to replace the property name with the icon name and the property value with url.

## 404 Page

If guest try to get the pages, which are not existed, 404 page will display.

To open this page, you need to configure it on the deployment environment of the blog:

- If your blog is deployed on a cloud server, you need to set the Nginx profile `error_page 404 = ./404.html`;
- If deployed on Github Pages, no additional configuration is required, but the custom domain must be bound.
- For other platforms such as OSS, please refer to the 404-page configuration documentation for each platform, but not all platforms support redirect to this Html.

## FAQ

#### Code Highlight Error

- Make sure that [disable highlight](/en/guide/#necessary-configuration)

- Then try to run `hexo clean && hexo g`

#### Configuration Invalid

- Check yml files format, such must be a blank after `:`, or two blanks to indent.

## About Hexo Configuration

[Blog _config.yml](https://hexo.io/docs/configuration)

[Post Front-matter](https://hexo.io/docs/front-matter)

## MIT

[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
