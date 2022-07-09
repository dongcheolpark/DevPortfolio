<template>
  <div class="mx-7 basic_info">
    <v-icon
      large
      size="64">
      {{ icon }}
      mdi-account-circle-outline
    </v-icon>
    <div class="pa-2">
      <div class="basic_info_label">
        {{ title }}
      </div>
      <div class="basic_info_contents">
        {{ context }}
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap')
.basic_info
  flex-direction: row
  flex-wrap: nowrap
  display: flex
  text-align: left
.basic_info_text
  font-family: 'Nanum Gothic', sans-serif
.basic_info_label
  @extend .basic_info_text
  font-weight: 800
.basic_info_contents
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About-Object',
  props : {
    icon : {defualt : "mdi-alert-octagon", type:String},
    title : {defualt : "Undefined",type : String},
    context :{defualt : "Undefined",type : String}
  },
  data () {
      return {
      }
    },
})
</script>
