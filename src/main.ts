import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'
import i18n from './i18n'

Vue.config.productionTip = false

export const bus = new Vue()

new Vue({
  router,
  i18n: i18n,
  render: h => h(App)
}).$mount('#app')
