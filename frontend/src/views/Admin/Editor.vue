<template>
  <div class="EditorParent">
    <textarea v-model="input"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>
<style lang="sass">
.EditorParent
  margin-top: 100px
  height: 100%

.EditorParent div, textarea
  display: inline-block
  width: 49%
  height: 100%
  vertical-align: top
  box-sizing: border-box
  padding: 0 20px

textarea
  border: none
  border-right: 1px solid #ccc
  resize: none
  outline: none
  background-color: #f6f6f6
  font-size: 14px
  font-family: "Monaco", courier, monospace
  padding: 20px
</style>
<script lang="ts">
import Vue, { defineComponent } from 'vue'
import * as _ from 'lodash'
import { Marked } from 'marked-ts'
import * as vim from '../../plugins/vim'

export default defineComponent({
  name: "Editor",
  data() {
    return {
      input: '',
    }
  },
  computed: {
    compiledMarkdown: function () {
      var x: string
      x = `${this.input}`;
      return Marked.parse(x)
    }
  }
})
</script>
