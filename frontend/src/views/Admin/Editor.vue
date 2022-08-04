<template>
  <div class="EditorParent">
    <div class="Sides Contents">
      <div class="topContents">
        <textarea></textarea>
        <v-divider class="mb-2"></v-divider>
      </div>
      <VimEditor></VimEditor>
      <div class="footer"></div>
    </div>
    <div class="Sides Preview" v-html="compiledMarkdown"></div>
  </div>
</template>
<style lang="sass" scoped>
.topContents
  margin : 1vh
.topContents textarea
  border: none
  resize: none
  outline: none
  font-size: 32px
  font-family: "Monaco", courier, monospace
  padding: 20px
  height: 5rem
  width: 100%

.EditorParent
  height: 100%
.Titles
  height: 10%
.Sides
  display: inline-block
  width: 50%
  height: 100%
  vertical-align: top
  box-sizing: border-box
  padding: 0
.Preview
  padding : 12vh
.footer
  position: fixed
  bottom: 0px
  height: 5rem
  width: 50%
  z-index: 10
  background: #ddd
@media screen and (max-width: 1000px)
  .Contents
    width : 100%
  .Preview
    display: none
    width : 0px
    height: 0px
    margin: 0px
  .footer
    width: 100%

</style>
<script lang="ts">
import Vue, { defineComponent } from 'vue'
import * as _ from 'lodash'
import { Marked } from 'marked-ts'
import VimEditor from '../../components/Admin/VimEditor.vue'


export default defineComponent({
    name: "Editor",
    data() {
        return {
            input: "",
        };
    },
    beforeCreate() {
      this.emitter.emit('footer',false);
    },
    mounted(){
      this.emitter.on('EditorValue',(value) => this.input = value as string)
    },
    computed: {
        compiledMarkdown: function () {
            var x: string;
            x = `${this.input}`;
            return Marked.parse(x);
        }
    },
    components: { VimEditor }
})
</script>
