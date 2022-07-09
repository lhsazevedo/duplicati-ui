<template>
  <div class="container">
    <PageHeader :title="'Backup > ' + title" :actions="[{ title: 'Run now' }, { title: 'Restore' }]" />
    <TabsBar />
  </div>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import TabsBar from '@/components/TabsBar.vue'
import axios from '@/axios'
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()

const loading = ref(true);
const backup = ref(null)

const title = computed(() => {
  return loading.value ? 'Loading...' : backup.value.Name
})

axios.get(`backup/${route.params.id}`).then(function (res) {
  backup.value = res.data.data.Backup
  loading.value = false
})
</script>
