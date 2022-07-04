<template>
  <Success v-if="status === 'success'" />
  <Running v-else-if="status === 'running'" />
  <Error v-else-if="status === 'error'" />
</template>

<script>
import Success from './icons/status/Success.vue'
import Running from './icons/status/Running.vue'
import Error from './icons/status/Error.vue'

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

<style lang="scss" scoped>
  svg {
    display: inline;
  }
</style>
