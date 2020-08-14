import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from '../components/views/Welcome.vue';
import Contacts from '../components/views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name:'welcome',
        component: Welcome
    },
    {
        path: '/contacts',
        name:'contacts',
        component: Contacts
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        // возвращаем требуемую позицию прокрутки
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ x: 0, y: 0 })
            }, 500)
          })
      }
});

export default router;