<template>
  <v-app>
    <v-main class="ma-0 pa-0">
      <nav-bar/>
      <router-view/>
      <foo-bar/>
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
      //
    }
  },
})
</script>
