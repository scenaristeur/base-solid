<template>
  <div>

    <!-- <editor ref="editor" :config="config" :initialized="onInitialized" @change="change"/> -->


    <div id="mySidenav" ref="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>

      <!-- <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a> -->
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-light" size="sm">dossier courant: {{ current }}</button>
        <button type="button" class="list-group-item list-group-item-info" @click="go_parent">.. ({{ parent }})</button>

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

<!-- <h2>Animated Sidenav Example Full Width</h2>
<p>Click on the element below to open the navigation menu.</p> -->
<span style="font-size:30px;cursor:pointer" @click="openNav">&#9776; TSB - Tiny Solid Browser</span>



<!-- <div class="row">
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
</div> -->
<!-- <div class=" col-sm"> -->
Actions
<div>
  <button type="button" class="btn btn-warning" @click="click">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
</div>

  <solid-editor :content="content"/>
<!-- </div>
</div> -->
Actions
<div>
  <button type="button" class="btn btn-warning" @click="click">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
</div>



<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>

<!-- <br>
<span>Wahouu , this is a very basic Vuejs Single File Component without
  all webpack constraint, see
  https://github.com/scenaristeur/base-solid/tree/main/npx</span>
   -->
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
      content: 'TiSoBr est un mini editeur de POD Solid. \nPour vous faciliter la vie... ' //'const my_new_code_here = "Blabla"'
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
    click() {
      console.log("hello")
    },
    async select(selected){
      console.log(selected, selected.type)
      this.current = selected.url
      if (selected.type == 'folder'){

        this.update()
      }else{
        this.content = await fc.readFile(this.current)
        console.log(this.content)
        this.closeNav()
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
    openNav() {
      this.$refs.mySidenav.style.width = "100%";
    },

    closeNav() {
      this.$refs.mySidenav.style.width = "0";
    }
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

.list-group-item {
  text-align: left;
}
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

}

.sidenav a:hover{
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
