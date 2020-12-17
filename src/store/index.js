import { createStore } from 'vuex';
import requestsModule from './modules/requests';
import coachModule from './modules/coaches';

export default createStore({
  state() {
    return {};
  },
  mutations: {},
  actions: {},
  modules: {
    requests: requestsModule,
    coaches: coachModule,
  },
});
