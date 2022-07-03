import { createStore } from 'vuex'
import server from './server'
import dialog from './dialog'

export default createStore({
  state: {
    backups: []
  },

  mutations: {
    setBackups (state, backups) {
      state.backups = backups
    }
  },

  actions: {
  },

  modules: {
    server,
    dialog
  }
})
