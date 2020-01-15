<!--
 * @Author: your name
 * @Date: 2019-12-16 13:30:26
 * @LastEditTime : 2020-01-06 10:53:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/order.vue
 -->
<template>
  <div>
    <order-header :title="title">
      <template v-slot:tip>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view />
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';
import ServiceBar from '../components/ServiceBar';

export default {
  name: 'order',
  components: {
    OrderHeader,
    ServiceBar,
    NavFooter
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  mounted () {
    let path = this.$route.path
    if(path === '/order/confirm'){
      this.title = '订单确认'
      this.tip = '请认真填写收货地址'
    }else if(path === '/order/list'){
      this.title = '订单列表'
      this.tip = '请谨防钓鱼链接或诈骗电话'
    }else if(path === '/order/pay'){
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接或诈骗电话'
    }else{
      this.title = '订单支付'
      this.tip = '请谨防钓鱼链接或诈骗电话'
    }
  }
}
</script>