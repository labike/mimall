import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import env from './util/env'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
axios.interceptors.response.use(response => {
  let res = response.data
  if(res.status === 0){
    return res.data
  }else if(res.status === 10){
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
