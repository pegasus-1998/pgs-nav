<template>
  <el-card @click="toLink" class="card-mes" shadow="hover">
    <div class="base-mes">
      <img :src="mes.iconPath" class="logo" />
      <span class="name">{{mes.name}}</span>
    </div>
    <div class="introduction">
      {{mes.introduction}}
    </div>
    <div class="btns-bar">
      <el-tooltip content="复制链接" placement="top">
        <img @click.stop="iconEvent(1)" src="@/assets/images/copy.png" class="btn-icon" />
      </el-tooltip>
      <el-tooltip content="收藏" placement="top">
        <img @click.stop="iconEvent(2)" src="@/assets/images/coll.png" class="btn-icon" />
      </el-tooltip>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    mes: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    function toLink() {
      open(props.mes.url)
    }
    function iconEvent(num) {
      if(num === 1) {

      }
      if(num === 2) {

      }
    }
    return {
      toLink,
      iconEvent
    }
  }
}
</script>


<style lang='scss' scoped>
.card-mes {
  cursor: pointer;
  width: 260px;
  color: #000000d9;
  background: #f5f5f5;
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
