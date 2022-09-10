<template>
  <v-app>
    <v-main class="ma-0 pa-0">
      <router-view/>
      <foo-bar v-if="footerVisible == true"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import FooBar from './components/FooBar.vue'

import router from './router/index'


export default defineComponent({
  components: { NavBar, FooBar },
  name: 'App',

  data () {
    return {
      footerVisible : true
    }
  },
  mounted() {
    router.afterEach((to, from) => {
      this.footerVisible = (to.path !== '/admin/editor') // 푸터 지우기
    })
  }
})
</script>
