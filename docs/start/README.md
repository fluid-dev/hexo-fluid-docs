---
metaTitle: 开始使用 | Hexo Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,hexo主题,fluid文档,用户文档,博客,文档,博客,文章
---

# 开始使用

## 主题简介

Fluid 是基于 Hexo 的一款 Material Design 风格的主题，由 [Fluid-dev](https://github.com/fluid-dev) 负责开发与维护。

主题 GitHub: [https://github.com/fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)

预览网站：[Fluid's Blog](https://hexo.fluid-dev.com/)    [zkqiang's blog](https://zkqiang.cn)

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
title: about
date: 2020-02-23 19:20:33
layout: about
---

这里写关于页的正文，支持 Markdown, HTML
```

## 更新主题

#### 方式一

:::tip
适用于通过 Npm 安装主题。
:::

在博客目录下执行命令：

```bash
npm update --save hexo-theme-fluid
```

#### 方式二

:::tip
适用于通过 Release 压缩包安装主题，且没有自行修改任何代码的情况（配置文件除外）。
:::

1. 将自己的配置文件备份（如果完整使用[覆盖配置](/guide/#覆盖配置)功能可忽略此步骤）；

2. 将 fluid 文件夹全部删除，重新下载 [release](https://github.com/fluid-dev/hexo-theme-fluid/releases) 并解压；

3. 如果某些配置发生了变化（改名或弃用），release 的说明里会特别提示，同步修改原配置文件即可。 

#### 方式三

:::tip
适用于自定义了一些代码，或想体验 master 分支的情况。
:::

1. 确定自己的 fluid 目录已经开启 git，并且所有改动都已 commit；

2. 把 fluid 仓库的 master 分支拉取到自己的分支上（可新建一个分支再拉取）：

```bash
git pull https://github.com/fluid-dev/hexo-theme-fluid.git master
```

3. 解决代码冲突，保留自己修改的部分（如何解决冲突可自行搜索）。

## 微信交流群

[查看微信群二维码](https://github.com/fluid-dev/hexo-theme-fluid/issues/96)

## 开源协议

[MIT](https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE)
