<template>
  <v-app>
    <TopCard />
    <Services />
  </v-app>
</template>

<script>
// import { TimelineLite } from "gsap";
// import VSBtn from "../elements/VSBtn.vue";
// import TopCard from "./welcome/TopCard.vue";
// import Services from "./welcome/Services.vue";

const VSBtn = () => import('../elements/VSBtn.vue');
const TopCard = () => import('./welcome/TopCard.vue');
const Services = () => import('./welcome/Services.vue');

export default {
  components: {
    VSBtn,
    TopCard,
    Services
  },
  mounted() {
    console.log("Welcome mounted");
  },
};
</script>

<style>
.btn__styler {
  width: 0;
  border-bottom: 1px solid red;
}
</style>