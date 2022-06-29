import {
  Router,
  createRouter,
  createWebHistory,
  RouterOptions,
  RouteLocationNormalized
} from 'vue-router';
import routes from './routes';

const router: Router = createRouter({
  history: createWebHistory(),
  routes
} as RouterOptions);
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    console.log('router index.ts beforeEach', to, from);
  }
);
router.afterEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    console.log('router index.ts afterEach', to, from);
  }
);
export default router;
