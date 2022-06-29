/*
 * @Author: yangxiu 450705396@qq.com
 * @Date: 2022-06-16 10:14:45
 * @LastEditors: yangxiu 450705396@qq.com
 * @LastEditTime: 2022-06-23 10:50:18
 * @FilePath: \mobile-platform-vue3\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ComponentPublicInstance, App, createApp } from 'vue';
import { createPinia } from 'pinia';
import AppInstance from '@/App.vue';
import router from '@/router/index';
import i18n from './locale';
import VueAxios from 'vue-axios';
import axios from '@/utils/axios';
import '@/style.less';

if (import.meta.env.MODE === 'test') {
  import('vconsole').then((vConsole) => {
    new vConsole.default();
  });
}
const app: App<Element> = createApp(AppInstance);
const pinia = createPinia();
//vue组件错误捕获
app.config.errorHandler = (
  err: unknown,
  instance: ComponentPublicInstance | null,
  info: string
) => {
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  console.error('main.ts app config errorHandler', err, instance, info);
};
app.use(router).use(VueAxios, axios).use(pinia).use(i18n);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');
console.log('main start', import.meta.env);
export default app;
