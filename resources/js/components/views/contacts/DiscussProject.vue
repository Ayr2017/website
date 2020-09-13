<template>
  <v-col xs="12" sm="12" md="6" lg="6">
    <div
      :class="[subheaderSize, 'font-weight-thin mb-10 elev-1 text--secondary'] "
    >{{this.$ml.get('discuss.discussproject')}}</div>
    <v-card outlined color="#fff5">
      <v-form ref="form" @submit.prevent="submit">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
          <v-text-field
            :label="$ml.get('discuss.yourane')"
            clearable
            v-model.trim="username"
            :rules="username_rule"
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
          ></v-text-field>
          <v-text-field
            :label="$ml.get('discuss.yourphone')"
            v-model.trim="userphone"
            :rules="userphone_rule"
            @input="$v.userphone.$touch()"
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model.trim="useremail"
            :rules="useremail_rule"
            @input="$v.useremail.$touch()"
          ></v-text-field>
          <v-textarea
            name="input-7-1"
            :label="$ml.get('discuss.discribe')"
            :hint="$ml.get('discuss.discribehint')"
            v-model.trim="userdescription"
            clearable
            :counter="1000"
            @input="$v.userdescription.$touch()"
          ></v-textarea>
          <v-file-input
            show-size
            :label="$ml.get('discuss.selectfile')"
            v-model="userfile"
            prepend-icon="mdi-paperclip"
            :rules="userfile_rule"
          ></v-file-input>
          <v-switch v-model="agree" class="ma-2" :label="$ml.get('discuss.apply')"></v-switch>
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
      v-model="snackbarState_"
      :color="snackbarColor"
      :top="true"
      :vertical="true"
      @input="startCloseTimeout"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="hideSnackbar">{{mlClose}}</v-btn>
      </template>
    </v-snackbar>
    <!-- конец бара -->
  </v-col>
</template>

<script>
import { MLBuilder } from "vue-multilanguage";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import {
  required,
  minLength,
  maxLength,
  email,
  alpha,
  helpers,
} from "vuelidate/lib/validators";
export default {
  data: () => ({
    username: "",
    userphone: "",
    useremail: "",
    userdescription: "",
    userfile: null,
    agree: true,

    buttonClass: "grey darken-4",
    buttonText: "",
    buttonPadding: "",
    first: "",
  }),
  computed: {
    ...mapGetters([
      "subheaderSize",
      "discussBtnLoading",
      "snackbarState",
      "snackbarColor",
      "snackbarText",
    ]),
    validForm() {
      return (
        this.$v.username.$invalid == false &&
        this.$v.userdescription.$invalid == false &&
        (this.$v.userphone.$invalid == false ||
          this.$v.useremail.$invalid == false) &&
        this.agree
      );
    },
    snackbarState_: {
      get() {
        return this.snackbarState;
      },
      set(newState) {},
    },
    mlClose() {
      return this.$ml.get("discuss.close");
    },

    mlbuttonTextYes() {
      return this.$ml.get("discuss.yes");
    },
    mlbuttonTextDoSend() {
      return this.$ml.get("discuss.dosend");
    },
    mlClose() {
      return this.$ml.get("discuss.close");
    },
    username_rule() {
      return [
        (v) =>
          (v.length <= 30 && v.length >= 2) ||
          this.$ml.get("discuss.rules.nameruletext"),
      ];
    },
    userphone_rule(){
      return [
      (v) =>
        (v.length <= 12 && v.length > 10 && /^\+7\d{10}$/.test(v)) ||
        this.$ml.get("discuss.rules.phoneruleformat"),
    ]},
    useremail_rule(){
      return [
      (v) =>
        (v.length <= 30 && v.length > 8) || this.$ml.get("discuss.rules.emailrulelength"),
      (v) =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || this.$ml.get("discuss.rules.emailruleformat"),
    ]},
    userdescription_rule(){
      return [
      (v) => (v.length <= 1000 && v.length > 10) || this.$ml.get("discuss.rules.descriptionlength"),
    ]},
     userfile_rule(){
       return [
      (v) => !v || v.size < 6e6 || this.$ml.get("discuss.rules.filesize"),
    ]},
  },
  mounted() {
    this.buttonText = this.mlbuttonTextDoSend;
  },

  methods: {
    ...mapActions(["sendMessage"]),
    ...mapMutations(["hideSnackbar"]),
    activateButton() {
      this.buttonClass = "green darken-4 ";
      this.buttonText = this.mlbuttonTextYes;
      this.buttonPadding = "px-12";
    },
    passivateButton(that) {
      (this.buttonClass = "grey darken-4"),
        (this.buttonText = this.mlbuttonTextDoSend);
      this.buttonPadding = "";
    },
    sendMessageToAdmin() {
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
      data.append("userfile", this.userfile);
      this.sendMessage({ data, config });
    },
    startCloseTimeout() {
      setTimeout(() => {
        this.hideSnackbar();
      }, 6000);
    },
  },
  validations: {
    username: {
      required,
      alpha: helpers.regex("alpha", /^[а-яА-ЯёЁa-zA-Z\s]*$/),
      minLength: minLength(2),
      maxLength: maxLength(30),
    },
    userphone: {
      required,
      alpha: helpers.regex("alpha", /^\+7\d{10}$/),
    },
    useremail: {
      required,
      email,
      minLength: minLength(8),
      maxLength: maxLength(30),
    },
    userdescription: {
      required,
    },
  },
};
</script>