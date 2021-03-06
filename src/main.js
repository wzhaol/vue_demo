/// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {currency} from './util/currency'
import VueLazyload from 'vue-lazyload'
import vuex from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
Vue.filter("currency",currency)
Vue.use(vuex)


Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  try: 3 // default 1
})

const store = new vuex.Store({
   state:{
    nickName:'',
    cartCount:0
   },
   mutations:{
    updateUserInfo(state,nickName){
      state.nickName = nickName
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount
    },
    initCartCount(state,cartCount){
      state.cartCount = cartCount
    }
   }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted(){
   
  },
  methods:{
   
  },
  template: '<App/>',
 
  components: { App }
});
