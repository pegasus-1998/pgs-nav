<template>
  <el-card class="about bx-width box-card" shadow="never">
    <div class="content">
      <div class="title">
        <img class="title-img" src="@/assets/images/about-icon.png" />
        <span class="title-text">关于</span>
      </div>
      <div class="con-row">
        此网站开始于2021-06-05。于2022-12-03使用
        <a href="https://cn.vuejs.org/" class="link" target="blank">vue3</a> + 
        <a href="https://pinia.vuejs.org/zh/" class="link" target="blank">pinia</a> + 
        <a href="https://element-plus.gitee.io/zh-CN/" class="link" target="blank">element-plus</a> 重写
      </div>
      <div class="con-row">
        网站参考 <a href="https://iiter.cn/" class="link" target="blank">艾特网</a>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <img class="title-img" src="@/assets/images/github-fill.png" />
        <span class="title-text">开源</span>
      </div>
      <div class="con-row">
        GitHub: <a href="https://github.com/pegasus-1998/pgs-nav" target="blank" class="link">https://github.com/pegasus-1998/pgs-nav</a>
      </div>
      <div class="con-row">
        Gitee: <a href="https://gitee.com/pegasus-1998/pgs-nav" target="blank" class="link">https://gitee.com/pegasus-1998/pgs-nav</a>
      </div>
    </div>
    <div class="content">
      <div class="title">
        <img class="title-img" src="@/assets/images/lianxi-icon.png" />
        <span class="title-text">联系方式</span>
      </div>
      <div class="img-row">
        <img src="@/assets/images/wx-m.png" class="img-item" title="微信"/>
      </div>
    </div>
  </el-card>
</template>

<style lang='scss' scoped>
.el-card {
  margin: 35px auto;
  .content {
    margin: 25px 0;
    line-height: 30px;
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
    .con-row {
      padding-left: 1em;
      color: #666;
      .link {
        color: #4e72b8;
      }
    }
    .img-row {
      .img-item {
        width: 230px;
        margin: 15px;
        border: 5px solid #ccc;
      }
    }
  }
}
</style>


