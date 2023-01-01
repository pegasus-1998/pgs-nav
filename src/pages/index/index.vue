<template>
  <div class="index">
    <top-search/>
    <path-nav @aniHandler='aniHandler'/>
    <div class="control bx-width">
      <div class="control-item">
        <span>图标</span>
        <el-switch v-model="iconFlag" size='small' />
      </div>
      <div class="control-item">
        <span>简介</span>
        <el-switch v-model="introFlag" size='small' />
      </div>
    </div>
    <el-card v-for="(item, idx) in store.configPath" :key="idx" :id="item.id" class="box-card bx-width" shadow="never">
      <div ref="pick" class="pick">{{item.title}}</div>
      <div class="cards">
        <card-mes v-for="sItem in item.children" :key="sItem.url" :mes='sItem' :controlFlags='flags' />
      </div>
    </el-card>
    <bottom-web />
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<script>
import topSearch from './components/topSearch.vue'
import pathNav from './components/pathNav.vue'
import cardMes from '@/components/cardMes.vue'
import bottomWeb from '@/components/bottomWeb.vue'
import { useNavPathStore } from '@/store/modules/navPath'
import { reactive, toRefs, ref } from 'vue'
export default {
  components: { pathNav, topSearch, cardMes, bottomWeb },
  setup() {
    const pick = ref()
    const flags = reactive({
      iconFlag: true,
      introFlag: true
    })
    function aniHandler(idx) {
      const pickEls = pick.value
      const el = pickEls[idx]
      pickEls.forEach(item => item.className = 'pick')
      el.classList.add('animate__animated', 'animate__bounce', 'animate__delay-1s')
    }
    const store = useNavPathStore()
    return {
      pick,
      store,
      flags,
      ...toRefs(flags),
      aniHandler
    }
  }
}
</script>

<style lang='scss' scoped>
.index {
  .control {
    @include flexEndCenterGap(12px);
    font-size: 12px;
    &-item {
      @include flexItem;
      .el-switch {
        margin-left: 5px;
      }
    }
  }
  .box-card {
    margin: 25px auto;
    .pick {
      width: max-content;
      color: #fff;
      padding: 5px 18px;
      margin-bottom: 15px;
      border-radius: 4px;
      background: var(--theme-color);
    }
    .cards {
      @include flexWrapGap(15px);
      .card-mes {
        width: 19%;
      }
    }
  }
}
</style>

