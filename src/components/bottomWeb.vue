<template>
  <div class="bottom-web">
    <div class="cen-container bx-width">
      <span class="t-text">友情链接:</span>
      <ul class="link-container">
        <li class="link-item">
          <a href="https://vue.miaya.art/zh-cn" target="blank" class="nav-link">Fext UI</a>
        </li>
      </ul>
      <div class="mes">
        <span>© 2021-11-19 </span>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" class="bei-link" target="blank">闽ICP备2021017230号</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.bottom-web {
  color: #a3a3a3;
  line-height: 30px;
  padding: 15px 0;
  background: #313131;
  .cen-container {
    .link-container {
      @include flexWrapGap(25px);
      padding-left: 70px;
      .link-item {
        @include flexItem;
        font-size: 12px;
        .nav-link {
          padding: 3px 10px;
          &:hover {
            text-decoration: underline;
          }
        }
        &::before,
        &::after {
          display: block;
          content: '';
          width: 1px;
          height: 50%;
          background: #a3a3a3;
        }
      }
    }
    .mes {
      text-align: center;
      .bei-link {
        &:hover {
          color: var(--theme-color);
        }
      }
    }
  }
}
</style>