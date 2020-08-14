import Axios from "axios";
export default {
    state: {
        subheaderSize: '',
        iconsSize:''
    },
    getters: {
        subheaderSize: state => {
            return state.subheaderSize
        },
        iconsSize: state => {
            return state.iconsSize
        }
    },
    actions: {
    },
    mutations: {
        setSubheaderSize(state, display) {
            state.subheaderSize = display;
        },
        setIconsSize(state, size){
            state.iconsSize = size
        }
    }
}