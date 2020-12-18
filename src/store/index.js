import { createStore } from 'vuex';
import requestsModule from './modules/requests';
import coachModule from './modules/coaches';
import authModule from './modules/auth';

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    requests: requestsModule,
    coaches: coachModule,
    auth: authModule,
  },
});
