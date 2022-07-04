<template>
  <ul :class="$style.nav">
    <li v-for="item in items" :key="item.title">
      <router-link
        active-class="active"
        :to="item.to"
        :class="$style.link"
      >
        <component
          :is="item.icon"
          :class="$style.icon"
        />
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { markRaw } from 'vue'
import ArchiveIcon from '@/components/icons/Archive.vue'
import RestoreIcon from '@/components/icons/Restore.vue'
import CogIcon from '@/components/icons/Cog.vue'
import InfoIcon from '@/components/icons/Info.vue'

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

<style lang="scss" module>
  @import "@/styles/_variables.scss";

  .nav {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0px;
  }

  .link {
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 28px;
    color: #6E84A3;
    text-decoration: none;

    &:hover {
      color: rgba(#6E84A3, .75);
    }

    &:global(.active) {
      color: white;
      background-color: $brand-darker;
    }
  }

  .icon {
    margin-right: 16px;
  }
</style>
