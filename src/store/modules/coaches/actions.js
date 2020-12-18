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
  async loadCoaches(context) {
    const coaches = [];
    const res = await axios
      .get(`${process.env.VUE_APP_URL}.jsons`)
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
