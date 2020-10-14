<template>
  <div class="card backup-card">
    <div class="backup-card-content">
      <div class="title backup-card-title">
        <Status :status="status" class="status-left" />
        {{ title }}
      </div>
      <div class="text-muted">Last backup yesterday at <span class="font-weight-bold">11:36 PM</span>  •  416 MB stored  •  149 MB source</div>
    </div>
    <div class="backup-card-actions">
      <div class="btn btn-light" :class="{ disabled: status === 'running' }" v-text="status === 'running' ? 'Running...' : 'Run now'" />
    </div>
  </div>
</template>

<script>
import Status from './Status'

export default {
  components: {
    Status
  },
  props: {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  }
}
</script>
