import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs4hadoop/',
  title: "Hadoop 文档",
  description: "docs for hadoop",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '部署指南', link: '/hadoop/部署指南' },
      { text: '使用指南', link: '/hadoop/使用指南' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'index', link: '/' },
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
            { text: '介绍', link: '/hadoop/介绍' }
          ]
        }
      ],
      '/hadoop/部署指南/': [
        {
          text: '部署指南',
          items: [
            { text: '部署指南', link: '/hadoop/部署指南/' },
            { text: '环境要求', link: '/hadoop/部署指南/环境要求' }
          ]
        }
      ],
      '/hadoop/使用指南/': [
        {
          text: '使用指南',
          items: [
            { text: '使用指南', link: '/hadoop/使用指南/' },
            { text: 'HDFS常见操作', link: '/hadoop/使用指南/HDFS常见操作' }
          ]
        }
      ],
      '/资料/': [
      {
        text: '资料',
        items: [
          { text: '资料', link: '/hadoop/资料' }
        ]
      }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
