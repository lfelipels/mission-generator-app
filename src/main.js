import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Vuex from "vuex";
import store from "./store/index";

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  vuetify,
  router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount('#app');
