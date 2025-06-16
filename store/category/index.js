export const namespaced = true;

export const state = () => ({
  categories: [],
});

export const mutations = {
  setCategories(state, data) {
    state.categories = data;
  },
};

export const actions = {
  async fetchCategories({ commit }) {
    try {
      const data = await this.$axios.$get("/categories");
      commit("setCategories", data);
    } catch (error) {
      console.error("Помилка при отриманні категорій:", error);
    }
  },
};

export const getters = {
  getCategories: (state) => state.categories,
};
