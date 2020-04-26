import Vue from 'vue';
import Router from 'vue-router';
import Login from '../pages/Login';
import Home from '../home/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login/:id',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
