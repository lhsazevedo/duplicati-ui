<template>
  <header class="topbar">
    <div class="container">
      No scheduled tasks
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @import "@/styles/_variables.scss";

  .topbar {
    height: $topbar-height;
    background-color: $topbar-bg;
    color: #6B7280;
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
