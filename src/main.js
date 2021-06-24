import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'
import Axios from 'axios';
import Qs from 'qs';

Vue.prototype.axios = Axios;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  render: h => h(App)
}).$mount('#app')