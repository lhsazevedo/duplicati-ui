import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      backups: [],
      dialogs: []
    }
  },

  getters: {
    hasDialog (state) {
      return state.dialogs.length >= 1
    }
  }
})
