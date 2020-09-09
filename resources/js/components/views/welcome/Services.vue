<template>
  <v-row tile>
    <v-card class="ma-0 pt-12 grey lighten-3" width="100%" tile>
      <v-row align="center" justify="center" tile class="mx-0" :min-height="screenHeight">
        <v-theme-provider light>
          <v-col class="text-center" cols="12">
            <h2
              class="display-2 font-weight-thin mb-4"
              style="color:#333"
              id="services-title"
              v-observe-visibility="showServiceCard"
            >{{this.$ml.get('services.title')}}</h2>

            <transition name="fadeRight" tag="div">
              <v-row  v-if="serviceCardState">
                <Websites />
                <Desktopapp  />
                <Webanimation />
              </v-row>
            </transition>
          </v-col>
        </v-theme-provider>
      </v-row>
      <v-row class="mx-0" align="stretch">
        <v-parallax dark src="./assets/advantage.webp" jumbotron :height="parallaxHeight">
          <v-row align="center" justify="center" tile>
            <v-theme-provider dark>
              <v-col
                class="text-center mx-0 px-0 my-10"
                cols="12"
                v-elresize
                @elresize="setParallaxHeightValue"
              >
                <div
                  class="row align-center justify-center"
                  fluid
                  flat
                  tile
                  style="background-color:#263238aa"
                  dark
                  dense
                  v-observe-visibility="(isVisible, entry, n)=>showServicePoint(isVisible, entry, 1)"
                >
                  <p :class="[subheaderSize,'text-weight-thin '] ">{{this.$ml.get('services.advantage.title')}}</p>
                </div>
                <transition name="slideUp" tag="ul" class="list-group">
                  <v-list
                    three-line
                    class="mx-auto px-0"
                    color="#263238aa"
                    disabled
                    v-if="servicePoint_1"
                  >
                    <v-list-item-group color="primary">
                      <v-list-item class="mx-md-15 px-md-15" aria-label="reptiloids">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-delta</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Контроль и размах'"></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="'Работа выполняется потомственными рептилоидами под зорким контролем иллюминатов.'"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="mx-md-15 px-md-15" aria-label="element">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-currency-usd</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Дешевле на 50%'"></v-list-item-title>
                          <v-list-item-subtitle v-html="'Работа выполняется без посредников.'"></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="mx-md-15 px-md-15" aria-label="element">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-face-agent</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Поддержка после сдачи работы'"></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="'В течении гарантийного срока выполняется бесплатное обслуживание.'"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item class="mx-md-15 px-md-15" aria-label="element">
                        <v-list-item-avatar>
                          <v-icon dark>mdi-sale</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content class="text-start">
                          <v-list-item-title v-html="'Гибкая система скидок и рассрочки'"></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="'Расплатиться полностью можно в течение года и более.'"
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
// import Websites from "./services/Websites.vue";
// import Desktopapp from "./services/Desktopapp.vue";
// import Webanimation from "./services/Webanimation.vue";
const Websites = () => import("./services/Websites.vue");
const Desktopapp = () => import("./services/Desktopapp.vue");
const Webanimation = () => import("./services/Webanimation.vue");

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Websites,
    Desktopapp,
    Webanimation,
  },
  data: () => ({
    servicePoint_1: false,
    servicePoint_2: false,
    servicePoint_3: false,
    parallaxHeight: 500,
    serviceCardState: false,
  }),
  computed: {
    ...mapGetters(["subheaderSize"]),
    screenHeight() {
      return window.screen.height;
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
    setParallaxHeightValue(event) {
      this.parallaxHeight = event.target.offsetHeight + 56;
    },
    showServiceCard(isVisible, entry) {
      if (isVisible) {
        setTimeout(() => {
          this.serviceCardState = true;
        }, 100);
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
  text-shadow: 2px 2px 6px rgb(68, 68, 68);
}

.v-list-item__subtitle {
  -webkit-line-clamp: unset !important;
}
.v-list-item__title {
  white-space: normal !important;
}
</style>