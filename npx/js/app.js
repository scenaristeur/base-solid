// must be saved with popock on a POD with mimetype application/javascript

import Vue from '../web_modules/vue/dist/vue.esm.browser.js'
import httpVueLoader from '../web_modules/http-vue-loader/src/httpVueLoader.js'
import Editor from '../web_modules/vue-editor-js/dist/vue-editor-js.esm.js'

Vue.use(Editor)

const App = new Vue({
  el: '#app',

  components: {
    'app-world': httpVueLoader('./js/components/AppWorld.vue')
  },
})

export default App;
