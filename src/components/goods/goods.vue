<template>
  <div class="box">
    <Header></Header>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li
            v-for="(item,index) in typeList"
            :key="index"
            :class="{'current': currentIndex == index}"
            @click="selectMenu(index)"
          >
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
     
      <div class="wrapper" ref="wrapper">
        <div class="bscroll-container">
          <!-- 刷新提示信息 -->
          <!-- <div class="top-tip">
            <span class="refresh-hook">{{pulldownMsg}}</span>
          </div> -->
          <!-- 内容列表 -->
          <ol>
            <li v-for="(item,index) in allLists" :key="index">
              <div class="icon">
                <img width="64" height="64"  v-lazy="item.Goods_imgPath" />
              </div>
              <div class="content">
                <h2 class="name">{{item.Goods_disName}}</h2>
                <div class="price">
                  <span class="now">
                    原价:
                    <em>{{item.Goods_Rebate_price_show}}</em>/
                    <em>{{item.Goods_unit}}</em>
                  </span>
                </div>
              </div>
            </li>
          </ol>
          <!-- 底部提示信息 -->
          <!-- <div class="bottom-tip">
            <span class="loading-hook">{{pullupMsg}}</span>
          </div> -->
        </div>
      </div>
    </div>
    <shopCar></shopCar>
  </div>
</template>

<script>
import Header from "../header/header.vue";
import shopCar from "../shopCar/shopCar.vue";

import BScroll from "better-scroll";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      typeList: [
        "全部",
        "会员",
        "平台头像",
        "主机颜色",
        "喇叭",
        "称号",
        "道具",
        "妖豆",
        "平台底纹"
      ],
      allLists: [],
      listHeight: [],
      scrollY: 0,
      cid: 1,
      seach: "",
      sort: "sale",
      pi: 0,
      ps: 10,
      // pulldownMsg: "下拉刷新",
      // pullupMsg: "加载更多",
      // alertHook: "none",
      count: 1,
      alllPage:0
    };
  },
  computed: {
    currentIndex() {
      return this.scrollY;
    }
  },
  created() {
    this._QueryGoodsAll();
  },
  mounted() {
    const that = this;
    this.$nextTick(() => {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.scroll = new BScroll(this.$refs.wrapper, {
        //初始化better-scroll
        probeType: 1, //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
        click: true //是否派发click事件
      });
      // 滑动过程中事件
      this.scroll.on("scroll", pos => {
        if (pos.y > 30) {
          this.pulldownMsg = "释放立即刷新";
        }
      });
      //滑动结束松开事件
      this.scroll.on("touchEnd", pos => {
        //上拉刷新
        if (pos.y > 10) {
          this.refreshData();
        } else if (pos.y < this.scroll.maxScrollY - 10) {
          //下拉加载

          this.getData();
        }
      });
    });
  },
  methods: {
    selectMenu(index) {
      this.scrollY = index;
    },
    //获取数据
    _QueryGoodsAll() {
      this.$axios("get", this.$ports.vip.QueryGoods, {
        cid: this.cid,
        seach: this.seach,
        sort: this.sort,
        pi: this.pi,
        ps: this.ps
      }).then(res => {
        console.log(res);
        this.alllPage=Math.ceil(res.data.count/10);
        this.allLists = res.data.list;
      });
    },
    getData() {
      this.pi++;
      if(this.pi>this.alllPage){
         Toast({
          message: "没有更多数据!",
          iconClass: "icon icon-success"
        });
        return false;
      }
      this.$axios("get", this.$ports.vip.QueryGoods, {
        cid: this.cid,
        seach: this.seach,
        sort: this.sort,
        pi: this.pi,
        ps: this.ps
      }).then(res => {
        console.log(res.data.list);
        this.pullupMsg = "加载中。。。";
        this.allLists = this.allLists.concat(res.data.list);
        this.pullupMsg = "加载更多";
        this.scroll.refresh();
      });
    },
    refreshData() {
      this.pi = 0;
      this.allLists = [];
      this.$axios("get", this.$ports.vip.QueryGoods, {
        cid: this.cid,
        seach: this.seach,
        sort: this.sort,
        pi: this.pi,
        ps: this.ps
      }).then(res => {
        console.log(res.data.list);

        this.allLists = res.data.list;
        this.pulldownMsg = "下拉刷新";
         Toast({
          message: "刷新成功!",
          iconClass: "icon icon-success"
        });
        //刷新列表后，重新计算滚动区域高度
        this.scroll.refresh();
      });
    }
  },
  components: {
    Header,
    shopCar
  }
};
</script>

<style>
.goods {
  position: absolute;
  top: 0.8rem;
  bottom: 0px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
}
.menu-wrapper {
  -webkit-box-flex: 0;
  flex: 0 0 1.4rem;
  background: #24242b;
}
.goods .wrapper {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.goods .wrapper h1 {
  padding: 0.2rem 0px;
  font-size: 0.12rem;
  padding-left: 0.2rem;
}
.wrapper h1 {
  color: #93999f;
  font-size: 14px;
  font-weight: normal;
  background: #24242b;
  border-left: 0.02rem solid #2c2c35;
}
.wrapper {
  background-color: #2c2c35;
}
.wrapper ol li {
  padding: 10px 0;
  border-bottom: 1px dashed #575766;
  margin: 0 20px;
  overflow: hidden;
  zoom: 1;
}
.wrapper ol li .icon {
  float: left;
  overflow: hidden;
  zoom: 1;
}
.wrapper ol li .content {
  float: left;
  padding-left: 0.1rem;
  font-size: 0.14rem;
  color: #fff;
  padding-left: 0.15rem;
}
.wrapper ol li .content h2 {
  font-size: 0.14rem;
  margin-bottom: 0.2rem;
}
.food-list-hook {
  overflow: hidden;
  zoom: 1;
}
.menu-wrapper ul li {
  width: 1.2rem;
  height: 1.2rem;
  display: table;
  font-size: 0.12rem;
  line-height: 1.2rem;
  padding: 0 0.1rem;
  text-align: center;
}
.menu-wrapper ul li.current {
  background-color: #6ab62c;
  color: #2d4d12;
}
.menu-wrapper ul li span {
  display: table-cell;
  vertical-align: middle;
  position: relative;
  font-size: 0.12rem;
  color: #fff;
}
</style>