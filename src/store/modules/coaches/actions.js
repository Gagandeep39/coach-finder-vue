export default {
  registerCoach(context, payload) {
    const coachData = {
      ...payload,
      id: context.rootGetters.userId,
    };
    context.commit('registerCoach', coachData);
  },
};
