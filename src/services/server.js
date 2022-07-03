// import * as api from '@/services/api'
// import store from '@/store'

// async function fetchStatus (long) {
//   const LastEventId = store.state.server.status?.LastEventID

//   return await api.fetchServerStatus(LastEventId || -1, long, 300)
// }

// async function startPolling () {
//   while (true) {
//     const status = await fetchStatus(true)
//     store.commit('server/setStatus', status)
//   }
// }

// export async function updateStatus () {
//   const status = await fetchStatus(false)
//   store.commit('server/setStatus', status)

//   return status
// }

// export async function updateInfo () {
//   const info = await api.fetchInfo()
//   store.commit('server/setInfo', info)

//   return info
// }

// export async function updateSettings () {
//   const settings = await api.fetchSettings()
//   store.commit('server/setSettings', settings)

//   return settings
// }

// export async function updateBackups () {
//   const backups = await api.fetchBackups()
//   store.commit('server/setBackups', backups)

//   return backups
// }

// export function subscribe () {
//   startPolling()
// }
