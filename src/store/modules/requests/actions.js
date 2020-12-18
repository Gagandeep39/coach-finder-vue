import axios from 'axios';

export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };

    const res = await axios
      .post(
        `${process.env.VUE_APP_URL}/requests/${payload.coachId}.json`,
        newRequest
      )
      .catch((error) => {
        throw new Error(error.message || 'Failed to fetch');
      });
    newRequest.id = res.data.name;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const res = await axios
      .get(`${process.env.VUE_APP_URL}/requests/${coachId}.json?auth=${token}`)
      .catch((error) => {
        throw new Error(error.message || 'Failed to fetch');
      });

    const requests = [];
    const resData = res.data;
    for (const key in resData) {
      const request = {
        id: key,
        coachId,
        email: resData[key].email,
        message: resData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
