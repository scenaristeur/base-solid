<template>
  <div>

    <h1>Browser</h1>
    path : {{ path }}<br>
    path_global: {{ path_global }}
    <br>
    <span>Wahouu , this is a very basic Vuejs Single File Component without
      all webpack constraint, see
      https://github.com/scenaristeur/base-solid/tree/main/npx</span>

    </div>
  </template>

  <script>
  module.exports = {
    name: 'Browser',
    props: ['path'],
    data: function () {
       return {
         path_global: "boo"
       }
     },
    mounted () {
      this.path_global = path
      console.log('Hello Browser',path, this.path)
    }
  }
  </script>

  <style scoped>
  span {
    background-color: yellow;
  }
  </style>
