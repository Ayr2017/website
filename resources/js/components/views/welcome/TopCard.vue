<template>
  <v-row>
    <v-card class="ma-0 mt-xs-3" width="100%" tile>
      <v-parallax :height="innerHeight" dark src="./assets/welcome-top.webp">
        <v-row align="center" justify="center">
          <v-theme-provider dark>
            <v-col class="text-center pt-15" cols="12" >
              <h1 class="display-4 font-weight-thin mb-4 shadow-1 mt-5">{{this.$ml.get('welcome.title')}}</h1>
              <p class="subheading text-h6 font-weight-light">{{this.$ml.get('welcome.answer')}}</p>
              <v-btn
                aria-label="services"
                class="align-self-end mt-10"
                fab
                outlined
                @click="$vuetify.goTo('#services-title')"
              >
                <v-icon id="iconTo">mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-col>
          </v-theme-provider>
        </v-row>
      </v-parallax>
    </v-card>
  </v-row>
</template>

<script>
import gsap from 'gsap'
export default {
  data: () => ({
    sticky: false,
  }),
  computed: {
    screenHeight() {
      if(this.$vuetify.breakpoint.name === 'xs'){
        return window.screen.height+56;
      }
      return window.screen.height;
    },
    innerHeight(){
      if(this.$vuetify.breakpoint.name === 'xs'){
        return window.innerHeight+56;
      }
      return window.innerHeight+56;
    },

  },
  mounted() {
    this.iconOpacityAnimation();
  },
  methods:{
    iconOpacityAnimation(){
      gsap.fromTo('#iconTo',{opacity:1},{opacity:0.5, duration: 0.6, repeat:-1}).yoyo(true)
    }
  }
};
</script>

<style scoped>
.subheading {
  letter-spacing: 2px !important;
}
.shadow-1 {
  text-shadow: 0 6px 15px #555;
}
</style>