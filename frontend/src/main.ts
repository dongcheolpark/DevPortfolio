import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { emitter } from '@/plugins/bus'


loadFonts()

const app = createApp(App);
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    emitter: typeof emitter
  }
}
app.config.globalProperties.emitter = emitter
app.use(router)
  .use(vuetify)
  .mount('#app')
