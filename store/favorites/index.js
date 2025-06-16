export const state = () => ({
  favorites: [],
  count: 0,
});

export const mutations = {
  setFavorites(state, val) {
    const exist = state.favorites.find((item) => item.id === val.id);
    if (!exist) {
      state.favorites.push(val);
      state.count++;
    }
    if (process.client) {
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      localStorage.setItem(
        "favoritesCount",
        JSON.stringify(state.favorites.length)
      );
    }
  },
  setStateFromLocal(state, payload) {
    state.favorites = payload || [];
  },
  setCountFromLocal(state, val) {
    state.count = val;
  },
  deleteItem(state, val) {
    state.favorites = state.favorites.filter((item) => item.id !== val.id);
    state.count = state.favorites.length;
    if (process.client) {
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      localStorage.setItem("favoritesCount", state.count);
    }
  },
};

export const actions = {
  loadFavoritesFromLocalStorage({ commit }) {
    if (process.client) {
      const favorites = localStorage.getItem("favorites");
      if (favorites) {
        try {
          const parsed = JSON.parse(favorites);
          commit("setStateFromLocal", parsed);
        } catch (error) {
          console.error("localStorage favorites error:", error);
        }
      }
    }
  },
  loadFavoritesCount({ commit }) {
    if (process.client) {
      const favoritesCount = localStorage.getItem("favoritesCount");
      if (favoritesCount) {
        try {
          const parsed = JSON.parse(favoritesCount);
          commit("setCountFromLocal", parsed);
        } catch (error) {
          console.error("localStorage favoritesCount error:", error);
        }
      }
    }
  },
};

export const getters = {
  getFavorites: (state) => {
    return state.favorites;
  },
  getFavoritesCount: (state) => {
    return state.count;
  },
};
