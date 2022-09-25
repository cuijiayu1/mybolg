import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/index.scss'
import 'normalize.css'
import mitt from 'mitt'
const emitter = mitt()

createApp(App)
    .use(router)
    .provide('$emitter', emitter)
    .mount('#app')