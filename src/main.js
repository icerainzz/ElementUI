// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App.vue'
import router from "./router/index.js"
import storeAll from "./components/store/store.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component("app", app)

new Vue({
  el: '#app',
  store: storeAll,
  router,
  template: '<app/>',
})

// import app from "./components/counter/app.vue"


