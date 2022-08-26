<template>
  <v-footer class="pa-0">
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="bg-grey text-center"
    >
      <v-card-text>
        <v-btn
          class="mx-4"
          icon="mdi-github"
          variant="plain"
		  v-on:click="openLink('https://github.com/dongcheolpark/devportfolio')"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-email"
          variant="plain"
		  v-on:click="openLink('mailto:head02325@soongsil.ac.kr')"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-account-key"
          variant="plain"
          @click="gotoadmin()"
        ></v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-white">
        {{ new Date().getFullYear() }} — <strong>DongCheolPark</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<style lang="sass" scoped>
.foo-bar-color
  background-color: #286155
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	methods: {
		openLink : (url : string) => {
			window.open(url);
		},
    gotoadmin() {
      this.$router.push('/admin');
      window.scrollTo(0,0);
    }
	}
})
</script>
