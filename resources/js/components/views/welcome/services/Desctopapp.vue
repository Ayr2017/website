<template>
    <v-col>
                <v-card class="mx-auto" max-width="344">
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="200px"></v-img>

                  <v-card-title>Десктопные приложения</v-card-title>

                  <v-card-subtitle>От 10 000 рублей</v-card-subtitle>

                  <v-card-actions>
                    <v-btn text @click="show = !show">Подробнее</v-btn>

                    <v-btn color="purple" text>Заказать</v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="show">
                      <v-divider></v-divider>

                      <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
</template>

<script>
export default {
    data:()=>({
        show: false,
    })
}
</script>