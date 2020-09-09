import Vue from 'vue';
import Vuex from 'vuex';


import global from'./modules/global';
import contacts from'./modules/contacts';
import locales from'./modules/locales';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        global,
        contacts,
        locales
    }
})