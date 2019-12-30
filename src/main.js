import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

// import env from './util/env'
import App from './App.vue'

//axios.defaults.baseURL = env.baseURL
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
  }else{
    alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/images/loading-svg/loaading.bars.svg'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
