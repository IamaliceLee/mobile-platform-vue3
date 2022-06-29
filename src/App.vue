<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  // import HelloWorld from '@/components/HelloWorld.vue'
  import { computed } from 'vue';
  import { RouterView } from 'vue-router';

  import { useThemeStore } from '@/theme/store';
  import { useRootStore } from '@/store';
  import useSettingStore, { State as SettingState } from '@/page/setting/store';
  import { Locale } from 'vant';
  import { useI18n } from 'vue-i18n';
  import zh_CN from 'vant/es/locale/lang/zh-CN';
  import en_US from 'vant/es/locale/lang/en-US';

  interface LangType {
    [key: string]: unknown;
  }
  const Lang: LangType = { zh_CN, en_US };

  const themeStore = useThemeStore(); // 获取到store的实例
  const store = useRootStore(); // 获取到store的实例
  const settingStore = useSettingStore(); // 获取到store的实例

  const theme = localStorage.getItem('theme') || 'default';
  themeStore.change(theme);
  //应用路由之前初始化setting
  const loading = computed(() => store.loading);
  const { locale } = useI18n();
  settingStore
    .init()
    .then((res: unknown) => {
      //res的类型为SettingState
      locale.value = (<SettingState>res).language as string; //本地国际化
      Locale.use(
        (<SettingState>res).language as string,
        Lang[(<SettingState>res).language as string] as Record<string, unknown>
      ); //vant国际化
    })
    .finally(() =>
      store.change({
        loading: false
      })
    );
</script>

<template>
  <div v-if="loading" class="loading-container">
    <van-loading type="spinner" color="#1989fa" />
  </div>
  <van-config-provider v-else :theme-vars="themeStore.vars">
    <RouterView />
  </van-config-provider>
</template>

<style lang="less" scoped>
  .loading-container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
</style>
