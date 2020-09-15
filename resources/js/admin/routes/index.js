import Vue from 'vue';
import VueRouter from 'vue-router';

import AdminStart from '../components/views/AdminStart.vue'
import Blog from '../components/views/Blog.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        name:'adminstart',
        component: AdminStart
    },
    {
        path: '/admin/blog',
        name:'blog',
        component: Blog
    },
    {
        path: '/admin/blog/:id',
        name:'blog',
        component: Blog
    },
    {
        path: '/admin',
        name:'adminstart',
        component: AdminStart
    },
    {
        path: '*',
        name:'page404',
        component: AdminStart
    },
];

const routerA = new VueRouter({
    routes,
    mode: 'history',
    // scrollBehavior (to, from, savedPosition) {
    //     // возвращаем требуемую позицию прокрутки
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //           resolve({ x: 0, y: 0 })
    //         }, 500)
    //       })
    //   }
});

export default routerA;
