// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './api/api.js';
import ports from './api/port.js'
import MintUI from 'mint-ui'
import { Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$axios = request;
Vue.prototype.$ports = ports;
Vue.use(MintUI)
Vue.use(Lazyload);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})