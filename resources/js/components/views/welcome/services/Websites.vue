<template>
  <v-col>
    <v-card class="mx-auto" max-width="344">
      <v-img src="./assets/card-sm-bg.webp" height="200px">
        <v-row align="center" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-icon size="150" class="theme--dark">mdi-application</v-icon>
          </v-col>
        </v-row>
      </v-img>

      <v-card-title>Сайты: от визитки до магазина</v-card-title>

      <v-card-subtitle>Всё вкючено от 5 000 рублей</v-card-subtitle>

      <v-card-actions>
        <v-btn color="purple" text>Заказать</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            Сайты-визитки, одностраничные landing-page, корпоративные сайты, сайты парсеры, магазины и многое другое, что связано с Web!
            <v-btn tile outlined class="mt-3">Подробнее</v-btn>
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