<template>
  <div class="row pt-16 mt-16">
    <v-col
      class="pl-md-10 pl-lg-10 md-6 lg-6 sm-12 xs-12"
    >
      <h2 class="text-h1 blue-grey--text text--darken-3">404</h2>
        <p class="headline blue-grey--text text--lighten-1">
      Такой страницы не существует
        </p>
        <p class="subheading blue-grey--text text--lighten-1">
          Вернитесь на
          <router-link to="/">главную страницу</router-link>.
        </p>
    </v-col>
    <v-col
      height="100%"
      class="pl-md-10 pl-lg-10 md-6 lg-6 sm-12 xs-12"
    >
     <v-img src="./assets/3301.webp" @mouseenter="cicadaEnter" @click="cicadaClick"></v-img>
    </v-col>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data: () => ({
      cicada: 0,
  }),
  watch:{
      cicada: function(){
          if(this.cicada > 3) console.log('Ok, it\'s /all_and_good_by');
      }
  },
  computed: {
    screenHeight() {
      return window.screen.height + 56;
    },
  },
  mounted() {
  },
  methods: {
   cicadaEnter(){
       console.log('Click me: Math.ceil(PI).time')
   },
   cicadaClick(){
       this.cicada++;
   }
  },
};
</script>
