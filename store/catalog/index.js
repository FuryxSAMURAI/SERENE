import axios from "axios";

export const namespaced = true;

export const state = () => ({
  products: [],
  allCount: 0,
  limit: 9,
  currentPage: 1,
  loading: false,
  sortBy: "new",
  title: "",
  categorySlug: "",
  price_min: 0,
  price_max: 0,
});

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data;
  },
  APPEND_PRODUCTS(state, data) {
    state.products = [...state.products, ...data];
  },
  SET_ALL_COUNT(state, count) {
    state.allCount = count;
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  SET_LOADING(state, value) {
    state.loading = value;
  },
  SET_TITLE(state, val) {
    state.title = val;
  },
  SET_CATEGORY_SLUG(state, val) {
    state.categorySlug = val;
  },
  SET_PRICE_MIN(state, val) {
    state.price_min = val;
  },
  SET_PRICE_MAX(state, val) {
    state.price_max = val;
  },
  SET_SORT_BY(state, value) {
    state.sortBy = value;
  },
};

export const actions = {
  async initPagination({ dispatch }) {
    dispatch("fetchPage", 1);
  },

  async fetchPage({ commit, state }, page) {
    commit("SET_LOADING", true);
    const offset = (page - 1) * state.limit;

    const params = {
      offset,
      limit: state.limit,
    };

    if (typeof state.title === "string" && state.title.trim()) {
      params.title = state.title;
    }
    if (typeof state.categorySlug === "string" && state.categorySlug.trim()) {
      params.categorySlug = state.categorySlug;
    }
    if (state.price_min != null) {
      params.price_min = state.price_min;
    }
    if (state.price_max != null) {
      params.price_max = state.price_max;
    }

    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products", {
        params,
      });

      let products = res.data;

      if (state.sortBy === "price_asc") {
        products.sort((a, b) => a.price - b.price);
      } else if (state.sortBy === "price_desc") {
        products.sort((a, b) => b.price - a.price);
      }

      commit("SET_PRODUCTS", products);
      commit("SET_CURRENT_PAGE", page);
      commit("SET_ALL_COUNT", products.length);
    } catch (e) {
      console.error("❌ fetchPage error:", e);
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async fetchMore({ commit, state }) {
    commit("SET_LOADING", true);
    const offset = state.products.length;

    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products", {
        params: {
          offset,
          limit: state.limit,
        },
      });

      commit("APPEND_PRODUCTS", res.data);
      commit("SET_CURRENT_PAGE", Math.ceil(offset / state.limit) + 1);
    } catch (e) {
      console.error("❌ fetchMore error:", e);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export const getters = {
  getProducts: (state) => state.products,
  totalPages: (state) => Math.ceil(state.allCount / state.limit),
};
