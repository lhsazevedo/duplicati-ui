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
            :is="backups[0]?.component"
            :key="backups[0]?.id"
            :resolve="backups[0]?.resolve"
            :reject="backups[0]?.reject"
          />
        </transition>
      </div>
      </transition>
  </div>

  <ModalBackdrop :show="hasDialog" />
</template>

<script>
import axios from '@/axios'
import DialogService from '@/services/dialog'
import { mapState, mapWritableState } from 'pinia'
import { useStore } from '@/store'

import Main from '@/components/Main.vue'
import Sidebar from '@/components/Sidebar.vue'
import FirstRunSetupDialog from '@/components/dialogs/FirstRunSetupDialog.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'

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
    ...mapWritableState(useStore, [
      'backups'
    ]),
    ...mapState(useStore, [
      'hasDialog'
    ])
  },

  methods: {
    async checkFirstRun (settings) {
      const asked = settings['has-asked-for-password-protection']
      const pass = settings['server-passphrase']

      axios.get('/backups').then((res) => {
        this.backups = res.data
      })

      if (asked || pass !== '') {
        return
      }

      try {
        await DialogService.component(FirstRunSetupDialog)

        this.$router.push({ name: 'Settings' })
      } catch (e) { }
    }
  },

  async mounted () {
    const settings = await axios.get('/serversettings').then(res => res.data)
    // @TODO: --force-actual-date
    // @TODO: Apply throttle settings: max-upload-speed, max-download-speed

    this.checkFirstRun(settings)

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
