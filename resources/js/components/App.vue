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
              <v-list-item-title>{{this.$ml.get('menu.home')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Все услуги -->
          <v-list-item link to="/allservices">
            <v-list-item-icon>
              <v-icon>mdi-google-circles-extended</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{this.$ml.get('menu.allservices')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Веб-сайты -->
          <v-list-item link to="/websites">
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{this.$ml.get('menu.websites')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/desktopapp">
            <v-list-item-icon>
              <v-icon>mdi-laptop</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{this.$ml.get('menu.desktopapp')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/webanimation">
            <v-list-item-icon>
              <v-icon>mdi-flag</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{this.$ml.get('menu.htmlanimation')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Обсудить проект -->
          <v-list-item link to="/contacts">
            <v-list-item-icon>
              <v-icon>mdi-human-greeting-proximity</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{this.$ml.get('menu.contacts')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </transition>

    <v-app-bar app flat :color="appBarColor">
      <v-btn
        aria-label="menu"
        class="ma-xs-1 ma-sm-2"
        icon
        fab
        @click="showNavDrawer=!showNavDrawer"
        dark
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <router-link to="/">
        <div
          class="display-1 font-weight-medium mx-auto v-sheet logo-text"
          @mouseenter="shuffleLogo"
          @mouseleave="orderLogo"
          v-if="$vuetify.breakpoint.name !=='xs'"
        >
          <transition-group name="list-complete" tag="span">
            <span v-for="item in items" v-bind:key="item" class="list-complete-item mx-0">{{ item }}</span>
          </transition-group>
        </div>
        <div
          v-if="$vuetify.breakpoint.name ==='xs'"
          class="display-1 font-weight-medium mx-auto v-sheet logo-text"
        >
          <span class="list-complete-item mx-0">CS</span>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <div class="row hidden-sm-and-down" group>
        <VSBtn :title="$ml.get('header.websitedev')" :dark="true" to="/websites"></VSBtn>
        <!-- <VSBtn :title="'Продвижение'" :dark="true"></VSBtn> -->
        <VSBtn :title="$ml.get('header.allservices')" :dark="true" to="/allservices"></VSBtn>
      </div>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="black" dark v-bind="attrs" text v-on="on">{{myLocal}}</v-btn>
        </template>
        <v-list class="py-0">
          <v-list-item class="pa-0 flag-russian" @click="selectLang('RU')">
            <v-btn class="ma-0 pa-0" color="black" dark text>{{ 'RU' }}</v-btn>
          </v-list-item>
          <v-list-item class="pa-0" @click="selectLang('EN')">
            <v-btn class="ma-0 pa-0" color="black" dark text>{{ 'EN' }}</v-btn>
          </v-list-item>
          <v-list-item class="pa-0" @click="selectLang('AR')">
            <v-btn class="ma-0 pa-0" color="black" dark text>{{ 'AR' }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <div v-if="false">
        <span @click="setLocalei18n('en')">
          <flag iso="us"></flag>
        </span>
        <span @click="setLocalei18n('ru')">
          <flag iso="ru"></flag>
        </span>
        {{$t('welc')}}
      </div>
      <v-btn
        dark
        tile
        color="deep-orange accent-4"
        class="mx-auto mx-md-5"
        href="tel:+79047165279"
      >+79047165279</v-btn>

      <VSBtn
        :title="$ml.get('header.discussproject')"
        class="hidden-sm-and-down"
        :dark="true"
        to="/contacts"
      ></VSBtn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main :style="theme" class="mt-n15 py-0">
      <!-- Provides the application the proper gutter -->
      <v-container fluid :style="theme" class="pb-0">
        <!-- If using vue-router -->
        <router-view :style="theme"></router-view>
      </v-container>
    </v-main>

    <transition name="fade" tag="div">
      <v-footer
        ref="footer"
        app
        color="blue-grey darken-4 justify-center text-caption align-center"
        dark
        v-if="footer"
      >
        <p
          class="align-center justify-center text-caption text-weight-thin"
          color="blue-grey lighten-4"
        >All rights reserved &copy; 2020</p>
      </v-footer>
    </transition>
  </v-app>
</template>

<script>
import VSBtn from "./elements/VSBtn.vue";
// const VSBtn = () => import("./elements/VSBtn.vue");
import { TimelineLite } from "gsap";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { MLBuilder } from "vue-multilanguage";
import _ from "lodash";
export default {
  components: {
    VSBtn,
  },
  data: () => ({
    topButtonModel: null,
    appBarColor: "#aaaa",
    showNavDrawer: false,
    footer: false,
    items: ["C", "r", "y", "p", "t", "o"],
  }),
  computed: {
    ...mapGetters(["myLocal"]),
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
    iconsResize() {
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
    },
  },
  watch: {
    headerType() {},
    iconsResize() {},
  },
  mounted() {
    console.log("App", this.$router);
    this.getLocaleFromBrouser().then(this.$ml.change(this.myLocal));
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations(["setSubheaderSize", "setIconsSize"]),
    ...mapActions(["getLocaleFromBrouser", "setLocale"]),
    selectLang(arg) {
      let lang = arg ? arg.toLowerCase() : "ru";
      // let lang = arg==='RU'?'ru':'en';
      this.setLocale(lang).then(console.log(this), this.$ml.change(lang));
    },
    handleScroll(event) {
      this.scrollBottom();
      let scrollTop = event.target.scrollingElement.scrollTop;
      if (scrollTop) {
        this.appBarColor = "#cac2c4";
      } else {
        this.appBarColor = "#aaaa";
      }
    },
    scrollBottom() {
      let maxValue = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      this.footer =
        Math.ceil(maxValue + window.innerHeight) ===
          document.documentElement.offsetHeight ||
        Math.ceil(maxValue + window.innerHeight) ===
          document.documentElement.offsetHeight - 1;
    },
    scrollEvent(e) {
      console.log(e);
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    shuffleLogo: function () {
      this.items = _.shuffle(this.items);
      setTimeout(() => {
        this.items = ["S", "y", "s", "t", "e", "m"];
      }, 900);
    },
    orderLogo: function () {
      setTimeout(() => {
        this.items = ["C", "r", "y", "p", "t", "o"];
      }, 600);
    },
    setLocalei18n(locale) {
      console.log(locale);
      this.$i18n.locale = locale;
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

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>