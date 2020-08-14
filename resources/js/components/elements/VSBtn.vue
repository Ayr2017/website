<template>
  <div class="btn__wrapper">
    <v-btn
      class="animatedButton"
      tile
      text
      link
      :to="to"
      :dark="isDark"
      @mouseover="startBorderHoverEffect($event)"
      @mouseleave="endBorderHoverEffect($event)"
    >{{title}}</v-btn>
    <div class="btn__styler"></div>
  </div>
</template>



<script>
import { TimelineLite } from "gsap";

export default {
  props: ['title','dark','to'],
  computed:{
      isDark(){
          return this.dark;
      }
  },
  methods: {
    startBorderHoverEffect(event) {
      let elementWidth = event.target.clientWidth;
      let elementParent = event.target.parentNode.children[1];
      const timeline = new TimelineLite();
      timeline.to(elementParent, 1, { width: elementWidth }).duration(0.5);
    },
    endBorderHoverEffect(event) {
      let elementWidth = event.target.clientWidth;
      let elementParent = event.target.parentNode.children[1];
      const timeline = new TimelineLite();
      timeline.to(elementParent, 1, { width: 0 }).duration(0.4).delay(0.1);
    },
  },
};
</script>

<style>
.btn__styler {
  width: 0;
  border-bottom: 1px solid red;
}
</style>