import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'english',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('english').create({
            welcome: {
                title: 'Do you need a website?',
                answer:'You went to the right place!'
            },
            services:{
                title:'Services that you can order',
                advantage:{
                    title:'What is the advantage?'
                }
            },
            msg: 'You have {f} friends and {l} likes'
        }),

        new MLanguage('ru').create({
            welcome: {
                title: 'Вам нужен сайт?',
                answer:'Вы зашли туда, куда надо!'
            },
            services:{
                title:'Услуги, которые Вы можете заказать',
                advantage:{
                    title:'В чём преимущество?'
                }
            },
            msg: 'У вас {f} друзей и {l} лайков'
        })
    ]
})