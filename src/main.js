import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import underscore from 'underscore'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
// import JsonCSV from 'vue-json-csv'

// app.use('downloadCsv', JsonCSV)
//import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns'
//app.use(MultiSelectPlugin)
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheck,
  faChevronDown,
  faCog,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCog)
library.add(faTrash)
library.add(faCheck)
library.add(faPen)
library.add(faChevronDown)

// import { GitAuth } from 'vue-authenticate'

// const gitAuthOptions = {
//   //baseUrl: 'http://localhost:3000', // Your API domain

//   providers: {
//     github: {
//       clientId: '785f5d20272c34e35dcb',
//       redirectUri: 'https://master.d36w6pk0mwr4j0.amplifyapp.com/callback', // Your client app URL
//     },
//   },
// }

// app.use(GitAuth, gitAuthOptions)

import GAuth from 'vue3-google-oauth2'
// Client id : 855274422174-jdpmtsoc7op34a9h9qr3sdpau81qupd2.apps.googleusercontent.com
             //80670440671-qa76npk4f2tbmnlahdh7dck5p56mdeon.apps.googleusercontent.com
const gAuthOptions = {
  clientId:
    '855274422174-jdpmtsoc7op34a9h9qr3sdpau81qupd2.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: false,
}

app.use(GAuth, gAuthOptions)
app.use(underscore)
app.component('font-awesome-icon', FontAwesomeIcon)
// import Multiselect from 'vue-multiselect'
// app.component('multiselect', Multiselect)
app.use(store)
app.use(VueAxios, axios)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)
app.mount('#app')
