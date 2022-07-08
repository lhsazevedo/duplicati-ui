<template>
  <component
    :is="tag"
    :class="$style.button"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {

  },

  setup () {
    return {
      tag: 'button'
    }
  }
}
</script>

<style lang="scss" module>
  @use "sass:color";
  @import "@/styles/_variables.scss";

  .button {
    display: inline-flex;
    color: #4B5563;
    background-color: #F3F4F6;
    font-size: .875rem;
    padding: .5rem 1rem;
    border-color: transparent;
    border-radius: .375rem;
    cursor: pointer;

    &:hover {
      background-color: #E5E7EB;
    }

    &:global(.primary) {
      background-color: $brand;
      color: white;

      &:hover {
        background-color: color.scale($brand, $lightness: -10%);
      }
    }
  }

  // color: white;
</style>
