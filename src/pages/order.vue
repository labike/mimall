<!--
 * @Author: your name
 * @Date: 2019-12-16 13:30:26
 * @LastEditTime : 2020-01-15 14:55:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/order.vue
 -->
<template>
  <div>
    <router-view />
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter';
import ServiceBar from '../components/ServiceBar';

export default {
  name: 'order',
  components: {
    ServiceBar,
    NavFooter
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  }
}
</script>