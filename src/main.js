import Vue from "vue";
import normalize from "normalize.css";
import "@/assets/styles.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueParticles from "vue-particles";

Vue.config.productionTip = false;

Vue.use(VueParticles);

new Vue({
  normalize,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
