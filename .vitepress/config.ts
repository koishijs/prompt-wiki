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
        { text: '人物', link: '/tags/body' },
        { text: '服饰', link: '/tags/attire' },
      ],
    }],
  },

  vite: {
    resolve: {
      dedupe: ['vue'],
    },
  },
})
