<template>
  <div>
    <div class="EditorParent">
      <div class="Sides Contents">
        <div class="topContents">
          <textarea v-model="title"></textarea>
          <v-divider class="mb-2"></v-divider>
        </div>
        <VimEditor></VimEditor>
        <div class="footer">
          <v-btn @click="onClickExit()">
            Exit
          </v-btn>
          <v-btn @click="submit()">
            Create
          </v-btn>
        </div>
      </div>
      <div class="Sides Preview" v-html="compiledMarkdown"></div>
    </div>
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
  height: 80%
  vertical-align: top
  box-sizing: border-box
  padding: 0
.Preview
  padding : 12vh
.footer
  display: flex
  justify-content: space-between
  align-items: center
  padding-inline: 2rem
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
import { Board, ProjectCreate } from '@model/BoardItem'

export default defineComponent({
  name: "Editor",
  components: { VimEditor },
  data() {
    return {
      title: "",
      contents: "",
    };
  },
  mounted() {
    this.emitter.on('EditorValue', (value) => this.contents = value as string)
  },
  computed: {
    compiledMarkdown: function () {
      var x: string;
      x = `${this.contents}`;
      return Marked.parse(x);
    }
  },
  methods: {
    onClickExit() {
      this.$router.back();
    },
    test() {
    },
    submit() {
      var data: ProjectCreate = {
        title: this.title,
        startdate: '',
        enddate: '',
        contents: this.contents,
        image: '',
        url: ''
      };
      fetch('/api/admin/test').then((res) => {
        console.log(res);
      });
      fetch('/api/admin/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(
        (res) => res.json() as unknown as Board
      ).then((res) => {
        this.$router.push(`/admin/${res.boardid}`);
      })
    }
  }
})
</script>
