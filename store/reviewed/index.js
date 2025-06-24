export const state = () => ({
  reviewed: [],
});

export const mutations = {
  setReviewed(state, val) {
    state.reviewed = state.reviewed.filter((item) => item.id !== val.id);
    state.reviewed = [val, ...state.reviewed];
    localStorage.setItem("reviewed", JSON.stringify(state.reviewed));
  },
  setReviewedList(state, list) {
    state.reviewed = list;
  },
};

export const actions = {
  getReviewedFromLocal({ commit }) {
    const reviewed = JSON.parse(localStorage.getItem("reviewed") || "[]");
    commit("setReviewedList", reviewed);
  },
};

export const getters = {
  getReviewed: (state) => state.reviewed,
};
