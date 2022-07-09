<template>
  <div class="bar">
    <router-link :to="{ name: 'Backup', params: { id: 1 } }" class="item">
      Overview
    </router-link>
    <router-link to="/" class="item">
      Log
    </router-link>
    <router-link to="/" class="item">
      Remote Log
    </router-link>
    <router-link to="/" class="item">
      Settings
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .bar {
    border-bottom: 1px solid #D1D8E0;
  }

  .item {
    display: inline-block;
    padding: 8px 16px;
    line-height: 1.25;
    color: #667E99;
    margin-right: 8px;

    &.router-link-active {
      border-bottom: 2px solid #1D4775;
      color: #1D4775;
    }
  }
</style>
