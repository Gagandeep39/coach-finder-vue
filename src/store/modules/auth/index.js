import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// Global - Because no same space
export default {
  state() {
    return {
      token: null,
      userId: null,
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};
