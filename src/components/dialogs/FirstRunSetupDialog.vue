<template>
  <div :class="$style.dialog">
    <div :class="$style.content">
      <div :class="$style.title" class="h5 font-weight-bold mb-3">First run setup</div>

      <div :class="$style.body">
        <p>If your machine is in a multi-user environment (i.e. the machine has more than one account), you need to set a password to prevent other users from accessing data on your account.</p>
        <p>Do you want to set a password now?</p>
      </div>
    </div>

    <div :class="$style.actions">
        <Btn @click="reject()">No, my machine has only a single account</Btn>
        <Btn @click="resolve()">Yes</Btn>
      </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue'

export default {
  props: ['resolve', 'reject'],

  components: {
    Btn
  }
}
</script>

<style lang="scss" module>
  .dialog {
    max-width: 500px;
    background-color: white;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .content {
    padding: 1.5rem;
    padding-bottom: 1rem;
  }

  .title {
    font-size: 1.25rem;
    color: rgb(17,24,39)
  }

  .body {
    margin-top: .5rem;
    font-size: .875rem;
    line-height: 1.25rem;
    color: rgb(107,114,128);

    p {
      margin-top: .5rem;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding: .75rem 1.5rem;
    background-color: rgb(249,250,251);

    * {
      margin-left: 8px;
    }
  }
</style>
