<template>
  <v-col cols="md-12  sm-12 xs-12">
    <div
      :class="[subheaderSize, 'font-weight-thin mb-xs-2 mb-sm-5 mb-md-10 elev-1 text--secondary'] "
    >Какие бывают сайты?</div>
    <v-card outlined color="#fff5">
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">1. Сайт-визитка</v-list-item-title>
          <p class="text-body-1 text--secondary">Простой, одностраничный сайт, содержащий в себе информацию о компании. Сайт-визитка не требует к себе особого внимания, создается «один раз и навсегда». Обычно включает в себя общую информацию о владельце и контакты для связи, не вдаваясь в подробности.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">2. Сайт компании.</v-list-item-title>
          <p class="text-body-1 text--secondary">Более серьезный подход для создания сайта. Обычно, это многостраничный сайт, рассказывающий подробнее об услугах, истории и контактах компании. Информирует посетителей о стоимости услуг и по факту выполняет функции офиса компании в режиме онлайн.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">3. Промо-сайт.</v-list-item-title>
          <p class="text-body-1 text--secondary">Промо-сайты используются для быстрой раскрутки какой-либо рекламной акции компании, а также для быстрого продвижения услуг, товаров и брендов.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">4. Интернет-магазин.</v-list-item-title>
          <p class="text-body-1 text--secondary">Ресурсы, на которых можно размещать информацию различного характера. Более продвинутый функционал, чем у блога. Чаще всего – это новостные сайты.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">5. Порталы.</v-list-item-title>
          <p class="text-body-1 text--secondary">Подходит для онлайн торговли. Может быть создан с возможностью заказа и оплаты товара через интернет, бронирования услуги и т.п. Также может быть создан в качестве онлайн витрины, без возможности оформления заказа.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">6. Доски объявлений.</v-list-item-title>
          <p class="text-body-1 text--secondary">Сайт, где можно размещать информацию о покупке или продаже товаров, услуг, информационные объявления и прочее.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">7. Блог.</v-list-item-title>
          <p class="text-body-1 text--secondary">Любите писать интересный контент? Тогда без блога не обойтись. Делитесь текстами, медиа и ссылками. Наполняйте сайт самостоятельно, рассказывайте людям о том, что интересно вам и вашей аудитории.</p>
        </v-list-item-content>
      </v-list-item>

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