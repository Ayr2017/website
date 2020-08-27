<template>
  <v-col xs="12" sm="12" md="6" lg="6">
    <div :class="[subheaderSize, 'font-weight-thin mb-10 elev-1 text--secondary'] ">Обсудить проект</div>
    <v-card outlined color="#fff5">
      <v-form ref="form" @submit.prevent="submit">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
          <v-text-field label="Ваше имя" clearable v-model.trim="username" :rules="username_rule"  @input="$v.username.$touch()" @blur="$v.username.$touch()"></v-text-field>
          <v-text-field label="Телефон" v-model.trim="userphone" :rules="userphone_rule" @input="$v.userphone.$touch()"></v-text-field>
          <v-text-field label="E-mail" v-model.trim="useremail" :rules="useremail_rule" @input="$v.useremail.$touch()"></v-text-field>
          <v-textarea
            name="input-7-1"
            label="Опишите подробнее"
            hint="Всё что поможет лучшему пониманию"
            v-model.trim="userdescription"
            clearable
            :counter="1000"
            @input="$v.userdescription.$touch()"
          ></v-textarea>
          <v-switch v-model="agree" class="ma-2" label="На всё согласен"></v-switch>
          <v-flex class="text-center">
            <v-btn
              tile
              outlined
              :loading="discussBtnLoading"
              :color="buttonClass"
              :class="[buttonPadding,'mx-auto']"
              @mouseenter="activateButton"
              @mouseleave="passivateButton(this)"
              @click="sendMessageToAdmin"
              :disabled="!validForm"
            >{{buttonText}}</v-btn>
          </v-flex>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6"></v-col>
      </v-form>
      <v-card-actions></v-card-actions>
    </v-card>
    <!-- Появляется бар с сообщением о статусе отправки сообщения админу -->
    <v-snackbar
      v-model="snackbarState"
      :color="snackbarColor"
      timeout="6000"
      :top="true"
      :vertical="true"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">Закрыть</v-btn>
      </template>
    </v-snackbar>
    <!-- конец бара -->
  </v-col>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { required, minLength, maxLength, email, alpha, helpers } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    username: "",
    userphone: "",
    useremail: "",
    userdescription: "",
    userfile: null,
    agree: true,

    username_rule: [
      (v) => (v.length <= 30 && v.length >= 2) || "Не более 30 символов, не менее двух",
    ],
    userphone_rule: [
      (v) => (v.length <= 12 && v.length > 10 && /^\+7\d{10}$/.test(v)) || "Не совпадает с форматом",
    ],
    useremail_rule: [
      (v) => (v.length <= 30 && v.length > 8) || "Не более 30 символов, не менее 8",
      (v) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || "Не совпадает с форматом email",
    ],
    userdescription_rule: [
      (v) => (v.length <= 1000 && v.length > 10) || "Не более 1000 символов",
    ],
    // userfile_rule: [(v) => (v ? true : false)],

    buttonClass: "grey darken-4",
    buttonText: "Отправить?",
    buttonPadding: "",
  }),
  computed: {
    ...mapGetters(["subheaderSize","discussBtnLoading","snackbarState","snackbarColor","snackbarText"]),
    validForm(){
      return (this.$v.username.$invalid==false && this.$v.userdescription.$invalid==false && (this.$v.userphone.$invalid==false || this.$v.useremail.$invalid==false) && this.agree);
    }
  },
  mounted() {},

  methods: {
    ...mapActions(["sendMessage"]),
    activateButton() {
      this.buttonClass = "green darken-4 ";
      this.buttonText = "Да!!!";
      this.buttonPadding = "px-12";
    },
    passivateButton(that) {
      (this.buttonClass = "grey darken-4"), (this.buttonText = "Отправить?");
      this.buttonPadding = "";
    },
    sendMessageToAdmin(){
      let data = new FormData();
      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      data.append("username", this.username);
      data.append("userphone", this.userphone);
      data.append("useremail", this.useremail);
      data.append("userdescription", this.userdescription);
      // data.append("userfile", this.userfile);
      this.sendMessage({data,config});
    }
  },
  validations: {
    username: {
      required,
      alpha:helpers.regex('alpha', /^[а-яА-ЯёЁa-zA-Z\s]*$/),
      minLength:minLength(2),
      maxLength:maxLength(30)
    },
    userphone:{
      required,
      alpha:helpers.regex('alpha', /^\+7\d{10}$/),
    },
    useremail: {
      required,
      email,
      minLength:minLength(8),
      maxLength:maxLength(30)
    },
    userdescription: {
      required,
    },

  }
};
</script>