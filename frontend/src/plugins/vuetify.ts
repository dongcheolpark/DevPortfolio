// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import velogicon from '@/components/icons/velog.vue'

export default createVuetify({
  icons: {
    velog : {
      componet : velogicon
    }
  }
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
