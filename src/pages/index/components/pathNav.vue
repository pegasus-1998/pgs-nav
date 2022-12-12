<template>
  <ul class="path-nav">
      <li v-for="(item, idx) in store.configPath" @click="scrollLoc(idx)" :key="idx" :class="{active: nowIdx === idx}" class="to-item" >
        {{item.title}}
      </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import { useNavPathStore } from '@/store/modules/navPath'
export default {
  setup() {
    const nowIdx = ref(0)
    const store = useNavPathStore()
    function scrollLoc(idx) {
      console.log('idx', idx)
    }
    window.addEventListener('scroll', function() {
      // document.documentElement.scrollTop = 10
      console.log(document.documentElement.scrollTop)
    })
    return {
      nowIdx,
      store,
      scrollLoc
    }
  }
}
</script>

<style lang="scss" scoped>
    .path-nav {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      right: 100px;
      z-index: 9;
      text-align: center;
      font-size: 13px;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
      .to-item {
        padding: 4px;
      }
      .active {
        color: #fff;
        background: $theme-color;
      }
    }
</style>