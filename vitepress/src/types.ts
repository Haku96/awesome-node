import { DefaultTheme } from 'vitepress/theme'

export interface IPost {
  title: string
  datetime: string
  permalink: string
  order: number
  pinned: boolean
  tags?: string[]
  category?: string
  excerpt: string
}

export interface IPage {
  max?: number
  pinned?: string
  outDir?: string
}

export interface IAd {
  title: string
  img: string
  link?: string
}

export interface IAds {
  sidebarNavBefore?: (IAd | IAd[])[]
  sidebarNavAfter?: (IAd | IAd[])[]
  asideOutlineBefore?: (IAd | IAd[])[]
  asideOutlineAfter?: (IAd | IAd[])[]
  docBefore?: (IAd | IAd[])[]
  docAfter?: (IAd | IAd[])[]
}

export interface IGroup {
  [key: string]: IPost[]
}

export interface ThemeConfig extends DefaultTheme.Config {
  posts?: IPost[]
  page?: IPage
  ads?: IAds
}
