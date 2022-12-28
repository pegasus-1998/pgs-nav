<template>
  <el-card class="time-axis bx-width">
    <el-timeline>
      <el-timeline-item timestamp="2022-12-29" placement="top">
        <el-card>
          <h4 class="title">优化</h4>
          <div class="con">使用KeepAlive组件缓存，Element Plus按需自动导入</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022-12-22" placement="top">
        <el-card>
          <h4 class="title">暗黑模式</h4>
          <div class="con">页面新增暗黑模式</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022-12-21" placement="top">
        <el-card>
          <h4 class="title">收藏</h4>
          <div class="con">新增收藏页面，将收藏数据保存在本地。</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022-12-03" placement="top">
        <el-card>
          <h4 class="title">pgs2.0</h4>
          <div class="con">
            使用
            <a href="https://cn.vuejs.org/" class="link" target="blank">Vue3</a> +
            <a href="https://pinia.vuejs.org/zh/" class="link" target="blank">Pinia</a> +
            <a href="https://element-plus.org/zh-CN/" class="link" target="blank">Element Plus</a>开始重写。
            时间轴页面效果更换，取消留言板页面。
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022-08-05" placement="top">
        <el-card>
          <h4 class="title">留言板</h4>
          <div class="con">关闭评论接口</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021-12-21" placement="top">
        <el-card>
          <h4 class="title">时间轴</h4>
          <div class="con">记录个人项目</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021-12-21" placement="top">
        <el-card>
          <h4 class="title">动画</h4>
          <div class="con">
            进场动画<a href="https://wowjs.uk/" class="link" target="blank">wow.js</a>，
            粒子背景 <a href="https://github.com/VincentGarreau/particles.js/" class="link" target="blank">particles.js</a>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021-11-19" placement="top">
        <el-card>
          <h4 class="title">网站</h4>
          <div class="con">服务器更换为阿里云 域名更换 备案完成</div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021-09-01" placement="top">
        <el-card>
          <h4 class="title">Fect UI</h4>
          <div class="con">
            添加第一个友情链接<a href="https://vue.miaya.art/zh-cn" class="link" target="blank">Fect UI</a>
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021-06-12" placement="top">
        <el-card>
          <h4 class="title">留言板</h4>
          <div class="con">
            新增留言板页面，
            <a href="https://www.expressjs.com.cn/" class="link" target="blank">Express</a> +
            <a href="https://www.mysqlzh.com/" class="link" target="blank">mysql</a> 实现评论接口api
          </div>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2021-06-05" placement="top">
        <el-card>
          <h4 class="title">pgs导航开始</h4>
          <div class="con">
            使用
            <a href="https://jquery.cuishifeng.cn/" class="link" target="blank">Jquery</a> +
            <a href="https://www.swiper.com.cn/" class="link" target="blank">Swiper</a> +
            <a href="https://www.sass.hk/docs/" class="link" target="blank">Scss</a>.. pgs导航初始完成
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.time-axis {
  margin-top: 20px;
  margin-bottom: 20px;
  .con {
    line-height: 50px;
    font-size: 13px;
    text-indent: 1em;
    .link {
      color: #4e72b8;
    }
  }
}
</style>