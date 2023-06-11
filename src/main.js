import './main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import dotenv from 'dotenv';

// dotenv.config();
const app = createApp(App)

app.use(router)

app.mount('#app')
