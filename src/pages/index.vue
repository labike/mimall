<!--
 * @Author: your name
 * @Date: 2019-12-16 11:39:53
 * @LastEditTime : 2019-12-28 09:35:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/index.vue
 -->
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : '/images/item-box-1.png'" alt="">
                      {{sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" alt="">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="item in adsList" :key="item.id">
          <img v-lazy="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
        <img v-lazy="'/images/banner-1.png'" alt=""></a>
      </div>
      <div class="product-box">
        <div class="container">
          <h3>手机</h3>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35">
                <img v-lazy="'/images/mix-alpha.jpg'" alt="">
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(arr, index) in phoneList" :key="index">
                <div class="item" v-for="item in arr" :key="item.id">
                  <span :class="{'new-pro' : item.id % 2 === 0}">新品</span>
                  <div class="item-img">
                    <img v-lazy="item.mainImage" alt="">
                  </div>
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal 
      title="提示信息" 
      sureText="查看购物车" 
      btnType="3" 
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import ServiceBar from '../components/ServiceBar'
import Modal from '../components/Modal'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    ServiceBar,
    Modal
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      slideList: [
        {
          id: '42',
          img: '/images/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/images/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/images/slider/slide-3.jpg'
        },
        {
          id: '47',
          img: '/images/slider/slide-1.jpg'
        },
        {
          id: '43',
          img: '/images/slider/slide-1.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/images/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: '/images/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/images/item-box-3.jpg',
            name: 'Redme K20 Pro'
          },
          {
            id: 33,
            img: '/images/item-box-4.jpg',
            name: '移动4G专区'
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img: '/images/ads/ads-1.png',
        },
        {
          id: 48,
          img: '/images/ads/ads-2.jpg',
        },
        {
          id: 45,
          img: '/images/ads/ads-3.png',
        },
        {
          id: 47,
          img: '/images/ads/ads-4.jpg',
        }
      ],
      phoneList: [],
      showModal: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(res => {
        res.list = res.list.slice(6, 14)
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart (id) {
      
      this.axios.post('/carts', {
        productId: id,
        selected: true
      }).then((res) => {
        this.showModal = true
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      }).catch(() => {
        this.showModal = true
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';

  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585a7a;
        box-sizing: border-box;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              display: block;
              position: relative;
              font-size: 16px;
              color: #fff;
              padding-left: 30px;
              &:after{
                content: '';
                position: absolute;
                right: 30px;
                top: 17.5px;
                @include bgImg(10px, 15px, '/images/icon-arrow.png')
              }
            }
            &:hover{
              background-color: #ff6600;
              .children{
                display: block;
              }
            }
            .children{
              display: none;
              width: 962px;
              height: 451px;
              background-color: #fff;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid #e5e5e5;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                a{
                  color: #333;
                  font-size: 14px;
                }
                img{
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 167px;
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 50px;
      h3{
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: $colorB;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 8px;
          a{
            img{
              width: 224px;
              height: 619px;
            }
          }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span{
                display: inline-block;
                width: 67px;
                height: 24px;
                background-color: #7ecf68;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
                &.new-pro{
                  background-color: #7ecf68;
                }
                &.kill-pro{
                  background-color: #e82626;
                }
              }
              .item-img{
                img{
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info{
                h3{
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price{
                  color: #f20a0a;
                  font-size: $fontJ;
                  font-weight: boldl;
                  cursor: pointer;
                  &:after{
                    @include bgImg(18px, 18px, '/images/icon-cart-hover.png');
                    content: '';
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>