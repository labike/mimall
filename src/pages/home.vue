<!--
 * @Author: your name
 * @Date: 2019-12-16 11:40:26
 * @LastEditTime: 2019-12-17 15:46:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/home.vue
 -->
<template>
  <div>
    <nav-header></nav-header>
    <router-view />
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'

export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>