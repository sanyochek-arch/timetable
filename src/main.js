import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.filter('uppercase')
export const eventBus=new Vue({

})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
