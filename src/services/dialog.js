import { markRaw } from 'vue'
import { useStore } from '@/store'

function shiftThen (f) {
  const piniaStore = useStore()

  return function (r) {
    piniaStore.dialogs.shift()
    f(r)
  }
}

export default {
  component (component) {
    const piniaStore = useStore()

    return new Promise(function (resolve, reject) {
      piniaStore.dialogs.push({
        id: Math.random().toString(36).substr(2, 9),
        component: markRaw(component),
        resolve: shiftThen(resolve),
        reject: shiftThen(reject)
      })
    })
  }
}
