<template>
  <div class="nav-bar">
    <div class="nav-bar-main bx-width">
      <div @click="$router.replace('/')" class="logo">
        <img src="@/assets/images/logo.png" class="logo-img" />
        <h1 class="logo-name">PEGASUS</h1>
      </div>
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <div class="other-con">
        {{month}}月{{date}}日 {{hour}}:{{minute}}:{{second}} 星期{{week}}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const dateObj = reactive({
      month: '',
      date: '',
      hour: '',
      minute: '',
      second: '',
      week: ''
    })
    forDate()
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
    return {
      ...toRefs(dateObj)
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-bar {
  border-bottom: 2px solid #ccc;
  background: #fff;
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
        color: $theme-color;
      }
    }
    .other-con {
      width: 180px;
      color: #666;
      font-size: 12px;
    }
  }
}
</style>
