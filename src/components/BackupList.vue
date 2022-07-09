<template>
  <div
    v-for="{ Backup } in backups"
    :key="Backup.ID"
  >
    <router-link :to="`/backup/${Backup.ID}`" class="backup-link">
      <BackupCard :backup="Backup" :title="Backup.Name" status="stopped" />
    </router-link>
  </div>
</template>

<script>
import BackupCard from './BackupCard.vue'
import { mapState } from 'pinia'
import { useStore } from '@/store'

export default {
  components: {
    BackupCard
  },

  data: () => ({
  }),

  computed: {
    ...mapState(useStore, [
      'backups'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .list-item {
    width: 33.3333%;
  }
</style>
