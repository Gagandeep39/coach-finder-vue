import axios from 'axios';

export default {
  async login(context, payload) {
    // return is requird as we want to refer to async await of auth method
    return context.dispatch('auth', { ...payload, mode: 'login' });
  },

  async signup(context, payload) {
    return context.dispatch('auth', { ...payload, mode: 'signup' });
  },

  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    let url = `${process.env.VUE_APP_FIREBASE_SIGN_IN_URL}${process.env.VUE_APP_FIREBASE_API_KEY}`;
    if (mode === 'signup')
      url = `${process.env.VUE_APP_FIREBASE_SIGN_UP_URL}${process.env.VUE_APP_FIREBASE_API_KEY}`;

    const res = await axios
      .post(url, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true, // Returns ID and refresh token
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error.message || 'Failed to Authenticate');
      });
    context.commit('setUser', {
      token: res.data.idToken,
      userId: res.data.localId,
      tokenExpiration: res.data.expiresIn,
    });
  },
};
