import { createApp } from 'vue';
import axios from 'axios';
import i18n from './i18n';
import router from './router';
import store from './store';
import App from './App.vue';

import '@/assets/scss/reset.scss';
import '@/assets/scss/layout.scss';
import '@/assets/scss/common.scss';

const app = createApp(App);
console.log(app);
app.config.globalProperties.$axios = axios;
app
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app');

