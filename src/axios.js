import axios from 'axios'
import { readCookie } from '@/util'

let xsrfRetry = false

const appAxios = axios.create({
  baseURL: 'http://localhost:8080/api/v1/'
})

appAxios.interceptors.response.use(null, function (err) {
  if (err.response) {
    if (!xsrfRetry && err.response.statusText.toLowerCase().indexOf('xsrf') > 0) {
      xsrfRetry = true

      const xsrfToken = readCookie('xsrf-token')
      if (xsrfToken) {
        appAxios.defaults.headers.common['X-XSRF-TOKEN'] = xsrfToken
      }

      return appAxios.request(err.response.config)
    }
  }

  return Promise.reject(err)
})

export default appAxios
