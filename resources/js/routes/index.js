import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from '../components/views/Welcome.vue';
import Contacts from '../components/views/Contacts.vue';
import Websites from '../components/views/Websites.vue';
import Desktopapp from '../components/views/Desktopapp.vue';
import Webanimation from '../components/views/Webanimation.vue';
import Allservices from '../components/views/Allservices.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name:'welcome',
        component: Welcome
    },
    {
        path: '/websites',
        name:'websites',
        component: Websites
    },
    {
        path: '/allservices',
        name:'allservices',
        component: Allservices
    },
    {
        path: '/desktopapp',
        name:'desktopapp',
        component: Desktopapp
    },
    {
        path: '/webanimation',
        name:'webanimation',
        component: Webanimation
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