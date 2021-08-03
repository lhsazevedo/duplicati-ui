import axios from '@/plugins/axios'
import { readCookie } from '@/util'

let xsrfRetry = false

const appAxios = axios.create({
  baseURL: 'http://localhost:8080/api/v1/'
})

appAxios.interceptors.response.use(null, async function (err) {
  if (err.response) {
    if (!xsrfRetry && err.response.statusText.toLowerCase().indexOf('xsrf') > 0) {
      xsrfRetry = true

      const xsrfToken = readCookie('xsrf-token')
      if (xsrfToken) {
        axios.defaults.headers.common['X-XSRF-TOKEN'] = xsrfToken
      }

      const newResponse = await axios.request(err.response.config)
      xsrfRetry = false
      return Promise.resolve(newResponse)
    }
  }

  return Promise.reject(err)
})

export default appAxios
