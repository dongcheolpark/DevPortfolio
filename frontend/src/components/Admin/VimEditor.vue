<template>
  <textarea ref="editor" style="textStyle" v-model="input" @keydown="getkey($event)" @change="onchange(this)"></textarea>
  <canvas id="vim-canvas"></canvas>
</template>
<style lang="sass" scoped>
textarea
  border: none
  border-right: 1px solid #ccc
  resize: none
  outline: none
  background-color: #f6f6f6
  font-size: 14px
  font-family: "Monaco", courier, monospace
  padding: 20px
  height: 100%
  width : 100%
</style>
<script lang="ts">
import Vue, { defineComponent } from 'vue'

export default defineComponent({
  name : 'VimEditor',
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
    getkey(e : KeyboardEvent) {
      const textarea : HTMLTextAreaElement = this.$refs.editor as any;
    },
    onchange(value :any) {
      console.log(value);
    }
  }
})
</script>
