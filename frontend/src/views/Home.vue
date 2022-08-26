<template>
  <div>
    <Intro/>
    <div class="home mx-5">
      <Selfpr/>
      <About/>
      <Portfolio/>
      <Link/>
    </div>
  </div>
</template>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap')

.title
  width : 100%
.text
  font-family: 'Nanum Gothic', sans-serif
  text-align: center
.title_text
  text-size : 2vw
  font-family: 'Nanum Gothic', sans-serif
  text-align: center
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Intro from '@/components/Home/Intro.vue'
import About from '@/components/Home/about.vue'
import Selfpr from '@/components/Home/selfpr.vue'
import Link from '@/components/Home/link.vue'
import Portfolio from '@/components/Home/portfolio.vue'

@Options({
  components: {
    HelloWorld,
    Intro,
    About,
    Selfpr,
    Link,
    Portfolio
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
