import Vue from 'vue'
import normalize from 'normalize.css'
import '@/assets/styles.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueParticles from 'vue-particles'
import VueNativeNotification from 'vue-native-notification'

Vue.config.productionTip = false

Vue.use(VueParticles)
Vue.use(VueNativeNotification, {
  requestOnNotify: true
})

new Vue({
  normalize,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
