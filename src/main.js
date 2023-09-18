import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueEasyLightbox from 'vue-easy-lightbox'
import axios from 'axios'
import {LoadingPlugin} from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import('./assets/app.css')
import 'aos/dist/aos.css'

axios.defaults.baseURL = "https://mradio-api.glitch.me/";
const app = createApp(App)
app.config.globalProperties.$api = axios;
app.use(VueEasyLightbox)
app.use(createPinia())
app.use(LoadingPlugin)
app.use(router)
app.mount('#app')

