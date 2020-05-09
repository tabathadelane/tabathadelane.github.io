import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
 

import titleMixin from './mixins/titleMixin'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// library.add(faFontAwesome)
// library.add(faCoffee)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
