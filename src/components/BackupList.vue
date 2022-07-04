<template>
  <div
    v-for="{ Backup } in $store.state.server.backups"
    :key="Backup.ID"
  >
    <router-link :to="`/backup/${Backup.ID}`" class="backup-link">
      <BackupCard :title="Backup.Name" status="stopped" />
    </router-link>
  </div>
</template>

<script>
import BackupCard from './BackupCard.vue'

export default {
  components: {
    BackupCard
  },

  data: () => ({
  }),

  computed: {
    // parsedBackups () {
    //   if (!this.$store.state.server.backups.length) {
    //     return []
    //   }

    //   return this.$store.state.server.backups.map(backup => {
    //     return {
    //       title: backup.Backup.Name
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    width: 33.3333%;
  }
</style>
