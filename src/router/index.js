import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import Subscriptions from '../pages/Subscriptions.vue'
import Calendar from '../pages/Calendar.vue'

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/search',
    component: Search,
    name: 'search',
  },
  {
    path: '/subscriptions',
    component: Subscriptions,
    name: 'subscriptions',
  },
  {
    path: '/calendar',
    component: Calendar,
    name: 'calendar',
  }
];

export default new VueRouter({
  mode: 'history',
  routes
});