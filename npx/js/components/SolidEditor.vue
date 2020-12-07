<template>
  <div>
    <div ref="editor" class="code"></div>
  </template>

  <script>
  module.exports = {
    name: "SolidEditor",
    props: ['file'],
    data: function () {
      return {
        //  message: "boo"
      }
    },
    watch:{
      file(){
        this.update()
      }
    },
    mounted () {
      //  console.log("content",this.content)
      //  console.log('Hello World', this.message)
      //  console.log(this.$refs.editor)
      const elem = this.$refs.editor;
      this.flask = new CodeFlask(elem, { language: 'js',  lineNumbers: true })
      this.flask.onUpdate((code) => {
        console.log("_")
      //  console.log("UPDATED CODE",code)
        // do something with code here.
        // this will trigger whenever the code
        // in the editor changes.
      });
      this.flask.updateCode('var you = "Cool people that help devs, when giving them feedback ;-)"');
      const code = this.flask.getCode();
      console.log(code)

    },
    methods: {
      async update(){
        //  console.log(this.file)
        let content = await fc.readFile(this.file.url)
        this.flask.updateCode(content)
      }
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
