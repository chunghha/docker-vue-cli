import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Table from './views/Table.vue';
import Form from './views/Form.vue';
import Chart from './views/Chart.vue';
import Carousel from './views/Carousel.vue';
import Picker from './views/Picker.vue';
import Snackbar from './views/Snackbar.vue';
import Subheader from './views/Subheader.vue';
import Tabs from './views/Tabs.vue';
import Youtube from './views/Youtube.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel,
    },
    {
      path: '/picker',
      name: 'picker',
      component: Picker,
    },
    {
      path: '/snackbar',
      name: 'snackbar',
      component: Snackbar,
    },
    {
      path: '/subheader',
      name: 'subheader',
      component: Subheader,
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs,
    },
    {
      path: '/youtube',
      name: 'youtube',
      component: Youtube,
    },
  ],
});
