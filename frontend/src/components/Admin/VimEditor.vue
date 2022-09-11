<template>
  <MonacoEditor
  	ref = "editor"
    v-model:value="input"
    language = "markdown"
    width="auto"
    class="MonacoEditor"
    @editorDidMount="editorDidMount"
    @drop="dragDrop"
  >

  </MonacoEditor>
</template>
<style lang="sass" scoped>
.MonacoEditor
  border: none
  border-right: 1px solid #ccc
  resize: none
  outline: none
  background-color: #f6f6f6
  font-size: 14px
  font-family: "Monaco", courier, monospace
  height: 100%
</style>
<script lang="ts">
import Vue, { defineComponent } from 'vue'
import MonacoEditor from 'monaco-editor-vue3'
import {initVimMode} from 'monaco-vim'

export default defineComponent({
  name : 'VimEditor',
  components : {
    MonacoEditor
  },
  data() {
    return  {
      input : '',
      textStyle : {
        "caret-shape" : "block",
      }
    }
  },
  mounted() {
    this.emitter.on('EditorValue',(res) => this.input = res as string);
  },
  watch : {
    input(newValue,OldValue) {
      this.emitter.emit('EditorValue',this.input)
    }
  },
  methods : {
    editorDidMount(editor) {
      initVimMode(editor);
    },
    dragDrop(e : Event) {
      console.log(e);
    },
  }
})
</script>
