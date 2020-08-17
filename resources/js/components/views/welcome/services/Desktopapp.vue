<template>
  <v-col>
    <v-card class="mx-auto" max-width="344">
      <v-img src="./assets/desktop.webp" height="200px"></v-img>

      <v-card-title>Десктопные приложения</v-card-title>

      <v-card-subtitle>От 10 000 рублей</v-card-subtitle>

      <v-card-actions>
        <v-btn text @click="show = !show">Подробнее</v-btn>

        <v-btn color="purple" text>Заказать</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show" aria-label="more">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            <p>Десктопные приложения - приложения, которые запускаются на компьютере и могут работать не подключаясь к интернету.</p>
            <v-btn tile outlined aria-label="more">Подробнее</v-btn>
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
.v-card__title{
  word-break: normal !important;
}
</style>