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
            if(localLang === null){
                localLang = ((navigator.language).split('-'))[0];
                localStorage.setItem('lang',localLang);
            }
            if(localLang === 'ru') this.commit('setRussianLocale');
            else if(localLang === 'en') this.commit('setEnglishLocale');
            else this.commit('setRussianLocale');
        },
        setLocale({ commit, state }, ctx){
            if(ctx === 'ru') this.commit('setRussianLocale');
            else if(ctx === 'en') this.commit('setEnglishLocale');
            else this.commit('setRussianLocale');
            localStorage.setItem('lang',ctx);
        }
    },
    mutations: {
        setRussianLocale(state) {
            state.locale = 'ru';
        },
        setEnglishLocale(state) {
            state.locale = 'en';
        },

    }
}