<!--
 * @Author: your name
 * @Date: 2019-12-17 15:33:18
 * @LastEditTime : 2020-01-05 15:14:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/OrderHeader.vue
 -->
<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'

export default {
  name: 'order-header',
  components: {
    
  },
  props: {
    title: String,
  },
  computed: {
    username () {
      return this.$store.state.username
    }
    // ...mapState(['username'])
  },
}
</script>

<style lang="scss">
  .order-header{
    padding: 30px 0;
    border-bottom: 2px solid #ff6600;
    .header-logo{
      float: left;
    }
    .title,.username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title{
      h2{
        float: left;
        color: #333;
        margin-left: 54px;
        span{
          font-size: 14px;
          margin-left: 17px;
          color: #999;
        }
      }
    }
    .username{
      float: right;
      a{
        color: #666;
        font-size: 16px;
      }
    }
  }
</style>