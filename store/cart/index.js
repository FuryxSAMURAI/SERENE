export const state = () => ({
  cart: [],
  count: 0,
  total: 0,
});

export const mutations = {
  setCart(state, val) {
    const exist = state.cart.find((item) => item.id === val.id);
    if (exist) {
      exist.qty += 1;
    } else {
      state.cart.push({ ...val, qty: 1 });
    }

    state.total += val.price;

    if (process.client) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("cartCount", JSON.stringify(state.cart.length));
    }
  },
  setTotal(state, total) {
    state.total = total;
  },
  setStateFromLocal(state, payload) {
    state.cart = payload || [];
  },
  setStateCountFromLocal(state, count) {
    state.count = count;
  },
  deleteItem(state, val) {
    const index = state.cart.findIndex((item) => item.id === val.id);
    if (index !== -1) {
      const item = state.cart[index];
      const itemTotal = item.price * (item.qty || 1);
      state.total -= itemTotal;
      
      state.cart.splice(index, 1);
      if (process.client) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("cartCount", state.cart.length);
      }
    }
  },
};

export const actions = {
  loadCartFromLocalStorage({ commit }) {
    if (process.client) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        try {
          const parsed = JSON.parse(cart);
          commit("setStateFromLocal", parsed);
        } catch (error) {
          console.error("localStorage cart error:", error);
        }
      }
    }
  },
  loadCartCount({ commit }) {
    if (process.client) {
      const cartCount = localStorage.getItem("cartCount");
      if (cartCount) {
        try {
          const parsedCount = JSON.parse(cartCount);
          commit("setStateCountFromLocal", parsedCount);
        } catch (error) {
          console.error("localStorage cart count error:", error);
        }
      }
    }
  },
  loadCartTotal({ commit }) {
    if (process.client) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        try {
          const parsedCart = JSON.parse(cart);

          const total = parsedCart.reduce((sum, item) => {
            return sum + item.price * (item.qty || 1);
          }, 0);

          commit("setTotal", total);
        } catch (error) {
          console.error("localStorage cart total error:", error);
        }
      }
    }
  },
};

export const getters = {
  getCart(state) {
    return state.cart;
  },
  getCartCount(state) {
    return state.count;
  },
  getTotal(state) {
    return state.total;
  },
};
