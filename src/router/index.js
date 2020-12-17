import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: null },
  {
    path: '/coaches/:id',
    component: null,
    children: [{ path: 'contact', component: null }],
  },
  { path: '/register', component: null },
  { path: '/requests', component: null },
  // (.*) - Any value will direct to this route
  // :notFound - Used to fetch the entered path
  { path: '/:notFound(.*)', component: null },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
