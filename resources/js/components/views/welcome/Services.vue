<template>
  <v-row tile>
    <v-card class="ma-0 pt-12 grey lighten-3" width="100%" :min-height="screenHeight" tile>
      <v-row align="center" justify="center" tile class="mx-0">
        <v-theme-provider light>
          <v-col class="text-center" cols="12">
            <h1
              class="display-2 font-weight-thin mb-4"
              style="color:#333"
            >Услуги, которые Вы можете заказать</h1>
            <v-row>
              <Websites />
              <Desctopapp />
              <Webanimation />
            </v-row>
          </v-col>
        </v-theme-provider>
      </v-row>
      <v-row class="mx-0">
        <v-parallax
          dark
          src="./assets/advantage.webp"
        >
          <v-row align="center" justify="center" tile>
            <v-theme-provider dark>
              <v-col class="text-center mx-0 px-0" cols="12">
                <div
                  :class="[headerType, 'font-weight-thin mb-10 elev-1'] "
                  v-observe-visibility="(isVisible, entry, n)=>showServicePoint(isVisible, entry, 1)"
                >В чём преимущество?</div>

                <transition name="slideUp" tag="ul" class="list-group">

                  <v-list three-line class="mx-0 px-0" color="#fff1" disabled v-if="servicePoint_1">
                    <v-list-item-group color="primary">
                      <v-list-item class="mx-md-15 px-md-15">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-currency-usd</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Дешевле на 50%'"></v-list-item-title>
                          <v-list-item-subtitle v-html="'Работа выполняется без посредников'"></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="mx-md-15 px-md-15">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-face-agent</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Поддержка после сдачи работы'"></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="'В течении гарантийного срока выполняется бесплатное обслуживание'"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="mx-md-15 px-md-15">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-sale</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Гибкая система скидок и рассрочки'"></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="'Расплатиться полностью можно в течение года и более'"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </transition>
              </v-col>
            </v-theme-provider>
          </v-row>
        </v-parallax>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
import Websites from "./services/Websites.vue";
import Desctopapp from "./services/Desctopapp.vue";
import Webanimation from "./services/Webanimation.vue";
export default {
  components: {
    Websites,
    Desctopapp,
    Webanimation,
  },
  data: () => ({
    servicePoint_1: false,
    servicePoint_2: false,
    servicePoint_3: false,
  }),
  computed: {
    screenHeight() {
      return window.screen.height;
    },
    headerType() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "display-1";
        case "md":
        case "lg":
        case "xl":
          return "display-4";
      }
    },
  },
  methods: {
    showServicePoint(isVisible, entry, n) {
      if (isVisible) {
        switch (n) {
          case 1:
            this.servicePoint_1 = true;
            break;
          case 2:
            this.servicePoint_2 = true;
            break;
          case 3:
            this.servicePoint_3 = true;
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
.v-parallax {
  width: 100% !important;
}
.elev-1 {
  text-shadow: 2px 2px 6px #aaa5;
}
</style>