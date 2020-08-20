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
          >
          <p> <span
                class="font-weight-medium pink--text text--darken-3"
              >Десктопные приложения </span>- специально разработанные программы, которые имеют графический интерфейс и запускаются не внутри браузера, как веб-приложения, а на компьютере. Сам браузер, является дектопным приложением. 
          </p>
          <p>Десктопные приложения могут работать и без подключения к интернету, и с подключением, в зависимости от заданной функциональности. Они могут работать с файлами на диске компьютера и устройствами. Важная особенность - возможность работы приложения без подключения к сети интернет - позволяет хранить данные на компьютере, что увеличивает безопасность. Также, не требуется отправлять большие массивы данных по сети, и это экономит время.</p>
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
          >
<p> <span
                class="font-weight-medium indigo--text text--darken-3"
              >Десктопные приложения </span> имеют те же этапы разработки, что и мобильные приложения. Но отличаются тем, что при внесении изменений необходимо обновить приложения на всех устройствах.  
          </p>          
          </v-card-text>
        </div>
          <v-icon  size="150" class="ma-10 ml-0 hidden-sm-and-down" color="indigo lighten-1">mdi-altimeter</v-icon>
          
      </div>
      <v-card-actions></v-card-actions>
    </v-card>
    <v-card class="my-2" outlined color="#fff5">
          <v-card-title class="cyan--text text--darken-3">Стоимость приложения</v-card-title>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-text
            class="text-body-1"
          >
          <p> <span
                class="font-weight-medium cyan--text text--darken-3"
              ></span> 
              Цена на десктопные приложения формируется исходя из трудозатрат и сопутствующих услуг и разрешений.  
          </p> 
          </v-card-text>
        </div>
          <v-icon  size="150" class="ma-10 ml-0 hidden-sm-and-down" color="cyan lighten-2">mdi-cash-usd-outline</v-icon>

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