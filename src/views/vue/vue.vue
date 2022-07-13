<template>
  <div>
    vue3
    <div id="root-subapp-vue" class="app-view-box" />
  </div>
</template>

<script>
  import { registerMicroApps, start } from 'qiankun'
export default {
  name: 'BaseForm',
  data () {
    return {
    }
  },
  mounted () {
    registerMicroApps([
      {
        name: 'vue',
        entry: process.env.VUE_APP_SUB_APP_VUE,
        container: '#root-subapp-vue',
        activeRule: '/vue'
      }
    ])

    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
    // start()
  },
  methods: {
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
