<template>
  <main class="main">
    <Topbar />
    <div class="container content-container">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script>
import Topbar from './Topbar'

export default {
  components: {
    Topbar
  }
}
</script>
