<template>
  <div class="AdminParent">
    <v-btn class="CreateBtn" @click="ClickCreateBtn()">
      Create
    </v-btn>
    <v-container>
      <v-progress-circular v-if="!isLoading"
      indeterminate
      color="primary"
      ></v-progress-circular>
      <v-row align="center" justify="center" class="ma-3" v-for="item in items" v-bind:key="item.title">
        <v-card v-if="isLoading" class="ListItem">
          <v-list>
            <v-list-item style="width : 100%; justify-content: space-between;">
              <div>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.startdate }} - {{ item.enddate }}
                </v-list-item-subtitle>
              </div>
              <v-btn class="ListItemBtn" @click="$router.push(`/admin/editor?id=${item.boardid}`)">Edit</v-btn>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="ListItemContents pa-1">
              {{ item.discription }}
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="sass" scoped>
$main-color : #1BBC9B
$background-color: #5CE0C6

.CreateBtn
  position: fixed
  right: 1vh
  top : 1vh

.AdminParent
  min-height: 100%
  padding : 8vh
  background: $background-color
.ListItem
  width : 100%
  padding : 1vh 2vh 1vh 2vh
.ListItemContents
  display: -webkit-box
  -webkit-box-orient: vertical
  -webkit-line-clamp: 2
  width: 100%
  height: 100%
  white-space: normal
  overflow: hidden
  text-align: ellipsis
.ListItemBtn
  background: $main-color
  color : #fff
</style>

<script lang="ts">
import { portfolioConnection } from '@/common/connectBack/Connections/portfolioConnection';
import { defineComponent } from 'vue'
import { Board } from '@model/BoardItem';


export default defineComponent({
  name: "Admin",
  components: {
  },
  data() {
    return {
      isLoading : false,
      items : [] as Board[],
    }
  },
  beforeCreate() {
  },
  methods : {
    ClickCreateBtn : function() {
      this.$router.push('/Admin/Editor');
    }
  },
  async created() {
    this.items = await portfolioConnection.get() ?? [];
    this.isLoading = true;
    console.log(this.items);
  },
})
</script>
