# 快速开始

## 安装

1. 获取最新版本

```bash
cd themes
git clone -b master https://github.com/invom/Material-T.git
```

2. 修改 `Hexo` 配置文件

``` yml
// 关闭归档页中的默认分页：
archive_generator:
  per_page: 0  
  yearly: true
  monthly: true
  daily: false
  order_by: -date

// 弃用 Hexo 默认代码高亮
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```
3. 初始化 `About Page`

```bash
hexo new page about
```

然后编辑 `source/about/index.md`， 添加 Front Matter 属性 type: "about" （必需）。title 可自行修改。

4. 启用主题 `Material-T`

## 更新

::: warning
v0.9 向上升级时，建议先备份，然后直接用新版本替换，以免 git pull 时出现过多冲突。
:::

```bash
git pull
```