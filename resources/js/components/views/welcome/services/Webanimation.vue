<template>
  <v-col>
    <v-card class="mx-auto" max-width="344">
      <v-img
        src="./assets/html5.webp"
        height="200px"
      >
      <!-- <v-row align="center" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-icon size="150" class="theme--dark">mdi-animation</v-icon>
          </v-col>
        </v-row> -->
      </v-img>

      <v-card-title>HTML5-анимация:</v-card-title>

      <v-card-subtitle>От 5 000 рублей</v-card-subtitle>

      <v-card-actions>
        <!-- <v-btn text @click="show = !show">Подробнее</v-btn> -->

        <v-btn color="purple" text to="/contacts">Заказать</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show" aria-label="more">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p>HTML5-анимация используется сложных визуальных эффектов.Вызывает эмоции у посетиителей, мотивирует их на действия.</p>
            <div class="d-flex"><v-btn class="mx-auto" tile outlined aria-label="more" to="/webanimation">Подробнее</v-btn></div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
.v-image__image{
  filter:blur(5)
}
.v-card__title{
  word-break: normal !important;
}
</style>