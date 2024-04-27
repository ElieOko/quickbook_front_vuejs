import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Layout from './components/Layout.vue'
import '@progress/kendo-theme-default/dist/all.css';

const app = createApp(App)
app.component('DefaultLayout', Layout)
app.use(router)

app.mount('#app')
