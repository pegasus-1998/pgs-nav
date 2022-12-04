<template>
  <navBar/>
  <router-view />
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
  components: { navBar }
}
</script>

<style lang="scss">
</style>
