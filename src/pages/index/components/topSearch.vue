<template>
  <div class="top-search">
    <div class="main-container">
      <ul class="search-kind">
        <li v-for="(item, idx) in kinds" @click="activeIdx=idx" :key="idx" :class="{'kind-active-item': idx === activeIdx}" class="kind-item">
          <el-tooltip :content="item.text" placement="top">
            <img :src="item.icon" class="ico-img" />
          </el-tooltip>
        </li>
      </ul>
      <div class="search-container">
        <input v-model.trim="searVal" type="text" class="input-container" placeholder="请输入搜索内容" />
        <div @click="searchEvent" class="sp-btn">
          <img :src="activeIcon" class="active-icon" />
          <span>搜索</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, computed } from 'vue'
export default {
  setup() {
    const kinds = reactive([
      {
        text: '百度',
        src: 'https://www.baidu.com/s?tn=68018901_20_oem_dg&ie=utf-8&wd=',
        icon: require('@/assets/icon/searchbd.png')
      },
      {
        text: '360',
        src: 'https://www.so.com/s?q=',
        icon: require('@/assets/icon/search360.png')
      },
      {
        text: 'Github',
        src: 'https://github.com/search?q=',
        icon: require('@/assets/icon/searchgithub.png')
      },
      {
        text: '简书',
        src: 'https://www.jianshu.com/search?q=',
        icon: require('@/assets/icon/jiansu.png')
      },
      {
        text: '掘金',
        src: 'https://juejin.cn/search?query=',
        icon: require('@/assets/icon/juejing.png')
      },
      {
        text: '知乎',
        src: 'https://www.zhihu.com/search?type=content&q=',
        icon: require('@/assets/icon/searchzhihu.png')
      },
      {
        text: 'CSDN',
        src: 'https://so.csdn.net/so/search?spm=1000.2115.3001.4498&q=',
        icon: require('@/assets/icon/csdn.png')
      }
    ])
    let searVal = ref('')
    let activeIdx = ref(0)
    const activeIcon = computed(() => kinds[activeIdx.value].icon)
    function searchEvent() {
      if (searVal.value) {
        window.open(kinds[activeIdx.value].src + searVal.value)
        searVal.value = ''
      }
    }
    return {
      kinds,
      searVal,
      activeIdx,
      activeIcon,
      searchEvent
    }
  }
}
</script>
<style lang="scss" scoped>
.top-search {
  margin: 20px 0;
  .main-container {
    @include flexColumnItemCen;
    .search-kind {
      display: flex;
      .kind-item {
        cursor: pointer;
        margin: 0 5px;
        padding: 5px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        &:hover {
          background: var(--theme-color);
        }
        .ico-img {
          display: block;
          width: 16px;
        }
      }
      .kind-active-item {
        background: var(--theme-color);
      }
    }
    .search-container {
      display: flex;
      height: 38px;
      .input-container {
        border: 1px solid var(--theme-color);
        width: 350px;
        text-indent: 1em;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        color: var(--theme-color);
        &::placeholder {
          font-size: 12px;
          color: var(--theme-color);
        }
      }
      .sp-btn {
        @include flexAlignGap(5px);
        cursor: pointer;
        color: #fff;
        padding: 0 30px;
        letter-spacing: 5px;
        user-select: none;
        background: var(--theme-color);
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        .active-icon {
          width: 16px;
        }
      }
    }
  }
}
</style>