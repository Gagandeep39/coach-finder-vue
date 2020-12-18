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
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
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

    // Persist to local storage
    localStorage.setItem('token', res.data.idToken);
    localStorage.setItem('userId', res.data.localId);
    context.commit('setUser', {
      token: res.data.idToken,
      userId: res.data.localId,
      tokenExpiration: res.data.expiresIn,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null,
      });
    }
  },
};
