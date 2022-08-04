<template>
  <div class="AdminParent">
    <v-container>
      <v-row align="center" justify="center" class="ma-3"
       v-for="item in items" v-bind:key="item.title">
        <v-card class="ListItem">
          <v-list>
            <v-list-item style="width : 100%; justify-content: space-between;">
              <div>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ item.period }}
                </v-list-item-subtitle>
              </div>
              <v-btn class="ListItemBtn">Edit</v-btn>
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
import { defineComponent } from 'vue'


export default defineComponent({
  name: "Admin",
  components: {
  },
  data() {
    return {
      items: [
        {
          title: "제목입니다.",
          period: "2000.01.01 ~ 2000.12.31",
          discription: "Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.",
          id : 3
        },
      ],
    }
  },
  beforeCreate() {
    fetch('/api/admin/login', {
      method: 'get'
    }).then((res) => {
      if (!res.ok) {
        throw new Error('서버 에러');
      }
      return res.json();
    }).then((res) => {
      if (!res.isLogin) {
        this.$router.push('/Admin/Login');
      }
    });
  },
  created() {

  }
})
</script>
