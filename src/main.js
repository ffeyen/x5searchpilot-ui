// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App'
import ContainerLectures from './components/ContainerLectures.vue'
import ContainerResults from './components/ContainerResults.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from 'axios';
import Toasted from 'vue-toasted';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Axios)
Vue.use(Toasted, {
  iconPack : 'material'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    ContainerLectures,
    ContainerResults
  },
  template: '<App/>'
})