import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      backups: [],
      dialogs: [],
      serverState: null,
    }
  },

  getters: {
    hasDialog (state) {
      return state.dialogs.length >= 1
    },

    activeTaskID (state) {
      return state.serverState?.activeTask?.Item1
    },

    activeBackup (state) {
      return state.backups.find(backup =>  backup.Backup.ID === state.serverState?.ActiveTask?.Item2)
    }
  }
})
