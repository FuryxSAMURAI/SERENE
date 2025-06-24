export const state = () => ({
  recommended: [],
});

export const mutations = {
  setRecommended(state, list) {
    state.recommended = list;
  },
};

export const actions = {
  async getRecommendedFromLocal({ commit }) {
    const saved = localStorage.getItem("recommended");

    if (saved) {
      commit("setRecommended", JSON.parse(saved));
    } else {
      const all = await this.$axios.$get(
        "https://api.escuelajs.co/api/v1/products"
      );
      const random = all.sort(() => 0.5 - Math.random()).slice(0, 4);

      commit("setRecommended", random);
      localStorage.setItem("recommended", JSON.stringify(random));
    }
  },
};

export const getters = {
  getRecommended: (state) => state.recommended,
};
