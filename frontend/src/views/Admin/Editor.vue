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
            <v-file-input type="file" @change="uploadImageEditor" ref="file" style="display: none"/>
            <v-btn @click="$refs.file.click()">이미지 업로드</v-btn>
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
    <v-overlay
      v-model="final" width ="500px" class="align-center justify-center finalTop">
        <v-card
        class = "finalCard"
        >
          <div>
            <h2>썸네일 입력</h2>
            <v-img
            :src = 'imageUrl'
            />
            <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              v-model="images"
              v-on:update:model-value="uploadImage()"
              placeholder="사진을 선택하세요."
              prepend-icon="mdi-camera"
              label="Avatar"
            ></v-file-input>
            <h2>URL 입력</h2>
            <v-text-field
              :counter="10"
              v-model="url"
              label="URL 입력"
              required
            ></v-text-field>
            <v-btn @click = "editmode ?  put() : post()" v-if="imageUrl != ''">
              제출
            </v-btn>
          </div>
        </v-card>
    </v-overlay>
    <v-snackbar
      v-model="snackbar"
      timeout="1000"
    >
      클립보드에 복사되었습니다.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<style lang="sass" scoped>
.finalCard
  padding: 20px
  width: 100%
.finalTop
  display: flex
  margin: 5px
  flex-direction: column
  //vertical-align: middle
  //justify-content: center
.finalTop div
  text-align: center
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
  .finalTop
    width: 90%

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
import { imageConnection } from '@/common/connectBack/Connections/ImageConnection'

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
      this.imageUrl = res!.image;
      this.url = res!.url;
    }
  },
  mounted() {
    this.emitter.on('EditorValue', (value) => this.contents = value as string)
    const tmp = new Date();
  },
  data() {
    return {
      snackbar:false,
      images : [],
      imageUrl : '',
      url : '',
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
    async uploadImageEditor() {
      const fileInputEl = this.$refs.file as any;
      const files = fileInputEl.files;
      const res = await this.uploadImage(files[0]);
      await navigator.clipboard.writeText(`<img src="${res}" width = 75%>`);
      this.snackbar = true;
    },
    async uploadImage(image? : File) {
      if(image == undefined) {
        image = this.images[0];
        const res = await imageConnection.post(image);
        this.imageUrl = res;
      }
      else {
        const res = await imageConnection.post(image);
        return res;
      }
    },
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
        image: this.imageUrl,
        url: this.url
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
        image: this.imageUrl,
        url: this.url
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
