<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted(){
    var _that=this;
 window.onresize = function() {
      _that.getRem(720, 100);
    };
    this.getRem(720, 100);
  },
  methods:{
     getRem: function(pwidth, prem) {
      var html = document.getElementsByTagName("html")[0];
      var oWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = (oWidth / pwidth) * prem + "px";
    },
  }
};
</script>

<style>
@charset "utf-8";

/* 禁用iPhone中Safari的字号自动调整 */
html {
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
	font-family:'微软雅黑';
}

/* 去除iPhone中默认的input样式 */


/* 取消链接高亮  */
body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 设置HTML5元素为块 */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}

/* 图片自适应 */
img {
	height: auto;
	width: auto\9; /* ie8 */
	-ms-interpolation-mode: bicubic;/*为了照顾ie图片缩放失真*/	
}

/* 初始化 */
body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	margin: 0;
	padding: 0;
	border: none;
}
body {
	font: 14px Microsoft YaHei, '宋体' Tahoma, Arial, sans-serif;
	color: #555;
	background-color:#2c2c35;
}
em, i {
	font-style: normal;
}
strong {
	font-weight: normal;
}
.clearfix:after {
	content: "";
	display: block;
	visibility: hidden;
	height: 0;
	clear: both;
}
.clearfix {
	zoom: 1;
}
a {
	text-decoration: none;
	color: #3b2c2c;
	font-family: '宋体', Microsoft YaHei, Tahoma, Arial, sans-serif;
}
a:hover {
	color: #FED503;
	text-decoration: none;
}
ul, ol {
	list-style: none;
}

h1, h2, h3, h4, h5, h6 {
	font-size: 100%;
	font-family: Microsoft YaHei;
}
img {
	border: none;
}
#app {
  font-family: "微软雅黑";
  max-width:7.2rem;
   margin: 0 auto;
   
}
ul{
  resize: none;
   list-style-type:none;
}
</style>
