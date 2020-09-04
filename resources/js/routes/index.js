import Vue from 'vue';
import VueRouter from 'vue-router';

// import Welcome from '../components/views/Welcome.vue';
// import Contacts from '../components/views/Contacts.vue';
// import Websites from '../components/views/Websites.vue';
// import Desktopapp from '../components/views/Desktopapp.vue';
// import Webanimation from '../components/views/Webanimation.vue';
// import Allservices from '../components/views/Allservices.vue';
// import Page404 from '../components/views/Page404.vue';
// import Allandgoodbye from '../components/views/Allandgoodbye.vue';

const Welcome = () => import('../components/views/Welcome.vue');
const Contacts = () => import('../components/views/Contacts.vue');
const Websites = () => import('../components/views/Websites.vue');
const Desktopapp = () => import('../components/views/Desktopapp.vue');
const Webanimation = () => import('../components/views/Webanimation.vue');
const Allservices = () => import('../components/views/Allservices.vue');
const Page404 = () => import('../components/views/Page404.vue');
const Allandgoodbye = () => import('../components/views/Allandgoodbye.vue');

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
    {
        path: '/all_and_good_by',
        name:'Allandgoodbye',
        component: Allandgoodbye
    },
    {
        path: '*',
        name:'page404',
        component: Page404
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