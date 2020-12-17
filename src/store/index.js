import { createStore } from 'vuex';
import requestsModule from './modules/requests';
import coachModule from './modules/coaches';

export default createStore({
  state() {
    return {
      userId: 'dummy',
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  modules: {
    requests: requestsModule,
    coaches: coachModule,
  },
});
