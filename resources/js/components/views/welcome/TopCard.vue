<template>
  <v-row>
    <v-card class="ma-0" width="100%"  tile>
      <v-parallax
        :height="screenHeight"
        dark
        src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
      >
        <v-row align="center" justify="center">
            <v-theme-provider dark>
          <v-col class="text-center" cols="12">
            <h1 class="display-4 font-weight-thin mb-4">Вам нужен сайт?</h1>
            <h4 class="subheading">Вы зашли туда, куда надо!</h4>
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