import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'view-design'
import store from './store'
import 'iview/dist/styles/iview.css';
import { get, post } from './utils/api'
import { crop } from './utils/util'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(iView);


Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$crop = crop
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
