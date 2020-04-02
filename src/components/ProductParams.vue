<!--
 * @Author: your name
 * @Date: 2020-01-01 15:50:08
 * @LastEditTime : 2020-01-03 11:19:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/components/ProductParams.vue
 -->
<template>
  <div class="nav-bar" :class="{'is_fixed': isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-params">
        <a href="">概述</a>
        <span>|</span>
        <a href="">参数</a>
        <span>|</span>
        <a href="">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    title: String
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .nav-bar{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid $colorH;
    background-color: $colorG;
    z-index: 10;
    &.is_fixed{
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-title{
        color: $colorB;
        font-size: $fontH;
        font-weight: bold;
      }
      .pro-params{
        font-size: $fontJ;
        a{
          color: $colorC;
        }
        span{
          margin: 0 10px;
        }
      }
    }
    
  }
</style>