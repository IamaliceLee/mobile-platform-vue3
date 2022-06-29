import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export interface State {
  [key: string]: unknown;
  name?: string;
  loading: boolean;
}

export const useRootStore = defineStore('root', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      loading: true
    } as State;
  },
  actions: {
    async change(data: State) {
      return new Promise((resolve, reject) => {
        try {
          for (const key in data) {
            this[key] = data[key];
          }
          resolve('success');
        } catch (e) {
          reject('failure');
        }
      });
    }
  }
});
