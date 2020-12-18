import axios from 'axios';

export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      ...payload,
      id: context.rootGetters.userId,
    };
    await axios
      .put(`${process.env.VUE_APP_URL}/${userId}.json`, coachData)
      .catch((error) => {
        throw new Error(error.message || 'Failed to fetch');
      });
    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    const coaches = [];
    const res = await axios
      .get(`${process.env.VUE_APP_URL}.json`)
      .catch((error) => {
        throw new Error(error.message || 'Failed to fetch');
      });

    const resData = res.data;
    for (const key in resData) {
      const coach = {
        firstName: resData[key].firstName,
        lastName: resData[key].lastName,
        description: resData[key].description,
        hourlyRate: resData[key].hourlyRate,
        areas: resData[key].areas,
        id: key,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
