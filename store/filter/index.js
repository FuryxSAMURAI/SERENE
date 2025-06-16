export const namespaced = true;

export const state = () => ({
  titles: [],
  categories: [],
});

export const mutations = {
  setProducts(state, data) {
    state.titles = data;
  },
  setCategories(state, data) {
    state.categories = data;
  },
};

export const actions = {
  async getProducts({ commit }) {
    try {
      const data = await this.$axios.$get("/products");
      commit("setProducts", data);
    } catch (error) {
      console.error("Виникла помилка - ", error);
    }
  },
  async getCategories({ commit }) {
    try {
      const data = await this.$axios.$get("/categories");
      commit("setCategories", data);
    } catch (error) {
      console.error("Помилка при отриманні категорій:", error);
    }
  },
};

export const getters = {
  getTitles: (state) => state.titles,
  getCategories: (state) => state.categories,
};
