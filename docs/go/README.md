# 快速开始

## 安装

**1. 获取最新版本**

请优先下载 [最新 release 版本](https://github.com/0x2E/Material-T/releases)，master 分支无法保证稳定

下载后解压到 themes 目录下

**2. 必要的配置**

按如下内容修改根目录中的 `_config.yml` 

```yml
// 关闭默认的代码高亮
highlight:
  enable: false
  line_number: false
  auto_detect: false
  tab_replace:
```

**3. 在根目录中的 `_config.yml` 中启用 `Material-T`**

## 更新

建议每次更新前备份 `_config.xml`，以免覆盖自定义的配置项

## 常见问题

### 代码高亮效果异常

1. 请确认已完成上述『关闭默认的代码高亮』步骤
2. 尝试清空缓存：`hexo clean && hexo g`

### 配置无效

请检查配置文件是否符合 yml 语法，如冒号后需要有空格，缩进需要 2 个空格等

## 参与开发

向 **develop** 分支发起 pull request 并进行简要描述。（请尽可能保证清晰的 git 历史）

## 开源协议 License

[MIT](https://github.com/0x2E/Material-T/blob/master/LICENSE)