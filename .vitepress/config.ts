import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Prompt Wiki',

  themeConfig: {
    outline: [2, 3],
    sidebar: [{
      text: '指南',
      items: [
        { text: '介绍', link: '/' },
      ],
    }, {
      text: '参考',
      items: [
        { text: '风格', link: '/tags/style' },
        { text: '头发', link: '/tags/hair' },
        { text: '表情', link: '/tags/face' },
        { text: '衣着', link: '/tags/cloth' },
        { text: '装饰', link: '/tags/accessory' },
        { text: '姿势', link: '/tags/pose' },
        { text: '环境', link: '/tags/environment' },
      ],
    }, {
      text: '更多',
      items: [
        { text: 'NovelAI Bot', link: 'https://novelai.koishi.chat' },
      ],
    }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/koishijs/prompt-wiki' },
    ],

    editLink: {
      pattern: 'https://github.com/koishijs/prompt-wiki/edit/main/:path',
    },
  },

  vite: {
    resolve: {
      dedupe: ['vue'],
    },
  },
})
