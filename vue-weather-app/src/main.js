// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios';
import App from './App'


Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue();

Vue.use(VueAxios, axios) // 라이브러리 사용

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
