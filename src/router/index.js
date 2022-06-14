import { createRouter, createWebHashHistory } from 'vue-router';

const Aboutus = () => import('../views/Aboutus.vue');
const Home = () => import('../views/Home.vue');
const Newsroom = () => import('../views/Aboutus-Newsroom.vue');
const Careers = () => import('../views/Careers.vue');
const Contactus = () => import('../views/Contactus.vue');
const Strategy = () => import('../views/WhatWeDo-Strategy.vue');
const Analytics = () => import('../views/WhatWeDo-Analytics.vue');
const Operation = () => import('../views/WhatWeDo-Operation.vue');
const ContentsAndDesign = () => import('../views/WhatWeDo-ContentsAndDesign.vue');
const TechnologySolution = () => import('../views/WhatWeDo-TechnologySolution.vue');
const fileNotFound = () => import('../views/fileNotFound.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/whatwedo',
    name: 'whatwedo',
    children: [
      { path: 'Strategy', component: Strategy },
      { path: 'Analytics', component: Analytics },
      { path: 'Operation', component: Operation },
      { path: 'ContentsAndDesign', component: ContentsAndDesign },
      { path: 'TechnologySolution', component: TechnologySolution },
    ],
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    children: [
      { path: 'aboutus', component: Aboutus },
      { path: 'newsroom', component: Newsroom },
    ],
  },
  { path: '/careers', name: 'careers', component: Careers },
  { path: '/contactus', name: 'contactus', component: Contactus },
  { path: '/:pathMatch(.*)*', com1ponent: fileNotFound },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
