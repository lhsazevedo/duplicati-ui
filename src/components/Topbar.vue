<template>
  <header class="topbar">
    <div class="container">
      <template v-if="store?.serverState?.ActiveTask">
        <template v-if="store?.activeBackup">
          {{ store.activeBackup.Backup.Name }}: &lt;StateText&gt;
        </template>
        <!-- TODO: v-else -->
      </template>
      <template v-else>No scheduled tasks</template>
    </div>
  </header>
</template>

<script setup>
import { useStore } from '@/store';

const store = useStore()

</script>

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
