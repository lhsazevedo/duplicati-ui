import axios from 'axios'

const appAxios = axios.create({
  baseURL: '/api/v1/'
})

appAxios.defaults.xsrfCookieName = 'xsrf-token'

export default appAxios
