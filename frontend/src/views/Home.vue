<template>
  <div class="home">
    <Intro/>
    <About/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Intro from '@/components/Home/Intro.vue'
import About from '@/components/Home/about.vue'

@Options({
  components: {
    HelloWorld,
    Intro,
    About
  }
})
export default class Home extends Vue {
  data() {
    return {
      fill : true,
    }
  }
}
</script>
