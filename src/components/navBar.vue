<template>
  <div class="nav-bar">
    <div class="nav-bar-main bx-width">
      <div @click="$router.replace('/')" class="logo">
        <img src="@/assets/images/logo.png" class="logo-img" />
        <h1 class="logo-name">PEGASUS</h1>
      </div>
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/timeAxis">时间轴</router-link>
        <router-link to="/collection">收藏</router-link>
        <router-link to="/message">留言</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <div class="other-con">
        <el-color-picker v-model="themeColor" @change='changeEvent' size='small' />
        <el-switch v-model="darkM" @change='toggleDark' :active-icon="Sunny" :inactive-icon="Moon" inline-prompt />
        <span>{{month}}月{{date}}日 {{hour}}:{{minute}}:{{second}} 星期{{week}}</span>
        <el-popover>
          <template #reference>
            <span class="version-sp">2.X</span>
          </template>
          <a href="https://pgs98.com/pgs1.0/" target="blank" class="pop-con">
            <span>1.X </span>
            <img src="@/assets/images/share.png" class="share-icon" />
          </a>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import 'element-plus/theme-chalk/dark/css-vars.css'
import { useDark, useToggle } from '@vueuse/core'
import { reactive, toRefs, ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
export default {
  setup() {
    const str = localStorage.getItem('themeColor')
    let visible = ref(false)
    const themeColor = ref(str || '#409eff')
    const darkM = ref(false)
    const isDark = useDark()
    darkM.value = isDark.value
    const toggleDark = useToggle(isDark)
    const dateObj = reactive({
      month: '',
      date: '',
      hour: '',
      minute: '',
      second: '',
      week: ''
    })
    forDate()
    str && changeEvent(str)
    setInterval(forDate, 1000)
    function forDate() {
      const d = new Date()
      const month = d.getMonth() + 1
      const date = d.getDate()
      const hour = d.getHours()
      const minute = d.getMinutes()
      const second = d.getSeconds()
      dateObj.month = month < 10 ? `0${month}` : month
      dateObj.date = date < 10 ? `0${date}` : date
      dateObj.hour = hour < 10 ? `0${hour}` : hour
      dateObj.minute = minute < 10 ? `0${minute}` : minute
      dateObj.second = second < 10 ? `0${second}` : second
      dateObj.week = forWeek(d.getDay())
    }
    function forWeek(day) {
      switch (day) {
        case 1: return '一'
        case 2: return '二'
        case 3: return '三'
        case 4: return '四'
        case 5: return '五'
        case 6: return '六'
        case 7: return '日'
      }
    }
    function changeEvent(e) {
      if (!e) {
        e = '#409eff'
        themeColor.value = '#409eff'
      }
      document.body.style.setProperty('--theme-color', e)
      document.body.style.setProperty('--el-color-primary', e)
      localStorage.setItem('themeColor', e)
    }
    return {
      visible,
      Sunny,
      Moon,
      themeColor,
      darkM,
      ...toRefs(dateObj),
      toggleDark,
      changeEvent
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background: var(--white-black);
  border-bottom: 2px solid #ccc;
  &-main {
    display: flex;
    height: 45px;
    line-height: 45px;
    .logo {
      @include flexItem;
      cursor: pointer;
      width: 180px;
      user-select: none;
      &-img {
        height: 30px;
        margin-right: 6px;
      }
      &-name {
        font-size: 20px;
        letter-spacing: 3px;
        color: #666;
      }
    }
    .nav {
      flex: 1;
      display: flex;
      gap: 50px;
      margin: 0 25px;
      letter-spacing: 3px;
      .router-link-active {
        color: var(--theme-color);
      }
    }
    .other-con {
      @include flexAlignGap(10px);
      color: #666;
      font-size: 12px;
    }
    &:deep(.el-color-picker__trigger) {
      border: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.version-sp {
  cursor: pointer;
  color: var(--theme-color);
}
.pop-con {
  @include flexCen;
  cursor: pointer;
  color: var(--theme-color);
  .share-icon {
    width: 26px;
  }
}
</style>
