import Vue from 'vue';

import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

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

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
