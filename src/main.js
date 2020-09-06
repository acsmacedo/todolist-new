import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import './line-awesome/css/line-awesome.min.css'
import './boxicons/css/boxicons.min.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
