<template>
  <v-dialog
    v-model="dialog" activator="parent">
    <v-card
      :title = "portfoliodata?.title"
      class="Card"
      :subtitle="`${portfoliodata?.startdate.toLocaleDateString('kr')} ~ ${portfoliodata?.enddate.toLocaleDateString('kr')}`"
      >
      <v-card-text>
        <div class = "Text" v-html="portfoliodata?.contents">

        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>
<style lang="sass" scoped>
.Card
  max-width: 768px
  width: auto
  padding: 1rem
.Text img
  width: 75%
</style>
<script lang="ts">
import { compileMarkDown } from '@/common/CompileMarkdown';
import { portfolioDetailConnection } from '@/common/connectBack/Connections/portfolioDetailConnection';
import { Board, ProjectDetail } from '@model/BoardItem';
import Vue, { defineComponent, PropType } from 'vue'
export default defineComponent({
  props : {
    portfoliodataid : Number
  },
  data() : {
    portfoliodata : ProjectDetail | null,
    startdate : string,
    enddate : string,
    dialog : boolean
  } {
    return {
      portfoliodata : null,
      startdate : '',
      enddate : '',
      dialog : false
    }
  },
  async beforeCreate() {
    this.portfoliodata = await portfolioDetailConnection.get(this.portfoliodataid ?? 0) ?? null;
    this.portfoliodata!.contents = compileMarkDown(this.portfoliodata?.contents ?? '');
  },
})
</script>
