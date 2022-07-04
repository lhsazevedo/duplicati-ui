<template>
  <main>
    <Topbar />
    <div class="content">
      <router-view/>
    </div>
  </main>
</template>

<script>
import Topbar from './Topbar.vue'

export default {
  components: {
    Topbar
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/_variables.scss";

  main {
    margin-left: $sidebar-width;
  }
</style>
