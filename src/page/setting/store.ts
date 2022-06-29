import { defineStore } from 'pinia';
import axios from '@/utils/axios';
import '@/mock/setting';
import { AxiosResponse } from 'axios';
import { useThemeStore } from '@/theme/store';
import useLocaleStore from '@/locale/store';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export interface State {
  [key: string]: unknown;
  language: string;
  theme: string;
}

const useSettingStore = defineStore('setting', {
  state: () => {
    const localeStore = useLocaleStore();
    const themeStore = useThemeStore();
    return {
      // all these properties will have their type inferred automatically
      language: localeStore.language ?? '', //国际化语言
      theme: themeStore.name ?? '' //主题
    } as State;
  },
  actions: {
    async init() {
      try {
        if (!this.language || !this.theme) {
          const result: AxiosResponse = await axios.get('/setting');
          console.log('get /setting success', result);
          await this.change(result.data);
          return result.data;
        }
        return this.$state;
      } catch (error) {
        console.error('get /setting failure', error);
        return error;
      }
    },
    async change(data: State, needUpdate = false) {
      try {
        //修改时，更新本地和服务器数据
        if (needUpdate) {
          const result: AxiosResponse = await axios.post('/setting', data);
          console.log('post /setting success', result);
        }
        for (const key in data) {
          switch (key) {
            case 'language':
              {
                const localeStore = useLocaleStore();
                localeStore.change({
                  language: data.language
                });
              }
              break;
            case 'theme':
              {
                const themeStore = useThemeStore(); // 获取到store的实例
                themeStore.change(data.theme);
              }
              break;
          }
          this[key] = data[key];
        }
        // const result: AxiosResponse = await axios.post('/setting');
        // console.log('post /setting success', result);
      } catch (error) {
        console.error('post /setting failure', error);
        return error;
      }
    }
  }
});

export default useSettingStore;
