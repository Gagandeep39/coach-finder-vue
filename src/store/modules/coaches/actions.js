export default {
  registerCoach(context, payload) {
    const coachData = {
      ...payload,
      id: new Date().toISOString(),
    };
    context.commit('registerCoach', coachData);
  },
};
