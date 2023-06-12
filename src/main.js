import './main.css'
import 'vue3-toastify/dist/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

library.add(faUserSecret)

/* add font awesome icon component */
// .component('font-awesome-icon', FontAwesomeIcon)
const app = createApp(App)

app.use(router)

app.mount('#app')
