<template>
  <button
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 sm:bottom-12 sm:right-12 p-2 bg-zinc-800 cursor-pointer text-white rounded-full shadow-lg hover:bg-zinc-600 transition-all duration-300 ease-in-out opacity-90 hover:opacity-100"
    aria-label="返回顶部"
  >
    <svg
      xmlns="http://www.w3.org/2000/vue"
      class="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped></style>
