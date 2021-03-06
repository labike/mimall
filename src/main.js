import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'

import App from './App.vue'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
axios.interceptors.response.use(response => {
  let res = response.data
  let path = location.hash
  if(res.status === 0){
    return res.data
  }else if(res.status === 10){
    if(path !== '#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else{
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, (err) => {
  let res = err.response
  Message.error(res.data.message)
  return Promise.reject(err)
})

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/images/loading-svg/loading-bars.svg'
})
Vue.prototype.$message = Message

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
