<!--
 * @Author: yangxiu 450705396@qq.com
 * @Date: 2022-06-16 10:14:45
 * @LastEditors: yangxiu 450705396@qq.com
 * @LastEditTime: 2022-06-23 11:11:59
 * @FilePath: \mobile-platform-vue3\src\components\Page\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
  import HelloWorld from '@/components/hello-world/index.vue';
  import logo from '@/assets/logo.png';
  import { computed, ref, inject } from 'vue';
  // import axios from '@/utils/axios';
  import '@/mock/home';
  import useStore from './store';
  import { AxiosInstance } from 'axios';

  const axios = inject('axios') as AxiosInstance;
  const store = useStore();
  console.log('Page Index.vue start', store);
  const backgroundColor = computed(() => store.backgroundColor);
  const colors = ['red', 'green', 'blue', 'white'];
  let index = 0;
  const handleLogoClick = () => {
    console.log('Page Index.vue handleLogoClick', index);
    store.change(colors[index]).catch((err: Error) => {
      console.error('Page Index.vue store dispatch page/change failure', err);
    });
    index >= colors.length - 1 ? (index = 0) : index++;
  };
  console.log(666);

  const data = ref([]);
  axios
    .get('/getJson')
    .then((res) => {
      console.log('Page Index.vue /getJson success', res);
      data.value = res.data;
    })
    .catch((err) => {
      console.error('Page Index.vue /getJson failure', err);
    });
</script>

<template>
  <div :style="{ backgroundColor: backgroundColor }">
    <img alt="Vue logo" :src="logo" @click="handleLogoClick" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <span v-for="(item, i) in data" :key="i" class="span-wrap">{{ item }}</span>
  </div>
</template>

<style lang="less" scoped>
  .span-wrap {
    color: red;
  }
</style>
