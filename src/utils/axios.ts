import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import useSettingStore from '@/page/setting/store';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL
});
const WHITE_LIST = new Set(['/setting']);
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('axios interceptors request', config);
  if (config.url && !WHITE_LIST.has(config.url)) {
    const settingStore = useSettingStore();
    config.params =
      settingStore.language === 'en_US'
        ? {
            language: 'en_US'
          }
        : {};
  }
  return config;
});
instance.interceptors.response.use((response: AxiosResponse) => {
  console.log('axios interceptors response', response);
  return response;
});
export default instance;
