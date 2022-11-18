export default {
  state: {
    challegers: [],
  },
  mutations: {
    saveChallengers(state, payload) {
      state.challegers = payload;
    },
  },
  actions: {},
};
