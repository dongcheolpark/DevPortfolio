<template>
  <v-container class="full-screen IntroContainer" fluid>
    <div class = "IntroThumbnail">
      <h1 class="IntroText">🛠 박동철 🛠<br/> 포트 폴리오 사이트 입니다.</h1>
    </div>
  </v-container>
</template>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap')
.full-screen
  width:100%
  height: 100vh
.IntroContainer
  display: flex
  justify-content: center
  align-items: center
  background-size: cover
  background-position: center
  background-image : url('~@/assets/Intro/IntroBackground.jpg')
.IntroThumbnail

.IntroText
  text-align : center
  font-family: 'Nanum Gothic', sans-serif
  color: white
  font-size: 3vmax
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
