<template>
  <div class="min-h-screen">
    <div class="w-full max-w-2xl flex-1 m-auto text-zinc-800 flex flex-col">
      <MyHeader></MyHeader>
      <div class="py-16 px-7 flex-1">
        <RouterView v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" :key="$route.fullPath" />
          </keep-alive>
        </RouterView>
      </div>
    </div>
    <BackToTop />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BackToTop from './components/BackToTop.vue'
import MyHeader from './components/MyHeader.vue'
</script>

<style scoped></style>
