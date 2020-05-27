<template>
  <div class="container">
    <div class="inContainer">
      <div class="mainBox">
        <Header></Header>
        <div class="banner">
          <img v-lazy="'http://wap.shop.5211game.com/H5/Content/images/banner.png'" alt />
        </div>
        <div class="Secondary">
          <ul>
            <li>
              <router-link :to="{path:'/goods'}">
                <p>
                  <img
                    :src="'http://wap.shop.5211game.com/H5/Content/images/plat-sever.png'"
                    height="86"
                    width="86"
                    alt
                  />
                </p>
                <p>
                  <span>平台服务</span>
                </p>
              </router-link>
            </li>
            <li>
              <p>
                <img
                  :src="'http://wap.shop.5211game.com/H5/Content/images/dota.png'"
                  height="86"
                  width="86"
                  alt
                />
              </p>
              <p>
                <span>平台服务</span>
              </p>
            </li>
            <li>
              <p>
                <img
                  :src="'http://wap.shop.5211game.com/H5/Content/images/imba.png'"
                  height="86"
                  width="86"
                  alt
                />
              </p>
              <p>
                <span>平台服务</span>
              </p>
            </li>
            <li>
              <p>
                <img
                  :src="'http://wap.shop.5211game.com/H5/Content/images/game.png'"
                  height="86"
                  width="86"
                  alt
                />
              </p>
              <p>
                <span>平台服务</span>
              </p>
            </li>
            <li>
              <p>
                <img
                  :src="'http://wap.shop.5211game.com/H5/Content/images/plat-sever.png'"
                  height="86"
                  width="86"
                  alt
                />
              </p>
              <p>
                <span>平台服务</span>
              </p>
            </li>
          </ul>
        </div>

        <!-- 新平推荐 -->
        <div class="product">
          <h2>
            <img src="http://wap.shop.5211game.com/H5/Content/images/newproduct.png" alt />
          </h2>
          <div class="newsBox">
            <div class="newsBox-left">
              <img
                v-lazy=" '//img.5211game.com/5211/shop/Goods/Basic/20047.jpg?rand=637256830913142098' "
                alt
                @click="flag =true"
              />
            </div>
            <div class="newsBox-right">
              <p class="name">春季通行证plus</p>
              <div class="saleMoney">
                <em>秒杀价:</em>
                <b>81800</b>通宝/永久
              </div>
            </div>
            <button class="ljgm" @click="MadeTrue">立即购买1</button>
          </div>
        </div>
        <!-- 新平推荐 -->

        <!-- 限时抢购 -->
        <div class="product">
          <h2>
            <img src="http://wap.shop.5211game.com/H5/Content/images/qg.png" alt />
          </h2>
          <div class="boxPr">
            <div class="newsBox" v-for="item in 5">
              <div class="newsBox-left">
                <img
                  v-lazy=" '//img.5211game.com/5211/shop/Goods/Basic/20047.jpg?rand=637256830913142098' "
                  alt
                />
              </div>
              <div class="newsBox-right">
                <p class="name">春季通行证plus</p>
                <div class="saleMoney">
                  <em>秒杀价:</em>
                  <b>81800</b>通宝/永久
                </div>
              </div>
              <button class="ljgm">立即购买</button>
            </div>
          </div>

          <div class="more">more</div>
        </div>
        <!-- 限时抢购 -->

        <div class="lunbo">
          <mt-swipe :show-indicators="false" :auto="4000">
            <!-- 平台服务 -->
            <mt-swipe-item>
              <div class="show">
                <div class="titleHeader">
                  <img src="http://wap.shop.5211game.com/H5/Content/images/plant.png" alt />
                </div>
                <div class="inMainProduct">
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                </div>
                <div class="more">more</div>
              </div>
            </mt-swipe-item>
            <!-- 平台服务 -->

            <!-- 游戏道具 -->
            <mt-swipe-item>
              <div class="show">
                <div class="titleHeader">
                  <img src="http://wap.shop.5211game.com/H5/Content/images/index-game.png" alt />
                </div>
                <div class="inMainProduct">
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                </div>
                <div class="more">more</div>
              </div>
            </mt-swipe-item>
            <!-- 游戏道具 -->

            <!-- DOTA -->
            <mt-swipe-item>
              <div class="show">
                <div class="titleHeader">
                  <img src="http://wap.shop.5211game.com/H5/Content/images/index-dota.png" alt />
                </div>
                <div class="inMainProduct">
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                </div>
                <div class="more">more</div>
              </div>
            </mt-swipe-item>
            <!-- DOTA -->

            <!-- imba -->
            <mt-swipe-item>
              <div class="show">
                <div class="titleHeader">
                  <img src="http://wap.shop.5211game.com/H5/Content/images/index-imba.png" alt />
                </div>
                <div class="inMainProduct">
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                </div>
                <div class="more">more</div>
              </div>
            </mt-swipe-item>
            <!-- imba -->

            <!-- rpg -->
            <mt-swipe-item>
              <div class="show">
                <div class="titleHeader">
                  <img src="http://wap.shop.5211game.com/H5/Content/images/index-rpg.png" alt />
                </div>
                <div class="inMainProduct">
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                  <div class="leftProduct">
                    <div class="img-pic">
                      <img
                        src="//img.5211game.com/5211/shop/Goods/Basic/17372.jpg?rand=637256830913142098"
                      />
                    </div>
                    <h4>保持拽</h4>
                    <div class="saleMoney">
                      原 价：
                      <b>2000</b>通宝/永久
                    </div>
                  </div>
                </div>
                <div class="more">more</div>
              </div>
            </mt-swipe-item>
            <!-- rpg -->
          </mt-swipe>
        </div>
        <shopCar v-bind:showPay="payFlag" v-on:madefalse="MadeFalse"></shopCar>
        <productDetail v-bind:showFlag="flag" v-on:closeModel="closeM" v-show="flag"></productDetail>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../header/header.vue";
