import axios from 'axios';

export default {
  login(context, payload) {
    console.log(payload);
  },

  async signup(context, payload) {
    const res = await axios
      .post(
        `${process.env.VUE_APP_FIREBASE_SIGN_UP_URL}${process.env.VUE_APP_FIREBASE_API_KEY}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true, // Returns ID and refresh token
        }
      )
      .catch((error) => {
        throw new Error(error.message || 'Failed to fetch');
      });
    console.log(res);
    context.commit('setUser', {
      token: res.idToken,
      userId: res.localId,
      tokenExpiration: res.expiresIn,
    });
  },
};
