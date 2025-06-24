export const state = () => ({
  isLogin: false,
});

export const mutations = {
  updateLogin(state, val) {
    state.isLogin = val;
  },
  updateLogin(state, val) {
    state.isLogin = val;
  },
};

export const actions = {
  localLoginVal({ commit, state }) {
    const login = localStorage.getItem("isLogin");
    if (login !== null) {
      commit("updateLogin", JSON.parse(login));
    } else {
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    }
  },
  setLocalLoginVal({ commit }, val) {
    commit("updateLogin", val);
    localStorage.setItem("isLogin", JSON.stringify(val));
  },
};

export const getters = {
  getLoginVal: (state) => {
    return state.isLogin;
  },
};
