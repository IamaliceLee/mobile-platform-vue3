import Mock from 'mockjs';

let settingJson = {
  language: 'zh_CN',
  theme: 'green'
};
Mock.mock(import.meta.env.VITE_AXIOS_BASE_URL + '/setting', 'get', settingJson);
Mock.mock(import.meta.env.VITE_AXIOS_BASE_URL + '/setting-options', 'get', {
  language: {
    label: '语言',
    options: [
      {
        label: '中文',
        value: 'zh_CN'
      },
      {
        label: '英文',
        value: 'en_US'
      }
    ]
  },
  theme: {
    label: '主题',
    options: [
      {
        label: '默认主题',
        value: 'default'
      },
      {
        label: '绿色',
        value: 'green'
      },
      {
        label: '红色',
        value: 'red'
      },
      {
        label: '橙色',
        value: 'orange'
      }
    ]
  }
});
Mock.mock(
  import.meta.env.VITE_AXIOS_BASE_URL + '/setting-options?language=en_US',
  'get',
  {
    language: {
      label: 'language',
      options: [
        {
          label: 'Chinese',
          value: 'zh_CN'
        },
        {
          label: 'English',
          value: 'en_US'
        }
      ]
    },
    theme: {
      label: 'theme',
      options: [
        {
          label: 'default',
          value: 'default'
        },
        {
          label: 'green',
          value: 'green'
        },
        {
          label: 'red',
          value: 'red'
        },
        {
          label: 'oringe',
          value: 'oringe'
        }
      ]
    }
  }
);
interface Opt {
  url: string;
  type: string;
  body: string;
}
Mock.mock(
  import.meta.env.VITE_AXIOS_BASE_URL + '/setting',
  'post',
  (options: Opt) => {
    settingJson = JSON.parse(options.body);
    return settingJson;
  }
);
Mock.mock(
  import.meta.env.VITE_AXIOS_BASE_URL + '/setting?language=en_US',
  'post',
  {
    language: 'aaa'
  }
);
