<!--
 * @Author: your name
 * @Date: 2019-12-16 12:00:00
 * @LastEditTime : 2020-01-16 12:42:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mimall/src/pages/orderList.vue
 -->
<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order, index) in orderList" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号: {{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-info fr">
                <span>应付金额:</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item, index2) in order.orderItemVoList" :key="index2">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">
                      {{item.productName}}
                    </div>
                    <div class="p-money">
                       {{item.totalPrice + 'X' + item.quantity}}元
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status === 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <el-pagination
            v-if="true"
            class="pagiantion"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
          >
          </el-pagination> 
          <div class="load-more" v-if="false">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <div class="scroll-more"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="true" 
            infinite-scroll-distance="410"
            v-if="false"
          >
            <img v-show="loading" src="/image/loading-svg/loading-spinning-bubbles.svg" alt="">
          </div>
          <no-data v-if="!loading && orderList.length === 0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader';
import Loading from '../components/Loading';
import NoData from '../components/NoData';
import {Pagination, Button} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'order-list',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: {
    infiniteScroll
  },
  data () {
    return {
      loading: false,
      orderList: [],
      pageSize: 10,
      pageNum: 1,
      total: 0,
      busy: false, //滚动加载
      showNextPage: true //是否显示加载更多
    }
  },
  mounted () {
    this.getOrderList()
  },
  methods: {
    getOrderList () {
      this.loading = true
      this.busy = true
      this.axios.get('/orders', {
        params: {
          pageSize: 10,
          pageNum: this.pageNum
        }
      }).then(res => {
        this.loading = false
        this.orderList = this.orderList.concat(res.list)
        this.total = res.total
        this.showNextPage = res.hasNxetPage
        this.busy = false
      }).catch(() => {
        this.loading = false
      })
    },
    goPay (orderNo) {
      // name方式
      // this.$router.push({
      //   name: 'order-pay',
      //   query: {
      //     orderNo
      //   }
      // })
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    },
    /*分页器*/
    handleChange (pageNum) {
      this.pageNum = pageNum
      this.getOrderList()
    },
    /*点击加载更多*/
    loadMore () {
      this.pageNum++
      this.getOrderList()
    },
    /*scrollMore滚动加载*/
    getList () {
      this.loading = true
      this.axios.get('/orders', {
        params: {
          pageSize: 10,
          pageNum: this.pageNum
        }
      }).then(res => {
        this.orderList = this.orderList.concat(res.list)
        this.loading = false
        if(res.hasNxetPage){
          this.busy = false
        }else{
          this.busy = true
        }
      })
    },
    scrollMore () {
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getList()
      }, 500)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';

  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagiantion{
          text-align: right;
        }
        .load-more,.scroll-more{
          text-align: center;
        }
      }
    }
  }
</style>