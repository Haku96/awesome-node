import { defineConfigWithTheme } from 'vitepress'
import { usePosts } from '../src/composables/usePosts'
import type { ThemeConfig } from '../src/types'

const { posts, rewrites } = await usePosts({
  pageSize: 6,
  homepage: true,
  srcDir: 'posts',
  autoExcerpt: 150,
})

export default defineConfigWithTheme<ThemeConfig>({
  title: 'Haku96',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    posts,
    page: {
      max: 5,
    },
    logo: '/profile.svg',
    outline: { level: 2, label: '页面导航' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    nav: [
      { text: '首页', link: '/' },
      { text: '分类', link: '/category' },
      { text: '标签', link: '/tags' },
      { text: '归档', link: '/archives' },
      {
        text: '文档',
        items: [
          { text: '基础知识', link: '/docs/基础知识/' },
          { text: '工程实践', link: '/docs/工程实践/' },
          { text: '进阶提升', link: '/docs/进阶提升/' },
          { text: '收藏整理', link: '/docs/收藏整理/' },
        ],
      },
    ],
    sidebar: {
      '/docs/基础知识': [
        {
          text: '基础知识',
          items: [{ text: 'typescript', link: '/docs/基础知识/typescript' }],
        },
      ],
      '/docs/工程实践': [
        {
          text: '工程实践',
          items: [{ text: 'pnpm', link: '/docs/工程实践/pnpm' }],
        },
      ],
      '/docs/进阶提升': [
        {
          text: '进阶提升',
          items: [{ text: 'Intro', link: '/docs/进阶提升/' }],
        },
      ],
      '/docs/收藏整理': [
        {
          text: '收藏整理',
          items: [{ text: '技术', link: '/docs/收藏整理/技术' }],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Haku96',
      },
    ],
    footer: {
      message:
        'Theme by <a href="https://github.com/izhichao/vitepress-theme-minimalism" target="_blank">Minimalism</a>',
      copyright:
        'Copyright © 2017-2024 <a href="https://github.com/Haku96" target="_blank">Haku96</a>',
    },
    search: { provider: 'local' },
  },
  markdown: {
    theme: 'dark-plus',
    lineNumbers: true,
  },
  srcExclude: ['README.md'],
})
