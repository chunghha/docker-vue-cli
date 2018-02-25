import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Table from './views/Table.vue';
import Form from './views/Form.vue';
import Chart from './views/Chart.vue';

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
  ],
});
