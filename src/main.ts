import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import VueYoutube from 'vue-youtube';
import VueChartkick from 'vue-chartkick';
import Chart from 'chart.js';
import 'babel-polyfill';

import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.darken4,
    secondary: colors.orange.lighten4,
    accent: colors.cyan.base,
  },
});
Vue.use(VueYoutube);
Vue.use(VueChartkick, { adapter: Chart });

export const eventBus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
