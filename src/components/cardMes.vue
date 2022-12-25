<template>
  <el-card @click="toLink" class="card-mes" shadow="hover">
    <div class="base-mes">
      <el-image v-show="iconFlag" :src="mes.iconPath" lazy class="logo" />
      <span class="name">{{mes.name}}</span>
    </div>
    <div v-show="introFlag" class="introduction">
      {{mes.introduction}}
    </div>
    <div class="btns-bar">
      <el-tooltip content="复制链接" placement="top">
        <img @click.stop="iconEvent(1)" src="@/assets/images/copy.png" class="btn-icon" />
      </el-tooltip>
      <el-tooltip :content="collText" placement="top">
        <img @click.stop="iconEvent(2)" :src="collSrc" class="btn-icon" />
      </el-tooltip>
    </div>
  </el-card>
</template>

<script>
import { toRefs, computed } from 'vue'
import { copyStr } from '@/utils/textCtr'
import { ElMessage } from 'element-plus'
import { useNavPathStore } from '@/store/modules/navPath'
export default {
  props: {
    mes: {
      type: Object,
      required: true
    },
    controlFlags: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useNavPathStore()
    const isColl = computed(() => store.localCollArr.some(item => item.url === props.mes.url))
    const collText = computed(() => isColl.value ? '取消收藏' : '收藏')
    const collSrc = computed(() => isColl.value ? require('@/assets/images/coll-a.png') : require('@/assets/images/coll.png'))
    function toLink() {
      open(props.mes.url)
    }
    function iconEvent(num) {
      if (num === 1) {
        copyStr(props.mes.url)
        ElMessage({
          type: 'success',
          message: '链接已复制！'
        })
      }
      if (num === 2) {
        store.setCollArr(props.mes)
      }
    }
    return {
      collSrc,
      collText,
      toLink,
      iconEvent,
      ...toRefs(props.controlFlags)
    }
  }
}
</script>


<style lang='scss' scoped>
.card-mes {
  cursor: pointer;
  width: 260px;
  color: var(--font-text);
  background: var(--bg-color);
  .base-mes {
    @include flexItem;
    .logo {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .name {
      font-size: 16px;
    }
  }
  .introduction {
    margin: 5px 0;
    line-height: 1.5em;
  }
  .btns-bar {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    .btn-icon {
      cursor: pointer;
      width: 15px;
    }
  }
  &:deep(.el-card__body) {
    padding: 10px;
  }
}
</style>
