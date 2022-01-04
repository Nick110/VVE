import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import App from './App.vue';
import router from './router/index';
import axios from './utils/axios';

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});

app.config.globalProperties.$axios = axios;

app.use(router);
// 支持 Vue Devtools
// const win = window;
// if (process.env.NODE_ENV === 'development') {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
//     // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
//     // eslint-disable-next-line no-underscore-dangle
//     win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
//   }
// }
app.mount('#app');
