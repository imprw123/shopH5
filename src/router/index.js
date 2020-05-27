import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods.vue'
import home from '@/components/home/home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/goods',
            name: 'Goods',
            component: goods
        },
        {
            path: '/',
            name: 'home',
            component: home
        }
    ]
})