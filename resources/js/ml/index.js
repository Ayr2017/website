import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import ar from './ar'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('en').create({
            welcome: {
                title: 'Do you need a website?',
                answer: 'You went to the right place!'
            },
            services: {
                title: 'Services that you can order',
                advantage: {
                    title: 'What is the advantage?',
                }
            },
            menu: {
                home: 'Home',
                allservices: 'All services',
                websites: 'Web-sites',
                desktopapp:'Desktop apps',
                htmlanimation: 'HTML5-animation',
                contacts: 'Discuss/Contacts'
            },
            header:{
                websitedev:'Web-sites',
                allservices:'All services',
                discussproject:'Discuss project',
            },
            msg: 'You have {f} friends and {l} likes'
        }),

        new MLanguage('ru').create({
            welcome: {
                title: 'Вам нужен сайт?',
                answer: 'Вы зашли туда, куда надо!'
            },
            services: {
                title: 'Услуги, которые Вы можете заказать',
                advantage: {
                    title: 'В чём преимущество?'
                }
            },
            menu: {
                home: 'Главная',
                allservices: 'Все услуги',
                websites: 'Веб-сайты',
                desktopapp:'Десктопные приложения',
                htmlanimation: 'HTML5-анимация',
                contacts: 'Обсудить проект/Контакты'
            },
            header:{
                websitedev:'Разработка сайтов',
                allservices:'Все услуги',
                discussproject:'Обсудить проект',
            },
            msg: 'У вас {f} друзей и {l} лайков'
        }),

        new MLanguage('ar').create(ar),
    ]
})