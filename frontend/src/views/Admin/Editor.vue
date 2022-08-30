<template>
  <div class="EditorParent">
    <div class="EditorParent">
      <div class="Sides Contents">
        <div class="topContents">
          <textarea v-model="title" placeholder="제목을 입력하세요."></textarea>
          <v-divider class="mb-2"></v-divider>
          <div class="dateFormBox">
            <datepicker
              v-model="startdate"
            />
            <datepicker
              v-model="enddate"
            />
          </div>
        </div>
        <VimEditor></VimEditor>
        <div class="footer">
          <v-btn @click="onClickExit()">
            Exit
          </v-btn>
          <v-btn @click="final = true">
            {{ editmode ? "Edit" : "Create"}}
          </v-btn>
        </div>
      </div>
      <div class="Sides Preview" v-html="sideWindow"></div>
    </div>
    <v-overlay v-model="final" contained class="align-center justify-center">
    </v-overlay>
  </div>
</template>
<style lang="sass" scoped>
.topContents
  margin : 1vh
  padding: 2vh
.topContents textarea
  border: none
  resize: none
  outline: none
  font-size: 32px
  font-family: "Monaco", courier, monospace
  padding: 10px
  height: 5rem
  width: 100%

.dateFormBox
   display: flex
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
<script setup lang="ts">
import Datepicker from 'vue3-datepicker'

</script>

<script lang="ts">
import Vue, { defineComponent } from 'vue'
import * as _ from 'lodash'
import { Marked } from 'marked-ts'
import VimEditor from '../../components/Admin/VimEditor.vue'
import { Board, ProjectCreate } from '@model/BoardItem'
import { portfolioConnection } from '@/common/connectBack/Connections/portfolioConnection'
import { portfolioDetailConnection } from '@/common/connectBack/Connections/portfolioDetailConnection'
import { compileMarkDown } from '@/common/CompileMarkdown'

export default defineComponent({
  name: "Editor",
  components: { VimEditor },
  async created() {
    const id : number | undefined = this.$route.query.id as unknown as number | undefined;
    if(id!= undefined) {
      this.editmode = true;
      const res = await portfolioDetailConnection.get(id);
      console.log(res);
      this.id = res!.boardid;
      this.title = res!.title;
      this.emitter.emit('EditorValue',res!.contents);
      this.startdate = new Date(res!.startdate);
      this.enddate = new Date(res!.enddate);
    }
  },
  mounted() {
    this.emitter.on('EditorValue', (value) => this.contents = value as string)
    const tmp = new Date();
  },
  data() {
    return {
      final : false,
      editmode : false,
      id : 0,
      title: "",
      contents: "",
      startdate : new Date(),
      enddate :  new Date()
    };
  },
  computed: {
    sideWindow : function() {
      let x : string
      x = `${this.contents}`;
      return compileMarkDown(x);
    },
  },
  methods: {
    onClickExit() {
      this.$router.back();
    },
    convertDateToString : (date : Date) : string => {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
    async post() {
      var data: ProjectCreate = {
        boardid : null,
        title: this.title,
        startdate: this.convertDateToString(this.startdate as Date),
        enddate: this.convertDateToString(this.enddate as Date),
        contents: this.contents,
        image: '',
        url: ''
      };
      const res = await portfolioConnection.post(data);
      this.$router.push(`/admin`);
    },
    async put() {
      var data: ProjectCreate = {
        boardid : this.id,
        title: this.title,
        startdate: this.convertDateToString(this.startdate as Date),
        enddate: this.convertDateToString(this.enddate as Date),
        contents: this.contents,
        image: '',
        url: ''
      };
      const res = await portfolioConnection.put(data);
      this.$router.push(`/admin`);
    },
    async submit() {
      if(!this.editmode) {
        this.post();
      }
      else {
        this.put();
      }
    }
  }
})
</script>
