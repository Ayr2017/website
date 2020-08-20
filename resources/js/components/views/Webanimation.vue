<template>
  <v-app class="pt-15 mt-15">
    <v-row>
      <v-col cols="md-12 xs-12">
        <v-row>
          <Webanimation/>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Webanimation from './webanimation/Webanimation.vue'
export default {
  components:{
      Webanimation
  },
  computed: {},
  mounted() {
    console.log("Websites mounted");
  },
};
</script>