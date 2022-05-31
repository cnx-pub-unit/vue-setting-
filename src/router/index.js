import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Test1 = () => import('../components/test1.vue');
const Test2 = () => import('../components/test1.vue');
const fileNotFound = () => import('../views/fileNotFound.vue');

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/about',
    name: 'about',
    component: About,
    children: [
      { path: 'test1', component: Test1 },
      { path: 'test2', component: Test2 }],
  },
  { path: '/:pathMatch(.*)*', component: fileNotFound },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
