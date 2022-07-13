<template>
  <div id="root-subapp-react" class="app-view-box" />
</template>

<script>
  import { registerMicroApps, start } from 'qiankun'
export default {
  name: 'BaseForm',
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  mounted () {
    console.log(this.$route)
    registerMicroApps([
      {
        name: 'react',
        entry: process.env.VUE_APP_SUB_APP_REACT,
        container: '#root-subapp-react',
        activeRule: '/react'
      }
    ])

    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start({ urlRerouteOnly: true })
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
