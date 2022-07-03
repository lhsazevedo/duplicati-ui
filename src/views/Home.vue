<template>
  <div>
    <div class="container">
      <PageHeader title="Backups" :actions="actions" />
      <BackupList />
    </div>
  </div>
</template>

<script>
import BackupList from '@/components/BackupList'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    BackupList,
    PageHeader
  },

  data: () => ({
    actions: [
      { title: 'Add Backup' }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
