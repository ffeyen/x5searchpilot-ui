import Vue from 'vue'
import router from './router'
import axios from 'axios'
import UUID from 'vue-uuid';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Toasted from 'vue-toasted';

import App from './App'
import ContainerLectures from './components/ContainerLectures.vue'
import ContainerResults from './components/ContainerResults.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(axios)
Vue.use(UUID)
Vue.use(Toasted, {
  iconPack : 'material'
});

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