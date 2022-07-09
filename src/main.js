import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
// import * as api from './services/api'
// import * as server from './services/server.js'

// import '@/styles/app.scss'
import '@/styles/_global.scss'

// async function init () {
//   api.init()

//   await server.updateStatus()
//   server.subscribe()

//   server.updateInfo()
//   server.updateSettings()
//   server.updateBackups()
// }

dayjs.extend(calendar)
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

const app = createApp(App)
app.use(store).use(router).mount('#app')

// init()
