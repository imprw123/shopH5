<template>
  <div class="shopcart">
    <div class="contentBox">
      <transition name="draw">
        <div class="shopcart-list" v-show="cartShow">
          <div class="inshopList">
            <div class="list-header">
              <img
                src="https://img.5211game.com/5211/shop/Goods/Basic/10449.jpg?rand=637260850550241376"
                alt
              />
              <h1>83天梯积分重置</h1>
            </div>
            <div class="orderId">
              <span>订单号:</span>
              <em>5211Shop202005263485225594104000</em>
            </div>
            <div class="box">
              <div class="list-content">
                <div class="inforlist">
                  <div class="payFor">
                    <!-- 奖券支付 -->
                    <div class="inpayContent">
                      <div class="LotteryBalance">
                        <div class="inLotteryBalance">
                          <em class="BalanceIcon">
                            <img src="http://wap.shop.5211game.com/H5/Content/images/quan.png" alt />
                          </em>
                          <div class="inputBox">
                            <span>使用</span>
                            <input
                              type="number"
                              id="txtlottery"
                              placeholder="可用100"
                              class="LotteryNumber"
                              step="10"
                              max="0"
                              min="0"
                            />
                            <a href="javascript:;" class="Award">奖券</a>
                            <b class="lastMoney">余额：0</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 奖券支付 -->
                    <!-- 通宝支付 -->
                    <div class="inpayContent">
                      <div class="LotteryBalance">
                        <div class="inLotteryBalance">
                          <em class="BalanceIcon">
                            <img
                              src="http://wap.shop.5211game.com/H5/Content/images/tongbaopay.png"
                              alt
                            />
                          </em>

                          <div class="inputBox">
                            <span>通宝支付</span>
                            <b class="lastMoney">余额：0</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 通宝支付 -->
                    <!-- 微信支付 -->
                    <div class="inpayContent">
                      <div class="LotteryBalance">
                        <div class="inLotteryBalance">
                          <em class="BalanceIcon">
                            <img
                              src="http://wap.shop.5211game.com/H5/Content/images/weixinpay.png"
                              alt
                            />
                          </em>

                          <div class="inputBox">
                            <span>通宝支付</span>
                            <b class="lastMoney">余额：0</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 微信支付 -->
                    <!-- 支付宝 -->
                    <div class="inpayContent">
                      <div class="LotteryBalance">
                        <div class="inLotteryBalance">
                          <em class="BalanceIcon">
                            <img
                              src="http://wap.shop.5211game.com/H5/Content/images/zhifubaopay.png"
                              alt
                            />
                          </em>

                          <div class="inputBox">
                            <span>通宝支付</span>
                            <b class="lastMoney">余额：0</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 支付宝 -->

                    <button class="payforNumber">去支付</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="mask-fade">
        <div class="list-mask" v-show="cartShow" @click="hideList"></div>
      </transition>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  props: ["showPay"],
  data() {
    return {
      flod: this.showPay
    };
  },
  mounted() {},
  computed: {
    cartShow() {
      return this.showPay;
    }
  },
  methods: {
    hideList() {
      this.$emit("madefalse");
    }
  }
};
</script>

<style>
.shopcart {
  position: fixed;
  max-width: 540px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  width: 100%;
  height: 0px;
  z-index: 4;
  background-color: #5b5b6d;
}

.shopcart .contentBox {
  display: flex;
  background: #141d27;
}

.content-left {
  flex: 1;
}

.shopcart .list-header {
  padding: 0 0.26rem;
  background: #5b5b6d;
  border-bottom: 0.01rem solid #4b4b58;
  display: flex;
}
.shopcart .list-header h1 {
  flex: 10;
  font-size: 14px;
  padding-top: 0.15rem;
  padding-left: 0.15rem;
}
.shopcart .list-header img {
  flex: 1;
  font-size: 14px;
  width: 1.4rem;
  height: 1.4rem;
  position: relative;
  top: -0.5rem;
}
.shopcart-list {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  transform: translate3d(0, -100%, 0);
  background-color: #5b5b6d;
  color: #fff;
}
.draw-enter-active,
.draw-leave-active {
  transition: all 1s ease;
}
.draw-enter,
.draw-leave-to {
  transform: translate3d(0, 0, 0);
}

.list-mask {
  position: fixed;
  max-width: 540px;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: rgba(7, 17, 27, 0.6);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: -2;
  opacity: 1;
}
.mask-fade-enter-active {
  transition: all 0.3s;
}
.mask-fade-leave-active {
  transition: all 0.3s;
}
.mask-fade-enter {
  opacity: 0;
}
.mask-fade-leave-to {
  opacity: 0;
}
.shopcart .list-content {
  overflow: hidden;
  font-size: 0.3rem;
  font-family: "微软雅黑";
  vertical-align: middle;
}
.orderId {
  padding: 0 0.26rem;
  font-size: 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-top: 0.01rem solid #757586;
  border-bottom: 0.01rem solid #4b4b58;
}
.inLotteryBalance {
  border-top: 0.01rem solid #757586;
  border-bottom: 0.01rem solid #4b4b58;
  background-color: #4a4a67;
  padding: 0 0.18rem;
  height: 1rem;
  line-height: 1rem;
}
.BalanceIcon {
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  position: relative;
  top: 0.16rem;
}
.BalanceIcon img {
  width: 0.5rem;
  height: 0.5rem;
}
.inputBox {
  font-size: 0.26rem;
  margin-left: 0.15rem;
  color: #a3a3d2;
  display: inline-block;
}
.LotteryNumber {
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: #76769f;
  margin: 0 0.15rem;
}
.Award {
  color: #a3a3d2;
  font-family: "微软雅黑";
  font-size: 0.26rem;
}
.lastMoney {
  margin-left: 0.15rem;
}
.payforNumber {
  width:100%;
  display:block;
  height: 1rem;
  line-height:1rem;
  color: #fff;
  background-color: #4391f5;
  border: 0.01rem solid #3064a7;
  font-size: 0.3rem;
  font-family: '微软雅黑';
}
</style>

