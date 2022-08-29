<template>
  <v-dialog v-model="dialog" activator="parent">
    <v-card>
      <v-card-text>
        {{  portfoliodata?.discription }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>
<script lang="ts">
import { Board } from '@model/BoardItem';
import Vue, { defineComponent, PropType } from 'vue'
export default defineComponent({
  props : {
    portfoliodata : {
      type : Object as PropType<Board>,
      require : true
    }
  },
  data() : {
    dialog : boolean
  } {
    return {
      dialog : false
    }
  }
})
</script>
