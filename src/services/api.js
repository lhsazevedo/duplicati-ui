import axios from '@/plugins/axios'
import { readCookie } from '@/util'

const url = 'http://localhost:8080/api/v1/'
let xsrfRetry = false

export async function fetchServerStatus (lastEventId = -1, long = false, duration = 300) {
  const params = {
    lasteventid: lastEventId,
    longpoll: long,
    duration: duration + 's'
  }

  const response = await axios.get(url + 'serverstate', { params })
  return response.data
}

function updateXsrfCookie () {
  const xsrfToken = readCookie('xsrf-token')
  if (xsrfToken) {
    axios.defaults.headers.common['X-XSRF-TOKEN'] = xsrfToken
  }
}

export async function fetchInfo () {
  const response = await axios.get(url + 'systeminfo')
  return response.data
}

export async function fetchSettings () {
  const response = await axios.get(url + 'serversettings')
  return response.data
}

export async function fetchBackups () {
  const response = await axios.get(url + 'backups')
  return response.data
}

export function init () {
  updateXsrfCookie()

  axios.interceptors.response.use(null, async function (err) {
    if (err.response) {
      if (!xsrfRetry && err.response.statusText.toLowerCase().indexOf('xsrf') > 0) {
        xsrfRetry = true
        updateXsrfCookie()
        const newResponse = await axios.request(err.response.config)
        xsrfRetry = false
        return Promise.resolve(newResponse)
      }
    }

    return Promise.reject(err)
  })
}
