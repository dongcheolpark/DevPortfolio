<template>
  <div class="home">
    <v-app>
      <v-app-bar>
        <NavBar></NavBar>
      </v-app-bar>
      <v-main>
        <Intro></Intro>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Intro from '@/components/Home/Intro.vue'
import NavBar from '@/components/NavBar.vue'

@Options({
  components: {
    HelloWorld,
    NavBar,
    Intro
  }
})
export default class Home extends Vue {}
</script>
