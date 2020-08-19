<template>
  <v-col cols="xs-12  sm-12 md-6 ">
    <div :class="[subheaderSize, 'font-weight-thin mb-10 elev-1 text--secondary'] ">Контакты</div>
    <v-card outlined color="#fff5">
      <v-list-item  class="text-md-h5 text-sm-h5 text-xs-overline">
        <v-icon  :size="iconsSize" >mdi-phone</v-icon>Телефон:
        <v-btn text large href="tel:+79047165279">
          <span class="text-md-h5 text-sm-h5 text-xs-overline">+79047165279</span>
        </v-btn>
      </v-list-item>
      <v-list-item  class="text-md-h5 text-sm-h5 text-xs-overline">
        <v-icon :size="iconsSize">mdi-email</v-icon>Email:
        <v-btn text large href="mailto:ayrat.2013@ya.ru">
          <span class="text-md-h5 text-sm-h5 text-xs-overline">ayrat.2013@ya.ru</span>
        </v-btn>
      </v-list-item>
      <v-list-item  class="text-md-h5 text-sm-h5 text-xs-overline">
        <v-icon :size="iconsSize">mdi-whatsapp</v-icon>WhatsApp:
        <v-btn text large href="https://api.whatsapp.com/send?phone=79047165279">
          <span class="text-md-h5 text-sm-h5 text-xs-overline">+79047165279</span>
        </v-btn>
      </v-list-item>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["subheaderSize", "iconsSize"]),
  },
  mounted() {},
};
</script>