<template>
  <Success v-if="status === 'success'" />
  <Running v-else-if="status === 'running'" />
  <Error v-else-if="status === 'error'" />
</template>

<script>
import Success from './icons/status/Success'
import Running from './icons/status/Running'
import Error from './icons/status/Error'

export default {
  components: {
    Success, Running, Error
  },

  props: {
    status: {
      required: true
    }
  }
}
</script>
