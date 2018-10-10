import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import LogIn from './components/LogIn.vue';
import HumanReview from './components/HumanReview.vue';

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
        }, {
          path: '/humanreview',
          name: 'humanreview',
          component: HumanReview,
        },
      ],
    },
  ],
});
