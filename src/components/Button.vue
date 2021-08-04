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
    color: $brand;
    background-color: transparent;
    font-size: .875rem;
    padding: .5rem 1rem;
    border-color: transparent;
    border-radius: .375rem;
    cursor: pointer;

    &:hover {
      background-color: color.scale($brand, $lightness: 90%);
    }
  }

  // color: white;
</style>
