module.exports = {
  title: 'Fluid',
  description: '一款 Material Design 风格的 Hexo 主题',
  base: "/hexo-fluid-docs/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '使用指南', link: '/guide/' },
      { text: '更新日志', link: '/changelog/' },
      { text: '贡献开发', link: '/contribute/' },
      { text: 'Github', link: 'https://github.com/fluid-dev/hexo-theme-fluid' },
    ],
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
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
};
