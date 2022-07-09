<template>
  <div>
    <Intro/>
    <div class="home mx-5">
      <Selfpr/>
      <About/>
    </div>
  </div>
</template>
<style lang="sass">

</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Intro from '@/components/Home/Intro.vue'
import About from '@/components/Home/about.vue'
import Selfpr from '@/components/Home/selfpr.vue'

@Options({
  components: {
    HelloWorld,
    Intro,
    About,
    Selfpr
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
