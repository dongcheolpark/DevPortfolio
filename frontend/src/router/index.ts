import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import vue from 'vue'
import Home from '../views/Home.vue'

const basicTitle = '박동철의 포트폴리오';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/admin',
    name: 'Admin',
    component: () => import('../views/Admin/Admin.vue')
  },
  {
    path:'/admin/Login',
    name: 'Admin_Login',
    component: () => import('../views/Admin/Login.vue')
  },
  {
    path:'/admin/Editor',
    name: 'Admin_Editor',
    component: () => import('../views/Admin/Editor.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  const title = to.meta.title === undefined ? basicTitle : to.meta.title as string;
  document.title = title;
});

export default router
