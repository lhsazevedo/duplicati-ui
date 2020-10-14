<template>
  <aside class="sidebar">
    <div class="sidebar-brand-wrapper">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/logo-inverted.svg" alt="Duplicati" class="sidebar-logo" >
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
