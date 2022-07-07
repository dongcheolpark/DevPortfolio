<template>
  <v-container class="full-screen IntroContainer ma-0 pa-3" fluid justify-center>
    <v-layout class="pa-2">
      <h1>helloIntro</h1>
    </v-layout>
  </v-container>
</template>
<style lang="sass" scoped>
.full-screen
  width:100%
  height: 100vh
.IntroContainer 
  background : orange 
</style>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Intro',
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
})
</script>