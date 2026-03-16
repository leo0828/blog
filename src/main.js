import { createApp } from 'vue'
import Highlight from './plugins/highlight'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Highlight)
app.use(router)

app.mount('#app')
