import { createStore } from 'vuex';

interface StoreState {
  count: number;
}
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  // mutations: 直接用来修改数据
  mutations: {
    add(state: StoreState) {
      state.count += 1;
    }
  },
  // actions:不直接修改数据，用来做异步数据的修改，通过 mutations 去修改
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit('add');
      }, 1000);
    }
  },
  getters: {
    double(state: StoreState) {
      return 2 * state.count;
    }
  }
});

export default store;
