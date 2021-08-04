import { markRaw } from 'vue'
import store from '@/store'

function shiftThen (f) {
  return function (r) {
    store.commit('dialog/shift')
    f(r)
  }
}

export default {
  component (component) {
    return new Promise(function (resolve, reject) {
      store.commit('dialog/add', {
        component: markRaw(component),
        resolve: shiftThen(resolve),
        reject: shiftThen(reject)
      })
    })
  }
}
