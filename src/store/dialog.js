export default {
  namespaced: true,

  state () {
    return {
      dialogs: []
    }
  },

  mutations: {
    add (state, dialog) {
      state.dialogs.push(dialog)
    }
  }
}
