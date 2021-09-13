import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment';
import store from './store'
import router from './router'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)
Vue.prototype.$axios = Axios
Vue.config.productionTip = false


new Vue({
  store,
  Axios,
  BootstrapVue,
  IconsPlugin,
  router,
  render: h => h(App)
}).$mount('#app')
// fromat date function 
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});