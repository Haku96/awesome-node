<template>
  <div class="ZCContainer">
    <div class="ZCContent">
      <template v-if="posts">
        <PostList :posts="posts" />
        <Pagination
          :pagination="pagination"
          :total="total"
          :homepage="homepage"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress'
import PostList from '../components/PostList.vue'
import Pagination from '../components/Pagination.vue'
import type { IPost } from '../types'

const props = defineProps({
  pagination: { type: Number, required: true },
  total: { type: Number, required: true },
  size: { type: Number, required: true },
  homepage: Boolean,
})

const { theme } = useData()
const posts: IPost[] = (theme.value.posts ? [...theme.value.posts] : [])
  .sort((a, b) => {
    if (a.order && b.order) {
      return a.order - b.order
    }
    if (a.order) return -1
    if (b.order) return 1
    return 0
  })
  .slice(props.size * (props.pagination - 1), props.size * props.pagination)
</script>

<style lang="less" scoped>
@import '../styles/page.less';
</style>
