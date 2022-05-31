import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import axios from 'axios';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import '@/assets/scss/reset.scss';
import '@/assets/scss/layout.scss';
import '@/assets/scss/common.scss';

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
console.log(app);
app.config.globalProperties.$axios = axios;
app
.use(i18n)
.use(store)
.use(router)
.mount('#app');

