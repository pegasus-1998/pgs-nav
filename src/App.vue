<template>
  <nav-bar />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  components: { navBar }
}
</script>
