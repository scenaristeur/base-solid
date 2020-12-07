<template>
  <div  class="container">

    <h3>Demo browser app </h3>


    <solid-browser :message="message" />



    <div>
      <button type="button" class="btn btn-warning" @click="click">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>

    <span>World</span>

    <div class="alert alert-info" role="alert">
      A simple info alert—check it out!
    </div>
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
    click() {
      console.log("hello")
    }
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css';
</style>
