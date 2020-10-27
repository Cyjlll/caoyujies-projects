import Vue from 'vue'
import VueRouter from 'vue-router'
// import jianli from '@/views'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login' //重定向即第一次进去的页面
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path:'/map',
    name:'map',
    component:() => import('../views/layout/index/map.vue'),
  },
  {
    path:'/jianli',
    name:'jianli',
    redirect:'/indexx',
    component:()=>import('../views/layout/index/jianli.vue'),
    children:[
      {
          path:'/indexx',
          name:'indexx',
          component:()=>import('../views/layout/index/indexx.vue')
      },
      {
        path:'/first',
        name:'first',
        component:()=>import('../views/layout/index/first.vue')
      },
      {
        path:'/second',
        name:'second',
        component:()=>import('../views/layout/index/second.vue')
      },
      {
        path:'/third',
        name:'third',
        component:()=>import('../views/layout/index/third.vue')
      },
      {
        path:'/fourth',
        name:'fourth',
        component:()=>import('../views/layout/index/fourth.vue')
      },
      {
        path:'/fifth',
        name:'fifth',
        component:()=>import('../views/layout/index/fifth.vue')
      },
      {
        path:'/sixth',
        name:'sixth',
        component:()=>import('../views/layout/index/sixth.vue')
      },
    ]
  },
  

  {
    path: '/home',
    name: 'home',
    redirect:'/index',
    component: () => import('../views/layout/home.vue'),
    children:[//子路由
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/layout/index/index.vue')
      },
      {
        path: '/state',
        name: 'state',
        component: () => import('../views/layout/state/state.vue')
      },
      {
        path: '/wms',
        name: 'wms',
        component: () => import('../views/layout/wms/wms.vue')
      },
      
    ]
  },
]
const router = new VueRouter({
  routes
})
export default router
