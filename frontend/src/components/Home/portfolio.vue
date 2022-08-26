<template>
  <v-container class="pa-7">
    <v-row class="title ma-0">
      <v-col></v-col>
      <v-col>
        <h1 class="title_text ma-3">Portfolio</h1>
        <h5 class="text ma-3">터치해서 자세히보기</h5>
        <v-divider />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="rowContainer my-5">
      <v-carousel cycle height="400" class="carousel"
       hide-delimiter-background progress="success">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
        	<v-hover
          close-delay="200"
          >
          <v-sheet @click="test()" :color="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </div>
            <v-dialog
        v-model="dialogs[i]"
        activator="parent"
      >
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialogs[i] = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
          </v-sheet>
          </v-hover>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<style lang="sass" scoped>
.rowContainer
  display: flex
  justify-content: center
.carousel
  max-width: 1000px
  width: 100%
</style>
<script lang="ts">
import { method } from 'lodash'
import Vue, { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      dialogs : [
        false,
        false,
        false,
        false,
        false,
      ],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  methods : {
    test() {
    }
  }
})
</script>
