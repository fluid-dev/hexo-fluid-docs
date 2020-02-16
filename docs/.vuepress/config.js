module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      description: '一款 Material Design 风格的 Hexo 博客主题'
    },
    '/en/': {
      lang: 'en',
      description: 'An elegant Material-Design theme for Hexo'
    }
  },
  title: 'Fluid',
  base: "/hexo-fluid-docs/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '帮助我们完善文档',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '使用指南', link: '/guide/' },
          { text: '静态配置', link: '/static-conf/' },
          { text: '更新日志', link: '/changelog/' },
          { text: '操作示例', link: '/demo/' },
          { text: '贡献开发', link: '/contribute/' },
          { text: 'GitHub', link: 'https://github.com/fluid-dev/hexo-theme-fluid' },
        ],
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this docs',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'GitHub', link: 'https://github.com/fluid-dev/hexo-theme-fluid' },
        ],
      }
    },
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'fluid-dev/hexo-fluid-docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'source',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  }
};
