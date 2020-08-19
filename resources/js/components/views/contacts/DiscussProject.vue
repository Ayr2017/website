<template>
  <v-col xs="12" sm="12" md="6" lg="6">
    <div :class="[subheaderSize, 'font-weight-thin mb-10 elev-1 text--secondary'] ">Обсудить проект</div>
    <v-card outlined color="#fff5">
      <v-form ref="form" @submit.prevent="submit">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
          <v-text-field label="Ваше имя" clearable v-model="username" :rules="username_rule"></v-text-field>
          <v-text-field label="Телефон" v-model="userphone" :rules="userphone_rule"></v-text-field>
          <v-text-field label="E-mail" v-model="useremail" :rules="useremail_rule"></v-text-field>
          <v-textarea
            name="input-7-1"
            label="Опишите подробнее"
            hint="Всё что поможет лучшему пониманию"
            v-model="userdescription"
            clearable
          ></v-textarea>
          <v-switch v-model="agree" class="ma-2" label="На всё согласен"></v-switch>
          <v-flex class="text-center">
            <v-btn
              tile
              outlined
              :color="buttonClass"
              :class="[buttonPadding,'mx-auto']"
              @mouseenter="activateButton"
              @mouseleave="passivateButton(this)"
              @click="sendMessage"
              :disabled="!agree"
            >{{buttonText}}</v-btn>
          </v-flex>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6"></v-col>
      </v-form>
      <v-card-actions></v-card-actions>
    </v-card>

    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="6000"
      :top="true"
      :vertical="true"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">Закрыть</v-btn>
      </template>
    </v-snackbar>
  </v-col>
</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    username: "",
    userphone: "",
    useremail: "",
    userdescription: "",
    userfile: null,
    agree: true,
    snackbar: false,
    snackbarColor: "success",
    text: "Ваше письмо удачно отправлено. Если прочитаю - свяжусь, возможно.",

    username_rule: [
      (v) => (v.length <= 25 && v.length > 10) || "Max 25 characters",
    ],
    userphone_rule: [
      (v) => (v.length <= 11 && v.length > 10) || "Max 11 characters",
    ],
    useremail_rule: [
      (v) => (v.length <= 25 && v.length > 10) || "Max 25 characters",
    ],
    userdescription_rule: [
      (v) => (v.length <= 1000 && v.length > 10) || "Max 1000 characters",
    ],
    // userfile_rule: [(v) => (v ? true : false)],

    buttonClass: "grey darken-4",
    buttonText: "Отправить?",
    buttonPadding: "",
  }),
  computed: {
    ...mapGetters(["subheaderSize"]),
  },
  mounted() {},
  methods: {
    activateButton() {
      this.buttonClass = "green darken-4 ";
      this.buttonText = "Да!!!";
      this.buttonPadding = "px-12";
    },
    passivateButton(that) {
      (this.buttonClass = "grey darken-4"), (this.buttonText = "Отправить?");
      this.buttonPadding = "";
    },
    sendMessage() {
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
      axios
        .post("./message", data, config)
        .then((response) => {
          if (response.data == 1) {
            this.snackbar = true;
            this.snackbarColor = "success";
            this.text =
              "Ваше письмо удачно отправлено. Если прочитаю - свяжусь, возможно.";
          } else {
            console.error(response);
            this.snackbar = true;
            this.snackbarColor = "error";
            this.text =
              "Отправка письма потерпела неудачу. Позвоните лучше, обсудим.";
          }
        })
        .catch((e) => {
          console.error(e);
          this.snackbar = true;
          this.snackbarColor = "error";
          this.text =
            "Отправка письма потерпела неудачу. Позвоните лучше, обсудим.";
        });
    },
  },
};
</script>