import axios from 'axios';

export default {
  async login(context, payload) {
    console.log(payload);
    const res = await axios
      .post(
        `${process.env.VUE_APP_FIREBASE_SIGN_IN_URL}${process.env.VUE_APP_FIREBASE_API_KEY}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true, // Returns ID and refresh token
        }
      )
      .catch((error) => {
        console.log(error);
        throw new Error(error.message || 'Failed to Authenticate');
      });
    console.log(res);
    context.commit('setUser', {
      token: res.idToken,
      userId: res.localId,
      tokenExpiration: res.expiresIn,
    });
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
        console.log(error);
        throw new Error(error.message || 'Failed to Authenticate');
      });
    console.log(res);
    context.commit('setUser', {
      token: res.idToken,
      userId: res.localId,
      tokenExpiration: res.expiresIn,
    });
  },
};
