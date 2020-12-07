<template>
  <div>
    <div ref="editor" class="code"></div>
  </template>

  <script>
  module.exports = {
    name: "SolidEditor",
    props: ['content'],
    data: function () {
      return {
        message: "boo"
      }
    },
    watch:{
      content(){
        this.flask.updateCode(this.content)
      }
    },
    mounted () {
      //  console.log("content",this.content)
      console.log('Hello World', this.message)
      console.log(this.$refs.editor)
      const elem = this.$refs.editor;
      this.flask = new CodeFlask(elem, { language: 'js',  lineNumbers: true })
      this.flask.onUpdate((code) => {
        console.log(code)
        // do something with code here.
        // this will trigger whenever the code
        // in the editor changes.
      });
      this.flask.updateCode('var you = "Cool people that help devs, when giving them feedback ;-)"');
      const code = this.flask.getCode();
      console.log(code)

    },
    methods: {

    }
  }
  </script>

  <style>
  .code {
    position: relative;
    width: 100%;
    height: 80vh;
    border: 2px solid #ccc;
  }
  </style>
