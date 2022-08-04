<template>
  <v-app>
    <v-main class="ma-0 pa-0">
      <router-view/>
      <foo-bar v-if="foobar"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooBar from './components/FooBar.vue'

export default defineComponent({
  components: { NavBar, FooBar },
  name: 'App',

  data () {
    return {
      foobar : true
    }
  },
  mounted() {
    this.emitter.on("foobar",(res) => this.foobar = res as boolean);
    console.log(this.foobar);
  }
})
</script>
