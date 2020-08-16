<template>
  <v-row>
    <v-card class="ma-0" width="100%"  tile>
      <v-parallax
        :height="screenHeight"
        dark
        src="./assets/welcome-top.webp"
      >
        <v-row align="center" justify="center">
            <v-theme-provider dark>
          <v-col class="text-center" cols="12">
            <h1 class="display-4 font-weight-thin mb-4">Вам нужен сайт?</h1>
            <h4 class="subheading text-h6 font-weight-light">Вы зашли туда, куда надо!</h4>
            <v-btn
                    class="align-self-end mt-10"
                    fab
                    outlined
                    @click="$vuetify.goTo('#services')"
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
      return window.screen.height;
    },
  },
  mounted() {

  },
};
</script>

<style scoped>
.subheading{
  letter-spacing: 2px !important;
}
</style>