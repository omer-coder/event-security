import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/global.css'
import {projectauth} from '@/firebase/config'

let app

projectauth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App)
        .use(router)
        .mount('#app')
    }
})

