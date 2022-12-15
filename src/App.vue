<template>
  <nav-bar />
  <router-view />
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  components: { navBar }
}
</script>
