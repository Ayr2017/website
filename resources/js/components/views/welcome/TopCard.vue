<template>
  <v-row>
    <v-card class="ma-0" width="100%" tile>
      <v-parallax :height="innerHeight" dark src="./assets/welcome-top.webp">
        <v-row align="center" justify="center">
          <v-theme-provider dark>
            <v-col class="text-center" cols="12">
              <h1 class="display-4 font-weight-thin mb-4">Вам нужен сайт?</h1>
              <p class="subheading text-h6 font-weight-light">Вы зашли туда, куда надо!</p>
              <v-btn
                aria-label="services"
                class="align-self-end mt-10"
                fab
                outlined
                @click="$vuetify.goTo('#services-title')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-col>
          </v-theme-provider>
        </v-row>
      </v-parallax>
    </v-card>
  </v-row>
</template>

<script>
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
    }
  },
  mounted() {},
};
</script>

<style scoped>
.subheading {
  letter-spacing: 2px !important;
}
</style>