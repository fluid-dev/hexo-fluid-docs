# Advance

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot is-new-ads-code="yes" class="side-ads"></Adsense>

## Hexo Plugin

:::warning
All plugins are only recommended and can’t be sure they are fully compatible with Fluid, please read their documentation carefully to avoid adverse consequences.
:::

[hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) : minify the generated files

[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) : generate post links through Hex

[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer) : allow inserting video tag into markdown

[live2d-widget](https://github.com/stevenjoezhang/live2d-widget) : add Live2D widget to web page

[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) : generate Atom 1.0 or RSS 2.0 feed

[hexo-admin](https://github.com/jaredly/hexo-admin) : an admin UI for Hexo

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot is-new-ads-code="yes"></InArticleAdsense>

### Faster Loading

1. For all the users, it is the effective way to use public CDN for the third-party lib, you can add it into `static_prefix` in **theme config**；

2. You can use OSS and bind your domain, then upload the files in the folder `public` to your OSS.

3. For your custom images, especially the big banner picture, you can use [tinypng](https://tinypng.com) to compress them, and upload them to your private CDN.
