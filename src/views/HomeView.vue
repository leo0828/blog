<template>
  <section>
    <div v-if="loading" class="flex justify-center pt-20">
      <Loader />
    </div>
    <ul v-else>
      <li v-for="post in posts" :key="post.slug" class="py-7 border-b border-gray-200 relative">
        <div
          class="text-zinc-400 text-xs mb-2 sm:mb-0 sm:absolute sm:left-0 sm:top-8.5 tracking-widest"
        >
          {{ new Date(post.published_at).toLocaleDateString() }}
        </div>
        <h2 class="hover:text-sky-500 sm:text-xl transition duration-300 sm:ml-24 tracking-wide">
          <RouterLink :to="`/posts/${post.id}`">
            {{ post.title }}
          </RouterLink>
        </h2>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import { getPosts } from '@/api/post'

const posts = ref([])
const loading = ref(false)

const fetchPosts = async () => {
  loading.value = true
  try {
    const res = await getPosts({
      username: 'leo0828',
      page: 1,
      per_page: 30,
    })
    posts.value = res.data
  } catch (error) {
    console.error('获取列表失败:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<style scoped></style>
