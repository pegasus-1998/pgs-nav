<template>
  <div class="bottom-web">
    <div class="cen-container bx-width">
      <span class="t-text">友情链接:</span>
      <ul class="link-container">
        <li class="link-item">
          <span class="vert"></span>
          <a href="https://vue.miaya.art/en-us" target="blank" class="nav-link">Fext UI</a>
          <span class="vert"></span>
        </li>
      </ul>
      <div class="mes">© 2021-11-19 闽ICP备2021017230号</div>
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
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      padding-left: 70px;
      .link-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        .vert {
          width: 1px;
          height: 50%;
          background: #a3a3a3;
        }
        .nav-link {
            padding: 3px 10px;
            &:hover {
                text-decoration: underline;
            }
        }
      }
    }
    .mes {
        text-align: center;
    }
  }
}
</style>