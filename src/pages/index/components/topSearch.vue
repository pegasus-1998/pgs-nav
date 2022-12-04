<template>
  <div class="top-search">
    <div class="main-container">
      <ul class="search-kind">
        <li v-for="(item, idx) in kinds" :key="idx" class="kind-item">
          <el-tooltip :content="item" placement="top">
            <img src="https://static.iiter.cn/baidu.ico" class="ico-img" />
          </el-tooltip>
        </li>
      </ul>
      <div class="search-container">
        <input type="text" class="input-container" placeholder="请输入搜索内容" />
        <span class="sp-btn">搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup() {
        const kinds = reactive(['本站', '百度', '360', 'github', '掘金', '知乎'])
        return {
            kinds
        }
    }
}
</script>
<style lang="scss" scoped>
.top-search {
  margin: 20px 0;
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .search-kind {
      display: flex;
      .kind-item {
        cursor: pointer;
        margin: 0 5px;
        padding: 5px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        &:hover {
          background: $theme-color;
        }
        .ico-img {
          display: block;
          width: 16px;
        }
      }
    }
    .search-container {
      display: flex;
      .input-container {
        border: 1px solid $theme-color;
        width: 350px;
        height: 30px;
        text-indent: 1em;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        &::placeholder {
            font-size: 12px;
            color: #999;
        }
      }
      .sp-btn {
        cursor: pointer;
        color: #fff;
        height: 30px;
        line-height: 30px;
        padding: 0 30px;
        letter-spacing: 5px;
        user-select: none;
        background: $theme-color;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
      }
    }
  }
}
</style>