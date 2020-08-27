import axios from "axios";
export default {
    state: {
        sendMessageBtnLoading: false,
        snackbar: false,
        snackbarColor: 'warning',
        snackbarText: ''
    },
    getters: {
        discussBtnLoading: state => {
            return state.sendMessageBtnLoading
        },
        snackbarState: state=>{
            return state.snackbar
        },
        snackbarColor: state => {
            return state.snackbarColor;
        },
        snackbarText: state=>{
            return state.snackbarText;
        }
    },
    actions: {
        sendMessage({ commit, state },ctx) {
            this.commit('sendMessageBtnLoadingTrue');
            axios
                .post("./message", ctx.data, ctx.config)
                .then((response) => {
                    if (response.status == 200) {
                        this.commit('showSnackbar')
                        this.commit('successSnackbar');
                        this.commit('snackbarTextSuccess');
                    } else {
                        console.error(response);
                        this.commit('showSnackbar')
                        this.commit('errorSnackbar');
                        this.commit('snackbarTextError');
                    }
                })
                .catch((e) => {
                    console.error(e);
                    this.commit('showSnackbar')
                    this.commit('errorSnackbar');
                    this.commit('snackbarTextError');
                })
                .finally(() => {
                    this.commit('sendMessageBtnLoadingFalse');
                });
        },
    },
    mutations: {
        sendMessageBtnLoadingTrue(state) {
            state.sendMessageBtnLoading = true;
        },
        sendMessageBtnLoadingFalse(state) {
            state.sendMessageBtnLoading = false;
        },
        showSnackbar(state) {
            state.snackbar = true;
        },
        hideSnackbar(state) {
            state.snackbar = false;
        },
        successSnackbar(state) {
            state.snackbarColor = 'success';
        },
        errorSnackbar(state) {
            state.snackbarColor = 'error';
        },
        snackbarTextSuccess(state) {
            state.snackbarText = 'Ваше письмо удачно отправлено. Если прочитаю - свяжусь, возможно.'
        },
        snackbarTextError(state) {
            state.snackbarText = 'Отправка письма потерпела неудачу. Позвоните лучше, обсудим.'
        }
    }
}