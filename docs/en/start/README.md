# Start

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot is-new-ads-code="yes" class="side-ads"></Adsense>

## Introduction

Developed by [Fluid-dev](https://github.com/fluid-dev), Fluid is an elegant Material-Design theme for Hexo.

GitHub Repo: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

Preview: [Fluid's blog](https://hexo.fluid-dev.com/)    [zkqiang's blog](https://zkqiang.cn)

## Quick Start

### Installing Hexo

If you don't have a hexo in your computer, please follow [Hexo Oficial Docs](https://hexo.io/docs/) to install and initialize your blog.

### Downloading Fluid...

#### via npm

Installing directly via Npm is recommended for Hexo version 5.0.0 and above. To install run the following command in the blog directory:

```sh
npm install --save hexo-theme-fluid
```

Then create `_config.fluid.yml` in the blog directory and copy the content of [the theme's _config.yml](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/_config.yml) into it.

#### via releases

Download the [latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases) of the theme, then extract it to `themes` directory and rename it to `fluid`.

### Setting theme

Edit `_config.yml` in the blog root directory as follows:

```yaml
theme: fluid
```

### Creating the About Page

The about page needs to be created manually:

```bash
hexo new page about
```

Then edit `/source/about/index.md` under the blog directory and add `layout` attribute.

The modified example is as follows:

```yaml
---
title: This is a title
layout: about
---

You can write the content here, with the support of Markdown and HTML
```

:::warning
`layout: about` must exist and **can not** be modified as other values, otherwise avatar and other styles **will not be shown**.
:::

## Upgrading Fluid via...

#### npm

> Applicable for npm-installed theme.

Execute the command in your blog directory:

```bash
npm update --save hexo-theme-fluid
```

#### files

> Applicable for installed theme via release and all codes have not been modified.

1. Backup your config files. We recommend you to use [configuration override](/en/guide/#configuration-override).

2. Download the [latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases), then replace the fluid directory.

#### or if you changed codes

> Applicable to cases where some codes have been modified, or you want to pull the master branch.

1. Make sure your fluid directory has git and all changes have been committed.

2. Pull the master branch of fluid repo to your branch:

```bash
git pull https://github.com/fluid-dev/hexo-theme-fluid.git master
```

3. Resolve code conflicts if any.

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot is-new-ads-code="yes"></InArticleAdsense>

## Code License we use

We use [GPL-V3](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE) as our license.
