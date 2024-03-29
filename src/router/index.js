import Vue from 'vue'
import Router from 'vue-router'
// import Upload from '@/components/upload/Upload'

Vue.use(Router)

// // 解决连续点击多次路由的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('../views/Home')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('../views/Login')
    },
    {
      path: '/article',
      name: 'Article',
      component: ()=>import('../views/Article')
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: ()=>import('../views/UserInfo')

    },
    {
      path: '/WriteArticle',
      name: 'WriteArticle',
      component: ()=>import('../views/WriteArticle')
    },
    {
      path: '/*',
      redirect: '/'
    }
  ],
  scrollBehavior: (to, from, savePosition) => {
    // 如果savePosition存在，则直接滚动到相应位置
    if (savePosition) {
      return savePosition
    }
    // 否则直接回到顶部
    return {x: 0, y: 0}
  },
})
