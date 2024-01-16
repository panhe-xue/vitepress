export default {
    base: '/docs/',
    description: '面试题算法题集合',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: "web技术笔记",
        logo: "/logo.jpg",
        nav: [
            {
                text: '基础',
                link: '/basics/',
                activeMatch: '/basics/'
              },
            {
              text: '工程化',
              link: '/engineering/',
              activeMatch: '/engineering/'
            },
            {
                text: 'webpack',
                link: '/webpack/',
                activeMatch: '/webpack/'
              },
            {
              text: 'vue',
              link: '/vue/index',
              activeMatch: '/vue/'
            },
            {
                text: 'react',
                link: '/react/index',
                activeMatch: '/react/'
            },
            {
              text: '其他分类',
              items: [
                {
                  items: [
                    
                    {
                      text: 'nuxt',
                      link: '/browser/index',
                      activeMatch: '/browser/'
                    },
                    {
                      text: 'node',
                      link: '/performance/index',
                      activeMatch: '/performance/'
                    },
                    {
                      text: 'cicd',
                      link: '/interview/index',
                      activeMatch: '/interview/'
                    }
                  ]
                },
                {
                  items: [
                    {
                      text: '算法',
                      link: '/leetcode/index',
                      activeMatch: '/leetcode/'
                    },
                    {
                      text: '浏览器工作原理',
                      link: '/browser/index',
                      activeMatch: '/browser/'
                    },
                    {
                      text: '性能优化',
                      link: '/performance/index',
                      activeMatch: '/performance/'
                    },
                    {
                      text: '面试题',
                      link: '/interview/index',
                      activeMatch: '/interview/'
                    },
                    {
                      text: '手写系列',
                      link: '/interview/index',
                      activeMatch: '/interview/'
                    }
                  ]
                },
              ]
            },
            {
              text: '相关链接',
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
            '/basics/': { base: '/basics/', items: sidebarBasics() },
            '/engineering/': { base: '/engineering/', items: sidebarEngineering() },
            '/webpack/': { base: '/webpack/', items: sidebarWepack() },
            '/vue/': { base: '/vue/', items: sidebarVue() },
            '/react/': { base: '/react/', items: sidebarReact() },
            '/leetcode/': { base: '/vue/', items: sidebarLeetcode() },
            '/interview/': { base: '/interview/', items: sidebarInterview() },
            '/performance/': { base: '/performance/', items: sidebarPerformance() },
            '/browser/': { base: '/browser/', items: sidebarBrowser() },
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

  function sidebarBasics() {
    return [
      {
        text: 'Dom',
        collapsed: false,
        items: [
          { text: '找到所有标签', link: 'dom/找到所有标签' },
          { text: '最多的标签', link: 'dom/最多的标签' },
          { text: '跨域', link: 'dom/跨域' },
          { text: '图片懒加载', link: 'dom/图片懒加载' },
          { text: 'sessionStorage与localStorage', link: 'dom/sessionStorage与localStorage' },
          { text: 'Cookie', link: 'dom/Cookie' },
          { text: 'addEventListener', link: 'dom/addEventListener' },
          { text: '取消请求的发送', link: 'dom/取消请求的发送' },
          { text: '判断在移动端', link: 'dom/判断在移动端' },
          { text: 'requestIdleCallback', link: 'dom/requestIdleCallback' },
          { text: 'DOM转化为图片', link: 'dom/DOM转化为图片' },
          { text: 'JSONP', link: 'dom/JSONP' },
          { text: '其他', link: 'dom/其他' },
        ]
      },
      {
        text: 'css',
        collapsed: false,
        items: [
          { text: '响应式', link: 'css/Response' },
          { text: '背景色', link: 'css/background' },
          { text: 'frontmatter', link: 'css/frontmatter' },
          { text: '在 Markdown 使用 Vue', link: 'css/using-vue' },
          { text: '国际化', link: 'css/' }
        ]
      },
      {
        text: 'javascript',
        collapsed: false,
        items: [
          { text: '作用域与变量提升', link: 'javascript/作用域与变量提升' },
          { text: 'typeof和instanceof 原理', link: 'javascript/typeof 和 instanceof 原理' },
          { text: 'new操作符', link: 'javascript/new操作符' },
          { text: 'this那些事', link: 'javascript/this那些事' },
          { text: 'this指向', link: 'javascript/this指向' },
          { text: '继承', link: 'javascript/继承' },
          { text: '存储', link: 'javascript/存储' },
          { text: '异步', link: 'javascript/异步' },
          { text: '浮点数精度', link: 'javascript/浮点数精度' },
          { text: '大文件上传', link: 'javascript/大文件上传' },
        ]
      }
    ]
  }

  function sidebarEngineering() {
    return [
      { text: '浏览器输入url后的整个过程', link: '浏览器输入url后的整个过程' },
      { text: '浏览器的渲染机制', link: '浏览器的渲染机制' },
      { text: '浏览器性能监控performance', link: '浏览器性能监控performance' },
      { text: '前端优化性能的手段', link: '前端优化性能的手段' },
      { text: '优化点', link: '优化点' }
    ]
  }

  function sidebarWepack() {
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
      { text: '配置和 API 参考', base: '/reference/', link: 'site-config' }
    ]
  }

  function sidebarVue() {
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
            base: '/reference/default-theme-',
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
  
  function sidebarReact() {
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
            base: '/reference/default-theme-',
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

  function sidebarInterview() {
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
            base: '/reference/default-theme-',
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

  function sidebarLeetcode() {
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
            base: '/reference/default-theme-',
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

  function sidebarPerformance() {
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
            base: '/reference/default-theme-',
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

  function sidebarBrowser() {
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
            base: '/reference/default-theme-',
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