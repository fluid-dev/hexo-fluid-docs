# Start

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot is-new-ads-code="yes" class="side-ads"></Adsense>

## Introduction

Fluid is an elegant Material-Design theme for Hexo, developed by [Fluid-dev](https://github.com/fluid-dev)

GitHub Repository: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

Preview: [Fluid's blog](https://hexo.fluid-dev.com/)    [zkqiang's blog](https://zkqiang.cn)

## Quick Start

### Install Hexo

If you don't have a hexo blog, please follow [Hexo Docs](https://hexo.io/docs/) to install and initialize your blog。

#### Download Fluid

#### Way A

If your Hexo version >= 5.0.0, you can be installed via Npm:

```sh
npm install --save hexo-theme-fluid
```

Then create `_config.fluid.yml` in the blog directory and copy the content of [_config.yml](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/_config.yml)

#### Way B

Download the [latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases), then extract it to `themes` directory and renamed to `fluid`.

### Set theme

Edit `_config.yml` in the blog root directory as follows:

```yaml
theme: fluid
```

### Create about page

The about page needs to be created manually:

```bash
hexo new page about
```

Then edit `/source/about/index.md` and add `layout` attribute.

The modified example is as follows:

```yaml
---
title: This is a title
layout: about
---

You can write the content here, support Markdown, HTML
```

## Theme Upgrade

#### Way A

> Applicable to installed theme via Npm.

Execute the command in your blog directory：

```bash
npm update --save hexo-theme-fluid
```

#### Way B

> Applicable to installed theme via release and all codes have not been modified.

1. Backup your config files. We recommend you to use [override configuration](/en/guide/#override-configuration).

2. Download the [latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases), then replace the fluid directory.

#### Way C

> Applicable to cases where some codes have been modified, or you want to pull the master branch.

1. Make sure your fluid directory has git and all changes have been committed.

2. Pull the master branch of fluid repo to your branch:

```bash
git pull https://github.com/fluid-dev/hexo-theme-fluid.git master
```

3. Resolve code conflicts if any.

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot is-new-ads-code="yes"></InArticleAdsense>

## License

[GPL-V3](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
