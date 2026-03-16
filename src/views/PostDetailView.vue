<template>
  <section>
    <div v-if="loading" class="flex justify-center pt-20">
      <Loader />
    </div>
    <PostContent
      v-else-if="post"
      :post-title="post.title"
      :post-body="post.body_markdown"
      :post-updated="post.edited_at"
    />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PostContent from '@/components/PostContent.vue'
import Loader from '@/components/Loader.vue'
import { getPost } from '@/api/post'

const props = defineProps(['id'])

const post = ref(null)
const loading = ref(false)

const fetchPost = async id => {
  loading.value = true
  try {
    const res = await getPost({ id })
    post.value = res.data
  } catch (error) {
    console.error('获取文章失败:', error)
  } finally {
    loading.value = false
  }
}

// 替代 created / mounted
onMounted(() => {
  fetchPost(props.id)
})
</script>

<style scoped></style>
