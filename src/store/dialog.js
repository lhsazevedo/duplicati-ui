export default {
  namespaced: true,

  state () {
    return {
      dialogs: []
    }
  },

  mutations: {
    add (state, dialog) {
      state.dialogs.push({
        id: Math.random().toString(36).substr(2, 9),
        ...dialog
      })
    },

    shift (state) {
      state.dialogs.shift()
    }
  },

  getters: {
    hasDialog (state) {
      return state.dialogs.length >= 1
    },

    firstDialog (state) {
      return state.dialogs[0]
    }
  }
}
