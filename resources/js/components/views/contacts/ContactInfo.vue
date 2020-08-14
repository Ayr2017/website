<template>
  <v-col cols="md-6 xs-12">
    <div :class="[subheaderSize, 'font-weight-thin mb-10 elev-1 text--secondary'] ">Контакты</div>
    <v-card outlined color="#fff5">
      <v-list-item three-line class="text-md-h5 text-sm-h5 text-xs-overline">
        <v-icon  :size="iconsSize">mdi-phone</v-icon>Телефон:
        <v-btn text large href="tel:+79047165279">
          <span class="text-md-h5 text-sm-h5 text-xs-overline">+79047165279</span>
        </v-btn>
      </v-list-item>
      <v-list-item three-line class="text-md-h5 text-sm-h5 text-xs-overline">
        <v-icon :size="iconsSize">mdi-email</v-icon>Email:
        <v-btn text large href="mailto:ayrat.2013@ya.ru">
          <span class="text-md-h5 text-sm-h5 text-xs-overline">ayrat.2013@ya.ru</span>
        </v-btn>
      </v-list-item>
      <v-list-item three-line class="text-md-h5 text-sm-h5 text-xs-overline">
        <v-icon :size="iconsSize">mdi-whatsapp</v-icon>WhatsApp:
        <v-btn text large href="https://api.whatsapp.com/send?phone=79047165279">
          <span class="text-md-h5 text-sm-h5 text-xs-overline">+79047165279</span>
        </v-btn>
      </v-list-item>

      <!-- <v-list-item>
                <v-list-item-content>
                  <v-btn block tile outlined color="grey darken-4">Напишите прямо сейчас</v-btn>
                </v-list-item-content>
      </v-list-item>-->
      <v-card-actions></v-card-actions>
      <!-- <v-expand-transition>
                <div v-show="true">
                  <v-divider></v-divider>

                  <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                </div>
      </v-expand-transition>-->
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