<template>
  <div>
    <h1>{{state.getMsg}}</h1>
    <h1>{{state.postMsg}}</h1>
  </div>
</template>

<script lang = ts>
import { onMounted, reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'Test',
  setup () {
    const state = reactive({
      getMsg: '',
      postMsg: ''
    })
    onMounted(() => {
      try {
        const urlGet = '/testapi/getTest'
        axios.get(urlGet, {
        }).then(function (response) {
          state.getMsg = response.data.msg
        }).catch(function (error) {
          alert(error)
        })
      } catch (err) {
        console.log(err)
      }
    })
    return {
      state
    }
  }
}
</script>
<style scoped>
</style>
