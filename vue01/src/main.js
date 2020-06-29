import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
// 按需引入
import './plugin/element.js'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