import productDetail from "../productDetail/productDetail.vue";
import shopCar from "../shopCar/shopCar.vue";
export default {
  data() {
    return {
      flag: false,
      payFlag: false
    };
  },
  mounted() {
  },
  components: {
    Header,
    productDetail,
    shopCar
  },
  methods: {
    closeM() {
      this.flag = false;
    },
    MadeTrue() {
      this.payFlag = true;
    },
    MadeFalse() {
      this.payFlag = false;
    }
  }
};
</script>

<style>
.inContainer {
  width: 100%;
}
.banner {
  width: 100%;
  height: 3.2rem;
}
.banner img {
  width: 100%;
  height: 3.2rem;
}
.Secondary {
  padding: 0.3rem 0.2rem;
  background: #2c2c35;
}
.Secondary ul {
  width: 100%;
  display: flex;
}
.Secondary ul li a {
  font-family: "微软雅黑";
}
.Secondary ul li {
  flex: 1;
  text-align: center;
}
.Secondary ul li p {
  font-size: 0.16rem;
  margin-bottom: 0.3rem;
}
.Secondary ul li p img {
  width: 0.9rem;
  height: 0.9rem;
}
.Secondary ul li p span {
  color: #fff;
}
.product {
  width: 100%;
  margin-bottom: 0.4rem;
}
.product h2 {
  font-size: 0.25rem;
  color: #fff;
  font-weight: normal;
  padding: 0.2rem 0.2rem;
  background-color: #3c3c47;
  border-bottom: 1px solid #31313a;
  position: relative;
}
.product h2 img {
  width: 2.74rem;
  height: 0.39rem;
  display: block;
  margin: 0 auto;
}
.newsBox {
  height: 1.4rem;
  background-color: #3c3c47;
  border-top: 1px solid #4f4f5e;
  position: relative;
  padding: 0.3rem 0.4rem;
  position: relative;
  margin-bottom: 0.1rem;
  overflow: hidden;
  zoom: 1;
}
.newsBox-left {
  float: left;
  width: 1.2rem;
  height: 1.2rem;
}
.newsBox-left img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.08rem;
}
.newsBox-right {
  float: left;
  padding-left: 0.15rem;
  font-size: 0.16rem;
  color: #fff;
}
.newsBox-right .name {
  font-size: 0.28rem;
  margin-bottom: 0.2rem;
}
.saleMoney b {
  color: #fee100;
  padding: 0 0.1rem;
}
.newsBox .ljgm {
  padding: 0.1rem 0.2rem;
  color: #fff;
  background-color: #cd3939;
  display: inline-block;
  border: 1px solid #f25d5d;
  font-family: "微软雅黑";
  position: absolute;
  top: 0.8rem;
  right: 0.2rem;
  border-radius: 0.02rem;
}
.boxPr {
  overflow: hidden;
  zoom: 1;
}
.more {
  font-size: 0.26rem;
  color: #cfcfeb;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #3c3c47;
  border-top: 1px solid #4f4f5e;
  text-align: center;
}
.lunbo {
  height: 4.63rem;
  margin-bottom: 0.3rem;
}
.titleHeader {
  font-size: 0.25rem;
  color: #fff;
  font-weight: normal;
  padding: 0.2rem 0.2rem;
  background-color: #3c3c47;
  border-bottom: 1px solid #31313a;
  position: relative;
}
.titleHeader img {
  width: 2.74rem;
  height: 0.39rem;
  display: block;
  margin: 0 auto;
}
.inMainProduct {
  background-color: #3c3c47;
  border-top: 1px solid #4f4f5e;
  overflow: hidden;
  zoom: 1;
  display: flex;
}
.leftProduct {
  flex: 1;
  padding-bottom: 0.5rem;
  position: relative;
}
.leftProduct .img-pic {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 auto;
  background-color: #fff;
  border: 0.05rem solid #4391f5;
  margin-top: 0.4rem;
}
.img-pic img {
  width: 1.2rem;
  height: 1.2rem;
}
.leftProduct h4 {
  font-size: 0.24rem;
  color: #fff;
  text-align: center;
  margin: 0.2rem 0;
}
.saleMoney {
  font-size: 0.2rem;
  color: #fff;
  text-align: center;
}
.leftProduct:after {
  content: "";
  width: 0.02rem;
  height: 1.8rem;
  background-color: #4b4b58;
  position: absolute;
  top: 0.4rem;
  left: 0px;
}
</style>