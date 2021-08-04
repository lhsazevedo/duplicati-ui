<template>
  <transition name="fade">
    <div
      v-if="show"
      :class="{ [$style.backdrop]: true }"
    />
  </transition>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style lang="scss" module>
  @use "sass:color";
  @import "@/styles/_variables.scss";

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(color.adjust($brand-dark, $saturation: -25%), .75);
  }
</style>
