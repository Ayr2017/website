<template>
  <v-app class="pt-15 mt-15">
    <v-row>
      <v-col cols="12">
        <v-row class="justify-lg-space-around">
          <ContactInfo />
          <DiscussProject />
        </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import ContactInfo from './contacts/ContactInfo.vue'
import DiscussProject from "./contacts/DiscussProject.vue";
export default {
  components:{
    ContactInfo,
    DiscussProject
  },
  computed: {},
  mounted() {
    console.log("Contacts mounted");
  },
};
</script>