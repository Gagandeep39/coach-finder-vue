import axios from 'axios';

export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      ...payload,
      id: context.rootGetters.userId,
    };
    const res = await axios.put(
      `${process.env.VUE_APP_URL}/${userId}.json`,
      coachData
    );
    if (!res.status === 200) {
      // error
    } else context.commit('registerCoach', { ...coachData, id: userId });
  },
};
