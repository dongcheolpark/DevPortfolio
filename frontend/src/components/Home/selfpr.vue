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
        대부분의 경우에도 확장될 수 있는 코드를 설계하는 것을 지향하고 있습니다. <br />
        다양한 변화에도 적응할 수 있도록 대비하려 노력합니다. <br />
        웹 백엔드, 데이터 분석, 게임 개발에 관심이 많습니다. <br />
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
