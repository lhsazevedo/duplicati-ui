export default {
  namespaced: true,

  state () {
    return {
      status: {},
      info: {},
      settings: {},
      backups: {}
    }
  },

  mutations: {
    setStatus (state, status) {
      state.status = status
    },

    setInfo (state, info) {
      state.info = info
    },

    setSettings (state, settings) {
      state.settings = settings
    },

    setBackups (state, backups) {
      state.backups = backups
    }
  }
}
