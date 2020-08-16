<template>
  <v-app class="pt-15 mt-15">
    <v-row>
      <v-col cols="md-12 xs-12">
        <v-row>
          <Websitetypes/>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Websitetypes from './websites/Websitetypes.vue'
export default {
  components:{
      Websitetypes
  },
  computed: {},
  mounted() {
    console.log("Websites mounted");
  },
};
</script>