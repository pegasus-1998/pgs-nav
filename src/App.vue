<template>
  <nav-bar/>
  <router-view />
  <bottom-web/>
</template>

<script>
import navBar from '@/components/navBar.vue'
import bottomWeb from '@/components/bottomWeb.vue'
export default {
  components: { navBar, bottomWeb }
}
</script>

<style lang="scss">
</style>
