import { createRouter, createWebHistory } from 'vue-router';
import CoachList from '../views/coaches/CoachList';
import CoachDetails from '../views/coaches/CoachDetails';
import CoachRegistration from '../views/coaches/CoachRegistration';
import ContactCoach from '../views/requests/ContactCoach';
import RequestRecieved from '../views/requests/RequestRecieved';
import UserAuth from '../views/auth/UserAuth';
import NotFound from '../views/NotFound';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: CoachList },
  {
    path: '/coaches/:id',
    component: CoachDetails,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  { path: '/register', component: CoachRegistration },
  { path: '/requests', component: RequestRecieved },
  { path: '/auth', component: UserAuth },
  // (.*) - Any value will direct to this route
  // :notFound - Used to fetch the entered path
  { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
