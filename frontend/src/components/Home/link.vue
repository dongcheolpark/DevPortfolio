<template>
  <v-container class="pa-7">
    <v-row class="title ma-0">
      <v-col></v-col>
      <v-col>
        <h1 class="title_text ma-3">LINK</h1>
        <v-divider />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="pa-5" style="text-align:center">
      <v-col>
        <v-btn
          icon="mdi-github"
          class="ma-3"
          color = "black"
          @click="openLink('https://github.com/dongcheolpark')"
        ></v-btn>
        <v-btn
        	icon="mdi-post-outline"
          start
          class="ma-3"
          color="success"
          @click="openLink('https://velog.io/@head022')"
        >
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue, { defineComponent } from 'vue'
export default defineComponent({

	methods: {
		openLink : (url : string) => {
			window.open(url);
		}
  }
})
</script>
