<template>
  <div>
    <div id="root-subapp-react" class="app-view-box" />
  </div>
</template>

<script>
  import { registerMicroApps, start } from 'qiankun'

  export default {
    name: 'Basic',
    mounted () {
      registerMicroApps([
        {
          name: 'react15',
          entry: process.env.VUE_APP_SUB_APP_REACT,
          container: '#root-subapp-react',
          activeRule: '/profile/basic'
        }
      ])

      start()
    }
  }
</script>
