<template>
  <div class="content-header">
    <h1 class="content-header-title">Backups</h1>
    <div class="content-header-actions">
      <div class="btn btn-primary">Add Backup</div>
    </div>
  </div>

  <BackupList />
</template>

<script>
import BackupList from '@/components/BackupList'

export default {
  name: 'Home',
  components: {
    BackupList
  }
}
</script>
