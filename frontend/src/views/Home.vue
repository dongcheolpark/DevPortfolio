<template>
  <div class="home">
    <Intro></Intro>
    <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Intro from '@/components/Home/Intro.vue'

@Options({
  components: {
    HelloWorld,
    Intro
  }
})
export default class Home extends Vue {}
</script>
