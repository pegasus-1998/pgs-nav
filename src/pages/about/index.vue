<template>
  <el-card class="about bx-width box-card" shadow="never">
    <div class="content">
      <div class="title">
        <img class="title-img" src="@/assets/icon/github.png" />
        <span class="title-text">关于</span>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <img class="title-img" src="@/assets/icon/github.png" />
        <span class="title-text">开源</span>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <img class="title-img" src="@/assets/icon/github.png" />
        <span class="title-text">联系方式</span>
      </div>
    </div>
  </el-card>
</template>

<style lang='scss' scoped>
.el-card {
  margin: 35px auto;
  .content {
    margin: 25px 0;
    .title {
      @include flexItem;
      &-img {
        width: 28px;
        margin-right: 8px;
      }
      &-text {
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 3px;
      }
    }
  }
}
</style>


