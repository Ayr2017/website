<template>
  <v-col cols="12" lg="6" md="8" class="mx-auto mb-5">
    <div
      :class="[subheaderSize, 'font-weight-thin mb-xs-2 mb-sm-5 mb-md-10 elev-1 text--secondary mb-1'] "
    >Разработка web-анимации</div>
    <v-card class="my-2" outlined color="#fff5">
      <v-card-title class="purple--text text--darken-3">Для чего нужена анимация?</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text class="text-body-1">
            <p>
              Раньше все сайты были статичны. Потом научились делать мигающую бегущую строку, которая вскоре начинала всех раздражать. После поняли, что просто текст не привлекателен и начали добавлять GIF-файлы, где можно было усмотреть анимацию. Со временем появился Flash, на котором можно было делать целые мультфильмы и игры. Но и он устарел, на данный момент стандартом является
              <span
                class="font-weight-medium purple--text text--darken-3"
              >HTML5-анимация</span>
              .
            </p>
            <p>Основная цель анимации на сайте - повышение привлекательности, далее улучшение интуитивной понятности. Наличие хорошей анимации на сайте располагает к себе клиента. Благодаря анимации пользователь задерживается на сайте на большее время.</p>
            <p>Зачастую, анимация является необходимостью. Например постоянное изменение графика при поступлении новых данных.</p>
          </v-card-text>
        </div>
        <v-icon
          size="150"
          class="ma-10 ml-0 hidden-sm-and-down"
          color="purple lighten-1"
        >mdi-comment-question-outline</v-icon>
      </div>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="my-2" outlined color="#fff5">
      <v-card-title class="deep-orange--text text--darken-3">Этапы разработки</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text
            class="text-body-1"
          >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</v-card-text>
        </div>
        <v-icon
          size="150"
          class="ma-10 ml-0 hidden-sm-and-down"
          color="deep-orange lighten-1"
        >mdi-altimeter</v-icon>
      </div>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="my-2" outlined color="#fff5">
      <v-card-title class="light-blue--text text--darken-3">Стоимость анимации</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text
            class="text-body-1"
          >
<p>Стоимость анимации зависит от сложности работы. Начинается от 5000 рублей, куда не входит стоимость интеграции.</p>
          </v-card-text>
        </div>
        <v-icon
          size="150"
          class="ma-10 ml-0 hidden-sm-and-down"
          color="light-blue lighten-2"
        >mdi-cash-usd-outline</v-icon>
        <!-- <v-avatar class="ma-3" size="125" tile>
            <v-img src="/assets/card-sm-bg.webp"></v-img>
        </v-avatar>-->
      </div>
      <v-card-actions></v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["subheaderSize", "iconsSize"]),
  },
  mounted() {},
};
</script>