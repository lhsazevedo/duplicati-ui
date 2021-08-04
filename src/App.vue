<template>
  <Sidebar />
  <Main />

  <div>
    <transition name="fade">
      <div
        v-show="hasDialog"
        class="modal"
      >
        <transition name="scale" mode="out-in">
          <component
            :is="firstDialog?.component"
            :key="firstDialog?.id"
            :resolve="firstDialog?.resolve"
            :reject="firstDialog?.reject"
          />
        </transition>
      </div>
      </transition>
  </div>

  <ModalBackdrop :show="hasDialog" />
</template>

<script>
import axios from '@/axios'
import { mapGetters } from 'vuex'
import DialogService from '@/services/dialog'

import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import FirstRunSetupDialog from '@/components/dialogs/FirstRunSetupDialog'
import ModalBackdrop from '@/components/ModalBackdrop'

export default {
  components: {
    Main,
    Sidebar,
    ModalBackdrop
  },

  data: () => ({
    showModal: true
  }),

  computed: {
    ...mapGetters('dialog', [
      'firstDialog',
      'hasDialog'
    ])
  },

  methods: {

  },

  async created () {
    const data = await axios.get('/serversettings')
    // @TODO: --force-actual-date
    // @TODO: Apply throttle settings: max-upload-speed, max-download-speed

    const asked = data.data['has-asked-for-password-protection']
    const pass = data.data['server-passphrase']

    if (asked || pass !== '') {
      return
    }

    try {
      await DialogService.component(FirstRunSetupDialog)

      this.$router.push({ name: 'Settings' })
    } catch (e) { }

    axios.patch('/serversettings', { 'has-asked-for-password-protection': true })
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
