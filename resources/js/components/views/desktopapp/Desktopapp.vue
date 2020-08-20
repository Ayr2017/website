<template>
  <v-col cols="12" lg="6" md="8" class="mx-auto mb-5">
    <div
      :class="[subheaderSize, 'font-weight-thin mb-xs-2 mb-sm-5 mb-md-10 elev-1 text--secondary mb-1'] "
    >Разработка десктопных приложений</div>
    <v-card class="my-2" outlined color="#fff5">
          <v-card-title class="pink--text text--darken-3">Для чего нужно приложение?</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text
            class="text-body-1"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          
          </v-card-text>
        </div>
          <v-icon  size="150" class="ma-10 ml-0 hidden-sm-and-down" color="pink lighten-1">mdi-comment-question-outline</v-icon>
          <!-- <v-avatar class="ma-3" size="125" tile>
            <v-img src="/assets/card-sm-bg.webp"></v-img>
          </v-avatar> -->
      </div>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="my-2" outlined color="#fff5">
          <v-card-title class="indigo--text text--darken-3">Этапы разработки приложения</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text
            class="text-body-1"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          
          </v-card-text>
        </div>
          <v-icon  size="150" class="ma-10 ml-0 hidden-sm-and-down" color="indigo lighten-1">mdi-altimeter</v-icon>
          <!-- <v-avatar class="ma-3" size="125" tile>
            <v-img src="/assets/card-sm-bg.webp"></v-img>
          </v-avatar> -->
      </div>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="my-2" outlined color="#fff5">
          <v-card-title class="cyan--text text--darken-3">Стоимость приложения</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text
            class="text-body-1"
          >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          
          </v-card-text>
        </div>
          <v-icon  size="150" class="ma-10 ml-0 hidden-sm-and-down" color="cyan lighten-2">mdi-cash-usd-outline</v-icon>
          <!-- <v-avatar class="ma-3" size="125" tile>
            <v-img src="/assets/card-sm-bg.webp"></v-img>
          </v-avatar> -->
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