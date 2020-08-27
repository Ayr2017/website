import Vue from 'vue';
import Vuex from 'vuex';


import global from'./modules/global';
import contacts from'./modules/contacts';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        global,
        contacts
    }
})