import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewsPage from '../views/NewsPage'
import NotFound from '../views/NotFound/NotFound.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      reload: true,
    },
  },
  {
    path: '/news/:id',
    name: 'NewsPage',
    component: NewsPage,
    meta: {
      reload: true,
    },
  },
  {
    path: '/404', component: NotFound,
  },
  {
    path: '/:catchAll(.*)', redirect: '/404', meta: {
      reload: true,
    },
  },
  // { path: '/news/:catchAll(.*)', redirect:'/404' }


]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
