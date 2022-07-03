<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background-color: white;
    overflow: hidden;
    border-radius: .5rem;
    padding: 1rem;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  }
</style>
