<template>
  <v-container class="pa-7">
    <v-row class="title ma-0">
      <v-col></v-col>
      <v-col>
        <h1 class="title_text ma-3">ABOUT ME</h1>
        <v-divider />
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="pa-5" style="text-align:center">
      <v-col>
        <AboutObject icon="mdi-account-circle-outline" title="이름" context="박동철" />
      </v-col>
      <v-col>
        <AboutObject icon="mdi-school-outline" title="학력" context="숭실대학교 컴퓨터학부 재학 (21학번)" />
      </v-col>
      <v-col>
        <AboutObject icon="mdi-phone-outline" title="연락처" context="010-9463-5723" />
      </v-col>
      <v-col>
        <AboutObject icon="mdi-email-outline" title="이메일" context="head02325@soongsil.ac.kr" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutObject from './about-object.vue'

export default defineComponent({
  name: "Intro",
  data() {
    return {};
  },
  components: { AboutObject }
})
</script>
