# 开始使用

<Adsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.slot is-new-ads-code="yes" class="side-ads"></Adsense>

## 主题简介

Fluid 是基于 Hexo 的一款 Material Design 风格的主题，由 [Fluid-dev](https://github.com/fluid-dev) 负责开发与维护。

主题 GitHub: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

预览网站：[Fluid's blog](https://hexo.fluid-dev.com/)    [zkqiang's blog](https://zkqiang.cn)

## 安装主题

### 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

### 获取最新版本

#### 方式一

Hexo 5.0.0 版本以上，推荐通过 npm 直接安装，进入博客目录执行命令：

```bash
npm install --save hexo-theme-fluid
```

然后在博客目录下创建 `_config.fluid.yml`，将主题的 [_config.yml](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/_config.yml) 内容复制过去。

#### 方式二

下载 [最新 release 版本](https://github.com/fluid-dev/hexo-theme-fluid/releases) 解压到 themes 目录，并将解压出的文件夹重命名为 `fluid`。

### 指定主题

如下修改 Hexo 博客目录中的 `_config.yml`：

```yaml
theme: fluid  # 指定主题

language: zh-CN  # 指定语言，会影响主题显示的语言，按需修改
```

### 创建「关于页」

首次使用主题的「关于页」需要手动创建：

```bash
hexo new page about
```

创建成功后修改 `/source/about/index.md`，添加 `layout` 属性。

修改后的文件示例如下：

```yaml
---
title: 标题
layout: about
---

这里写关于页的正文，支持 Markdown, HTML
```

:::warning
`layout: about` 必须存在，并且不能修改成其他值，否则不会显示头像等样式。
:::

## 更新主题

#### 方式一

> 适用于通过 Npm 安装主题。

在博客目录下执行命令：

```bash
npm update --save hexo-theme-fluid
```

#### 方式二

> 适用于通过 Release 压缩包安装主题，且没有自行修改任何代码的情况。

1. 先将原文件夹重命名为别的名称，例如 `fluid-bkp`，用于升级失败进行回退；

2. 按照安装步骤，重新下载 [release](https://github.com/fluid-dev/hexo-theme-fluid/releases) 并解压重命名为 `fluid`；

3. 如果某些配置发生了变化（改名或弃用），release 的说明里会特别提示，同步修改原配置文件即可。 

#### 方式三

> 适用于自定义了一些代码，或想体验其他分支的情况，以 dev 分支为例。

1. 确定自己的 fluid 目录已经开启 git，并且所有改动都已 commit；

2. 把 fluid 仓库的 develop 分支拉取到自己当前的分支上（也可新建一个分支再拉取）：

```bash
git pull https://github.com/fluid-dev/hexo-theme-fluid.git develop
```

3. 解决代码冲突，保留自己修改的部分（如何解决冲突可自行搜索）。

<InArticleAdsense :data-ad-client=$themeConfig.ads.client :data-ad-slot=$themeConfig.ads.inSlot is-new-ads-code="yes"></InArticleAdsense>

## 版本号释义

本项目的版本号为 `X.Y.Z` 格式，但与常见的[语义化版本号](https://semver.org/lang/zh-CN/)规范有部分区别，具体释义如下：
- `X`: 产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档
- `Y`: 包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能
- `Z`: 不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作

## 开源协议

[GPL-V3](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
