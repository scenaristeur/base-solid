<template>
  <div>
    <span>World</span>
    <solid-browser />
  </div>
</template>

<script>
module.exports = {
  name: "AppWorld",
  components:{
      'solid-browser': httpVueLoader('/js/components/SolidBrowser.vue')
  //  'Browser': () => import('./Browser'),
  },
  mounted () {
    console.log('Hello World')
  }
}
</script>

<style scoped>
span {
  background-color: yellow;
}
</style>
