import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/page/login/index.vue')
  },
  {
    path: '/index',
    component: () => import('@/page/home/index.vue')
  },
  {
    path: '/help',
    component: () => import('@/page/help/index.vue')
  }
];
export default routes;
