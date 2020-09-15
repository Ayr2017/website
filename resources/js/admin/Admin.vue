<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import VueRouter from "vue-router";
export default {
  mounted() {
    console.log("Admin");
  },
};
</script>