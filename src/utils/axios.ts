import Axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store/index.ts';

const axios = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000 // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (config: any) => {
    if (store.getters.token) {
      // eslint-disable-next-line no-param-reassign
      config.headers['X-Token'] = store.getters.token;
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      console.log('接口信息报错', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    ElMessage(`接口信息报错${error}`);
    return Promise.reject(error);
  }
);

export default axios;
