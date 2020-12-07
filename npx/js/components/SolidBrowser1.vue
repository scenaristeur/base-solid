<template>
  <div class="container">

    <!-- <editor ref="editor" :config="config" :initialized="onInitialized" @change="change"/> -->

    <h1>Browser</h1>
    <div class="row">
      <div class=" col-sm">
        <div class="list-group">
        <button type="button" class="list-group-item list-group-item-info" @click="go_parent">{{ parent }}</button>
        <button type="button" class="list-group-item list-group-item-light" >{{ current }}</button>
        <button type="button" v-for="fo in folder.folders" :key="fo.name"
        @click="select(fo)"
        class="list-group-item list-group-item-warning">
        {{ fo.name}}
      </button>
      <button type="button"
      v-for="fi in folder.files" :key="fi.name"
      @click="select(fi)"
      class="list-group-item">
      {{ fi.name}}
    </button>
  </div>
</div>
<div class=" col-sm">
<solid-editor :content="content"/>
</div>
</div>



<br>
<span>Wahouu , this is a very basic Vuejs Single File Component without
  all webpack constraint, see
  https://github.com/scenaristeur/base-solid/tree/main/npx</span>

</div>
</template>

<script>


// var myCodeMirror = CodeMirror(document.body, {
//   value: "function myScript(){return 100;}\n",
//   mode:  "javascript"
// });



// <link rel="stylesheet" href="lib/codemirror.css">
// <script src="lib/codemirror.js">
//import '../web_modules/codemirror/lib/codemirror.js'

//const editor = new EditorJS();


module.exports = {
  name: 'Browser',
  props: ['message'],
  components:{
    'solid-editor': httpVueLoader('js/components/SolidEditor.vue')
    //  'Browser': () => import('./js/components/Browser'),
  },
  data: function () {
    return {
      //  config: {},
      folder: {folders:[], files: [], url:""},
      current: "",
      parent: "",
      webId: null,
      storage: "",
      content:'const my_new_code_here = "Blabla"'
    }
  },
  async   created(){

    let session = await auth.currentSession()
    if (!session) { session = await auth.popupLogin({ popupUri:popUri }) }
    this.webId = session.webId
    let st = await ldflex.data[session.webId]['http://www.w3.org/ns/pim/space#storage'] //this.getGroupStorage(this.group.super)
    this.storage = `${st}`
    this.current = this.storage
    this.update()
  },
  async   mounted () {


    // <!-- var editor = CodeMirror.fromTextArea(myTextarea, {
    //   lineNumbers: true
    // }); -->
    //
    // <!-- var myCodeMirror = CodeMirror(function(elt) {
    //   textArea.parentNode.replaceChild(elt, textArea);
    // }, {  mode:  "javascript", value: myTextArea.value}); -->
  },
  methods: {
    async select(selected){
      console.log(selected, selected.type)
      if (selected.type == 'folder'){
        this.current = selected.url
        this.update()
      }
    },
    async go_parent(){
      this.current = this.parent
      this.update()
    },
    async  update() {
      let folder = await fc.readFolder( this.current )
      this.folder = folder
      this.parent = folder.parent
    },
    // onInitialized(ed){
    //   console.log(ed)
    // },
    // change(ch){
    //   console.log(ch)
    // }
  }
}
</script>

<style scoped>
/*@import '../web_modules/codemirror/lib/codemirror.css';*/
span {
  background-color: yellow;
}
.list-group-item {
  text-align: left;
}
</style>
