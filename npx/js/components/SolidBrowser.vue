<template>
  <div>

    <h1>Browser</h1> <span>Solid</span>
  </div>
</template>

<script>
module.exports = {
  name: 'Browser',
  mounted () {
    console.log('Hello Browser')
  }
}
</script>

<style scoped>
span {
  background-color: yellow;
}
</style>
