<template>
  <transition name="bounce">
    <div class="boxDetail"  ref="food">
      <div class="detail">
        <div class="food-content">
          <div class="imgShow">
            <i class="icon-close" @click="hideFood">×</i>
            <img
              src="//img.5211game.com/5211/shop/Goods/Basic/10844.jpg?rand=637256830913142098"
              onerror="Public.fImgNofind();"
              alt="赞助（30天）"
            />
          </div>
          <div class="content">
            <h4>一级等级警经验</h4>
            <p>1级-等级经验</p>
            <div class="yj-price">
              原 价：
              <em class="sale-xian">500</em> 通宝 /个
            </div>
          </div>

          <div class="like">
            <!-- 猜你喜欢 -->
            <div class="product">
              <h2>
                <img src="http://wap.shop.5211game.com/H5/Content/images/like.png" alt />
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
            </div>
            <!-- 猜你喜欢 -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import BScroll from "better-scroll";
export default {
  props: ["showFlag"],
  data() {
    return {
      Flag: this.showFlag
    };
  },
  mounted() {
       this.$nextTick(() => {
         if (!this.foodScroll) {
           this.foodScroll = new BScroll(this.$refs.food, {
             click: true
           })
         } else {
           this.foodScroll.refresh()
         }

    });
  },
  methods: {
    hideFood() {
      this.$emit("closeModel", false);
    }
  }
};
</script>


<style >
.boxDetail {
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0px;
  background-color: #2c2c35;
}
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.food-content {
  background-color: #2c2c35;
}
.imgShow {
  position: relative;
  width: 100%;
  overflow: hidden;
  zoom: 1;
  padding-bottom: 100%;
}
.imgShow img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.icon-close {
  display: inline-block;
  padding: 0.1rem;
  color: #fff;
  font-size: 0.6rem;
  position: absolute;
  top: 0px;
  left: 0.3rem;
  z-index: 1;
}
.food-content .content {
  padding: 0.2rem 0.3rem;
  background-color: #3c3c47;
  border-bottom: 0.01rem solid #31313a;
}
.food-content .content h4 {
  font-size: 0.25rem;
  color: #fff;
  margin-bottom: 0.15rem;
}
.food-content .content p {
  font-size: 0.2rem;
  color: #b3b3ce;
  margin-bottom: 0.15rem;
}
.yj-price {
  font-size: 0.2rem;
  color: #fff;
}
</style>