export default {
    base: '/docs/',
    description: '面试题算法题集合',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: "web技术笔记",
        logo: "/logo.jpg",
        nav: [
            {
              text: '指南',
              link: '/zh/guide/what-is-vitepress',
              activeMatch: '/zh/guide/'
            },
            {
              text: '参考',
              link: '/zh/reference/site-config',
              activeMatch: '/zh/reference/'
            },
            {
              text: '其他',
              items: [
                {
                  text: '掘金',
                  link: 'https://juejin.cn/user/1978776662054776/posts'
                },
                {
                  text: '博客',
                  link: 'https://www.cnblogs.com/panhe-xue/'
                },
                {
                    text: 'Github',
                    link: 'https://github.com/panhe-xue?tab=repositories'
                  }
              ]
            }
          ],
        sidebar: {
            '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
            '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() }
        },
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2024-${new Date().getFullYear()} 潘鹤`
          },
      
          docFooter: {
            prev: '上一页',
            next: '下一页'
          },
    },
  }

  function sidebarGuide() {
    return [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '什么是 VitePress？', link: 'what-is-vitepress' },
          { text: '快速开始', link: 'getting-started' },
          { text: '路由', link: 'routing' },
          { text: '部署', link: 'deploy' }
        ]
      },
      {
        text: '写作',
        collapsed: false,
        items: [
          { text: 'Markdown 扩展', link: 'markdown' },
          { text: '资源处理', link: 'asset-handling' },
          { text: 'frontmatter', link: 'frontmatter' },
          { text: '在 Markdown 使用 Vue', link: 'using-vue' },
          { text: '国际化', link: 'i18n' }
        ]
      },
      {
        text: '自定义',
        collapsed: false,
        items: [
          { text: '自定义主题', link: 'custom-theme' },
          { text: '扩展默认主题', link: 'extending-default-theme' },
          { text: '构建时数据加载', link: 'data-loading' },
          { text: 'SSR 兼容性', link: 'ssr-compat' },
          { text: '连接 CMS', link: 'cms' }
        ]
      },
      {
        text: '实验性功能',
        collapsed: false,
        items: [
          { text: 'MPA 模式', link: 'mpa-mode' },
          { text: 'sitemap 生成', link: 'sitemap-generation' }
        ]
      },
      { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
    ]
  }

  function sidebarReference() {
    return [
      {
        text: '参考',
        items: [
          { text: '站点配置', link: 'site-config' },
          { text: 'frontmatter 配置', link: 'frontmatter-config' },
          { text: '运行时 API', link: 'runtime-api' },
          { text: 'CLI', link: 'cli' },
          {
            text: '默认主题',
            base: '/zh/reference/default-theme-',
            items: [
              { text: '概览', link: 'config' },
              { text: '导航栏', link: 'nav' },
              { text: '侧边栏', link: 'sidebar' },
              { text: '主页', link: 'home-page' },
              { text: '页脚', link: 'footer' },
              { text: '布局', link: 'layout' },
              { text: '徽章', link: 'badge' },
              { text: '团队页', link: 'team-page' },
              { text: '上下页链接', link: 'prev-next-links' },
              { text: '编辑链接', link: 'edit-link' },
              { text: '最后更新时间戳', link: 'last-updated' },
              { text: '搜索', link: 'search' },
              { text: 'Carbon Ads', link: 'carbon-ads' }
            ]
          }
        ]
      }
    ]
  }
  