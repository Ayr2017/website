<template>
  <v-app class="pt-15 mt-15">
    <v-row>
      <v-col cols="md-12 xs-12 sm-12 lg-12 mb-12" align="center" justify="center">
        <h2
          class="display-2 font-weight-thin mb-4 text--secondary"
          id="services-title"
        >Услуги, которые Вы можете заказать</h2>
        <v-row>
          <Websites />
          <Desktopapp />
          <Webanimation />
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// import Websites from "./welcome/services/Websites.vue";
// import Desktopapp from "./welcome/services/Desktopapp.vue";
// import Webanimation from "./welcome/services/Webanimation.vue";
const Websites = () => import("./welcome/services/Websites.vue");
const Desktopapp = () => import("./welcome/services/Desktopapp.vue");
const Webanimation = () => import("./welcome/services/Webanimation.vue");

export default {
  components: {
    Websites,
    Desktopapp,
    Webanimation,
  },
  computed: {},
  mounted() {
    console.log("Contacts mounted");
  },
};
</script>