import Vue from 'vue'
import App from './App.vue'
import Icon from './components/imgs/icons'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'
import Axios from 'axios';
import Qs from 'qs';

// Axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8'
let service = Axios.create({
  baseURL: '',
  // `headers` 是即将被发送的自定义请求头
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})
Vue.prototype.axios = service;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false

Vue.use(dataV)

new Vue({
  Icon,
  render: h => h(App)
}).$mount('#app')