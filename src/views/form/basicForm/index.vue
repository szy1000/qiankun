<template>
  <div>
    xxx
    <div id="root-subapp-vue" class="app-view-box" />

  </div>
</template>

<script>
  // import { registerMicroApps } from 'qiankun'
export default {
  name: 'BaseForm',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.$route)
    // registerMicroApps([
    //   {
    //     name: 'subapp-vue',
    //     entry: process.env.VUE_APP_SUB_APP_VUE,
    //     container: '#root-subapp-vue',
    //     activeRule: '/form/basic-form'
    //   }
    // ])

    // if (!window.qiankunStarted) {
    //   window.qiankunStarted = true
    //   start()
    // }
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
