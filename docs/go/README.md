# 快速开始

## 安装

**1. 获取最新版本**

```bash
cd themes
git clone -b master https://github.com/0x2e/Material-T.git Material-T
  ```

**2. 必要的配置**

按如下内容修改根目录中的 `_config.yml` 

```yml
// 关闭归档页的默认分页：
archive_generator:
  per_page: 0  
  yearly: true
  monthly: true
  daily: false
  order_by: -date

// 关闭默认的代码高亮
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

**3. 在根目录中的 `_config.yml` 中启用 `Material-T`**

## 更新

::: warning
v0.9 向上升级时，建议先备份，然后直接用新版本替换，以免 git pull 时出现过多冲突。
:::

建议更新前备份 _config.yml。

```bash
cd /themes/Material-T
git pull
```

## 常见问题

### 代码高亮效果异常

1. 请确认已完成上述『关闭默认的代码高亮』步骤
2. 尝试清空缓存：`hexo clean && hexo g`

### 配置无效

请检查配置文件是否符合 yml 语法，易错处： **空格**、**缩进**、**中英文字符**