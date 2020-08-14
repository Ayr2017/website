const { template } = require("lodash");

<template>
  <v-app>
    <transition name="slide-fade">
      <v-navigation-drawer app dark color="#68686a" v-model="showNavDrawer" v-if="showNavDrawer">
        <v-list dense rounded>
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Веб-сайты</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-laptop</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Десктопные приложения</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-flag</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>HTML5-анимация</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Обсудить проект -->
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-human-greeting-proximity</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Обсудить проект</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Контакты -->
          <v-list-item link to="/contacts">
            <v-list-item-icon>
              <v-icon>mdi-account-box</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Контакты</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </transition>

    <v-app-bar app flat :color="appBarColor">
      <v-btn class="ma-2" icon fab @click="showNavDrawer=!showNavDrawer" dark>
        <v-icon>fa fa-bars</v-icon>
      </v-btn>

      <div class="display-1 font-weight-medium mr-0 ml-4 mr-md-4 v-sheet logo-text">Cripto</div>
      <v-spacer></v-spacer>
      <div class="row hidden-sm-and-down" group>
        <VSBtn :title="'Разработка сайтов'" :dark="true" to="/"></VSBtn>
        <VSBtn :title="'Продвижение'" :dark="true"></VSBtn>
        <VSBtn :title="'Услуги'" :dark="true"></VSBtn>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        dark
        tile
        color="deep-orange accent-4"
        class="mx-5"
        href="tel:+79047165279"
      >+79047165279</v-btn>

      <VSBtn :title="'Обсудить проект'" class="hidden-sm-and-down" :dark="true" to="/contacts"></VSBtn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main :style="theme" class="mt-n15 py-0">
      <!-- Provides the application the proper gutter -->
      <v-container fluid :style="theme">
        <!-- If using vue-router -->
        <router-view :style="theme"></router-view>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import VSBtn from "./elements/VSBtn.vue";
import { TimelineLite } from "gsap";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    VSBtn,
  },
  data: () => ({
    topButtonModel: null,
    appBarColor: "#aaaa",
    showNavDrawer: false,
  }),
  computed: {
    theme: () => {
      return { background: "#ebedec" };
    },
    headerType() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.setSubheaderSize("display-1");
          return "display-1";
        case "sm":
        case "md":
          this.setSubheaderSize("display-2");
          return "display-2";
        case "lg":
        case "xl":
          this.setSubheaderSize("display-3");
          return "display-3";
      }
    },
    iconsResize(){
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          this.setIconsSize("medium");
          break;
        case "sm":
          this.setIconsSize("");
          break;
        case "md":
          this.setIconsSize("large");
          break;
        case "lg":
          this.setIconsSize("x-large");
          break;
        case "xl":
          this.setIconsSize("x-large");
          break;
      }
    }
  },
  watch: {
    headerType(){},
    iconsResize(){},
  },
  mounted() {
    console.log("App");
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations(["setSubheaderSize", "setIconsSize"]),
    handleScroll(event) {
      let scrollTop = event.target.scrollingElement.scrollTop;
      if (scrollTop) {
        this.appBarColor = "#cac2c4";
      } else {
        this.appBarColor = "#aaaa";
      }
      //   console.log(event.target.scrollingElement.scrollTop);
    },
  },
};
</script>

<style scoped>
.logo-text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  background-color: dimgrey;
  color: antiquewhite;
  padding: 0 10px;
}

/* Анимации появления и исчезновения могут иметь */
/* различные продолжительности и динамику.       */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>