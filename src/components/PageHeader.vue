<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <div
      v-if="actions.length"
      class="actions"
    >
      <Button
        v-for="action in actions"
        :key="action.title"
        class="primary"
        v-text="action.title"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
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
