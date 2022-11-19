export default {
  state: {
    challengers: [],
    messageError: "",
  },
  mutations: {
    saveChallengers(state, payload) {
      state.challengers = payload;
    },
    setMessageError(state, payload) {
      state.messageError = payload;
    },
  },
  actions: {
    getMessageError(context) {
      const msg = context.state.messageError || "";
      context.commit("setMessageError", "");
      return msg;
    },
  },
};
