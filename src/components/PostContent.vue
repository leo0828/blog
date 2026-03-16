<template>
  <div class="tracking-wide">
    <div class="text-zinc-400 text-sm mb-6 flex items-center">
      <span class="h-4 w-0.5 rounded-full bg-zinc-200 mr-3"></span>
      更新于：{{ new Date(postUpdated).toLocaleString() }}
    </div>
    <h1 class="text-2xl sm:text-3xl font-medium mb-9">{{ postTitle }}</h1>
    <div class="text-zinc-800 prose" v-highlight v-html="compiledMarkdown"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  postBody: String,
  postTitle: String,
  postUpdated: [String, Number],
})

const compiledMarkdown = computed(() => marked(props.postBody))
</script>

<style scoped></style>
