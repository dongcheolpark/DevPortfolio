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
    <v-row v-if="portfoliodata.length != 0" class="rowContainer my-5">
      <v-carousel cycle height="400" class="carousel" hide-delimiter-background progress="success">
        <v-carousel-item v-for="(item, i) in portfoliodata" :key="i">
          <v-hover close-delay="200">
            <v-sheet @click="test()"  :color="'success'" height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">
                  {{  item.title  }}
                </div>
              </div>
              <portfolio-detail :portfoliodataid="item.boardid">
              </portfolio-detail>
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
import { portfolioConnection } from '@/common/connectBack/Connections/portfolioConnection'
import { Board } from '@model/BoardItem'
import { method } from 'lodash'
import Vue, { defineComponent } from 'vue'
import PortfolioDetail from '../PortfolioDetail.vue'
export default defineComponent({
    data() {
        return {
            portfoliodata: [] as Board[],
        };
    },
    async beforeCreate() {
        this.portfoliodata = await portfolioConnection.get() ?? [];
    },
    methods: {
        test() {
        }
    },
    components: { PortfolioDetail }
})
</script>
