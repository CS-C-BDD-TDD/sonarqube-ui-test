import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import Quasar from 'quasar';
import iconSet from 'quasar-framework/icons/fontawesome';
import 'quasar-extras/fontawesome';
import './styles/quasar.styl';

const myApiClient = {};

Vue.prototype.$api = myApiClient;

Vue.use(Quasar, {
  config: {}, iconSet,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
