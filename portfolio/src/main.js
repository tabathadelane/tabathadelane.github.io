import Vue from 'vue'
import App from './App.vue'

// require('./assets/style.css')
require('./assets/img/headshot.jpeg')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
