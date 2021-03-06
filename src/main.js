import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.use(Vuetify);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
