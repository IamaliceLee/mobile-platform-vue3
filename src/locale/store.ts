import { defineStore } from 'pinia';

export interface State {
  [key: string]: unknown;
  language: string;
}
const useLocaleStore = defineStore('locale', {
  state: () => {
    const lang = localStorage.getItem('language');
    return {
      language: lang ?? ''
    } as State;
  },
  getters: {},
  actions: {
    change(data: State) {
      if (this.language !== data.language) {
        for (const key in data) {
          this[key] = data[key];
        }
        localStorage.setItem('language', data.language);
        window.location.reload();
      } else if (!localStorage.getItem('language')) {
        localStorage.setItem('language', data.language);
      }
    }
  }
});
export default useLocaleStore;
