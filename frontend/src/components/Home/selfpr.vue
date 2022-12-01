<template>
  <div class="selfpr_parent ma-10 pa-5">
    <v-avatar v-if="windowWidth > 800" size="150" class="ma-5">
      <v-img src="image/avatar.jpeg"></v-img>
    </v-avatar>
    <div class="pa-3">
      <h2 class="my-2">
        안녕하세요.
      </h2>
      <p>
        대규모 시스템 설계와 클라우드 분산 처리에 관심이 많습니다. <br />
        어제보다 더 발전한 오늘을 만들어갑니다. <br />
        보충역 IT 산업기능요원 편입 준비중입니다. <br />
      </p>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.selfpr_parent
  display : flex
  justify-content: center
  flex-flow: row
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
  data() {
    return {
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  }
})
</script>
