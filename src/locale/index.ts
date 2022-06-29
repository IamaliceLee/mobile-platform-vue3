/*
 * @Author: yangxiu 450705396@qq.com
 * @Date: 2022-06-23 10:30:40
 * @LastEditors: yangxiu 450705396@qq.com
 * @LastEditTime: 2022-06-23 10:35:15
 * @FilePath: \mobile-platform-vue3\src\locale\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from 'vue-i18n';
import zh_CN from './lang/zh-CN';
import en_US from './lang/en-US';

const messages = {
  zh_CN,
  en_US
};

const i18n = createI18n({
  // locale: localStorage.getItem('lang') || 'zh_CN',
  // fall: 'zh_CN',
  messages
});

export default i18n;
