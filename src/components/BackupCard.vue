<template>
  <Card class="backup-card">
    <div class="backup-card-content">
      <div class="title">
        <Status :status="'running'" style="margin-right: .25rem;" />
        <span>{{ title }}</span>
      </div>
      <div class="description">
        <span>
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
          </svg>Last backup yesterday at <strong>11:36 PM</strong>
        </span>
      </div>
      <div class="description">
        <span>
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10H6.71C7.37,7.69 9.5,6 12,6A5.5,5.5 0 0,1 17.5,11.5V12H19A3,3 0 0,1 22,15A3,3 0 0,1 19,18M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
          </svg><strong>416 MB</strong> stored
        </span>

        <span style="margin-left: 1rem;">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 21H4V10H6V19H18V10H20V21M3 3H21V9H3V3M9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9V11.5C9 11.22 9.22 11 9.5 11M5 5V7H19V5H5Z" />
          </svg><strong>149 MB</strong> source
        </span>
      </div>
    </div>
    <div class="backup-card-actions">
      <Button
        class="light"
        :class="{ disabled: status === 'running' }"
      >
        {{ status === 'running' ? 'Running...' : 'Run now' }}
      </Button>
    </div>
  </Card>
</template>

<script>
import Button from './Button.vue'
import Card from './Card.vue'
import Status from './Status.vue'

export default {
  components: {
    Button,
    Card,
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

<style lang="scss" scoped>
  .backup-card {
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: box-shadow .15s ease;

    &:hover {
      box-shadow: 0px 4px 8px rgba(0,0,0,0.12);
    }
  }

  .title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .icon {
    width: 24px;
    height: 24px;
    display: inline;
    margin-right: .25rem;
    color: #D1D5DB;
  }

  .description {
    color: #6B7280;
    // font-size: 0.875rem;
  }
</style>
