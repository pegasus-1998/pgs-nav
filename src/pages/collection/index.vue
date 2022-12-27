<template>
  <el-card shadow="never" class="collection bx-width">
    <div class="pick">个人收藏</div>
    <div class="cards">
      <card-mes v-for="item in store.localCollArr" :key="item.url" :mes='item' :controlFlags='flags' />
    </div>
    <el-empty v-if='store.localCollArr.length === 0' :image-size="200" description='空空如也'/>
  </el-card>
</template>

<script>
import { reactive } from 'vue'
import cardMes from '@/components/cardMes.vue'
import { useNavPathStore } from '@/store/modules/navPath'
export default {
  components: { cardMes },
  setup() {
    const store = useNavPathStore()
    const flags = reactive({
      iconFlag: true,
      introFlag: true
    })
    return {
      store,
      flags
    }
  }
}
</script>

<style lang="scss" scoped>
.collection {
  margin-top: 50px;
  margin-bottom: 50px;
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
</style>