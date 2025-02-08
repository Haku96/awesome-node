<template>
  <Layout>
    <template #doc-footer-before><PostInfoItem /></template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import PostInfoItem from '../components/PostInfoItem.vue'
const { Layout } = DefaultTheme
</script>
