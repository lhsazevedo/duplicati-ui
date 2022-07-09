<template>
  <div class="container">
    <PageHeader title="Backups" :actions="actions" />
    <BackupList />
  </div>
</template>

<script>
import BackupList from '@/components/BackupList.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    BackupList,
    PageHeader
  },

  data: () => ({
    actions: [
      { title: 'Add backup' }
    ]
  })
}
</script>

<style lang="scss" scoped>
</style>
