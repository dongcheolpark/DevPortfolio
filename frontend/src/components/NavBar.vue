<template>
  <v-card>
      <v-app-bar v-if="mobile"
        color="primary"
        :max-width = 300
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="/image/avatar.jpeg"
            title="박동철"
            subtitle="ParkDongCheol"
          ></v-list-item>
        </v-list>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-card>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

export default defineComponent({
  name: 'NavBar',

  setup() {
    const { name } = useDisplay();
    const mobile = computed(()=>{
      let x = 220;
      switch (name.value) {
        case 'xs': x = 220
        case 'sm': x = 400
        case 'md': x = 500
        case 'lg': x = 600
        case 'xl': x = 800
        case 'xxl': x = 1200
      }
      console.log(x);
      if(x < 400) return true;
      return false;
    })
    return {
      mobile
    }
  },
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
      }
    },
})
</script>

