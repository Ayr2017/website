import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage';
import ar from './ar';
import ru from './ru';
import en from './en';
Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'ru',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('en').create(en),

        new MLanguage('ru').create(ru),

        new MLanguage('ar').create(ar),
    ]
})