import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import './line-awesome/css/line-awesome.min.css'

Vue.config.productionTip = false
console.log(store.state)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
