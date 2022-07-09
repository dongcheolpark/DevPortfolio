<template>
  <v-app>
    <v-main class="pt-2 pt-sm-2 pt-xs-2 pt-md-0 pt-lg-0 pt-xl-0">
      <nav-bar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: { NavBar },
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
