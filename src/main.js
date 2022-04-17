import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import './index.css'
//import VueNumberFormat from 'vue-number-format'
//app.use(VueNumberFormat, { prefix: 'US$ ', decimal: ',', thousand: '.' })
const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')