<template>
	<login/>
</template>
<style lang="sass" scoped>

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Login from '../components/Admin/Login.vue'
export default defineComponent({
	name : "Admin",
	components : {
		Login,
	},
  data() {
    return {
      isLogin : true
    }
  },
  beforeCreate() {
  }
})
</script>
