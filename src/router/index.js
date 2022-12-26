import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/timeAxis',
    component: () => import('@/pages/timeAxis'),
    meta: {
      title: '时间轴'
    }
  },
  {
    path: '/collection',
    component: () => import('@/pages/collection'),
    meta: {
      title: '收藏'
    }
  },
  {
    path: '/about',
    component: () => import('@/pages/about'),
    meta: {
      title: '关于'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach(to => document.title = to.meta.title + '- pgs-nav')

export default router
