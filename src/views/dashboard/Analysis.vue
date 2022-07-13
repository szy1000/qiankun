<template>
  <div id="root-subapp-html" class="app-view-box" />
</template>

<script>
  import { registerMicroApps, start } from 'qiankun'

export default {
  name: 'Analysis',
  data () {
    return {
    }
  },
  mounted () {
    registerMicroApps([
      {
        name: 'purehtml',
        entry: process.env.VUE_APP_SUB_APP,
        container: '#root-subapp-html',
        activeRule: '/dashboard/analysis'
      }
    ])
    start()
  }
}
</script>
