<template>
  <aside :class="$style.sidebar">
    <div :class="$style.logoWrapper">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/logo-inverted.svg" alt="Duplicati" :class="$style.logo" >
      </router-link>
    </div>

    <SidebarNav />
  </aside>
</template>

<script>
import SidebarNav from './SidebarNav'

export default {
  components: {
    SidebarNav
  }
}
</script>

<style lang="scss" module>
  @import "@/styles/_variables.scss";

  .sidebar {
    width: $sidebar-width;
    background-color: #143252;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .logoWrapper {
    height: $topbar-height;
    background-color: $brand;
    padding-left: 28px;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 188px;
  }
</style>
