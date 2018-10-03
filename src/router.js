import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import LogIn from './components/LogIn.vue';
import Landing from './components/Landing.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: LogIn,
        },
        {
          path: '/landing',
          name: 'landing',
          component: Landing,
        },
      ],
    },
  ],
});
