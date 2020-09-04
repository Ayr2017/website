<template>
  <v-app class="pt-15 mt-15">
    <v-row>
      <v-col cols="md-12 xs-12">
        <v-row>
          <Desktopapp/>
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// import Desktopapp from './desktopapp/Desktopapp.vue'
const Desktopapp = () => import('./desktopapp/Desktopapp.vue');
export default {
  components:{
      Desktopapp
  },
  computed: {},
  mounted() {
    console.log("Websites mounted");
  },
};
</script>