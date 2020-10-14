<template>
  <ul class="backup-list">
    <li v-for="backup in parsedBackups" :key="backup.title" class="backup-list-item">
      <router-link to="/backup-item" class="backup-link">
        <BackupCard :title="backup.title" :running="backup.running" :status="backup.status" />
      </router-link>
    </li>
  </ul>
</template>

<script>
import BackupCard from './BackupCard'

export default {
  components: {
    BackupCard
  },

  data: () => ({
  }),

  computed: {
    parsedBackups () {
      if (!this.$store.state.server.backups.length) {
        return []
      }

      return this.$store.state.server.backups.map(backup => {
        return {
          title: backup.Backup.Name
        }
      })
    }
  }
}
</script>
