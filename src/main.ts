import { createApp } from 'vue';

// import ElementPlus from 'element-plus';
// import locale from 'element-plus/lib/locale/lang/zh-cn'; // element-plus
import App from './App.vue';
import router from './router/index.ts';
import store from './store/index.ts';
// import 'element-plus/dist/index.css';

console.log(process.env.NODE_ENV);
const app = createApp(App);
app.use(router);
app.use(store);
// app.use(ElementPlus, { locale });

window.onerror = function (e) {
  console.log([`https://stackoverflow.com/search?q=[js]+${e}`]);
};
app.mount('#app');
