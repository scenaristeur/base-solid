<template>
  <div  class="container">
    <h3>EDITOR</h3>
    rr{{ content}}rr
  <div ref="editor"></div>
  </div>
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
  mounted () {
  //  console.log("content",this.content)
    console.log('Hello World', this.message)
    console.log(this.$refs.editor)
    const elem = this.$refs.editor;
    const flask = new CodeFlask(elem, { language: 'js',  lineNumbers: true })
    flask.onUpdate((code) => {
      console.log(code)
      // do something with code here.
      // this will trigger whenever the code
      // in the editor changes.
    });
    flask.updateCode('var me = turtle');
    const code = flask.getCode();
    console.log(code)
    flask.updateCode(this.content)
  },
  methods: {

  }
}
</script>

<style>
</style>
