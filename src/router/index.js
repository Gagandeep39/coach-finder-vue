import { createRouter, createWebHistory } from 'vue-router';
import CoachList from '../views/coaches/CoachList';
import NotFound from '../views/NotFound';
import store from '../store';
import { defineAsyncComponent } from 'vue';

// Async Components
// Lazy loading
const ContactCoach = defineAsyncComponent(() =>
  import('../views/requests/ContactCoach')
);
const RequestRecieved = defineAsyncComponent(() =>
  import('../views/requests/RequestRecieved')
);
const CoachDetails = defineAsyncComponent(() =>
  import('../views/coaches/CoachDetails')
);
const CoachRegistration = defineAsyncComponent(() =>
  import('../views/coaches/CoachRegistration')
);
const UserAuth = defineAsyncComponent(() => import('../views/auth/UserAuth'));

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachList },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  {
    path: '/register',
    component: CoachRegistration,
    meta: { requiresAuth: true },
  },
  {
    path: '/requests',
    component: RequestRecieved,
    meta: { requiresAuth: true },
  },
  { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
  // (.*) - Any value will direct to this route
  // :notFound - Used to fetch the entered path
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // User acess protected route and is not logged in
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) next('/auth');
  // User access login page, but is already logged in
  else if (to.meta.requiresUnauth && store.getters.isAuthenticated)
    next('/coaches');
  // All routing
  else next();
});

export default router;
