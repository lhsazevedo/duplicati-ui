<template>
  <Sidebar />
  <Main />

  <div>
    <div
      class="modal fade show"
      :class="{ show: hasDialog }"
      :style="{ display: hasDialog ? 'block' : undefined }"
    >
      <component
        v-if="hasDialog"
        :is="$store.state.dialog.dialogs[0]"
      />
    </div>
  </div>

  <div
    class="modal-backdrop fade"
    :class="{ show: hasDialog }"
  ></div>
</template>

<script>
import axios from '@/axios'
import { markRaw } from 'vue'

import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import FirstRunSetupDialog from '@/components/dialogs/FirstRunSetupDialog'

export default {
  components: {
    Main, Sidebar
  },

  computed: {
    hasDialog () {
      return this.$store.state.dialog.dialogs.length >= 1
    }
  },

  created () {
    const that = this

    axios.get('/serversettings').then(function (data) {
      // @TODO: --force-actual-date
      // @TODO: Apply throttle settings: max-upload-speed, max-download-speed

      const asked = data.data['has-asked-for-password-protection']
      const pass = data.data['server-passphrase']

      if (!asked && pass === '') {
        that.$store.commit('dialog/add', markRaw(FirstRunSetupDialog))

        // DialogService.dialog(
        //   gettextCatalog.getString('First run setup'),
        //   gettextCatalog.getString('If your machine is in a multi-user environment (i.e. the machine has more than one account), you need to set a password to prevent other users from accessing data on your account.\nDo you want to set a password now?'),
        //   [gettextCatalog.getString('No, my machine has only a single account'), gettextCatalog.getString('Yes')],
        //   function(btn) {
        //     AppService.patch('/serversettings', { 'has-asked-for-password-protection': 'true'}, {'headers': {'Content-Type': 'application/json'}});
        //     if (btn == 1) {
        //       $location.path('/settings');
        //     }
        //   }
        // );
      }
    })
  }
}
</script>
