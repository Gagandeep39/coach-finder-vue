import axios from 'axios';

let timer;
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
    localStorage.removeItem('tokenExpiration');
    context.commit('setUser', {
      token: null,
      userId: null,
    });

    clearTimeout(timer);
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
    const expiresIn = +res.data.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;
    localStorage.setItem('token', res.data.idToken);
    localStorage.setItem('userId', res.data.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    // Commit to store
    context.commit('setUser', {
      token: res.data.idToken,
      userId: res.data.localId,
    });

    // Logout on expiration
    timer = setTimeout(() => {
      context.dispatch('logout');
    }, expiresIn);
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const tokenExpiration = localStorage.getItem('tokenExpiration');
    const expiresIn = +tokenExpiration - new Date().getTime();

    // If token expired then dont login
    if (expiresIn < 0) return;
    timer = setTimeout(() => {
      context.dispatch('logout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
      });
    }
  },
};
