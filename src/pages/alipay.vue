<!--
 * @Author: your name
 * @Date: 2019-12-16 13:32:29
 * @LastEditTime: 2019-12-17 15:29:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/alipay.vue
 -->
<template>
  <div class="ali-pay">
    <loading v-if="loading" />
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from '../components/Loading'

export default {
  name: 'alipay',
  components: {
    Loading
  },
  data () {
    return {
      loading: true,
      orderId: this.$route.query.orderId,
      content: ''
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: '仿小米商城',
        amount: 0.01,
        payType: 1
      }).then(res => {
        this.content = res.content
        setTimeout(() => {
          document.forms[0].submit()
        }, 100)
      })
    }
  }
}
</script>