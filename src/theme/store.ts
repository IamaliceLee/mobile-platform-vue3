import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useThemeStore = defineStore('theme', {
  state: () => {
    const theme = localStorage.getItem('theme');
    return {
      // all these properties will have their type inferred automatically
      name: theme ?? '',
      vars: {}
    };
  },
  actions: {
    change(val: string) {
      // 控制body标签上的主题类名
      if (val) {
        document.querySelector('body')?.classList.remove(`theme_${val}`);
      }
      document.querySelector('body')?.classList.add(`theme_${val}`);
      localStorage.setItem('theme', val);
      import(`./theme-${val}.json`).then((data) => {
        this.name = val;
        this.vars = Object.assign({}, data.vant, data.custom);
      });
    }
  }
});
