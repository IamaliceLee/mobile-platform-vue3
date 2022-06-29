import Mock from 'mockjs';

Mock.mock(
  import.meta.env.VITE_AXIOS_BASE_URL + '/getJson',
  'get',
  [1, 2, 3, 4, 5]
);
Mock.mock(
  import.meta.env.VITE_AXIOS_BASE_URL + '/getJson?language=en_US',
  'get',
  [1, 2, 3, 4, 5]
);
