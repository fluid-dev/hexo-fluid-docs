# 图标

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot is-new-ads-code="yes" class="side-ads"></Adsense>

## 内置社交图标

主题内置了一些社交类图标，均来自 [Iconfont](https://www.iconfont.cn/)，由于不支持公开展示，因此只能通过图片：

![内置图标](../.vuepress/public/iconfont.png)

将 `icon-` 开头的那行填入 css class 即可，例如 `iconfont icon-wechat-fill`。

以上主要用在关于页中，当然你也可以通过插入 HTML 的方式用到主题的任何地方。

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot is-new-ads-code="yes"></InArticleAdsense>

## 自定义图标

[Iconfont](https://www.iconfont.cn/)支持用户创建项目来管理和使用图标库，在 `图标管理-我的项目` 中即可管理和创建项目。将所需图标添加至购物车，再通过购物车添加至所创建的项目中。在项目中可以下载至本地与生成在线链接，Iconfont 支持在阿里云的 CDN 中生成 CSS 或 JS 文件用来调用。

生成在线链接后，有两种引入方式：

1. 将链接替换到**主题配置**的 `iconfont` 配置项中，但注意替换后**原内置的图标库将全部失效**

2. 通过 [自定义 CSS](/guide/#自定义-js-css-html) 引入，这样不会替换内置图标库

引入之后，图标第二行的 class 填入配置中的 css class 即可，例如 `iconfont icon-email`（**注意 `iconfont` 不能删掉**）。

在每次有删减项目中图标库目录时，需要点击重新生成链接并替换到配置链接。
