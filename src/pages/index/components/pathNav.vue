<template>
  <ul v-if="showFlag" class="path-nav">
    <li class="top-icon">
      <img @click="backTop" src="@/assets/images/logo.png" class="logo-img"/>
    </li>
    <li v-for="(item, idx) in store.configPath" @click="maoDianEvent(item.id, idx)" :key="idx" class="to-item">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import { useNavPathStore } from '@/store/modules/navPath'
export default {
  emits: ['aniHandler'],
  setup(props, ctx) {
    const showFlag = ref(true)
    const store = useNavPathStore()
    function maoDianEvent(id, idx) {
      const maoDianEl = document.querySelector(`#${id}`)
      maoDianEl.scrollIntoView()
      ctx.emit('aniHandler', idx)
      
    }
    function backTop() {
      document.documentElement.scrollTop = 0
    }
    function resizeHandler() {
      const width = window.innerWidth
      const height = window.innerHeight
      if(width > 1350 && height > 600) {
        showFlag.value = true
      }else {
        showFlag.value = false
      }
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return {
      store,
      showFlag,
      backTop,
      maoDianEvent
    }
  }
}
</script>

<style lang="scss" scoped>
.path-nav {
  position: fixed;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  z-index: 9;
  text-align: center;
  font-size: 13px;
  border-radius: 8px;
  background: var(--white-black);
  box-shadow: var(--nav-box-shadow);
  overflow: hidden;
  .top-icon {
    padding-top: 5px;
    .logo-img {
      cursor: pointer;
      display: block;
      margin: 0 auto;
      width: 16px;
    }
  }
  .to-item {
    cursor: pointer;
    padding: 5px;
    &:hover {
      color: #fff;
      background: var(--theme-color);
    }
  }
}
</style>