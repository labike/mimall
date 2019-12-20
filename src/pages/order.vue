<!--
 * @Author: your name
 * @Date: 2019-12-16 13:30:26
 * @LastEditTime: 2019-12-17 15:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/order.vue
 -->
<template>
  <div>
    order
    <order-header></order-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';

export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>