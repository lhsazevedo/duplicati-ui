import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as api from './services/api'
// import * as server from './services/server.js'

import '@/styles/app.scss'

// async function init () {
//   api.init()

//   await server.updateStatus()
//   server.subscribe()

//   server.updateInfo()
//   server.updateSettings()
//   server.updateBackups()
// }

const app = createApp(App)
app.use(store).use(router).mount('#app')

// init()
