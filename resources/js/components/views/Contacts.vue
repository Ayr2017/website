<template>
  <v-app class="pt-15 mt-15">
    <v-row>
      <v-col cols="md-12 xs-12">
        <v-row>
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