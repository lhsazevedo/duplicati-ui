<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <div
      v-if="actions.length"
      class="actions"
    >
      <Btn
        v-for="action in [...actions].reverse()"
        :key="action.title"
        class="primary"
      >
        {{ action.title }}
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'

export default {
  components: {
    Btn
  },

  props: {
    title: { type: String, required: true },
    actions: { type: Array, default: () => [] }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/_variables.scss";

  .header {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .title {
    color: $brand
  }

  .actions {
    margin-left: auto;
  }
</style>
