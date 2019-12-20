<!--
 * @Author: your name
 * @Date: 2019-12-16 13:31:06
 * @LastEditTime: 2019-12-17 15:37:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/cart.vue
 -->
<template>
  <div>
    cart
    <order-header></order-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';

export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>