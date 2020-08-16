<template>
  <v-col cols=" xs-12 sm-12  md-6">
    <div :class="[subheaderSize, 'font-weight-thin mb-10 elev-1 text--secondary'] ">Обсудить проект</div>
    <v-card outlined color="#fff5">
      <v-form ref="form" @submit.prevent="submit">
        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
          <v-text-field label="Ваше имя" single-line></v-text-field>
          <v-text-field label="Телефон" single-line></v-text-field>
          <v-text-field label="Email" single-line></v-text-field>
          <v-file-input multiple label="Прикрепить файл" prepend-icon="mdi-paperclip"></v-file-input>
          <v-textarea
          name="input-7-1"
          label="Опишите подробнее"
          hint="Всё что поможет лучшему пониманию"
        ></v-textarea>
        <v-flex class="text-center">
        <v-btn  tile outlined color="grey darken-4" class="mx-auto" >Отправит</v-btn>
        </v-flex>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="12" lg="6">
        </v-col>
      </v-form>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: {
      ...mapGetters(["subheaderSize"]),
  },
  mounted(){},
  methods:{}
};
</script>