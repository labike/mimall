<!--
 * @Author: your name
 * @Date: 2019-12-16 12:00:30
 * @LastEditTime: 2019-12-17 15:24:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/NaviFooter.vue
 -->
<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/images/logo-footer.png" alt="">
      <p>我的商城</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/labike">Github</a>
      <a href="http://www.labike.xyz">Blog</a>
    </div>
    <div class="copyright">Copyright 2019</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss">
  .footer{
    height: 234px;
    border-top: 4px solid #ff6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        widows: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999;
        display: inline-block;
      }
      span{
        margin: 0 10px
      }
      margin-bottom: 13px;
    }
    .copyright{
      color: #ff6600;
    }
  }
</style>