<template>
  <div id="root-subapp-vite" class="app-view-box" />
</template>

<script>
  import { registerMicroApps, start } from 'qiankun'

  export default {
    name: 'Adnvace',
    mounted () {
      registerMicroApps([
        {
          name: 'vite',
          entry: process.env.VUE_APP_SUB_APP_VITE,
          container: '#root-subapp-vite',
          activeRule: '/profile/advanced'
        }
      ])

      start()
    }
  }
</script>
