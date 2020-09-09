import '../../ml';
export default {
    state: {
        locale:'ru'
    },
    getters: {
        myLocal: state => {
            return state.locale
        },
    },
    actions: {
        getLocaleFromBrouser({ commit, state }) {
            let localStorage = window.localStorage;
            let localLang = localStorage.getItem('lang');
            console.log(localLang);
            if(localLang === null){
                localLang = ((navigator.language).split('-'))[0];
                localStorage.setItem('lang',localLang);
            }
            if(localLang === 'ru') this.commit('setRussianLocale');
            else if(localLang === 'en' || localLang === 'english') this.commit('setEnglishLocale');
            else this.commit('setRussianLocale');
        },
        setLocale({ commit, state }, ctx){
            if(ctx === 'ru') this.commit('setRussianLocale');
            else if(ctx === 'english') this.commit('setEnglishLocale');
            else this.commit('setRussianLocale');
            localStorage.setItem('lang',ctx);
        }
    },
    mutations: {
        setRussianLocale(state) {
            state.locale = 'ru';
        },
        setEnglishLocale(state) {
            state.locale = 'english';
        },

    }
}