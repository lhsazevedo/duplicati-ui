<template>
  <nav class="sidebar-nav">
    <ul class="nav flex-column">
      <li v-for="item in items" :key="item.title" class="nav-item">
        <router-link active-class="active" :to="item.to" class="nav-link">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { markRaw } from 'vue'
import ArchiveIcon from '@/components/icons/Archive'
import RestoreIcon from '@/components/icons/Restore'
import CogIcon from '@/components/icons/Cog'
import InfoIcon from '@/components/icons/Info'

export default {
  data: () => ({
    items: [
      {
        title: 'Backups',
        to: { name: 'Home' },
        icon: markRaw(ArchiveIcon)
      }, {
        title: 'Restore',
        to: { name: 'Restore' },
        icon: markRaw(RestoreIcon)
      }, {
        title: 'Settings',
        to: { name: 'Settings' },
        icon: markRaw(CogIcon)
      }, {
        title: 'About',
        to: { name: 'About' },
        icon: markRaw(InfoIcon)
      }
    ]
  })
}
</script>
