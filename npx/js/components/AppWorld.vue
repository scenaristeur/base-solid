<template>
  <div>

    <solid-browser :message="message" />




  </div>
</template>

<script>
module.exports = {
  name: "AppWorld",
  components:{
    'solid-browser': httpVueLoader('js/components/SolidBrowser.vue')
    //  'Browser': () => import('./js/components/Browser'),
  },
  data: function () {
    return {
      message: "boo"
    }
  },
  mounted () {
    console.log('Hello World', this.message)
  },
  methods: {

  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css';
</style>
