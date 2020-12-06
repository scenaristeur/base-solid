<template>
  <div>

    <h1>Browser</h1>
    <span>Wahouu , this is a very basic Vuejs Single File Component without
      all webpack constraint, see
      https://github.com/scenaristeur/base-solid/tree/main/npx</span>

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
