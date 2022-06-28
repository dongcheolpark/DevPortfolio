<template>
	<h1>helloIntro</h1>
</template>
<style lang="sass" scoped>

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