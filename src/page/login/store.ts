import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
interface State {
  [key: string]: unknown;
  username?: string;
  password?: string;
  rememberPwd?: boolean;
}

const useLoginStore = defineStore('login', {
  state: () => {
    let localLogin: State = {};
    if (localStorage.getItem('login')) {
      localLogin = JSON.parse(localStorage.getItem('login') as string);
    }
    return {
      // all these properties will have their type inferred automatically
      username: localLogin.username ?? '',
      password: localLogin.password ?? '',
      rememberPwd: localLogin.rememberPwd ?? false
    } as State;
  },
  actions: {
    async change(data: State) {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem('login', JSON.stringify(data));
          for (const key in data) {
            this[key] = data[key];
          }
          resolve('success');
        } catch (e) {
          reject('failure');
        }
      });
    },
    async removeRemember() {
      return new Promise((resolve, reject) => {
        try {
          localStorage.removeItem('login');
          resolve('success');
        } catch (e) {
          reject('failure');
        }
      });
    }
  }
});

export default useLoginStore;
