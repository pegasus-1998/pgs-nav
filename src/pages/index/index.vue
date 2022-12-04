<template>
  <div class="index bx-width">
    <top-search />
    <el-card v-for="(item, idx) in cardReac" :key="idx" class="box-card" shadow="never">
      <div class="pick">
        <span class="pick-item pick-active">{{item.title}}</span>
        <!-- <span class="pick-item">收藏</span> -->
      </div>
      <div class="cards">
        <card-mes v-for="(sItem, sIdx) in item.children" :key="sIdx" :mes='sItem' />
      </div>
    </el-card>
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script>
import topSearch from './components/topSearch.vue'
import leftNav from './components/leftNav.vue'
import cardMes from '@/components/cardMes.vue'
import configPath from '@/config/path.js'
import { reactive } from 'vue'
export default {
  components: { leftNav, topSearch, cardMes },
  setup() {
    const cardReac = reactive(configPath)
    return {
      cardReac
    }
  }
}
</script>

<style lang='scss' scoped>
.index {
  .box-card {
    margin: 25px 0;
    .pick {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
      &-item {
        cursor: pointer;
        padding: 5px 18px;
        border-radius: 4px;
        background: #ccc;
      }
      &-active {
        color: #fff;
        background: $theme-color;
      }
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      .card-mes {
        width: 19%;
      }
    }
  }
}
</style>

