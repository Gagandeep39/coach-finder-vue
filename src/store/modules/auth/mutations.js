export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.setAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
