import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      backgroundColor: 'white'
    };
  },
  actions: {
    async change(color: string) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            this.backgroundColor = color;
            resolve('success');
          } catch (e) {
            reject('failure');
          }
        }, 1000);
      });
    }
  }
});

export default useHomeStore;
