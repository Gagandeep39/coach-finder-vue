export default {
  // Returns coach list
  coaches(state) {
    return state.coaches;
  },
  // Returns true if coaches exist
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
